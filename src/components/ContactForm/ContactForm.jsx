import styles from './Contact.module.css'
import Button from '../Button/Button.jsx'
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { useState } from 'react';

// This file is THE CONTACT form and image SECTION
const ContactForm = () => {
  let [name , setName] = useState("Dishant");
  let [email , setEmail] = useState("dishant@gmail.com");
  let [text , setText] = useState("Heelooooo");
  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(event);   // for testing purpose
    // console.log("name : " ,event.target[0].value);
    // console.log("email : " ,event.target[1].value);
    // console.log("text : " ,event.target[2].value);
     setName(event.target[0].value);
     setEmail(event.target[1].value);
     setText(event.target[2].value);
  }

  return (
    <section className={styles.container}>

      {/* left side */}
      <div className={styles.contact_form}> 
      <div className={styles.top_btn}>
        <Button 
        text = "VIA SUPPORT CHAT"
          icon = {<MdMessage fontSize="24px" />}
        />
        <Button text = "VIA CALL"
          icon = {<IoCall fontSize="24px"/>}
        />
      </div>
      <Button text = "VIA EMAIL FORM"
          icon = {<MdEmail  fontSize="24px"/>}
          isOutlineBtn = {true}
        />
      <form onSubmit={onSubmit}>
        <div className={styles.form_control}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
        </div>
        <div className={styles.form_control}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>
        <div className={styles.form_control}>
          <label htmlFor="text">Text</label>
          <textarea name="text" rows="8"/>
        </div>
        <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT BUTTON" />
      </div>
      </form>

      <div>
        {`Name is : ${name}`} <br/>
        {`Email is : ${email}`} <br/>
        {`Text is : ${text}`} <br/>
      </div>
      
      </div>

      {/* right side */}
      <div className={styles.contact_image}>
        <img src="/images/contact.svg" alt="contact image" />
      </div>
    </section>
  )
}

export default ContactForm