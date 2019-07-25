import React from 'react'
import { Collapse } from 'reactstrap'

// Import Notification css
import '../css/notification.css'

class Notification extends React.Component {
    state = {
        collapse: true
    }
    
    toggle = () => {
        this.setState(state => ({ collapse: !state.collapse }));
    }

    render() {
        return (
            <Collapse isOpen={this.state.collapse} className='position-sticky sticky-top'>
                <div className='notification-container nc-sm '>
                    <div className='notif-content nct-sm'>
                        <div className='notif-paragraph np-sm'>
                            By accessing and using this website, you acknowledge that you have read and understand our <a href='#cookie'>Cookie Policy</a>, <a href='#privacy'>Privacy Policy</a>, and our <a href='#term'>Term of Service</a>
                        </div>
                        <button className='btn btn-primary btn-got-it bgi-sm' onClick={this.toggle}>Got it</button>
                    </div>
                </div>
            </Collapse>
        )
    }
}

export default Notification