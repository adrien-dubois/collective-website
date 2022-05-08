import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { ButtonForm, Form } from './ContactForm.elements'

const ContactForm = () => {

    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let nameS = document.getElementById("name");
        let emailS = document.getElementById("email");
        let messageS = document.getElementById("message");
        let formMess = document.querySelector(".form-message");

        const isEmail = () => {
            let isMail = document.getElementById("not-mail");
            let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

            if(email.match(regex)) {
                isMail.style.display = "none";
                return true;
            } else {
                isMail.style.display = "block";
                isMail.style.animation = "dongle 1s";
                setTimeout(() => {
                    isMail.style.animation = "none";
                }, 1000);
                return false;
            }
        };

        if(name && isEmail() && message) {
            nameS.classList.remove("red");
            emailS.classList.remove("red");
            messageS.classList.remove("red");

            formMess.innerHTML = "Message en cours d'envoi...";
            formMess.style.background = "var(--almond-dark)";
            formMess.style.opacity = '1';

            emailjs
                .send(
                    // Service ID
                    "service_5wubpgl",
                    // Template ID
                    "template_594n8qo",
                    {
                    name,
                    company,
                    phone,
                    email,
                    message,
                    },
                    // User ID
                    "user_lsUpYtWCkf84D5Iv1p9bB"
                )
                .then(
                    () => {
                        formMess.innerHTML = "Message envoyé! Nous vous recontacterons dès que possible.";

                        document.getElementById("name").classList.remove("error");
                        document.getElementById("email").classList.remove("error");
                        document.getElementById("message").classList.remove("error");
                        setName("");
                        setCompany("");
                        setPhone("");
                        setEmail("");
                        setMessage("");

                        setTimeout(() => {
                            formMess.style.opacity = "0";
                        }, 5000);
                    },
                    (err) => {
                        console.log(err);
                        formMess.style.background = "rgb(253, 87, 87)";
                        formMess.innerHTML = "Une erreur s'est produite, veuillez réessayer.";
                    }
                );
        } else {
            formMess.innerHTML = "Merci de remplir correctement les champs requis *";
            formMess.style.background = "rgb(253, 87, 87)";
            formMess.style.opacity = "1";

            if(!name){
                nameS.classList.add("error");
            }
            if (!email) {
            emailS.classList.add("error");
            }
            if (!message) {
            messageS.classList.add("error");
            }
        }
    };

  return (
    <Form>
        <h2>Dites-nous tout!</h2>
        <div className="form-content">
            <input
            type="text"
            id="name"
            name="name"
            required
            onChange={(e) => setName(e.target.value)}
            placeholder="nom *"
            value={name}
            />
            <input
            type="text"
            id="company"
            name="company"
            onChange={(e) => setCompany(e.target.value)}
            placeholder="société"
            value={company}
            />
            <input
            type="text"
            id="phone"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            placeholder="téléphone"
            value={phone}
            />
            <div className="email-content">
                <label id="not-mail">Email non valide</label>
                <input
                type="mail"
                id="email"
                name='email'
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email *"
                value={email}
                />
            </div>
            <textarea
            id="message"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="message *"
            value={message}
            required
            />

        </div>

            <ButtonForm 
            type="submit" 
            className="button hover" 
            value="Envoyer"
            onClick={handleSubmit}
            />
            
            <div className="form-message"></div>

        
    </Form>
  );
};

export default ContactForm