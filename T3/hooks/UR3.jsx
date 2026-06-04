import { useReducer } from "react";
import img1 from "..//assets/img1.png"
import img2 from "..//assets/img2.png"

function reducer(state, action) {
    if (state == img1) {
        return img2
    }
    else {
        return img1
    }
}

function UR3() {
    const [state, dispatch] = useReducer(reducer, img1);

    return (
        <>
            <img src={state} height={100} width={100} />
            <button onClick={() => dispatch()}>Change Images</button>
        </>
    );
}

export default UR3;
