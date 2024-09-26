import { useContext } from "react";
import { Slider } from "@mui/material";
import { FormContext } from "../form/Form";
import { green } from "../../utils/globals";
import "./customSlider.scss";

interface CustomSliderProps {
    label: string;
    min: number;
    max: number;
}

const CustomSlider = ({ label, min, max }: CustomSliderProps) => {
    const { formData, setFormData } = useContext(FormContext);

    const handleChange = (e: Event, newValue: number | number[]) => {
        if (formData && setFormData) {
            if (label === "age")
                setFormData({ ...formData, age: newValue as number });
            if (label === "height")
                setFormData({ ...formData, height: newValue as number });
        }
    };

    return (
        <div className='formSlider'>
            <span className='slider-value'>{formData && formData[label]}</span>
            <Slider
                value={formData ? (formData[label] as number) : 0}
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
                    "& .MuiSlider-thumb:focus, & .MuiSlider-thumb.Mui-focusVisible, & .MuiSlider-thumb:hover":
                        {
                            boxShadow: "none",
                        },
                    "& .MuiSlider-track": {
                        height: 8,
                        color: green,
                    },
                    "& .MuiSlider-rail": {
                        height: 8,
                        color: green,
                    },
                }}
            />
        </div>
    );
};

export default CustomSlider;
