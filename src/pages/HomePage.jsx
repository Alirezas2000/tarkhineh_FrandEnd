import React from 'react';
import Header from '../components/Header';
import Slider from '../components/Slider';
import MenuCategories from '../components/MenuCategories';
import About from '../components/About';
import Branches from '../components/Branches';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <>
      <Header />
      <main className="main">
        <Slider />
        <MenuCategories />
        <About />
        <Branches />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;