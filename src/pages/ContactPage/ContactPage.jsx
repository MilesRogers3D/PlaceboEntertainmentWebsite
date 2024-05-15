import "./style.css";
export const ContactPage = () => {
     return (
          <div className="contact-page">
               <h1 className="contact-title">GET CONNECTED!</h1>
               <form className="contact-container">
                    <label className="contact-label">Name*</label>
                    <input className="contact-input" type="text"></input>

                    <label className="contact-label">Email*</label>
                    <input className="contact-input" type="text"></input>

                    <label className="contact-label">Message*</label>
                    <textarea className="contact-input-message"></textarea>
                    <input type="submit" value="Submit" className="contact-submit"></input>
               </form>
          </div>
     );
};

export default ContactPage;
