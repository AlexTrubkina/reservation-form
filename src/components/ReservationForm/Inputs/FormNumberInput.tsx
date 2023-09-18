import {
    Text,
    Flex,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from "@chakra-ui/react";

import { Dispatch, SetStateAction } from "react";

import { StepFirstObjDataType } from "../../../types/types";
import { countResultPrice } from "../../../helpers/helpers";

const FormNumberInput = ({
    setData,
    data,
    label,
    inputKey,
    error,
}: {
    data: StepFirstObjDataType;
    label: string;
    setData: Dispatch<SetStateAction<StepFirstObjDataType>>;
    inputKey: keyof StepFirstObjDataType;
    error: { adultsEmpty: boolean; nightsEmpty: boolean };
}) => {
    const handleChange = (value: any) => {
        let copyOfObject: StepFirstObjDataType = { ...data };
        copyOfObject[inputKey] = value;
        copyOfObject["price"] = countResultPrice(copyOfObject);
        setData({ ...copyOfObject });
    };
    return (
        <Flex
            flexWrap={"wrap"}
            justifyContent="space-between"
            alignItems="center"
            mb="20px"
        >
            <Text>{label}</Text>
            <NumberInput
                value={String(data[inputKey])}
                min={0}
                width={{ sm: "150px", base: "100%" }}
                onChange={handleChange}
            >
                <NumberInputField
                    backgroundColor={
                        inputKey === "adults" && error.adultsEmpty
                            ? "red.100"
                            : inputKey === "nights" && error.nightsEmpty
                            ? "red.100"
                            : "#fff"
                    }
                />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
        </Flex>
    );
};

export default FormNumberInput;
