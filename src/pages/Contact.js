import { Div } from 'components/Contact/Contact.elements';
import ContactForm from 'components/Contact/ContactForm/ContactForm';
import CopyToClipboard from "react-copy-to-clipboard";
import React from 'react'
import SocialNetwork from 'components/SocialNetwork/SocialNetwork';

const Contact = () => {
  return (
    <main>
        <Div>

            <ContactForm/>
            <div className="contact-infos">

                {/* ADRESS PART */}
                <div className="adress">
                    <div className="content">
                        <h4>adresse</h4>
                        <p>164, avenue des graviers</p>
                        <p>03200 Abrest</p>
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

                <div className="credits">
                    <p>
                        ©2022 made with ❤ <span>by The Square.</span>
                    </p>
                </div>

            </div>
        </Div>
    </main>
  )
}

export default Contact;