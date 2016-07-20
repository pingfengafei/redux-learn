//同步action creator
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'


export function selectSubreddit(subreddit) {
    return {
        type: SELECT_SUBREDDIT,
        subreddit
    }
}

export function invalidatesubreddit(subreddit) {
    return {
        type: INVALIDATE_SUBREDDIT,
        subreddit
    }
}

//异步action creator
//获取API
//拆分SELECT_SUBREDDIT、INVALIDATE_SUBEDDIT和REQUEST_POST很重要 : 把请求数据和特定的UI数据耦合是很不明智的
export function requestPosts(subreddit) {
    return {
        type: REQUEST_POSTS,
        subreddit
    }
}


//收到请求反馈的内容
export function receivePosts(subreddit, json) {
    return {
        type: RECEIVE_POSTS,
        subreddit,
        posts: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    }
}









