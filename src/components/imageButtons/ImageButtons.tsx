import { useState, useContext } from "react";
import { Button } from "@mui/material";
import { FormContext } from "../form/Form";
import { ImageButton } from "../../utils/types";

const ImageButtons = ({
    options,
    label,
}: {
    options: ImageButton[];
    label: string;
}) => {
    const [imageButton, setImageButton] = useState(options[0].value);
    const formData = useContext(FormContext)?.formData;
    const setFormData = useContext(FormContext)?.setFormData;

    const handleChange = (imageButton: string) => {
        setImageButton(imageButton);

        if (formData && setFormData) {
            if (label === "beard")
                setFormData({ ...formData, beard: imageButton });
            if (label === "body")
                setFormData({ ...formData, body: imageButton });
        }
    };

    return (
        <div className='buttons'>
            {options.map((option) => (
                <Button
                    key={option.value}
                    variant={
                        option.value === imageButton ? "contained" : "outlined"
                    }
                    onClick={() => handleChange(option.value)}
                    sx={{
                        color: option.value !== imageButton ? "#09f534" : null,
                        backgroundColor:
                            option.value === imageButton ? "#09f534" : "white",
                        borderColor: "#09f534",
                    }}
                >
                    <img src={option.src} alt={`${option.value} beard`} />
                </Button>
            ))}
        </div>
    );
};

export default ImageButtons;
