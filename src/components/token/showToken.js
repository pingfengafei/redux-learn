/**
 * Created by pingfengafei on 16/7/22.
 */

import jwt from 'jsonwebtoken';

import React, {Component, PropTypes} from 'react';

export default class ShowToken extends Component {
    constructor(props) {
        super(props);
    }

    tokenDetail(payload){
        var detail = [];
        for(let i in payload){
            detail.push(<div key={i}><span>{i}:&#12288;</span><span>{payload[i]}</span></div>)
        }
        return detail;
    }

    render() {
       var refreshToken = jwt.decode(this.props.text.refreshToken, {complete : true});
       var payload = refreshToken ?  refreshToken.payload : null; //第一次的时候是null
        var detail = this.tokenDetail(payload);
        return (
            <div style={{marginTop: '30px'}}>
                <div><span>获取token状态:&#12288;</span><span>{this.props.status}</span></div>
                <div>{this.props.text.refreshToken}</div>
                <div>{this.props.text.token}</div>
                <div>{detail}</div>
            </div>);
    }
}
