import { useState } from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleChangeName = (event) => {
        setName(event.target.value);
    }

    const handleChangeMessage = (event) => {
        setMessage(event.target.value);
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            toast.error('Please fill in all fields.');
            return;
        }

        emailjs.sendForm('service_hyx19hq', 'template_klf21tm', form.current, 'li9aS97H3KN10xP6K')
            .then((result) => {
                toast.success("Email Successfully Sent!");
                setEmail('');
                setName('');
                setMessage('');
            }, (error) => {
                toast.error("Unable to Send Email. Try Again Later.")
                console.log(error.text);
            });
    };


    return (
        <section id="contact">
            <form ref={form} onSubmit={sendEmail}>
                <div className="contact-container">
                    <div className="form-container">
                        <div> <h1> Lets Get in Touch </h1> </div>
                        <div className="myemail-container">
                            <div className="myemail"> To:  richardwangg198@gmail.com </div>
                        </div>
                        <div className="name-container">
                            <input type="text" name="user_name" placeholder="Enter your name" className="name-field" onChange={handleChangeName} value={name} />
                        </div>
                        <div className="email-container">
                            <input type="email" name="user_email" placeholder="Enter your email" className="email-field" onChange={handleChangeEmail} value={email} />
                        </div>
                        <div className="message-container">
                            <textarea name="message" rows="5" placeholder="Enter your message" className="message-field" onChange={handleChangeMessage} value={message}></textarea>
                        </div>
                        <div className="submit-container">
                            <input className="submit" type="submit" value="Submit" />
                        </div>
                    </div>
                    <div className="envelope-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" fill="currentColor" class="bi bi-envelope-open-heart-fill" viewBox="0 0 16 16" className="envelope">
                            <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.313l4.222 2.475c.024-.058.05-.114.08-.17.665-1.3 2.362-1.917 3.698-1.25 1.336-.667 3.033-.05 3.699 1.25a3.3 3.3 0 0 1 .08.17L16 5.713V5.4a2 2 0 0 0-1.059-1.765l-6-3.2ZM0 6.873l4 2.344c-.012.542.124 1.117.416 1.694l.004.006L0 13.372v-6.5Zm.059 7.611 4.9-2.723c.563.73 1.383 1.467 2.49 2.198l.551.365.551-.365c1.107-.73 1.927-1.467 2.49-2.198l4.9 2.723A2 2 0 0 1 14 16H2a2 2 0 0 1-1.941-1.516ZM16 13.372l-4.42-2.455.004-.006c.292-.577.428-1.152.415-1.694L16 6.873v6.5Z" />
                            <path d="M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
                        </svg>
                    </div>
                </div>
            </form>
            <ToastContainer theme="dark" style={{ top: "25%" }} />
        </section>
    )
}
