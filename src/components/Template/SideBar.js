import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Will Arthur</h2>
        <p><a href="mailto:willarthur75@gmail.com@gmail.com">willarthur75@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Will. I like to build things.
        I am a <a href="https://bgsu.edu/">BGSU</a> graduate,
        developer at <a href="https://progressive.com">Progressive Insurance</a>, and overall computer enthusiast! Before Progressive I was
        at <a href="https://bgsu.edu/infosec">BGSU </a>
        and <a href="https://compassion.com">Compassion International</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Will Arthur <Link to="/">will-arthur.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
