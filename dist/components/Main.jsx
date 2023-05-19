import React, { useEffect, useState } from "react"
import Upload from "./Upload"
import Counter from "./Counter"


export default function Main() {


    return (
        <>
        <div className="flex">
            <Counter />
            <Upload />
        </div>
        <textarea
            className="textarea data ml-10 text-gray-950"
            id="base64MD"
            cols="150"
            rows="4"
            placeholder="Type your description here">
        </textarea>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded ml-10">
            Add/Modify text caption
        </button>

        <br />

        <button className="add-next-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded ml-10">
            Add next screenshot
        </button>

        <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 border border-green-700 rounded m-10">
            Finish and export BugFlow
        </button>
        </>
    )
}