import React, { useState,useEffect } from 'react';
import { useContext } from 'react';
import Tesseract from 'tesseract.js';
import { RiImageEditFill } from "react-icons/ri";
import { Context } from "../context/Context";
const ImageUploader = ({setInput}) => {



	const {
		selectedImage,
		setSelectedImage
	} = useContext(Context);
 
  const handleImageUpload = (event) => {
    const image = event.target.files[0];
    setSelectedImage(URL.createObjectURL(image));
  };


  useEffect(() => {
    const recognizeText = async () => {
      if (selectedImage) {
        const result = await Tesseract.recognize(selectedImage);
    
        setInput(result.data.text);
      }
    };
    recognizeText();
  }, [selectedImage]);


  return (
    <div>

      <label for="file-upload" class="custom-file-upload">
      <RiImageEditFill />
      </label>
      
      <input id="file-upload" type="file" accept="image/*" onChange={handleImageUpload} />
      
      {selectedImage && <img src={selectedImage} alt="Selected" />}

    </div>
  );
};
export default ImageUploader;