import * as React from 'react';
import { AutoComplete } from 'antd';
import acronyms from '../../lib/data';

const Option = AutoComplete.Option;

const renderOption = (item) => (
    <Option key={item.acronym} text={item.meaning}>
      {item.acronym} 
    </Option>
  )

const Search = () => (
    <AutoComplete
      style={{ width: 200 }}
      dataSource={acronyms.map(renderOption)}
      optionLabelProp="meaning"
      placeholder="Pesquise..."
      
      filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
    />
  )


export default Search