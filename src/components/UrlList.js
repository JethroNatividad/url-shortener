import React from 'react'

const UrlList = ({ urls }) => {
    return (
        <div className="flex flex-col items-center mt-14 px-[5%]">
            <table className="w-full text-sm  md:text-lg md:w-[600px] border-collapse  table-fixed ">
                <thead>
                    <tr>
                        <th className="tableHead w-[60%]">Original Url</th>
                        <th className="tableHead w-[20%]">Shortened</th>
                        <th className="tableHead w-[20%]">Visits</th>
                    </tr>
                </thead>
                <tbody>
                    {urls.map((url, index) => (
                        <tr key={index} className='bg-white dark:bg-gray-600 dark:text-offWhite-100 shadow-sm shadow-gray-400 dark:shadow-gray-600 select-text'>
                            <td className="tableLink break-words">
                                <a href={url.main_url} target="_blank" rel="noreferrer">{url.main_url}</a>
                            </td>
                            <td className="tableLink"><a href={url.short_url} target="_blank" rel="noreferrer">{url.short_url}</a></td>
                            <td className="px-3 py-1">{url.clicks}</td>
                        </tr>
                    ))}
                </tbody>

            </table>


            {/* <div className="w-full md:w-[600px]">
                <div className="flex">
                    <p className="tableHead">Original Url</p>
                    <p className="tableHead">Shortened</p>
                    <p className="tableHead">Visits</p>
                </div>
                <div className="">
                    {urls.map((url, index) => (
                        <div key={index} className='flex bg-white dark:bg-gray-600 dark:text-offWhite-100 shadow-sm shadow-gray-400 dark:shadow-gray-600 select-text '>
                            <div className="tableLink whitespace-pre-wrap"><a href={url.main_url} target="_blank" rel="noreferrer">{url.main_url}</a></div>
                            <div className="tableLink"><a href={url.short_url} target="_blank" rel="noreferrer">{url.short_url}</a></div>
                            <div className="px-3 py-1">{url.clicks}</div>
                        </div>
                    ))}
                </div>
            </div> */}
        </div>
    )
}

export default UrlList
