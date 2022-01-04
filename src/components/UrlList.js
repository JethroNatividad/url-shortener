import React from 'react'

const UrlList = ({ urls }) => {
    return (
        <div>
            <table>
                <tr>
                    <td>Original Url</td>
                    <td>Shortened</td>
                    <td>Visits</td>
                </tr>
                {urls.map((url, index) => (
                    <tr key={index}>
                        <td>{url.main_url}</td>
                        <td>{url.short_url}</td>
                        <td>{url.clicks}</td>
                    </tr>
                ))}

            </table>
        </div>
    )
}

export default UrlList
