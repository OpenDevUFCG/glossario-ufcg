import React from 'react';
import './Search.css';
import { AutoComplete, Select } from 'antd';
import { Icon } from '../Icon';
import PropTypes from 'prop-types';

const renderOption = item => <Select.Option key={item}>{item}</Select.Option>;

const CustomSearchButton = ({ handleClick }) => (
  <button
    className="search__button-container pointer-hover lighter-hover"
    onClick={handleClick}
  >
    <Icon className="search__button" icon="search" iconColor='#FFFFFF"' />
  </button>
);

const Search = ({ items, handleSelect }) => (
  <aside className="search">
    <AutoComplete
      dataSource={items.map(renderOption)}
      optionLabelProp="meaning"
      placeholder="Pesquise..."
      onSelect={e => handleSelect(e)}
      filterOption={(inputValue, option) =>
        option.props.children
          .toUpperCase()
          .indexOf(inputValue.toUpperCase()) !== -1
      }
    />
    <CustomSearchButton />
  </aside>
);

Search.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  handleSelect: PropTypes.func,
};

export default Search;
