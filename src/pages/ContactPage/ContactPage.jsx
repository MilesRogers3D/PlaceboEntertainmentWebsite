import "./style.css";
export const ContactPage = () => {
     return (
          <div className="contact-page">
               <h1 className="contact-title">GET CONNECTED!</h1>
               <form className="contact-container" action="https://formsubmit.co/4922688420abc1562fe4f7eaeb35256b" method="POST">
                    <label className="contact-label">Name*</label>
                    <input className="contact-input" type="text" name="name" required></input>

                    <label className="contact-label">Email*</label>
                    <input className="contact-input" type="text" name="email" required></input>

                    <input type="hidden" name="_next" value="https://placeboentertainment.com"></input>
                    <label className="contact-label">Message*</label>
                    <textarea className="contact-input-message" name="message"></textarea>
                    <input type="submit" value="Submit" className="contact-submit"></input>
               </form>
          </div>
     );
};

export default ContactPage;
