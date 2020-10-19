import React, { useState } from "react";
import { DropzoneArea } from "material-ui-dropzone";

const DropzoneAreaExample = () => {
    const [files, setFiles] = useState([]);
    const handleChange = (files) => {
        setFiles(files);
    };
    return <DropzoneArea onChange={handleChange} />;
};

export default DropzoneAreaExample;
