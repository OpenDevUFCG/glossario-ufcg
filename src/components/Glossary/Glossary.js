import React, {Component} from "react";
import "./Glossary.css"
import Search from "../search/Search";
import Description from "../Description/Description"
import VerticalSeparator from "../VerticalSeparator/VerticalSeparator"

class Glossary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentObj: "",
        }
    }

    handleSelect = (selected, array) => {
        this.setState({
            currentObj: array.find(e => e.acronym === selected),
        });
    };

    render() {
        return (
            <div className={"odu-card glossary__container"}>
                <div className={"glossary__left-container"}>
                    <span className={"odu-title main-title"}>Glossário UFCG</span>
                    <Search handleSelect={this.handleSelect}/>
                </div>
                <VerticalSeparator/>
                <Description title={this.state.currentObj.meaning}/>
            </div>
        )
    }
}

export default Glossary;