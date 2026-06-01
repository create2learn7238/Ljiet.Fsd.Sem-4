import { useState } from "react";

function Counter() {
    const [text, settext] = useState("Lj united Networks");
    const [color, setcolor] = useState("red")
    const [butt, setbutt] = useState("Hide")
    const [hstext, seths] = useState("Show React JS")

    function changebutt() {
        setbutt(butt === "Show" ? "Hide" : "Show");
        seths(hstext === "Show React JS" ? "" : "Show React JS");
    }

    function changecolor() {
        setcolor(color === "red" ? "blue" : "red")


    }
    function changetext() {
        if (text == "Lj united Networks") {
            settext("Welcome Student");
        }
        else {
            settext("Lj united Networks");
        }
    }

    return (
        <>
            <button onClick={changetext}>Change text</button>
            <br />
            <button onClick={changecolor}>Change color</button>
            <br />
            <button onClick={changebutt}>{butt}</button>

            <h1 style={{ color: color }}>{text}</h1>
            <h1>{hstext}</h1>
        </>
    );
}

export default Counter;
