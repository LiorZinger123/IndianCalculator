import { ReactElement } from "react";
import "./formRow.scss";

interface FormRowProps {
    label: string;
    child: ReactElement;
}

const FormRow = ({ label, child }: FormRowProps) => {
    return (
        <div className='form-row'>
            <label>{label}</label>
            {child}
        </div>
    );
};

export default FormRow;
