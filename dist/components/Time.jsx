import { useState, useEffect } from "react";

export default function Time() {
    const [showTime, setShowTime] = useState("");

    useEffect(() => {
        const currentTime = new Date();
        setShowTime(currentTime.toLocaleString());
    }, []);

    return (
        <>
            <div className="m-auto w-2/4 text-center border-gray-800 text-white border-t-2 mt-14">
            </div>
            <h3 className="text-gray-500 text-lg text-center my-10 mx-10 text-sm pb-10">
                Flow rendered on <strong>{ showTime }</strong>
            </h3>
        </>
    )
}