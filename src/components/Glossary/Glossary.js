import React, {Component} from "react";
import "./Glossary.css"
import Search from "../search/Search";
import Description from "../Description/Description"
import VerticalSeparator from "../VerticalSeparator/VerticalSeparator"
import SelectionBar from "../SelectionBar/SelectionBar"
import IconButton from "../IconButton/IconButton"

import acronyms from '../../lib/data';

class Glossary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentAcronym: "",
            currentObj: {},
            currentMeaning: -1,
        }
    }

    componentDidMount = () => {
        const selected = this.props.match.params.acronym;
        if (selected) this.handleAcronymChange(selected);
    }

    handleAcronymChange = async (selected) => {
        this.props.history.push(`/${selected}`)
        await this.setState({
            currentAcronym: selected,
            currentMeaning: 0,
        });
        this.handleCurrentObjChange();
    };

    handleMeaningChange = async (meaningSelected) => {
        await this.setState({
            currentMeaning: meaningSelected,
        });
        this.handleCurrentObjChange();
    };

    handleCurrentObjChange = () => {
        this.setState({
            currentObj: this.getCurrentObj()[this.state.currentMeaning],
        });
    };

    increaseMeaning = async () => {
        const finalMeaningNum = this.state.currentMeaning === this.getCurrentObjLength() - 1 ? 0 : this.state.currentMeaning + 1;
        await this.setState({
            currentMeaning: finalMeaningNum,
        });
        this.handleCurrentObjChange();
    };

    getCurrentObjLength = () => this.getCurrentObj().length;

    getCurrentObj = () => acronyms[this.state.currentAcronym];

    decreaseMeaning = async () => {
        const finalMeaningNum = this.state.currentMeaning === 0 ? this.getCurrentObjLength() - 1 : this.state.currentMeaning - 1;
        await this.setState({
            currentMeaning: finalMeaningNum,
        });
        this.handleCurrentObjChange();
    };


    render() {
        const selectionBarLength = this.getCurrentObj() ? this.getCurrentObjLength() : 0;
        return (
            <div className={"odu-card glossary__container"}>
                <div className={"glossary__left-container"}>
                    <span className={"odu-title main-title"}>Glossário UFCG</span>
                    <Search items={Object.keys(acronyms).sort()} handleSelect={this.handleAcronymChange}/>
                    <SelectionBar handleClick={this.handleMeaningChange} length={selectionBarLength}/>
                </div>
                <VerticalSeparator/>
                <div className={"flex-row"}>
                    <IconButton action={this.decreaseMeaning} icon={"keyboard_arrow_left"}/>
                    <Description selectedObj={this.state.currentObj}/>
                    <IconButton action={this.increaseMeaning} icon={"keyboard_arrow_right"}/>
                </div>
            </div>
        )
    }
}

export default Glossary;