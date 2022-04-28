import React, { Suspense } from 'react';

import Preloader from '../../components/Preloader/Preloader';

import Header from './Header/Header';
import Navbar from './Navbar/Navbar';

interface LayoutProps {
    children: React.ReactNode
}

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="main-content">
        <Navbar />
        <div className="app-wrapper-content">
          <Suspense fallback={<Preloader />}>
            {children}
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default Layout;
