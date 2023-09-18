import FormRadios from "../Inputs/FormRadios";
import FromCheckBox from "../Inputs/FormCheckBox";
import FormNumberInput from "../Inputs/FormNumberInput";
import { Flex, Text, Button } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { StepFirstObjDataType } from "../../../types/types";
import { firstStepNumberInputs } from "../../../data/datasets";
import PageHeading from "../../PageHeading/PageHeading";
import { useState } from "react";

const FirstStep = ({
    data,
    setData,
    setStep,
    step,
}: {
    setStep: Dispatch<SetStateAction<number>>;
    step: number;
    setData: Dispatch<SetStateAction<StepFirstObjDataType>>;
    data: StepFirstObjDataType;
}) => {

    const [error, setError] = useState<{adultsEmpty: boolean; nightsEmpty: boolean}>({
        adultsEmpty: false,
        nightsEmpty: false
    })

    const handleStepForward = () => {
        
        const copyOfObject = { ...error };
        if (data.adults !== 0 && data.nights !== 0) {
            setStep(step + 1);
            copyOfObject.adultsEmpty = false;
            copyOfObject.nightsEmpty = false;
            setError({ ...copyOfObject });
            return
        } 
        if (data.adults === 0) {
            copyOfObject.adultsEmpty = true
            setError({ ...copyOfObject });
        }
        if (data.nights === 0) {
            copyOfObject.nightsEmpty = true
            setError({ ...copyOfObject });
        }
        
    };

    return (
        <Flex flexDirection="column">
            <PageHeading heading={"Бронирование номера"} />
            <Text fontSize="lg" marginBottom="20px">Расчет стоимости</Text>
            {firstStepNumberInputs.map((input) => (
                <FormNumberInput
                    key={input.label}
                    label={input.label}
                    setData={setData}
                    data={data}
                    inputKey={input.data}
                    error={error}
                />
            ))}
            <FormRadios data={data} setData={setData} />
            <FromCheckBox setData={setData} data={data} />
            <Flex
                flexWrap="wrap"
                justifyContent="space-between"
                marginTop="20px"
                marginBottom={{ sm: "150px", base: "20px" }}
            >
                <Text>Итого</Text>
                <Text fontWeight="bold">{data["price"]} рублей</Text>
            </Flex>
            <Button
                marginLeft="auto"
                width={{ sm: "150px", base: "100%" }}
                colorScheme="blue"
                onClick={handleStepForward}
            >
                Далее
            </Button>
        </Flex>
    );
};

export default FirstStep;
