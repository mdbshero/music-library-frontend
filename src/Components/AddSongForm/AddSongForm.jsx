const AddSongForm = (props) => {
  return (
    <div className="border">
      <form onSubmit={props.handleSubmit} className="form-inline">
        <div className=" form-group mb-2">
          <input
            className="form-control"
            type="text"
            value={props.title}
            placeholder="Title"
            onChange={(e) => props.setTitle(e.target.value)}
          />
        </div>
        <div className=" form-group mb-2">
          <input
            className="form-control"
            type="text"
            value={props.album}
            placeholder="Album"
            onChange={(e) => props.setAlbum(e.target.value)}
          />
        </div>
        <div className=" form-group mb-2">
          <input
            className="form-control"
            type="text"
            value={props.artist}
            placeholder="Artist"
            onChange={(e) => props.setArtist(e.target.value)}
          />
        </div>
        <div className=" form-group mb-2">
          <input
            className="form-control"
            type="text"
            value={props.genre}
            placeholder="Genre"
            onChange={(e) => props.setGenre(e.target.value)}
          />
        </div>
        <div className=" form-group mb-2">
          <input
            className="form-control"
            type="text"
            value={props.releaseDate}
            placeholder="Release Date DD/MM/YYYY"
            onChange={(e) => props.setReleaseDate(e.target.value)}
          />
        </div>

        <button className="btn btn-outline-success" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default AddSongForm;
