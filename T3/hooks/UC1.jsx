import { createContext } from "react"
import UC2 from "./UC2"
var Fname = createContext()
export var Lname = createContext()
export default function UC1() {
    return (
        <>
            <Fname.Provider value={"Dixit"}>
                <Lname.Provider value={"Patel"}>
                    <UC2 />

                </Lname.Provider>
            </Fname.Provider>


        </>
    )
} export { Fname }