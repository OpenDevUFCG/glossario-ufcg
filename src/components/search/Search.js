import * as React from 'react';
import "./Search.css";
import { AutoComplete } from 'antd';
import acronyms from '../../lib/data';

const Option = AutoComplete.Option;

const renderOption = (item) => (
    <Option key={item.acronym} text={item.meaning}>
      {item.acronym} 
    </Option>
)

const Search = (props) => (
    <AutoComplete
      className={"search-box"}
      dataSource={acronyms.map(renderOption)}
      optionLabelProp="meaning"
      placeholder="Pesquise..."
      
      filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
    />
  )


export default Search