import { Checkbox, Text, Flex } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { StepFirstObjDataType } from "../../../types/types";
import { countResultPrice } from "../../../helpers/helpers";

const FromCheckBox = ({
    setData,
    data
}: {
    data: StepFirstObjDataType,
    setData: Dispatch<
        SetStateAction<any>
    >
}) => {
    const handleChange = (e: any) => {
        let copyOfObject: StepFirstObjDataType = { ...data };
        copyOfObject["isInsurance"] = e.target.checked;
        copyOfObject["price"] = countResultPrice(copyOfObject);
        setData({ ...copyOfObject });
    }
    return (
        <Flex flexWrap="wrap" justifyContent="space-between">
            <Text>
                Страховка
            </Text>
            <Checkbox onChange={handleChange} isChecked={Boolean(data["isInsurance"])} colorScheme="blackAlpha"></Checkbox>
        </Flex>
    )
}

export default FromCheckBox;