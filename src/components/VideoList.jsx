import React from 'react'
import VideoItem from './VideoItem'

function VideoList({video, onSelectVideo}) {
    const listOfVideos = video.map((vid, id) => <VideoItem key={id} video={vid} onSelectVideo={onSelectVideo}/>)
    return (
        <div className="container">
            {listOfVideos}
        </div>
    )
}

export default VideoList
