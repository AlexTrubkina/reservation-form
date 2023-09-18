import { Flex, Button, Image, Text } from "@chakra-ui/react";
import Checked from "../../../assets/checked.png";
import { Dispatch, SetStateAction } from "react";

const ForthStep = ({
    setStep,
    setFirstData,
    setSecondData,
}: {
    setStep: Dispatch<SetStateAction<number>>;
    setFirstData: Dispatch<SetStateAction<any>>;
    setSecondData: Dispatch<SetStateAction<any>>;
}) => {

    const handleRestart = () => {
        setSecondData({
            firstName: "",
            secondName: "",
            thirdName: "",
            tel: "",
            date: "",
        });
        setFirstData({
            adults: 0,
            children: 0,
            todlers: 0,
            nights: 0,
            price: 0,
            rate: "econom",
            isInsurance: false,
        });
        setStep(0);
    };

    return (
        <Flex
            marginBlock="auto"
            marginInline="auto"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="30px"
            height="100vh"
        >
            <Image src={Checked} width={{ sm: "300px", base: "100%" }} />
            <Text fontWeight="bold" fontSize="lg">
                Заказ успешно оплачен
            </Text>
            <Button
                width={{ sm: "200px", base: "100%" }}
                colorScheme="blue"
                onClick={handleRestart}
            >
                Забронировать еще
            </Button>
        </Flex>
    );
};

export default ForthStep;
