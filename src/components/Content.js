import React from 'react'
import { AiOutlineLink } from 'react-icons/ai'
const Content = ({ shortenUrl }) => {

    return (
        <div className="flex flex-col items-center mt-48">
            <div>
                <h1 className="font-bold text-5xl text-violet-900">Create Short Links!</h1>
                <p className="text-center mt-5">free URL shortener tool</p>
            </div>
            <div className="mt-10 w-1/3 h-40 rounded-2xl px-5 py-10 shadow-gray-400 shadow-lg bg-white">
                <div className="bg-gray-100 flex p-3 rounded-xl items-center">
                    <AiOutlineLink className="text-2xl mr-2 text-gray-400" />
                    <input className="outline-none bg-transparent flex-1 text-xl" placeholder="Paste link to shorten it" />
                    <button type="button" className="w-20 bg-gradient-to-l from-violet-600 to-violet-400 rounded-lg px-3 py-2 text-gray-100 shadow-gray-400 shadow-lg">Shorten</button>
                </div>
            </div>
        </div>
    )
}

export default Content
