import { useRef, useState } from "react";

function ImageUploader() {
  const [previewSrc, setPreviewSrc] = useState('');
  const fileInputRef = useRef(null);

  const handleEvent = (event: any) => {
    if (event.type != "load") return 
      
    setPreviewSrc(event.target.result);
  };

  const addListeners = (reader: FileReader) => {
    reader.addEventListener("load", handleEvent);
  };

  const handleChange = (e: any) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      addListeners(reader);
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div>
      <input 
        type="file" 
        onChange={handleChange}
        ref={fileInputRef}
      />
      <img className="preview" src={previewSrc} alt="Preview" />
    </div>
  );
}

export default ImageUploader;