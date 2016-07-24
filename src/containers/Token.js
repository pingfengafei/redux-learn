/**
 * Created by pingfengafei on 16/7/22.
 */

import GetToken from '../components/token/getToken';
import React, {Component, PropTypes} from 'react';
import ShowToken from '../components/token/showToken';
import tokenAction from '../actions/tokenAction';
import {connect} from 'react-redux'; //rember {}

class Token extends Component {
    render() {
        return (<div>
            <GetToken  getToken={this.props.getToken}/>
            <ShowToken text={this.props.text} status={this.props.status} />
        </div>);
    }
}
;


function mapStateToProps(state) {
    console.log(state);
    return ({text: state.tokenReducer.text, status: state.tokenReducer.status});
}

function mapDispatchToProps(dispatch) {
    return {
        getToken: (username, password) => dispatch(tokenAction.getToken(username, password))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Token);
