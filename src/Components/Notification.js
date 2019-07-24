import React from 'react'

// Import Notification css
import '../css/notification.css'

class Notification extends React.Component {
    render() {
        return (
            <div className='notification-container nc-sm position-fixed fixed-top'>
                <div className='notif-content nct-sm'>
                    <div className='notif-paragraph np-sm'>
                        By accessing and using this website, you acknowledge that you have read and understand our <a href='#cookie'>Cookie Policy</a>, <a href='#privacy'>Privacy Policy</a>, and our <a href='#term'>Term of Service</a>
                    </div>
                    <button className='btn btn-primary btn-got-it bgi-sm'>Got it</button>
                </div>
            </div>
        )
    }
}

export default Notification