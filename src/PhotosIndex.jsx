export function PhotosIndex({ photos }) {
  return (
    <div>
      <h1>All photos</h1>
      {photos.map((photo) => (
        <div key={photo.id}>
          <h2>{photo.title}</h2>
          <img src={photo.image} />
          <p>Info: {photo.body}</p>
        </div>
      ))}
    </div>
  );
}
