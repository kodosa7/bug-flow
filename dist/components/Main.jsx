import React, { useEffect, useState } from "react";
import Upload from "./Upload";
import Counter from "./Counter";
import Buttons from "./Buttons";


export default function Main() {
    const [counter, setCounter] = useState(1);

    const handleAddNextStep = () => {
        setCounter((prevCounter) => prevCounter + 1);
    };

    return (
        <>
            <div className="item-container flex">
                <Counter counter={ counter }/>
                <Upload />
            </div>
            <Buttons handleAddNextStep={ handleAddNextStep }/>
        </>
    )
}