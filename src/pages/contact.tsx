import * as React from "react"

interface ContactInterace{
  displayPage: boolean
}

const Contact = ({displayPage}:ContactInterace) => {

  return (
    <main className="page-container" 
    style={{
      display:`${displayPage ? 'block' : 'none'}`, 
      // transform:`${displayPage ? 'translateY(-100vh)' : 'none'}`
      }}>
      <h2 className="contact__title">Contact</h2>
     <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" className="contact">
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <label className="contact__fieldWrapper">
        <input type="email" name="email" id="email" placeholder="email@example.com"/>
      </label>
      <label className="contact__fieldWrapper">
        <input type="text" name="subject" id="subject" placeholder="Subject" />
      </label>
      <label className="contact__fieldWrapper">
        <textarea name="message" id="message" rows={7} placeholder="Message" />
      </label>
      <div className="contact__buttonsWrapper">
        <button type="submit" className="contact__button contact__button-main">Send</button>
        <input type="reset" value="Clear" className="contact__button" />
      </div>
    </form>
   </main>
  )
}

export default Contact
