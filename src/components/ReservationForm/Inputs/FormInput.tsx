import { Flex, Text, Input } from "@chakra-ui/react";
import { StepSecondObjDataType } from "../../../types/types";
import { Dispatch, SetStateAction, BaseSyntheticEvent } from "react";

const FormInput = ({
    label,
    inputKey,
    setData,
    data,
    error,
}: {
    data: StepSecondObjDataType;
    label: string;
    inputKey: string;
    setData: Dispatch<SetStateAction<StepSecondObjDataType>>;
    error: Record<string, boolean>;
}) => {
    const handleChange = (e: BaseSyntheticEvent) => {
        let copyOfObject: StepSecondObjDataType = { ...data };
        copyOfObject[inputKey] = e.target.value;
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
            {label !== "Дата рождения" ? (
                <Input
                    backgroundColor={error[inputKey] ? "red.100" : "#fff"}
                    value={data[inputKey] || ""}
                    onInput={handleChange}
                    width={{ sm: "200px", base: "100%" }}
                />
            ) : (
                <Input
                    backgroundColor={error[inputKey] ? "red.100" : "#fff"}
                    onChange={handleChange}
                    value={data[inputKey]}
                    width={{ sm: "200px", base: "100%" }}
                    type="datetime-local"
                />
            )}
        </Flex>
    );
};

export default FormInput;
