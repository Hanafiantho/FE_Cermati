import React from 'react'

// Import myown css
import '../css/app.css'

// Import child component
import Notification from './Notification'
import Header from './Header'
import Highlights from './Highlights'
import Footer from './Footer'

class App extends React.Component {
    render() {
        return (
            <div className='app-container'>
                <Notification />
                <Header />
                <Highlights />
                <Footer />
            </div>
        )
    }
}

export default App