import * as React from 'react';
import "./Search.css";
import { AutoComplete } from 'antd';

const Option = AutoComplete.Option;

const renderOption = (item) => (
    <Option key={item}>
      {item}
    </Option>
)

const Search = (props) => (
    <AutoComplete
      className={"search-box"}
      dataSource={props.items.map(renderOption)}
      optionLabelProp="meaning"
      placeholder="Pesquise..."
      onSelect={e => props.handleSelect(e)}
      filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
    />
);


export default Search;