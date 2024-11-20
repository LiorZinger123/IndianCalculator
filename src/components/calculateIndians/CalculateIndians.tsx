import { useState, useRef, useEffect } from "react";
import Slider from "@mui/material/Slider";
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
    const [sliderValue, setSliderValue] = useState<number>(0);
    const resultRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        const duration = 2000;
        const interval = 50;
        const totalSteps = duration / interval;
        const increment = result / totalSteps;

        let currentStep = 0;
        const intervalId = setInterval(() => {
            if (currentStep < totalSteps) {
                setSliderValue((prevValue) =>
                    Number(Math.min(prevValue + increment, result).toFixed(2)),
                );
                currentStep++;
            } else {
                clearInterval(intervalId);
            }
        }, interval);

        if (resultRef.current) {
            if (!resultRef.current.classList.contains("animate")) {
                resultRef.current.style.setProperty("--result", `${result}`);
                resultRef.current.classList.add("animate");
            }
        }

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className='form-dialog-div'>
            <h1>
                {sliderValue !== result ? "Calculating..." : "Final Result:"}
            </h1>
            <div className='dialog-slider-div'>
                <span className='result' ref={resultRef} />
                <Slider
                    className='custom-slider dialog-slider'
                    value={sliderValue}
                    min={0}
                    max={100}
                    disabled
                />
            </div>
            <button className='form-btn' onClick={handleReset}>
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
