import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Slicks Slices`,
    siteUrl: 'https://michaelfrieze.dev',
    description: 'The best pizza place in Hamilton!',
    twitter: '@michaelfrieze',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      // this is the name of the plugin you are adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'mogfl0cc',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};

/* 
Page Queries:
- can be dynamic with variables
- can only be run on a top level page

Static Queries:
- can't be dynamic, no variables can be passed in
- can be run anywhere
*/
