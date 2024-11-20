import { useContext, ChangeEvent } from "react";
import { FormContext } from "../form/Form";
import "./customInput.scss";

const CustomInput = () => {
    const { formData, setFormData } = useContext(FormContext);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (formData && setFormData) {
            setFormData({
                ...formData,
                name: e.target.value,
            });
        }
    };

    return (
        <input
            type='text'
            name='name'
            value={formData?.name}
            onChange={handleChange}
            className='custom-input'
            maxLength={30}
        />
    );
};

export default CustomInput;
