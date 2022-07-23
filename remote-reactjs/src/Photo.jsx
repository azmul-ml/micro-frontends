import React, { useState, useEffect } from "react";

export default () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_page=1&_limit=8")
      .then((response) => response.json())
      .then((photos) => setPhotos(photos));
  }, []);

  return (
    <>
      <h1>Photo List</h1>
      <div class="grid grid-cols-4 gap-4">
      {photos.map((photo) => (
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img
              className="rounded-t-lg"
              src={photo.url}
              alt={photo.title}
            />
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {photo.title}
              </h5>
            </a>
          </div>
        </div>
      ))}
      </div>
    </>
  );
};
