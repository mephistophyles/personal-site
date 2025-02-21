import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3>
          <a href={`/blog${data.link}`}>{data.title}</a>
        </h3>
        <time className="published">
          {dayjs(data.date).format('DD MMMM, YYYY')}
        </time>
      </header>
      <a href={`/blog${data.link}`} className="image card-image">
        <img src="https://baconmockup.com/200/200" alt={data.title} />
      </a>
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    image: PropTypes.string,
    desc: PropTypes.string,
  }).isRequired,
};

export default Cell;
