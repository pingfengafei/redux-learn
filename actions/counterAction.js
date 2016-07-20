//action类型
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

//action create function
let CounterAction = {
    increase(text) {
        console.log(text);
        return {
            type: INCREMENT,
            text
        }
    },
    decrease(text) {
        return {
            type: DECREMENT,
            text
        }
    }
};

export default CounterAction
