import React from 'react';
import Layout from './src/components/Layout';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

/* 
gatsby-ssr is essentially the same thing as gatsby-browser.
But, it happens when pages are generated rather than
after the pages are loaded
*/
