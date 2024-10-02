export default function Home(props) {
    const trackJsx = props.trackList.map((track) => {
      return (
        <a key={track._id} onClick={() => props.setSelectedTrack(track)}>
          <li>{track.title}</li>
        </a>
      );
    });
  
    return (
      <>
        <h1>Track List</h1>
        {!props.trackList.length ? <h2>No Tracks Yet</h2> : <ul>{trackJsx}</ul>}
      </>
    );
  }
  