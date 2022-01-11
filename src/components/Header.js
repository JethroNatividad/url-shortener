import React, { useContext } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'
import { AppContext } from '../context';
const Header = () => {
    const { darkMode, toggleDarkMode } = useContext(AppContext);
    return (
        <div className="flex items-center px-5 py-2 justify-between">
            <h1 className="text-3xl font-bold mr-5 dark:text-gray-200">Url Shorten</h1>

            <div className="rounded-3xl border-2 border-black p-1 dark:border-white dark:text-white" onClick={toggleDarkMode} >
                {darkMode ? <BsSun className="text-2xl" /> : <BsMoon className="text-2xl" />}
                {/* <BsMoon className="text-2xl" /> */}
            </div>
        </div>
    )
}

export default Header
