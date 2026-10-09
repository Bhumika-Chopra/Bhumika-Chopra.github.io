import React, { useState } from "react";
import "./Contact.css";  // Assuming you have your CSS for theming


const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        if (!name || !email || !subject || !message) {
            alert("Please complete the form.");
            return;
        }

        // Construct the mailto link
        const mailtoLink = `mailto:bhumika.chicago@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        )}`;

        // Open the default mail client with the pre-filled email
        window.location.href = mailtoLink;
    };

    return (
        <section className="contact container section" id="contact">
            <h2 className="section__title">Get In Touch</h2>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">Let's talk systems & ML.</h3>
                    <p className="contact__details">
                        <a href="mailto:bhumika.chicago@gmail.com">Send me an email</a> or use the form to open a draft in your email app.
                    </p>
                </div>

                <form onSubmit={submitHandler} className="contact__form">
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input
                                type="text"
                                className="contact__form-input"
                                aria-label="Your name" required placeholder="Your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="contact__form-div">
                            <input
                                type="email"
                                className="contact__form-input"
                                aria-label="Your email" required placeholder="Your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="contact__form-div">
                        <input
                            type="text"
                            className="contact__form-input"
                            aria-label="Your subject" required placeholder="Your subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            className="contact__form-input"
                            aria-label="Your message" required placeholder="Write your message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>

                    <button type="submit" className="btn">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
