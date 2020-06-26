import React, {useState} from 'react';
import './App.css';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Youtube from './api/YouTube'

import SearchBar from './components/SearchBar';
import VideoDetails from './components/VideoDetails';
import VideoList from './components/VideoList';
// import {SearchBar , VideoDetails, VideoList} from './components'

function App() {
  const [videos, setVideo] = useState([])
  const [selectedVideo, setselectedVideo] = useState(null)
  const handleSubmit = async (input) => {
    const response = await Youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyCSrqHnOgK4mrqlQrH6daLROEfQVOQVL60',
        q: input
    }
  });
    console.log(response.data.items[0]);
    setVideo(response.data.items);
    setselectedVideo(response.data.items[0]);
  }
  const onVideoSelect = (video) => {
    setselectedVideo(video)
  }
  return(
    // adf8f9fe7121c0e0544bb4bf395026a8fcd0a546
    <>
      <div className="container bg-light">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <SearchBar onFormSubmit={handleSubmit}/>
          </div>
            <div className="row">
              <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                <VideoDetails video={selectedVideo} />
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                <VideoList  video={videos} onSelectVideo={onVideoSelect}/>
              </div>
            </div>
        </div>
      </div>
    </>

  )
}

export default App;

// {/* <Layout> */}
//       <Router>
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/about" component={About} />
//           <Route path="/contact" component={Contact} />
//           <Route component={NoMatch} />
//         </Switch>
//       </Router>
//     </Layout>