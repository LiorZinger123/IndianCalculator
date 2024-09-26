import { useRef, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./calculateIndians.scss";

interface CalculateIndiansProps {
    result: number;
    handleReset: () => void;
    setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

const CalculateIndians = ({
    result,
    handleReset,
    setOpenDialog,
}: CalculateIndiansProps) => {
    const resultRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        if (resultRef.current) {
            if (!resultRef.current.classList.contains("animate")) {
                resultRef.current.style.setProperty("--result", `${result}`);
                resultRef.current.classList.add("animate");
            }
        }
    }, []);

    return (
        <div className='result-dialog'>
            <h1>congratulations</h1>
            <div>
                {/* <span>Your value is: </span> */}
                <span className='result' ref={resultRef}></span>
                {/* <Slider value /> */}
            </div>
            <button className='custom-btn' onClick={handleReset}>
                Reset
            </button>
            <CloseIcon
                className='close-icon'
                onClick={() => setOpenDialog(false)}
            />
        </div>
    );
};

export default CalculateIndians;
