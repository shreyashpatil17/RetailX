import './style.css'

const ContactForm = () => {
    return(
        <>

<div className='contactFormDiv'>
            <h1 className='contactFormH1'>Like to send us a Message?</h1>
            <form className="contactForm">
                <input type="text" id="name" placeholder="Name" className='inputName' />
                <input type="text" id="email" placeholder="Email" className='inputEmail' />
                <input type="number" id="number" placeholder="Mobile Number" className='inputMobile' />
                <input type="text" id="subject" placeholder="Subject" className='inputSubject'/>
                <textarea id="message" name="message" placeholder="Enter you message here" className='inputMessage' />
                <input type='submit' value="Submit" id="submitBtn"/>
        </form>
       </div>

        </>
    );
}

export default ContactForm;