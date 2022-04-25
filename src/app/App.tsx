import React, { Suspense } from 'react';

import Preloader from '../components/common/Preloader/Preloader';
import Header from '../components/Header/Header';
import Layout from '../components/Layout/Layout';
import Navbar from '../components/Navbar/Navbar';

import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="main-content">
        <Navbar />
        <div className="app-wrapper-content">
          <Suspense fallback={<Preloader />}>
            <Layout />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default App;
