import React, { useState, createContext } from 'react';
import { Dialog } from '@mui/material';
import FormRow from '../formRow/FormRow';
import CustomInput from '../customInput/CustomInput';
import CustomSelect from '../customSelect/CustomSelect';
import CustomSlider from '../customSlider/CustomSlider';
import ImageButtons from '../imageButtons/ImageButtons';
import CustomButtons from '../customButtons/CustomButtons';
import CalculateIndians from '../calculateIndians/CalculateIndians';
import { calculate } from '../../utils/helper';
import { defaultFormData } from '../../utils/globals';
import { FormData, FormContextType } from '../../utils/types';
import './form.scss';

export const FormContext = createContext<FormContextType>({
    formData: undefined,
    setFormData: () => {},
});

const Form = () => {
    const [formData, setFormData] = useState<FormData>(defaultFormData);
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    const [result, setResult] = useState<number>(0);
    const beardsOptions = [
        { src: 'https://kamelrechner.eu/img/beard-none.png', value: 'none' },
        { src: 'https://kamelrechner.eu/img/beard-small.png', value: 'small' },
        {
            src: 'https://kamelrechner.eu/img/beard-middle.png',
            value: 'middle',
        },
        { src: 'https://kamelrechner.eu/img/beard-full.png', value: 'full' },
    ];
    const bodyOptions = [
        { src: 'https://kamelrechner.eu/img/body-1.png', value: 'muscular' },
        { src: 'https://kamelrechner.eu/img/body-2.png', value: 'skiny' },
        { src: 'https://kamelrechner.eu/img/body-3.png', value: 'fat' },
    ];

    const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setOpenDialog(true);
        setResult(calculate(formData));
    };

    const closeDialog = () => {
        setOpenDialog(false);
        setFormData(defaultFormData);
    };

    const handleReset = () => {
        setOpenDialog(false);
        setFormData(defaultFormData);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <FormContext.Provider
            value={{ formData: formData, setFormData: setFormData }}
        >
            <form onSubmit={handleClick}>
                <h1>Indians Calculator</h1>
                <FormRow label='Name' child={<CustomInput />} />
                <FormRow
                    label='Gender'
                    child={
                        <CustomButtons
                            label='gender'
                            options={['male', 'female', 'other']}
                        />
                    }
                />
                <FormRow
                    label='Age'
                    child={<CustomSlider label='age' min={14} max={70} />}
                />
                <FormRow
                    label='Height'
                    child={<CustomSlider label='height' min={130} max={220} />}
                />
                <FormRow label='Hair Color' child={<CustomSelect />} />
                <FormRow
                    label='Hair Length'
                    child={
                        <CustomButtons
                            label='hairLength'
                            options={['long', 'middle', 'short', 'bald']}
                        />
                    }
                />
                <FormRow
                    label='Eye Color'
                    child={
                        <CustomButtons
                            label='eyeColor'
                            options={['blue', 'green', 'brown', 'black']}
                        />
                    }
                />
                <FormRow
                    label='Beard'
                    child={
                        <ImageButtons options={beardsOptions} label='beard' />
                    }
                />
                <FormRow
                    label='Body'
                    child={<ImageButtons options={bodyOptions} label='body' />}
                />
                <button className='form-btn'>Calculate</button>
            </form>
            <Dialog
                open={openDialog}
                fullWidth={true}
                maxWidth={false}
                onClose={closeDialog}
                className='form-dialog'
            >
                <CalculateIndians
                    result={result}
                    handleReset={handleReset}
                    setOpenDialog={setOpenDialog}
                />
            </Dialog>
        </FormContext.Provider>
    );
};

export default Form;
