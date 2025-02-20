import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Phil Heijkoop's personal website. Built with Michael D'Angelo's website as a template. "
      + 'Engineer turned executive, but still a builder.'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">About this site</Link>
          </h2>
          <p>
            A beautiful, responsive, statically-generated, react application
            written with modern Javascript.
          </p>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my website. Please feel free to read more{' '}
        <Link to="/about">about me</Link>, you can check out my {' '}
        <Link to="/projects">projects</Link>,{' '}
        or read some of my <Link to="/blog">writing</Link>.
      </p>
      <p>
        {' '}
        Source available{' '}
        <a href="https://github.com/mephistophyles/personal-site">here</a>. But you are probably better off checking out the original <a href="https://github.com/mldangelo/personal-site">here</a>.
      </p>
    </article>
  </Main>
);

export default Index;
