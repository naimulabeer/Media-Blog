function PhotosListItem({ photo }) {
  return (
    <div>
      <img className="h-30 w-30" src={photo.url} alt="random pic" />
    </div>
  );
}

export default PhotosListItem;
