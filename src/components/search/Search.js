import * as React from 'react';
import "./Search.css";
import { AutoComplete } from 'antd';
import Icon from "../Icon/Icon";

const renderOption = (item) => (
    <Option key={item}>
      {item}
    </Option>
);

const CustomSearchButton = (props) => (
    <button className={"search__button-container pointer-hover"} onClick={props.handleClick}>
        <Icon className={"search__button"} icon={"search"} iconColor={"#FFFFFF"}/>
    </button>
);

const Search = (props) => (
  <div className={"search"}>
    <AutoComplete
        dataSource={props.items.map(renderOption)}
        optionLabelProp="meaning"
        placeholder="Pesquise..."
        onSelect={e => props.handleSelect(e)}
        filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
    />
    <CustomSearchButton/>
  </div>
);

export default Search;