import { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return state + 200;
        case "DECREMENT":
            return state - 2;
        default:
            return state;
    }
}

function UR2() {
    const [state, dispatch] = useReducer(reducer, 50);

    return (
        <>
            <h1>{state}</h1>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>
                Increment
            </button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>
                Decrement
            </button>
        </>
    );
}

export default UR2;
