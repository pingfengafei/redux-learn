import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import CounterAction from '../actions/counterAction'
class Counter extends Component {

    constructor(props) {
        super(props);
        this.handleIncreaseClick = this.handleIncreaseClick.bind(this);
        this.handleDecreaseClick = this.handleDecreaseClick.bind(this);
    }

    handleIncreaseClick() {
        this.props.handleIncreaseClick('increase');
    }

    handleDecreaseClick() {
        this.props.handleDecreaseClick('decrease');
    }

    render() {
        return (<div>
            <div>counter : {this.props.value}</div>
            <div>increase or decrease : {this.props.text}</div>
            <button onClick={this.handleIncreaseClick}>
                increment
            </button>
            <button onClick={this.handleDecreaseClick}>
                decrement
            </button>
        </div>)
    }
}

//将state中的全局state当做props注入到counter组件中
//输入： 全局变量
//输出： 经过筛选后的state，作为props传给counter
function mapStateToProps(state) {
    console.log(state);
    return {
        value: state.counter.count,
        text: state.counter.text
    }
}

//
function mapDispatchToProps(dispatch) {
    return {
        handleIncreaseClick: (text) => dispatch(CounterAction.increase(text)),
        handleDecreaseClick: (text) => dispatch(CounterAction.decrease(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
