import { INCREMENT, DECREMENT } from '../actions/counterAction'

export function counter(state = { count: 0, text: '加减器' }, action) {
    var count = state.count;
    console.log('action is', action);
    switch (action.type) {
        case INCREMENT:
            return { count: ++count, text: action.text };
        case DECREMENT:
            return { count: --count, text: action.text };
        default:
            return state;
    }
}

