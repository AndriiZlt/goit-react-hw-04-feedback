import PropTypes from 'prop-types';
import { Title } from './Section.styled';
import React from 'react';
export const Section = ({ title, ...props }) => {
  return (
    <div>
      <Title>{title}</Title>
      {props.children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
