import React from 'react';
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

function App() {
    return (
        <>
            <Preloader />
            <ScrollTop />
            <Header />
            <main className="main-area">
                <Hero />
                <Brands />
                <Features />
                <TableSection />
                <Comparison />
                {/* <Roadmap /> */}
                <Invest />
                {/* <Team /> */}
                {/* <Partners /> */}
                {/* <Events /> */}
                <Testimonials />
            </main>
            {/* <FAQ /> */}
            <Footer />
        </>
    );
}

export default App; 