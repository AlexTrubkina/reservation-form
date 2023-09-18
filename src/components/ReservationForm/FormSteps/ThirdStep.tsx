import { Flex, Text, Button } from "@chakra-ui/react";
import { SetStateAction, Dispatch } from "react";
import { StepFirstObjDataType, StepSecondObjDataType } from "../../../types/types";
import PageHeading from "../../PageHeading/PageHeading";

const ThirdStep = ({
    step,
    setStep,
    stepSecondData,
    stepFirstData,
}: {
    step: number;
    setStep: Dispatch<SetStateAction<number>>;
    stepSecondData: StepSecondObjDataType;
    stepFirstData: StepFirstObjDataType;
}) => {

    const handleStepForward = () => {
        
        setStep(step + 1);
        
    };

    const handleStepBack = () => {
        setStep(step - 1);
    };
    return (
        <Flex flexDirection="column">
            <PageHeading heading={"Бронирование номера"} />
            <Text fontSize="lg" marginBottom="20px">Подтверждение заказа</Text>
            <Text fontWeight={"bold"}>
                {stepSecondData.firstName} {stepSecondData.secondName}{" "}
                {stepSecondData.thirdName}
            </Text>
            <Text>{stepSecondData.tel}</Text>
            <Text>
                Номер{" "}
                {stepFirstData.rate === "эконом"
                    ? "Эконом"
                    : stepFirstData.rate === "standart"
                    ? "Стандарт"
                    : "Люкс"}{" "}
                на {stepFirstData.nights} ночей
            </Text>
            <Text>
                {stepFirstData.isInsurance
                    ? "Страховка включена"
                    : "Cтраховка не включена"}
            </Text>
            <Text>К оплате {stepFirstData.price} руб.</Text>
            <Flex
                marginTop={{ sm: "150px", base: "20px" }}
                justifyContent="space-between"
            >
                <Button
                    width={{ sm: "300px", base: "100%" }}
                    variant="ghost"
                    onClick={handleStepBack}
                >
                    Назад к данным покупателя
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

export default ThirdStep;
