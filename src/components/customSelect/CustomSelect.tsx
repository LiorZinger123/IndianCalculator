import { useState, useContext } from "react";
import { FormContext } from "../form/Form";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { green, lightGreen } from "../../utils/globals";

const CustomSelect = () => {
    const { formData, setFormData } = useContext(FormContext);

    const handleChange = (e: SelectChangeEvent<string>) => {
        if (formData && setFormData)
            setFormData({ ...formData, hairColor: e.target.value });
    };

    return (
        <Select
            value={formData ? formData.hairColor : ""}
            onChange={handleChange}
            MenuProps={{
                disableScrollLock: true,
                PaperProps: {
                    sx: {
                        "& .MuiMenuItem-root": {
                            fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                            "&.Mui-selected": {
                                backgroundColor: green,
                                color: "white",
                                "&:hover": {
                                    backgroundColor: green,
                                    color: "white",
                                },
                            },
                            "&:hover": {
                                backgroundColor: green,
                                color: "white",
                            },
                        },
                    },
                },
            }}
            sx={{
                width: "85%",
                fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                ".MuiOutlinedInput-notchedOutline": {
                    borderColor: lightGreen,
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: green,
                    borderWidth: "2px",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: green,
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
