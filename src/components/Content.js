import React from 'react'
import { isWebUri } from 'valid-url'
import { AiOutlineLink } from 'react-icons/ai'
const Content = ({ shortenUrl }) => {
    const [input, setInput] = React.useState("");
    const [urlError, setUrlError] = React.useState({ error: false, message: '' });
    const handleInputChange = (e) => {
        if (isWebUri(e.currentTarget.value) || e.currentTarget.value === "") {
            setInput(e.currentTarget.value)
            // shortenUrl(input)
            setUrlError({ error: false, message: '' })
        } else {
            setInput(e.currentTarget.value)
            setUrlError({ error: true, message: 'Invalid URL' })
        }
    }
    const handleSumbit = (e) => {
        e.preventDefault()
        if (!urlError.error) {
            shortenUrl(input)
            setInput("")
        }
    }
    return (
        <div className="flex flex-col items-center mt-48 px-[5%]">
            <div>
                <h1 className="font-bold text-4xl md:text-5xl text-violet-900 dark:text-gray-200">Create Short Links!</h1>
                <p className="text-center mt-5 dark:text-offWhite-100">free URL shortener tool</p>
            </div>
            <div className="mt-10 w-full md:w-[600px] h-35 md:h-40 rounded-2xl px-5 py-6 md:py-10 shadow-gray-400 shadow-lg dark:shadow-sm bg-white dark:bg-gray-600 dark:shadow-gray-600">
                <form onSubmit={handleSumbit} className="bg-gray-100 flex p-3 rounded-xl items-center dark:bg-gray-300 ">
                    <AiOutlineLink className="text-2xl mr-2 text-gray-400 dark:text-black" />
                    <input value={input} onChange={handleInputChange} className={`outline-none bg-transparent flex-1 text-lg md:text-xl dark:placeholder-black ${urlError.error && "text-red-600"}`} placeholder="Paste link to shorten it" />
                    <button type="submit" className="w-20 bg-gradient-to-l from-violet-600 to-violet-400 rounded-lg dark:from-black dark:to-black px-3 py-2 text-gray-100 shadow-gray-400 shadow-lg">Shorten</button>
                </form>
                <p className="text-center text-red-600 text-sm mt-2 h-5">{urlError.error && urlError.message}</p>

            </div>
        </div>
    )
}

export default Content
