"use client";

import React, { useState } from "react";

export default function UploadPage() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [audioPreview, setAudioPreview] = useState<string | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleAudioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAudioPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setVideoPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <>
      <h2>Upload Media</h2>
      <div className="mb-3">
        <label htmlFor="imageUpload" className="form-label">
          Upload Image
        </label>
        <input
          type="file"
          id="imageUpload"
          accept="image/*"
          className="form-control"
          onChange={handleImageChange}
        />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Image Preview"
            className="img-thumbnail mt-2"
            style={{ maxWidth: "300px" }}
          />
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="audioUpload" className="form-label">
          Upload Audio
        </label>
        <input
          type="file"
          id="audioUpload"
          accept="audio/*"
          className="form-control"
          onChange={handleAudioChange}
        />
        {audioPreview && (
          <audio controls className="mt-2" style={{ width: "300px" }}>
            <source src={audioPreview} />
            Your browser does not support the audio element.
          </audio>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="videoUpload" className="form-label">
          Upload Video
        </label>
        <input
          type="file"
          id="videoUpload"
          accept="video/*"
          className="form-control"
          onChange={handleVideoChange}
        />
        {videoPreview && (
          <video controls className="mt-2" style={{ maxWidth: "300px" }}>
            <source src={videoPreview} />
            Your browser does not support the video element.
          </video>
        )}
      </div>
    </>
  );
}
