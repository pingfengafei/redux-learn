/**
 * Created by pingfengafei on 16/7/20.
 */
import {combineReducer} from 'redux'
import {SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT, REQUEST_POSTS, RECEIVE_POSTS} from '../actions/asyncAction'


function selectedSubreddit(){

}
function posts(){

}

function postBySubreddit (){

}

const asyncReducer = combineReducer({
    selectedSubreddit,
    postBySubreddit
});

export default asyncReducer;