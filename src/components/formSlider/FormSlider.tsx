import { useState, useContext } from "react";
import { Slider } from "@mui/material";
import { FormContext } from "../form/Form";
import "./formSlider.scss";

interface FormSliderProps {
    label: string;
    min: number;
    max: number;
}

const FormSlider = ({ label, min, max }: FormSliderProps) => {
    const [sliderValue, setSliderValue] = useState<number>(min);
    const formData = useContext(FormContext)?.formData;
    const setFormData = useContext(FormContext)?.setFormData;

    const handleChange = (e: Event, newValue: number | number[]) => {
        setSliderValue(newValue as number);

        if (formData && setFormData) {
            if (label === "age")
                setFormData({ ...formData, age: newValue as number });
            if (label === "height")
                setFormData({ ...formData, height: newValue as number });
        }
    };

    return (
        <div className='formSlider'>
            <span className='slider-value'>{sliderValue}</span>
            <Slider
                value={sliderValue}
                min={min}
                max={max}
                onChange={handleChange}
                valueLabelDisplay='off'
                sx={{
                    alignSelf: "flex-end",
                    "& .MuiSlider-thumb": {
                        width: 30,
                        height: 30,
                        color: "#f3efef",
                        outline: "none",
                        "&:active": {
                            color: "#e4e8e5",
                        },
                        "&.Mui-focusVisible": {
                            outline: "none",
                            boxShadow: "none",
                        },
                    },
                    "& .MuiSlider-track": {
                        height: 8,
                        color: "#09f534",
                    },
                    "& .MuiSlider-rail": {
                        height: 8,
                        color: "#09f534",
                    },
                }}
            />
        </div>
    );
};

export default FormSlider;
