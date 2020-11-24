import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import 'normalize.css';

export default function Layout({ children }) {
  console.log(children);
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
