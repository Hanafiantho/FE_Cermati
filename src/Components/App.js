import React from 'react'

// Import myown css
import '../css/app.css'

// Import child component
import Notification from './Notification'

class App extends React.Component {
    render() {
        return (
            <div className='app-container'>
                <Notification />
            </div>
        )
    }
}

export default App