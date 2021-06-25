import React, { useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import "./Demo.css";
import Avatar from '@material-ui/core/Avatar';


const defaultSrc =
  "https://cdn.shopify.com/s/files/1/2035/4717/products/Recommended_Photos_Samples_2_b006833d-e16e-4d55-81fd-89cd15b3c2ea_1024x1024.jpg?v=1537237621";

export const Demo: React.FC = () => {
  const [image, setImage] = useState(defaultSrc);
  const [cropData, setCropData] = useState("#");
  const [cropper, setCropper] = useState<any>();
  const onChange = (e: any) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as any);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      setCropData(cropper.getCroppedCanvas().toDataURL());
    }
  };

  return (
    <div>
      <div style={{ width: "100%" }}>
        <input type="file" onChange={onChange} />
        <br />
        <br />
        <Cropper
          style={{ height: 300, width: 300 }}
          zoomTo={0}
          autoCropArea={0}
          dragMode={'move'}
          initialAspectRatio={0}
          preview=".img-preview"
          src={image}
          viewMode={1}
          guides={true}
          minCropBoxHeight={10}
          minCropBoxWidth={10}
          responsive={true}
          zoomOnTouch={true}
          cropBoxMovable={false}
          cropBoxResizable={false}
          center={true}
          checkOrientation={true} // https://github.com/fengyuanchen/cropperjs/issues/671
          onInitialized={(instance) => {
            setCropper(instance);
          }}
        />
      </div>
      <br />
      <br />
      <div>
        {/* <div className="box" style={{ width: "50%", float: "right" }}>
          <h1>Preview</h1>
          <div
            className="img-preview"
            style={{ width: "100%", float: "left", height: "300px" }}
          />
        </div> */}
        <div
          className="box"
          style={{ width: "100%", height: "300px" }}
        >
          <h1>
            <span>Crop</span>
            <button style={{ float: "right" }} onClick={getCropData}>
              Crop Image
            </button>
          </h1>
          <Avatar alt="cropped" src={cropData} style={{height: "277px", width: "277px"}}  />
        </div>
      </div>
      <br style={{ clear: "both" }} />
    </div>
  );
};

export default Demo;
