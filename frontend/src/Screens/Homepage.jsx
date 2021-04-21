import React from 'react'
import Body from '../Components/Body'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const Homepage = () => {
    return (
        <div>
            <main>
                <div>
                    <Header />
                </div>
                <div>
                    <Body />
                </div>
                <div>
                    <Footer />
                </div>
            </main>
        </div>
    )
}

export default Homepage
