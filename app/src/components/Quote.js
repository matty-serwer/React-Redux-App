import React, { useEffect } from "react";
import { connect } from "react-redux";
import '../index.css';

import { fetchQuote } from "../store/actions" ;

const Quote = (props) => {
    useEffect(() => {
        props.fetchQuote();
    }, []);

const clickHandler = (e) => {
    e.preventDefault();
    props.fetchQuote();
}

  return (
    <div className="quote-block">
      {/* <h2>Quote Component</h2> */}
      <button onClick={clickHandler}>Hit Me.</button>
      {props.quote ? <h3 className="quote">"{props.quote}"</h3> :null}
      {props.isLoading ? <p className="loading-text">Loading Quote...</p> : null}
      {props.error ? <p className="error-text">{props.error}</p> : null}
    </div>
  );
};

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        quote: state.quoteData,
        error: state.error,
        click: state.click
    }
}

export default connect(mapStateToProps, { fetchQuote })(Quote)
