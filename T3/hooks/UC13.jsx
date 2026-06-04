import { useContext } from "react";
import { num } from "./UC11";
import { color } from "./UC12";

export default function UC13() {
    const numData = useContext(num);
    const textColor = useContext(color);

    return (
        <>
            <h1 style={{ color: textColor }}>
                {numData.n1} * {numData.n2} / {numData.n3} = {(numData.n1 * numData.n2) / numData.n3}
            </h1>
        </>
    );
}
