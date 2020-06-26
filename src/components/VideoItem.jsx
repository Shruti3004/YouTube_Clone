import React from 'react'

function VideoItem({video, onSelectVideo}) {
    return (
        <div className="container" onClick={() => onSelectVideo(video)}>
            <img src={video.snippet.thumbnails.medium.url} alt="" className="img-fluid w-100"/>
            <div className="card">
                <div className="card-body">
                    {video.snippet.title}
                    {video.snippet.description}
                </div>
            </div>
            <br/>
        </div>
    )
}

export default VideoItem
