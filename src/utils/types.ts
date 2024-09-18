import React from "react";

export interface FormData {
    age: number;
    height: number;
    hairColor: string;
    hairLength: string;
    eyeColor: string;
    beard: string;
    body: string;
}

export interface FormContextType {
    formData: FormData | undefined;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

export interface ImageButton {
    src: string;
    value: string;
}
