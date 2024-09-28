import { useContext } from "react";
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
    const { formData, setFormData } = useContext(FormContext);

    const handleChange = (imageButton: string) => {
        if (formData && setFormData) {
            if (label === "beard")
                setFormData({ ...formData, beard: imageButton });
            if (label === "body")
                setFormData({ ...formData, body: imageButton });
        }
    };

    return (
        <div className='custom-buttons'>
            {options.map((option) => (
                <Button
                    key={option.value}
                    variant={
                        formData && option.value === formData[label]
                            ? "contained"
                            : "outlined"
                    }
                    onClick={() => handleChange(option.value)}
                    sx={{
                        color:
                            formData && option.value !== formData[label]
                                ? "#09f534"
                                : null,
                        backgroundColor:
                            formData && option.value === formData[label]
                                ? "#09f534"
                                : "white",
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
