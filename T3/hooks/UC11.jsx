import { createContext } from "react";
import UC12 from "./UC12";

// Create and export the context
export var num = createContext();

export default function UC1() {
    return (
        <num.Provider value={{ n1: 5, n2: 4, n3: 2 }}>
            <UC12 />
        </num.Provider>
    );
}
