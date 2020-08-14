import React from 'react';
import { connect } from "react-redux";
import { useHistory } from 'react-router-dom';

import { updateData } from "../action";

import './result.css';

function DataInput(props) {
    props.updateData(props.sentence);
    let history = useHistory();
    return (
        <div className="App">
            <header className="App-header">
                <textarea rows="2" cols="100" value={props.sentence}
                    onChange={(e, extra) => props.updateData(e.target.value)}></textarea>
                <div>
                    <input type="button" value="Clear" onClick={() => props.updateData('')}></input>
                    <input type={"submit"} value="Submit" onClick={() => history.push('/result')}></input>
                </div>
            </header>
        </div>
    );

}

const mapDispatchToProps = (dispatch) => ({
    updateData: (payload) => dispatch(updateData(payload))
});

const mapStateToProps = (state) => {
    return {
        sentence: state.sentence,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataInput);
