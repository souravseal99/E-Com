import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Body from '../Components/Body'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import ProductDetail from './ProductDetail'

const Homepage = () => {
    return (
        <Router>
            <main className="app__main">
                <div className="app__header">
                    <Header />
                </div>
                <div className="app__body">
                    <Routes> {/*have to specify routes in New version */}
                        <Route path="/" element={<Body />} exact />
                        <Route path="/product/:id" element={<ProductDetail />} />
                    </Routes>
                </div>
                <div className="app__footer">
                    <Footer />
                </div>
            </main>
        </Router>
    )
}

export default Homepage
