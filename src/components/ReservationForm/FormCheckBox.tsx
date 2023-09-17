import { Checkbox, Text, Flex } from "@chakra-ui/react";

const FromCheckBox = () => {
    return (
        <Flex flexWrap="wrap" justifyContent="space-between">
            <Text>
                Страховка
            </Text>
            <Checkbox colorScheme="blackAlpha"></Checkbox>
        </Flex>
    )
}

export default FromCheckBox;