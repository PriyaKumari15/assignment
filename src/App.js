import React from 'react';
import { connect } from "react-redux";

import { updateData } from "./action";

import './App.css';

function App(props) {
  props.updateData(props.sentence);
  return (
    <div className="App">
      <header className="App-header">
        <textarea rows="2" cols="100" value={props.sentence}
          onChange={(e, extra) => props.updateData(e.target.value)}></textarea>
        <div>
          <input type="button" value="Clear" onClick={() => props.updateData('')}></input>
        </div>
        {props.isShow ? <div>
          <p>{props.sentence}</p>
          <div className="App-data">
            <p>{`Last Word Entered is : `} </p>
            <p className="App-link">{props.lastWord}</p>
          </div>
        </div> : null}
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
    lastWord: state.lastWord,
    isShow: state.isShow
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
