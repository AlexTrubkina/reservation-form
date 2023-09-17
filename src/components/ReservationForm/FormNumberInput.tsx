import {
    Text,
    Flex,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from "@chakra-ui/react";

const FormNumberInput = ({ label }: { label: string }) => {
    return (
        <Flex
            flexWrap={"wrap"}
            justifyContent="space-between"
            alignItems="center"
            mb="20px"
        >
            <Text>{label}</Text>
            <NumberInput defaultValue={0} min={0} width={{sm: "150px", base: "100%"}}>
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
        </Flex>
    );
};

export default FormNumberInput;
