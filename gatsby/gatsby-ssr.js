import React from 'react';
import Layout from './src/components/Layout';

// This is similar to gatsby-browser but instead of running
// in this browser, this is running on the server
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
