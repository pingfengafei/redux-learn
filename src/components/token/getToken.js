/**
 * Created by pingfengafei on 16/7/22.
 */

import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

export default class GetToken extends Component {
    constructor(props) {
        super(props);
        this.sendLoginData = this.sendLoginData.bind(this);
    }

    sendLoginData() {
        const username = ReactDOM.findDOMNode(this.refs.username).value.trim();
        const password = ReactDOM.findDOMNode(this.refs.password).value.trim();
        this.props.getToken(username, password);
    }

    render() {
        return (
            <div style={{marginTop : '30px'}}>
                <div><span>用户名:&#12288;&#12288;</span><input type="text" ref="username"/></div>
                <div><span>密&#12288;码:&#12288;&#12288;</span><input type="text" ref='password'/></div>
                <button onClick={this.sendLoginData}>确认</button>
            </div>);

    }
}
