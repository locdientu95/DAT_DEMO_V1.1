import React, { useEffect, useState } from "react";
import axios from "axios";
function ImageUpload(props) {
  const [image, setImage] = useState();
  const [size, setSize] = useState();
  const [allImage, setAllImage] = useState([]);
  const convertToBase64 = (e) => {
    console.log(e.target.files[0].size);
    var reader = new FileReader();
    if (e.target.files[0].size < 80000 && e.target.files[0].size > 0) {
      console.log(e.target.files[0].size);
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        console.log(reader.result);
        setImage(reader.result);
        setSize(e.target.files[0].size);
      };
    } else {
      console.log(e.target.files[0].size);
      alert("File nặng quá bồ");
      setSize(e.target.files[0].size);
      reader.onerror = (error) => {
        console.log("Error", error);
      };
    }
  };

  const handleUpload = () => {
    if (size < 80000 && size > 0) {
      axios.post(
        process.env.REACT_APP_API_URL + "/image/uploads",
        { base64: image },
        { credential: true },
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      alert("Uploaded");
    } else {
      alert("Nặng lắm, không up đâu");
    }
  };

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/image/getimg", {
        credential: true,
      })
      .then((res) => {
        setAllImage(res.data.data);
      });
  }, [allImage]);

  return (
    <div>
      <input accept="image/+" type="file" onChange={convertToBase64} />
      <button onClick={handleUpload}>Upload</button>
      <br />
      {allImage.map((data) => {
        return <img src={data.image} alt="" />;
      })}
    </div>
  );
}

export default ImageUpload;
