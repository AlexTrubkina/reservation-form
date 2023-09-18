import { Flex, Button, Text } from "@chakra-ui/react";
import PageHeading from "../../PageHeading/PageHeading";
import { secondStepsInputs } from "../../../data/datasets";
import FormInput from "../Inputs/FormInput";
import { Dispatch, SetStateAction } from "react";
import { StepSecondObjDataType } from "../../../types/types";
import { useState } from "react";

const SecondStep = ({
    step,
    setStep,
    data,
    setData,
}: {
    step: number;
    setStep: Dispatch<SetStateAction<number>>;
    data: StepSecondObjDataType;
    setData: Dispatch<SetStateAction<StepSecondObjDataType>>;
}) => {

    const [error, setError] = useState<Record<string, boolean>>({
        firstName: false,
        secondName: false,
        thirdName: false,
        tel: false,
        date: false,
    });


    const handleStepForward = () => {
        const copyOfObject = { ...error };
        for (const [key, value] of Object.entries(data)) {
            if (value === "") {
                copyOfObject[key] = true;
            }
        };
        setError(copyOfObject);
        if (Object.values(data).every((item) => item !== "")) {
            setStep(step + 1);
        }
    };
    const handleStepBack = () => {
        setStep(step - 1);
    };

    return (
        <Flex flexDirection="column">
            <PageHeading heading={"Бронирование номера"} />
            <Text fontSize="lg" marginBottom="20px">
                Данные покупателя
            </Text>
            {secondStepsInputs.map((input) => (
                <FormInput
                    inputKey={input.key}
                    setData={setData}
                    key={input.label}
                    label={input.label}
                    data={data}
                    error={error}
                />
            ))}
            <Flex
                marginTop={{ sm: "150px", base: "20px" }}
                justifyContent="space-between"
            >
                <Button
                    width={{ sm: "300px", base: "100%" }}
                    variant="ghost"
                    onClick={handleStepBack}
                >
                    Назад к расчету стоимости
                </Button>
                <Button
                    width={{ sm: "150px", base: "100%" }}
                    colorScheme="blue"
                    onClick={handleStepForward}
                >
                    Далее
                </Button>
            </Flex>
        </Flex>
    );
};

export default SecondStep;
