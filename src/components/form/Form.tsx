import { createContext, useState } from "react";
import FormSelect from "../formSelect/FormSelect";
import FormSlider from "../formSlider/FormSlider";
import FormButtons from "../formButtoms/FormButtons";
import ImageButtons from "../imageButtons/ImageButtons";
import { FormData, FormContextType } from "../../utils/types";
import "./form.scss";

export const FormContext = createContext<FormContextType>({
    formData: undefined,
    setFormData: () => {},
});

const Form = () => {
    const [formData, setFormData] = useState<FormData>({
        age: 14,
        height: 130,
        hairColor: "Long",
        hairLength: "long",
        eyeColor: "blue",
        beard: "none",
        body: "muscalar",
    });
    const beardsOptions = [
        { src: "https://kamelrechner.eu/img/beard-none.png", value: "none" },
        { src: "https://kamelrechner.eu/img/beard-small.png", value: "small" },
        {
            src: "https://kamelrechner.eu/img/beard-middle.png",
            value: "middle",
        },
        { src: "https://kamelrechner.eu/img/beard-full.png", value: "full" },
    ];
    const bodyOptions = [
        { src: "https://kamelrechner.eu/img/body-1.png", value: "muscular" },
        { src: "https://kamelrechner.eu/img/body-2.png", value: "skiny" },
        { src: "https://kamelrechner.eu/img/body-3.png", value: "fat" },
    ];

    return (
        <FormContext.Provider
            value={{ formData: formData, setFormData: setFormData }}
        >
            <form>
                <div className='form-row'>
                    <label>Age</label>
                    <FormSlider label='age' min={14} max={70} />
                </div>
                <div className='form-row'>
                    <label>Height</label>
                    <FormSlider label='height' min={130} max={220} />
                </div>
                <div className='form-row'>
                    <label>Hair Color</label>
                    <FormSelect />
                </div>
                <div className='form-row'>
                    <label>Hair Lenght</label>
                    <FormButtons
                        options={["long", "middle", "short", "bald"]}
                    />
                </div>
                <div className='form-row'>
                    <label>Eye Color</label>
                    <FormButtons options={["blue", "green", "brown", "gray"]} />
                </div>
                <div className='form-row'>
                    <label>Beard</label>
                    <ImageButtons options={beardsOptions} label='beard' />
                </div>
                <div className='form-row'>
                    <label>Body</label>
                    <ImageButtons options={bodyOptions} label='body' />
                </div>
                <button className='calculate-btn'>Calculate</button>
            </form>
        </FormContext.Provider>
    );
};

export default Form;
