import { FormData } from "./types";

export const calculate = (formData: FormData): number => {
    const {
        name,
        gender,
        age,
        height,
        hairColor,
        hairLength,
        eyeColor,
        beard,
        body,
    } = formData;
    let result: number = 0;

    if (
        name.toLowerCase().includes("eliran") ||
        name.toLowerCase().includes("maayan")
    ) {
        return 2;
    }

    if (gender === "male") result += 12;
    else if (gender === "female") result += 11;
    else result += 10;

    if (age < 18) {
        result += 7;
    } else if (age >= 18 && age <= 30) {
        result += 13;
    } else if (age > 30 && age <= 50) result += 11;
    else result += 9;

    if (height < 150) result += 8;
    else if (height >= 150 && height < 170) result += 10;
    else if (height >= 170 && height < 190) result += 14;
    else result += 12;

    if (hairColor === "blonde") result += 7;
    else if (hairColor === "brown") result += 6;
    else if (hairColor === "black") result += 5;
    else if (hairColor === "gray") result += 4;
    else result += 3;

    if (hairLength === "long") result += 6;
    else if (hairLength === "middle") result += 5;
    else if (hairLength === "short") result += 4;
    else result += 3;

    if (eyeColor === "blue") result += 7;
    else if (eyeColor === "green") result += 6;
    else if (eyeColor === "brown") result += 5;
    else result += 4;

    if (beard === "full") result += 7;
    else if (beard === "middle") result += 6;
    else if (beard === "small") result += 5;
    else result += 3;

    if (body === "miscular") result += 8;
    else if (body === "skinny") result += 6;
    else result += 4;

    return result;
};
