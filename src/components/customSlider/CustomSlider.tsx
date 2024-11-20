import { useContext } from "react";
import { Slider } from "@mui/material";
import { FormContext } from "../form/Form";
import "./customSlider.scss";

interface CustomSliderProps {
    label: string;
    min: number;
    max: number;
}

const CustomSlider = ({ label, min, max }: CustomSliderProps) => {
    const { formData, setFormData } = useContext(FormContext);

    const handleChange = (_: Event, newValue: number | number[]) => {
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
                className='custom-slider'
                value={formData ? (formData[label] as number) : 0}
                min={min}
                max={max}
                onChange={handleChange}
            />
        </div>
    );
};

export default CustomSlider;
