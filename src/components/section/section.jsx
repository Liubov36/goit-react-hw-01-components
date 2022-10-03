import React from 'react';
import PropTypes from 'prop-types';
import css from '../section/section.module.css';

export const Section = ({ title, children }) => {
  return (
    <section>
      <div className={css.container}>
        {title && <h2 className={css.title}>{title}</h2>}
        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};