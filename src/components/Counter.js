import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import CounterAction from '../actions/counterAction'
class Counter extends Component {

    //并不需要constructor
    // constructor() {
    //     super();
    //     //     //一次bind this,以后多次调用就不用再次bind
    //     this.handleIncreaseClick = this.handleIncreaseClick.bind(this);
    //     this.handleDecreaseClick = this.handleDecreaseClick.bind(this);
    // }



//定义类的方法,不需要添加function,直接使用函数名
// 方法之间不需要用逗号或者分号,会报错
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
            <button onClick={this.handleIncreaseClick.bind(this)}>
                increment
            </button>
            <button onClick={this.handleDecreaseClick.bind(this)}>
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
