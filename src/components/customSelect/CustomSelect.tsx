import { useContext } from "react";
import { FormContext } from "../form/Form";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import "./customSelect.scss";

const CustomSelect = () => {
    const { formData, setFormData } = useContext(FormContext);

    const handleChange = (e: SelectChangeEvent<string>) => {
        if (formData && setFormData)
            setFormData({ ...formData, hairColor: e.target.value });
    };

    return (
        <Select
            className='custom-select'
            value={formData ? formData.hairColor : ""}
            onChange={handleChange}
            classes={{
                select: "custom-select",
            }}
            MenuProps={{
                slotProps: {
                    paper: {
                        className: "custom-select-paper",
                    },
                },
            }}
        >
            <MenuItem value='blonde'>Blonde</MenuItem>
            <MenuItem value='black'>Black</MenuItem>
            <MenuItem value='brown'>Brown</MenuItem>
            <MenuItem value='gray'>Gray</MenuItem>
            <MenuItem value='bald'>Bald</MenuItem>
        </Select>
    );
};

export default CustomSelect;
