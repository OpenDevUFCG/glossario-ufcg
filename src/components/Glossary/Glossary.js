import React, {Component} from "react";
import "./Glossary.css"
import Search from "../search/Search";
import Description from "../Description/Description"
import VerticalSeparator from "../VerticalSeparator/VerticalSeparator"
import SelectionBar from "../SelectionBar/SelectionBar"
import IconButton from "../IconButton/IconButton"

import glossarioLogo from '../../../assets/images/glossario-logo.svg';

import acronyms from '../../lib/data';

class Glossary2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMeaning: 0,
        }
    }

    handleAcronymChange = (selected) => {
        this.props.history.push(`/${selected}`)
        this.handleMeaningChange(0);
    }

    handleMeaningChange = (meaningSelected) => {
        this.setState({
            currentMeaning: meaningSelected,
        });
    };

    increaseMeaning = () => {
        const { currentMeaning } = this.state;
        const finalMeaningNum = (currentMeaning + 1) % this.getCurrentObjLength();
        this.handleMeaningChange(finalMeaningNum);
    };

    getCurrentObjLength = () => this.getAcronymResults().length;

    getAcronymResults = () => {
        const acronym = this.props.match.params.acronym;
        return acronyms[acronym] || []
    }

    decreaseMeaning = () => {
        const { currentMeaning } = this.state;
        const finalMeaningNum = Math.abs(currentMeaning - 1) % this.getCurrentObjLength();
        this.handleMeaningChange(finalMeaningNum);
    };

    render() {
        const { currentMeaning } = this.state;
        const selectionBarLength = this.getCurrentObjLength();
        const result = this.getAcronymResults()[currentMeaning] || {};
        return (
            <div className={"odu-card glossary__container"}>
                <div className={"glossary__left-container"}>
                    <span className={"odu-title"}>Glossário UFCG</span>
                    <Search items={Object.keys(acronyms).sort()} handleSelect={this.handleAcronymChange}/>
                    <SelectionBar handleClick={this.handleMeaningChange} length={selectionBarLength}/>
                </div>
                <VerticalSeparator/>
                <div className={"flex-row"}>
                    <IconButton action={this.decreaseMeaning} icon={"keyboard_arrow_left"}/>
                    <Description selectedObj={result}/>
                    <IconButton action={this.increaseMeaning} icon={"keyboard_arrow_right"}/>
                </div>
            </div>
        )
    }
}

const Glossary = () => (
    <div className={"glossary__container"}>
        <img className={"glossary__logo"} src={glossarioLogo} width="400px" />
        <Search className={"glossary__search"} items={[]} />
        <span className={"glossary__day-phrase"}>Você sabe o que é <a className="emphasis pointer-hover light-accent">tamburete</a>?</span>
    </div>
);

export default Glossary;