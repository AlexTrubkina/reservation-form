import {
    Radio,
    RadioGroup,
    Stack,
    Flex,
    Text,
    useBreakpointValue,
    Select,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { StepFirstObjDataType } from "../../../types/types";
import { countResultPrice } from "../../../helpers/helpers";

const FormRadios = ({
    setData,
    data,
}: {
    data: StepFirstObjDataType;
    setData: Dispatch<SetStateAction<StepFirstObjDataType>>;
}) => {
    const isDesktop: boolean | undefined = useBreakpointValue({
        base: false,
        sm: true,
    });

    const handleChange = (e: any) => {
        let copyOfObject = { ...data };
        copyOfObject["rate"] = e.target.value;
        copyOfObject["price"] = countResultPrice(copyOfObject);
        setData({ ...copyOfObject });
    };

    return (
        <Flex flexWrap="wrap" justifyContent="space-between" mb="20px">
            <Text>Тип номера</Text>
            {isDesktop ? (
                <RadioGroup value={String(data["rate"])} onInput={handleChange}>
                    <Stack spacing={5} direction="column">
                        <Radio
                            colorScheme="blackAlpha"
                            onChange={handleChange}
                            value="econom"
                        >
                            Эконом
                        </Radio>
                        <Radio
                            colorScheme="blackAlpha"
                            onChange={handleChange}
                            value="standart"
                        >
                            Стандарт
                        </Radio>
                        <Radio
                            colorScheme="blackAlpha"
                            onChange={handleChange}
                            value="lux"
                        >
                            Люкс
                        </Radio>
                    </Stack>
                </RadioGroup>
            ) : (
                <Select defaultValue="econom" onChange={handleChange}>
                    <option value="econom">Эконом</option>
                    <option value="standart">Стандарт</option>
                    <option value="lux">Люкс</option>
                </Select>
            )}
        </Flex>
    );
};

export default FormRadios;
