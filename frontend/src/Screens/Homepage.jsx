import React from 'react'
import Body from '../Components/Body'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const Homepage = () => {
    return (
        <div>
            <main className = "app__main">
                <div className = "app__header">
                    <Header />
                </div>
                <div className="app__body">
                    <Body />
                </div>
                <div className = "app__footer">
                    <Footer />
                </div>
            </main>
        </div>
    )
}

export default Homepage
