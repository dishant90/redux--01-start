import React, { Component } from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { increment, decrement, addition, subtraction, storeResult, deleteResult } from '../../store/actions/index'

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
        onIncrementCounter: () => dispatch(increment()),
        onDecrementCounter: () => dispatch(decrement()),
        onAdditionCounter: (inputVal) => dispatch( addition(inputVal)),
        onSubtractionCounter: (inputVal) => dispatch(subtraction(inputVal)),
        onStoreResult: (result) => dispatch(storeResult(result)),
        onDeleteResult: (id) => dispatch(deleteResult(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);