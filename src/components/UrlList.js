import React from 'react'

const UrlList = ({ urls }) => {
    return (
        <div className="flex justify-center mt-14 ">
            <table className="w-full md:w-[600px] border-collapse overflow-hidden ">
                <tr>
                    <td className="tableHead">Original Url</td>
                    <td className="tableHead">Shortened</td>
                    <td className="tableHead">Visits</td>
                </tr>
                {urls.map((url, index) => (
                    <tr key={index} className='bg-white dark:bg-gray-600 dark:text-offWhite-100 shadow-sm shadow-gray-400 dark:shadow-gray-600 select-text'>
                        <td className="tableLink"><a href={url.main_url} target="_blank" rel="noreferrer">{url.main_url}</a></td>
                        <td className="tableLink"><a href={url.short_url} target="_blank" rel="noreferrer">{url.short_url}</a></td>
                        <td className="px-3 py-1">{url.clicks}</td>
                    </tr>
                ))}

            </table>
        </div>
    )
}

export default UrlList
