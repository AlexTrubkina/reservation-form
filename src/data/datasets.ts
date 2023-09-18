import { StepFirstObjDataType } from "../types/types";
export const firstStepNumberInputs: {
    label: string;
    data: keyof StepFirstObjDataType;
}[] = [
    {
        label: "Количество взрослых",
        data: "adults",
    },
    {
        label: "Количество детей от 5 до 12 лет",
        data: "children",
    },
    {
        label: "Количество детей до 5 лет",
        data: "todlers",
    },
    {
        label: "Количество ночей",
        data: "nights",
    },
];

export const secondStepsInputs: {
    label: string;
    key: string;
}[] = [
    { 
        label: "Фамилия",
        key: "firstName"
     },
    { 
        label: "Имя",
        key: "secondName" 
    },
    { 
        label: "Отчество",
        key: "thirdName"
    },
    { 
        label: "Номер телефона",
        key: "tel"
    },
    { 
        label: "Дата рождения",
        key: "date"
    },
];
