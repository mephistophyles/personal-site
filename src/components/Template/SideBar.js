import React from 'react';
import { Link } from 'react-router-dom';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Phil Heijkoop</h2>
        <p>
          <a href="mailto:hi@madebyphil.com">hi@madebyphil.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Phil. I am an engineer turned tech executive.
        You can check out my job history/resume in the about page.
        This site is mostly dedicated to hosting all my writing
        (focused on my professional endeavors),
        and the projects I build (mostly for fun).
      </p>
      <ul className="actions">
        <li>
          <Link to="/about" className="button">
            Learn More
          </Link>
        </li>
      </ul>
    </section>

    <section id="footer">
      <p className="copyright">
        content: &copy;  Phil Heijkoop <Link to="/">madebyphil.com</Link>.
      </p>
      <p className="copyright">
        design: &copy;  Michael D&apos;Angelo <Link to="https://mldangelo.com/">mldangelo.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
