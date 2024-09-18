import { useState, useContext } from "react";
import { FormContext } from "../form/Form";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

const FormSelect = () => {
    const [selectValue, setSelectValue] = useState("black");
    const formData = useContext(FormContext)?.formData;
    const setFormData = useContext(FormContext)?.setFormData;

    const handleChange = (e: SelectChangeEvent<string>) => {
        setSelectValue(e.target.value);

        if (formData && setFormData)
            setFormData({ ...formData, hairColor: e.target.value });
    };

    return (
        <Select
            value={selectValue}
            onChange={handleChange}
            MenuProps={{
                disableScrollLock: true,
                PaperProps: {
                    sx: {
                        "& .MuiMenuItem-root": {
                            "&.Mui-selected": {
                                backgroundColor: "lightgreen",
                                color: "white",
                                "&:hover": {
                                    backgroundColor: "#09f534",
                                    color: "#ffffff",
                                },
                            },
                            "&:hover": {
                                backgroundColor: "#09f534",
                                color: "#ffffff",
                            },
                        },
                    },
                },
            }}
            sx={{
                width: "85%",
                ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "lightgreen",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#09f534",
                    borderWidth: "2px",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#09f534",
                },
            }}
        >
            <MenuItem value='black'>Black</MenuItem>
            <MenuItem value='brown'>Brown</MenuItem>
            <MenuItem value='blonde'>Blonde</MenuItem>
            <MenuItem value='gray'>Gray</MenuItem>
            <MenuItem value='bald'>Bald</MenuItem>
        </Select>
    );
};

export default FormSelect;
