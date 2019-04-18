import React from 'react';
import ReactMarkdown from 'react-markdown';
import htmlParser from 'react-markdown/plugins/html-parser';

const parseHtml = htmlParser();

const disallow = [
  'image',
  'imageReference',
  'table',
  'tableHead',
  'tableBody',
  'tableRow',
  'tableCell',
  'heading'
];

const Markdown = ({ src }) => (
    <ReactMarkdown
      source={src}
      disallowedTypes={disallow}
      astPlugins={[parseHtml]}
      escapeHtml={false}
    />
);

export default Markdown;
