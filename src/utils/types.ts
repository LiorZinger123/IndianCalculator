import React from "react";

export interface FormData {
    gender: string;
    age: number;
    height: number;
    hairColor: string;
    hairLength: string;
    eyeColor: string;
    beard: string;
    body: string;
    [key: string]: string | number | undefined;
}

export interface FormContextType {
    formData: FormData | undefined;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

export interface ImageButton {
    src: string;
    value: string;
}
