import React from 'react';
import Layout from './src/components/Layout';

// This will make it so that we don't have to use Layout
// in ever page component.
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

/* 
This will be ran before any of our main pages or components
So, if I wrote the code like this, only "nothing here" will
be rendered to the page and not pages/components/etc... 

export function wrapPageElement({ element, props }) {
  return <div>nothing here</div>;
}
*/
