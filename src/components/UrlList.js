import React from 'react'

const UrlList = ({ urls }) => {
    return (
        <div className="flex justify-center mt-14 ">
            <table className="w-1/3 border-collapse overflow-hidden ">
                <tr>
                    <td className="px-3 py-1 text-gray-500 dark:text-offWhite-100">Original Url</td>
                    <td className="px-3 py-1 text-gray-500 dark:text-offWhite-100">Shortened</td>
                    <td className="px-3 py-1 text-gray-500 dark:text-offWhite-100">Visits</td>
                </tr>
                {urls.map((url, index) => (
                    <tr key={index} className='bg-white dark:bg-gray-600 dark:text-offWhite-100 shadow-sm shadow-gray-400 dark:shadow-gray-600'>
                        <td className="px-3 py-1 text-blue-800 dark:text-blue-200 hover:underline"><a href={url.main_url} target="_blank" rel="noreferrer">{url.main_url}</a></td>
                        <td className="px-3 py-1 text-blue-800 dark:text-blue-200 hover:underline"><a href={url.short_url} target="_blank" rel="noreferrer">{url.short_url}</a></td>
                        <td className="px-3 py-1">{url.clicks}</td>
                    </tr>
                ))}

            </table>
        </div>
    )
}

export default UrlList
