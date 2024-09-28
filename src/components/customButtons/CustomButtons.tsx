import { useContext } from "react";
import { Button } from "@mui/material";
import { FormContext } from "../form/Form";
import "./customButtons.scss";

interface ButtonProps {
    label: string;
    options: string[];
}

const CustomButtons = ({ label, options }: ButtonProps) => {
    const { formData, setFormData } = useContext(FormContext);

    const handleChange = (btn: string) => {
        if (formData && setFormData) {
            if (label === "gender") setFormData({ ...formData, gender: btn });
            if (label === "hairLength")
                setFormData({ ...formData, hairLength: btn });
            if (label === "eyeColor")
                setFormData({ ...formData, eyeColor: btn });
        }
    };

    return (
        <div className='custom-buttons'>
            {options.map((button) => (
                <Button
                    className={`custom-btn ${
                        formData && button === formData[label]
                            ? "selected-btn"
                            : "unselected-btn"
                    }`}
                    key={button}
                    variant={
                        formData && button === formData[label]
                            ? "contained"
                            : "outlined"
                    }
                    onClick={() => handleChange(button)}
                >
                    {button}
                </Button>
            ))}
        </div>
    );
};

export default CustomButtons;
