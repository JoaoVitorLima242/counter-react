import { createStore } from 'redux';

const ReducerFunction = (state={ counter: 0 }, action) => {
    return state
}

const store = createStore(ReducerFunction);

export default store