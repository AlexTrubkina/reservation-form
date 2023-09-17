import {
    Radio,
    RadioGroup,
    Stack,
    Flex,
    Text,
    useBreakpointValue,
    Select,
} from "@chakra-ui/react";

const FormRadios = () => {
    const isDesktop: boolean | undefined = useBreakpointValue({
        base: false,
        sm: true,
    });

    return (
        <Flex flexWrap="wrap" justifyContent="space-between" mb="20px">
            <Text>Тип номера</Text>
            {isDesktop ? (
                <RadioGroup defaultValue="econom">
                    <Stack spacing={5} direction="column">
                        <Radio colorScheme="blackAlpha" value="econom">
                            Эконом
                        </Radio>
                        <Radio colorScheme="blackAlpha" value="standart">
                            Стандарт
                        </Radio>
                        <Radio colorScheme="blackAlpha" value="lux">
                            Люкс
                        </Radio>
                    </Stack>
                </RadioGroup>
            ) : (
                <Select defaultValue="econom">
                    <option value="econom">Эконом</option>
                    <option value="standart">Стандарт</option>
                    <option value="lux">Люкс</option>
                </Select>
            )}
        </Flex>
    );
};

export default FormRadios;
