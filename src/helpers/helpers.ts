import { StepFirstObjDataType } from "../types/types";

export const countResultPrice = (data : StepFirstObjDataType) : number => {
    let resultPrice: number = data.rate === "econom" ? 1800 : data.rate === "standart" ? 2800 : 4000;
    if (data.children) {
        resultPrice += (resultPrice / 2) * Number(data.children);
    }
    if (data.isInsurance) {
        resultPrice += ((resultPrice / 100) * 10);
        
    }
    
    if (data.adults) {
        resultPrice = resultPrice * Number(data.adults)
    }

    if (data.nights) {
        resultPrice = resultPrice * Number(data.nights)
    }

    return resultPrice

    
};
