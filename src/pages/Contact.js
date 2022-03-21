import { Div } from 'components/Contact/Contact.elements';
import ContactForm from 'components/Contact/ContactForm/ContactForm';
import CopyToClipboard from "react-copy-to-clipboard";
import React from 'react'
import SocialNetwork from 'components/SocialNetwork/SocialNetwork';
import Footer from 'components/Footer/Footer';

const Contact = () => {
  return (
    <main>
        <Div>

            <img src={process.env.PUBLIC_URL + '/assets/img/logo-sq.png'} alt="logo" className="logo" width={65} height={65} />

            <ContactForm/>
            <div className="contact-infos">

                {/* ADRESS PART */}
                <div className="adress">
                    <div className="content">
                        <h4>adresse</h4>
                        <p>42, rue du code</p>
                        <p>42000 CodeCity</p>
                    </div>
                </div>

                {/* PHONE PART */}
                <div className="phone">
                    <div className="content">
                        <h4>téléphone</h4>
                        <CopyToClipboard text='0665354481' className='hover'>
                            <p
                                style={{ cursor: "pointer" }}
                                className="clipboard"
                                onClick={() => {
                                    alert("Numéro de téléphone copié!");
                                }}
                            >
                                (+33)6 653 544 81
                            </p>
                        </CopyToClipboard>
                    </div>
                </div>

                {/* EMAIL PART */}
                <div className="email">
                    <div className="content">
                        <h4>email</h4>
                        <CopyToClipboard text='contact@the-square.net' className='hover'>
                            <p
                                style={{ cursor: 'pointer' }}
                                className="clipboard"
                                onClick={() => {
                                    alert("Adresse e-mail copiée!")
                                }}
                            >
                                contact@the-square.net
                            </p>
                        </CopyToClipboard>
                    </div>
                </div>

                <SocialNetwork />

            </div>
        </Div>
    </main>
  )
}

export default Contact;