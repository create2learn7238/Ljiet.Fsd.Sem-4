import { createContext } from "react"; // FIXED: Changed useContext to createContext
import UC13 from "./UC13";

// Create and export the context
export var color = createContext(); 

export default function UC12() {
    return (
        // FIXED: Capitalized Provider
        <color.Provider value="red"> 
            <UC13 />
        </color.Provider>
    );
}
