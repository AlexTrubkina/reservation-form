import { useState } from "react";
import { Box } from "@chakra-ui/react";

import FirstStep from "./FormSteps/FirstStep";
import SecondStep from "./FormSteps/SecondStep";
import ThirdStep from "./FormSteps/ThirdStep";
import ForthStep from "./FormSteps/ForthStep";
import { StepFirstObjDataType, StepSecondObjDataType } from "../../types/types";

const ReservationForm = () => {
    const [stepFirstData, setStepFirstData] = useState<StepFirstObjDataType>({
        adults: 0,
        children: 0,
        todlers: 0,
        nights: 0,
        price: 0,
        rate: "econom",
        isInsurance: false,
    });

    const [stepSecondData, setStepSecondData] = useState<StepSecondObjDataType>({
        firstName: "",
        secondName: "",
        thirdName: "",
        tel: "",
        date: "",
    });

    const [step, setStep] = useState(0);

    return (
        <Box>
            {step === 0 ? (
                <FirstStep
                    data={stepFirstData}
                    setData={setStepFirstData}
                    setStep={setStep}
                    step={step}
                />
            ) : step === 1 ? (
                <SecondStep
                    step={step}
                    setStep={setStep}
                    setData={setStepSecondData}
                    data={stepSecondData}
                />
            ) : step === 2 ? (
                <ThirdStep
                    step={step}
                    setStep={setStep}
                    stepSecondData={stepSecondData}
                    stepFirstData={stepFirstData}
                />
            ) : (
                <ForthStep
                    setStep={setStep}
                    setFirstData={setStepFirstData}
                    setSecondData={setStepSecondData}
                />
            )}
        </Box>
    );
};

export default ReservationForm;
