import { useState, useEffect } from "react";
import * as trackService from "./services/trackService";
import TrackList from "./components/TrackList";
import TrackDetail from "./components/TrackList";
import TrackForm from './components/TrackForm'

const App = () => {
  const [tracks, setTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    async function getTracks() {
      try {
        const tracks = await trackService.index();
        console.log(tracks, " <- tracks from express server");
        setTracks(tracks); 
      } catch (err) {
        console.log(err);
      }
    }
    getTracks();
  }, []);
  
  async function handleAddTrack(dataFromTheForm){ 

    try {
      const newTrack = await trackService.create(dataFromTheForm)
      console.log(newTrack, " <-- response from the server")
      setTracks([...tracks, newTrack.data])
    } catch(err){
      console.log(err, ' <- err in handleAddTrack')
    }
  }

  return (
    <>
      <button onClick={() => setShowForm(!showForm) }>{showForm ? 'close' : 'Create Track'}</button>
      
      {showForm ?  <TrackForm handleAddTrack={handleAddTrack} /> : '' }
     
      <TrackList tracks={tracks} setSelectedTrack={setSelectedTrack} />
      <TrackDetail selectedTrack={selectedTrack} setSelectedTrack={setSelectedTrack} />
    </>
  );
};

export default App;