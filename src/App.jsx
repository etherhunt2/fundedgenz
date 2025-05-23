import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Features from './components/Features';
import TableSection from './components/tableSection';
import Comparison from './components/Comparison';
import Roadmap from './components/Roadmap';
import Invest from './components/Invest';
import Team from './components/Team';
import Partners from './components/Partners';
import Events from './components/Events';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import ScrollTop from './components/ScrollTop';
import Testimonials from './components/Testimonials';
import Signup from './pages/Signup';
import Payment from './pages/Payment';

// Home page component to organize all home sections
const Home = () => {
    return (
        <>
            <Hero />
            <Features />
            <TableSection />
            <Comparison />
            <Invest />
            <Testimonials />
        </>
    );
};

function AppContent() {
    const location = useLocation();
    const hideHeaderFooter = location.pathname === '/payment';
    return (
        <>
            <Preloader />
            <ScrollTop />
            {!hideHeaderFooter && <Header />}
            <main className="main-area">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/payment" element={<Payment />} />
                </Routes>
            </main>
            {!hideHeaderFooter && <Footer />}
        </>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App; 