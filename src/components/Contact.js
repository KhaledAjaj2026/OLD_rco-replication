import React from 'react'

function Contact() {
    return (
        <div className='contact-container'>
            <div id='left'>
                <h4>Join the Collective</h4>
                <p>Sign up for our newsletter for the latest news, offers and<br/> style tips delivered to your inbox.</p>
            </div>
            <div id='right'>
                <form action='/'>
                    <input type='email' id="email-address" placeholder='Email Address' />
                    <input type='text' id="phone-number" placeholder='Phone Number (Optional)' />
                    <button id="join">JOIN</button>
                </form>
                    <p>By submitting this form, you agree to receive recurring automated promotional and personalized<br/> marketing text messages (e.g. cart reminders) from R+Co at the cell number used when signing up.<br/> Consent is not a condition of any purchase. Reply HELP for help and STOP to cancel. Msg frequency<br/> varies. Msg & data rates may apply. View <span>Terms</span> & <span>Privacy</span>.</p>
            </div>

        </div>
    )
}

export default Contact
