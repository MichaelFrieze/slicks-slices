import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

// these style only apply in this component (they are scoped)
const NavStyles = styled.nav`
  background: green;
`;

/* 
Let's say we want to style tune unordered list (UL)
There are 2 ways of doing it. 
1. put ul {styles here} in the NavStyles above.
2. Or, Make it's own styled component as demonstrated
*/
const UlStyles = styled.ul`
  border: 10px solid yellow;
`;
// This way of doing it is good if you need to reuse it

export default function Nav() {
  return (
    <NavStyles>
      <UlStyles>
        <li>
          <Link to="/">Hot Now</Link>
        </li>
        <li>
          <Link to="/pizzas">Pizza Menu</Link>
        </li>
        <li>
          <Link to="/">LOGO</Link>
        </li>
        <li>
          <Link to="/slicemasters">SliceMasters</Link>
        </li>
        <li>
          <Link to="/order">Order Ahead!</Link>
        </li>
      </UlStyles>
    </NavStyles>
  );
}
