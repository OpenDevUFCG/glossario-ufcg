import React from 'react';
import ReactMarkdown from 'react-markdown';
import htmlParser from 'react-markdown/plugins/html-parser';
import PropTypes from 'prop-types';

const parseHtml = htmlParser();

const disallow = [
  'image',
  'imageReference',
  'table',
  'tableHead',
  'tableBody',
  'tableRow',
  'tableCell',
  'heading',
];

const Markdown = ({ src }) => (
  <ReactMarkdown
    source={src}
    disallowedTypes={disallow}
    astPlugins={[parseHtml]}
    escapeHtml={false}
  />
);

Markdown.propTypes = {
  src: PropTypes.string,
};

export default Markdown;
