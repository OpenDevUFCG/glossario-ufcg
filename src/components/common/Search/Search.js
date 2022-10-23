import React from 'react';
import './Search.css';
import { AutoComplete, Select } from 'antd';
import { Icon } from '../Icon';
import PropTypes from 'prop-types';
import { useState } from 'react';

const renderOption = item => <Select.Option key={item}>{item}</Select.Option>;

const CustomSearchButton = ({ handleClick, selected }) => (
  <button
    className="search__button-container pointer-hover lighter-hover"
    onClick={() => handleClick(selected)}
  >
    <Icon className="search__button" icon="search" iconColor='#FFFFFF"' />
  </button>
);

CustomSearchButton.propTypes = {
  handleClick: PropTypes.func,
  selected: PropTypes.string
}

const Search = ({ items, handleSelect }) => {
  const [selected, setSelected] = useState('')

  return (
    <aside className="search">
      <AutoComplete
        dataSource={items.map(renderOption)}
        optionLabelProp="meaning"
        placeholder="Pesquise..."
        onSearch={e => setSelected(e)}
        onSelect={e => handleSelect(e)}
        filterOption={(inputValue, option) =>
          option.props.children
            .toUpperCase()
            .indexOf(inputValue.toUpperCase()) !== -1
        }
      />
      <CustomSearchButton handleClick={handleSelect} selected={selected} />
    </aside>
  );
}

Search.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  handleSelect: PropTypes.func,
};

export default Search;
