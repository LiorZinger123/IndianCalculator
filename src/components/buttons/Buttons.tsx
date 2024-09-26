import { useContext } from "react";
import { Button } from "@mui/material";
import { FormContext } from "../form/Form";
import { green } from "../../utils/globals";

interface ButtonProps {
    label: string;
    options: string[];
}

const Buttons = ({ label, options }: ButtonProps) => {
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
        <div className='buttons'>
            {options.map((button) => (
                <Button
                    key={button}
                    variant={
                        formData && button === formData[label]
                            ? "contained"
                            : "outlined"
                    }
                    onClick={() => handleChange(button)}
                    sx={{
                        width: "20%",
                        color:
                            formData && button === formData[label]
                                ? "white"
                                : green,
                        backgroundColor:
                            formData && button === formData[label]
                                ? green
                                : "white",
                        borderColor: green,
                    }}
                >
                    {button}
                </Button>
            ))}
        </div>
    );
};

export default Buttons;
