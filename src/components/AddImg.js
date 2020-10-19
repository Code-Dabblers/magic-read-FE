import React, { useState } from "react";
import { DropzoneDialog } from "material-ui-dropzone";
import { Button } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const DropzoneDialogExample = () => {
    const [state, setState] = useState({ open: false, files: [] });

    const handleClose = () => {
        setState({
            open: false,
        });
    };

    const handleSave = (files) => {
        //Saving files to state for further use and closing Modal.
        setState({
            files: files,
            open: false,
        });
    };

    const handleOpen = () => {
        setState({
            open: true,
        });
    };

    return (
        <div>
            <Button
                onClick={handleOpen}
                // onMouseLeave={rechangeBackground}
                variant="contained"
                color="default"
                style={{
                    marginTop: "1.5rem",
                    color: " rgb(255 255 255 / 87%)",
                    backgroundColor: " #3f51b5",
                }}
                startIcon={<CloudUploadIcon />}
            >
                Add Image
            </Button>
            <DropzoneDialog
                open={state.open}
                onSave={handleSave}
                acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
                showPreviews={true}
                maxFileSize={5000000}
                onClose={handleClose}
            />
        </div>
    );
};

export default DropzoneDialogExample;
