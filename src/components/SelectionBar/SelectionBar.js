import React from 'react';

const arrayOfLength = (length) => Array.from(Array(length).keys());

const renderOptions = (length, handleClick) => {
    return arrayOfLength(length).map(i => getOption(i, handleClick))
};

const getOption = (optionNum, handleClick) => (
    <button className={"odu-button"} key={optionNum} onClick={() => handleClick(optionNum)}>
        <span>
            {optionNum + 1}
        </span>
    </button>
);

const SelectionBar = (props) => (
    <div className={"flex-row"}>
        {renderOptions(props.length, props.handleClick)}
    </div>
);

export default SelectionBar;