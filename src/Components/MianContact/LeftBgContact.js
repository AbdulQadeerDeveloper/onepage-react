import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LeftBgContact() {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const inputField = e.target;
        if (inputField.value.trim() === '') {
            inputField.style.borderColor = 'red';
        } else {
            inputField.style.borderColor = 'green';
        }
    };
   // Request data though in contact submit form from sent data in emailjs service side
    const sendEmail = (e) => {
        e.preventDefault();

        setIsSubmitting(true);
       
        emailjs.sendForm('service_q4xwy1d', 'template_kcsshaq', form.current, 'cJ72w62Mbio1Sjtz5')
            .then(() => {
                toast.success('Form submitted successfully!', {
                    position: 'bottom-center',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });

                form.current.reset();
            })
            .catch((error) => {
                console.error(error);
                toast.error('Error sending email. Please try again later.', {
                    position: 'bottom-center',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <div className="left-bg">
            <h2>
                <span className="span">CONTACT</span> ME
            </h2>
            <form ref={form} onSubmit={sendEmail}>
                <input
                    type="text"
                    placeholder="Name"
                    name="user_name"
                    required
                    onChange={handleInputChange}
                    onBlur={handleInputChange}
                />
                <input
                    type="email"
                    placeholder="Email"
                    name="user_email"
                    required
                    onChange={handleInputChange}
                    onBlur={handleInputChange}
                />
                <input
                    type="tel"
                    placeholder="Phone No"
                    name="user_phone"
                    required
                    onChange={handleInputChange}
                    onBlur={handleInputChange}
                />
                <textarea
                    placeholder="Leave a message"
                    name="user_message"
                    required
                    onChange={handleInputChange}
                    onBlur={handleInputChange}
                ></textarea>
                <button type="submit" className="btn contact-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Send'}
                </button>
            </form>
            <ToastContainer />
        </div>
    );
}

export default LeftBgContact;
