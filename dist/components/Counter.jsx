import React, { useEffect, useState } from "react"

export default function Counter({ counter }) {
    // const [counter, setCounter] = useState(1)

    return (
        <>
            <div className="text-6xl font-bold pl-10 pr-10 pt-5 pb-7 ml-10 mb-5 mt-5 h-max bg-gray-900 text-gray-50 rounded-lg w-min shadow-xl">
                <div className="text-lg flex justify-center">
                    step
                </div>
                #{ counter }
            </div>
        </>
    )
}