export type StepFirstDataType = {
    adults: number;
    children: number;
    todlers: number;
    nights: number;
    price: number;
    rate: string;
    isInsurance: false;
};

type StepFirstDataObjValues = string | number | boolean;

export type StepSecondObjDataType = Record<string, string>;

export type StepFirstObjDataType = Record<string, StepFirstDataObjValues>;
