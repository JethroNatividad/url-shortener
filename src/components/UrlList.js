import React from 'react'

const UrlList = ({ urls }) => {
    return (
        <div className="flex justify-center mt-14">
            <table className="w-1/3">
                <tr>
                    <td className="px-3 py-1 text-gray-500">Original Url</td>
                    <td className="px-3 py-1 text-gray-500">Shortened</td>
                    <td className="px-3 py-1 text-gray-500">Visits</td>
                </tr>
                {urls.map((url, index) => (
                    <tr key={index} className='bg-white shadow-sm shadow-gray-400'>
                        <td className="px-3 py-1 text-blue-800 hover:underline"><a href={url.main_url} target="_blank">{url.main_url}</a></td>
                        <td className="px-3 py-1 text-blue-800 hover:underline"><a href={url.short_url} target="_blank">{url.short_url}</a></td>
                        <td className="px-3 py-1">{url.clicks}</td>
                    </tr>
                ))}

            </table>
        </div>
    )
}

export default UrlList
