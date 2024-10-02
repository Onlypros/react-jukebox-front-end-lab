import { useState } from "react";

export default function TrackForm(props) {
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