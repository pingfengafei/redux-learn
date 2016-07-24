/**
 * Created by pingfengafei on 16/7/22.
 */

//import jwt from 'jsonwebtoken';

var jwt = require('jsonwebtoken');
import React, {Component, PropTypes} from 'react';

export default class ShowToken extends Component {
    constructor(props) {
        super(props);
    }

    render() {
       var token = jwt.decode(this.props.text.refreshToken, {completed : true});
       console.log(token);
        return (
            <div style={{marginTop: '30px'}}>
                <div><span>获取token状态:&#12288;</span><span>{this.props.status}</span></div>
                <div>{this.props.text.refreshToken}</div>
                <div>{this.props.text.token}</div>
                <div></div>
            </div>);
    }
}
