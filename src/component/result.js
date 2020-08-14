import React from 'react';
import { connect } from "react-redux";
import { useHistory } from 'react-router-dom';

import './result.css';

function Result(props) {
    let history = useHistory();
    return (
        <div className="App">
            <header className="App-header">
                {props.isShow ? <div>
                    <p>{props.sentence}</p>
                    <div className="App-data">
                        <p>{`Last Word Entered is : `} </p>
                        <p className="App-link">{props.lastWord}</p>
                    </div>
                </div> : null}
                <input type={"button"} value="Back" onClick={() => history.goBack()}></input>
            </header>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        sentence: state.sentence,
        lastWord: state.lastWord,
        isShow: state.isShow
    };
};

export default connect(mapStateToProps, null)(Result);
