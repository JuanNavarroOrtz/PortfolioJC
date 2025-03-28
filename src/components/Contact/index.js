import React, { useRef } from "react";
import { motion } from "framer-motion";
//import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.sendForm(
    //   "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
    //   "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
    //   form.current,
    //   "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
    // )
    // .then((result) => {
    //   alert("Message sent successfully!");
    //   e.target.reset();
    // }, (error) => {
    //   alert("Failed to send message. Please try again.");
    // });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="contact"
    >
      <div className="container">
        <h2>Get In Touch</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;