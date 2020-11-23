import React, { Component } from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions'

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={() => this.props.onAdditionCounter(5)}  />
                <CounterControl label="Subtract 6" clicked={() => this.props.onSubtractionCounter(6)}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr) }>Store Result</button>
                <ul>
                    {this.props.storedResults.map(storedResult => 
                        <li key={storedResult.id} onClick={() => this.props.onDeleteResult(storedResult.id)}>
                            {storedResult.value}
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAdditionCounter: (inputVal) => dispatch({type: actionTypes.ADDITION, value: inputVal}),
        onSubtractionCounter: (inputVal) => dispatch({type: actionTypes.SUBTRACTION, value: inputVal}),
        onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElId: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);