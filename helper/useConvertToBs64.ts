import { useState } from "react";

export const useConvertToBs64 = () => {
  const [bs64Version, setBs64Version]: any = useState("");

  const convertFile = (file: Blob) => {
    let reader = new FileReader();
    reader.onloadend = function () {
      setBs64Version(reader.result);
    };
    reader.readAsDataURL(file);
    return bs64Version;
  };

  return { convertFile };
};
