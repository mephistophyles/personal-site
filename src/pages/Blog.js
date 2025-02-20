import React from 'react';
import { Link } from 'react-router-dom';
// import fs from 'fs';

import Main from '../layouts/Main';

import Cell from '../components/Blog/Cell';

/*
const blogposts = () => {
  // generate a list of blogposts from file.
  const path = '../data/blog';
  const files = fs.readdir(path);
  return files;
};
*/

const blogposts = [
  {
    title: 'Example',
    date: '2025-02-10',
    link: '/example',
    desc: 'some descriptive text',
  },
  {
    title: 'Example 2',
    date: '2025-02-20',
    link: '/example-two',
    desc: 'some better descriptive text',
  },
];

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
      {blogposts.map((posts) => (
        <Cell data={posts} key={posts.title} />
      ))}
    </article>
  </Main>
);

export default Blog;
