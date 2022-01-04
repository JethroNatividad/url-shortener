import React from 'react'
import { BsSun } from 'react-icons/bs'
const Header = () => {
    return (
        <div className="flex items-center px-5 py-2 justify-between">
            <h1 className="text-3xl font-bold mr-5">Url Shorten</h1>

            <div className="rounded-3xl border-2 border-black p-1">
                <BsSun className="text-2xl" />
            </div>
        </div>
    )
}

export default Header
