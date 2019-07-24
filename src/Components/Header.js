import React from 'react'

// Import Header CSS
import '../css/header.css'

// Import Image
import ylogo from '../img/y-logo-white.png'

class Header extends React.Component {
    render() {
        return (
            <div className='header-container'>
                <div className='header'>
                    <img src={ylogo} alt='ylogo' className='ylogo'/>
                    <div className='header-content text-center'>
                        <p className='greetings'>Hello! I'm Hanafiantho</p>
                        <p className='what-to-do'>Consult, Design, and Develop Websites</p>
                        <p className='contact-me'>
                            <div className='something-great-in-mind'>Have something great in mind? </div>
                            <div className='free-contact-me'>Feel free to contact me.</div>
                        </p>
                        <p className='contact-me'>I'll help you to make it happen.</p>
                        <button className='btn btn-outline-light btn-lets-contact'>LET'S MAKE CONTACT</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header