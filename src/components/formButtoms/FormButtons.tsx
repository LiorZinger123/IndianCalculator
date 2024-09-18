import { useState, useContext } from "react";
import { Button } from "@mui/material";
import { FormContext } from "../form/Form";

const FormButtons = ({ options }: { options: string[] }) => {
    const [chosenBtn, setChosenBtn] = useState(options[0]);
    const formData = useContext(FormContext)?.formData;
    const setFormData = useContext(FormContext)?.setFormData;

    const handleChange = (btn: string) => {
        setChosenBtn(btn);

        if (formData && setFormData)
            setFormData({ ...formData, hairLength: btn });
    };

    return (
        <div className='buttons'>
            {options.map((button) => (
                <Button
                    key={button}
                    variant={button === chosenBtn ? "contained" : "outlined"}
                    onClick={() => handleChange(button)}
                    sx={{
                        width: "20%",
                        color: button === chosenBtn ? "white" : "#09f534",
                        backgroundColor:
                            button === chosenBtn ? "#09f534" : "white",
                        borderColor: "#09f534",
                    }}
                >
                    {button}
                </Button>
            ))}
        </div>
    );
};

export default FormButtons;
