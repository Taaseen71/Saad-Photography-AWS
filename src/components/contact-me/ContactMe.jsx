import React from 'react'
import './Contact.css'

const ContactMe = () => {
  return (
    <div>
        <section id="contact">
            <div className="row section-head">
                <div className="two columns header-col">
                    <h1><span>Get In Touch.</span></h1>
                </div>
            </div>
            <div className="row">
                <div className="eight columns">
                    <form id="contactForm" name="contactForm">
                        <fieldset>
                            <div>
                                <div className="ContactDiv">
                                    <div className="iframeDivWrapper">
                                        <div className="iframeDiv">
                                            <iframe className="iframe" id="JotFormIFrame-201731473395153" title="General Inquiry Contact Form" onLoad={window.parent.scrollTo(0,0)} allowtransparency="true" allowFullScreen={true} allow="geolocation; microphone; camera" src="https://form.jotform.com/201731473395153" frameBorder="0"  >
                                            </iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ContactMe