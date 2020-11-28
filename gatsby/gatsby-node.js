import path from 'path';

async function turnPizzasIntoPages({ graphql, actions }) {
  // 1. Get a template for this page
  const pizzaTemplate = path.resolve('./src/templates/Pizza.js');

  // 2. Query all pizzas
  const { data } = await graphql(`
    query {
      pizzas: allSanityPizza {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);

  // 3. Loop over each pizza and create a page for that pizza
  data.pizzas.nodes.forEach((pizza) => {
    actions.createPage({
      // What is the URL for this new page??
      path: `pizza/${pizza.slug.current}`,
      component: pizzaTemplate,
      context: {
        slug: pizza.slug.current,
      },
    });
  });
}

export async function createPages(params) {
  // Create pages dynamically
  // Wait for all promises to be resolved before finishing this function
  await Promise.all([turnPizzasIntoPages(params)]);
  // 1. Pizzas
  // 2. Toppings
  // 3. Slicemasters
}

/* 
Gatsby Node APIs
Gatsby gives plugins and site builders many APIs for controlling your site’s data in the GraphQL data layer.
https://www.gatsbyjs.com/docs/node-apis/

If your plugin performs async operations (disk I/O, database access, calling remote APIs, etc.) you must either return a promise (explicitly using Promise API or implicitly using async/await syntax) or use the callback passed to the 3rd argument. Gatsby needs to know when plugins are finished as some APIs, to work correctly, require previous APIs to be complete first.

APIs
createPages
Tell plugins to add pages. This extension point is called only after the initial sourcing and transformation of nodes plus creation of the GraphQL schema are complete so you can query your data in order to create pages.

So, to understand this, I am using:
export async function createPages() {
  console.log('CREATING PAGES!!!!');
}

First, we can see that it gets data from sanity
Second, it runs this function: createPages()
Finally, it builds the page

*/
