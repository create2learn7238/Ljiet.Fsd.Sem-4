import { useContext } from "react";
import { Fname, Lname } from "./UC1"
import { redirect } from "react-router-dom";
export default function UC3() {
    var fn = useContext(Fname)
    var ln = useContext(Lname)
    return (
        <>
            <h1 style={{ color: "purple", textDecoration: "Inderline", fontSize: "50px" }}>welcome {fn}{ln}</h1>
        </>
    )
}