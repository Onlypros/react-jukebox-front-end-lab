import { useState } from "react";
import {useNavigate} from "react-router-dom"

export default function TrackForm(props) {
    let navigate = useNavigate()
    const [formData, setFormData] = useState({
    title: "",
    artist: "",
  });

  function handleChange(e) {

	setFormData({
		...formData,
		[e.target.name]: e.target.value
	})
  }

  async function handleSubmit(e) {
    e.preventDefault(); 
  
    await props.handleAddTrack(formData); 
    setFormData({
      title: "",
      artist: "",
    });
    navigate("/")
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title"> Title </label>
      <input
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <label htmlFor="artist"> Artist </label>
      <input
        id="artist"
        name="artist"
        value={formData.artist}
        onChange={handleChange}
      />
      <button type="submit">Add New Track</button>
    </form>
  );
}