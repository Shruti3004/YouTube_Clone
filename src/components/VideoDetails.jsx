import React from 'react'

function VideoDetails({video}) {
    if(!video) return <div>Loading...</div>
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    console.log(videoSrc)
    return (
        <div className="container">
            <div className="embed-responsive embed-responsive-16by9 container">
            <iframe src={videoSrc} frameBorder="0" className="embed-responsive-item w-100 h-100" title="Video Player" height="100%" width="100%" allowFullScreen/>
        </div>
        <div className="card">
            <div className="card-footer">
                <h5>{video.snippet.title} || {video.snippet.channelTitle}</h5>
                <p>{video.snippet.description}</p>
            </div>
        </div>
        <br/><br/><br/>
        </div>
    )
}

export default VideoDetails
