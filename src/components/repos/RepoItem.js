import React from 'react'
const RepoItem =({repo:html_url,name}) => {
    return (
        <div className="card">
            <h3>
<a href={html_url}>{repo.name}</a>
            </h3>
        </div>
    )
}


export default RepoItem;