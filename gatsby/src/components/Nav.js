import React from 'react';
import { Link, navigate } from 'gatsby';

function goToSlicemasters() {
  console.log('go to slicers!');
  // 1. wait for 2 seconds
  // 2. change the page
  setTimeout(() => {
    console.log("It's been 2 seconds, go to slicers!!!");
    navigate('/slicemasters', { replace: true });
  }, 2000);
  // pass replace: true to put this in the browser history so the back button works
  // also i likely won't use this very often. Link is better.
  // usually it's not good to use buttons as links
  // buttons are more for web apps and gatsby is used more for websites
  //
}

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/beers">Beers</Link>
        </li>
        <li>
          <button type="button" onClick={goToSlicemasters}>
            click me to see slicemasters after 2 seconds
          </button>
        </li>
      </ul>
    </nav>
  );
}
