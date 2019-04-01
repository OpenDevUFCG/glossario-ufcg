import * as React from 'react';
import { AutoComplete, Select } from 'antd';
import PropTypes from 'prop-types';
import Icon from "../Icon/Icon";
import "./Search.css";

const renderOption = (item) => (
    <Select.Option key={item}>
      {item}
    </Select.Option>
);

const CustomSearchButton = ({ handleClick }) => (
    <button className={"search__button-container pointer-hover lighter-hover"} onClick={handleClick}>
        <Icon className={"search__button"} icon={"search"} iconColor={"#FFFFFF"}/>
    </button>
);

CustomSearchButton.propTypes = {
  handleClick: PropTypes.func,
};

const Search = ({ items, handleSelect }) => (
  <div className={"search"}>
    <AutoComplete
        dataSource={items.map(renderOption)}
        optionLabelProp="meaning"
        placeholder="Pesquise..."
        onSelect={e => handleSelect(e)}
        filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
    />
    <CustomSearchButton/>
  </div>
);

Search.propTypes = {
  items: PropTypes.array,
  handleSelect: PropTypes.func,
};

export default Search;