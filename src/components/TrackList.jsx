export default function TrackList(props) {
    return (
      <>
        {
            props.tracks?.map((track, index) => (
                <div key={index}>
                    <h1>{track.title}</h1>
                    <h2>Artist: {track.artist}</h2>
                    <button onClick={() => props.setSelectedTrack(null)}>Close</button>
                </div>
            ))
        }
      </>
    );
  }
  