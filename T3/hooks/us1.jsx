import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(20);
    const [message, setMessage] = useState("");

    function increment() {
        if (count >= 50) {
            setMessage("Limit completed upto 50");
        } else {
            setCount(prevCount => prevCount + 1);
            setMessage(""); // Clear message on valid move
        }
    }

    function decrement() {
        if (count <= 0) {
            setMessage("Negative numbers are not allowed");
        } else {
            setCount(prevCount => prevCount - 1);
            setMessage(""); // Clear message on valid move
        }
    }

    return (
        <>
            <h1>useState Example</h1>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
            <h2>Count: {count}</h2>
            {message && <p style={{ color: "red", fontWeight: "bold" }}>{message}</p>}
        </>
    );
}

export default Counter;
