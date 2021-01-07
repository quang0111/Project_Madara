import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import Banner from './layouts/Banner'
import SectionSale from './layouts/SectionSale';
import Sale from './layouts/Sale';
import Feelback from './layouts/Feelback';

function HomePage() {
  return (
    <div className="home">
      <Header />
      <Banner />
      <Sale />
      <SectionSale />
      <Feelback />
    </div>
  );
}

export default HomePage;
