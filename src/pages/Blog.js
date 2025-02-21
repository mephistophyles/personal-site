import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Blog/Cell';
import data from '../data/blogs';

const Blog = () => (
  <Main title="Blog Posts" description="Phil Heijkoop's blog posts.">
    <article className="post" id="blogpost">
      <header>
        <div className="title">
          <h2>
            <Link to="/blog/">Writing</Link>
          </h2>
          <p>
            I&apos;ve made an attempt to aggregate some of my writing.
            For now it is unorganized, but I will work to add tabs at a later date.
          </p>
        </div>
      </header>
      {data.map((posts) => (
        <Cell data={posts} key={posts.title} />
      ))}
    </article>
  </Main>
);

export default Blog;
