/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Plan } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PlanUpdateFormInputValues = {
    name?: string;
    destination?: string;
    startDate?: string;
    endDate?: string;
};
export declare type PlanUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    destination?: ValidationFunction<string>;
    startDate?: ValidationFunction<string>;
    endDate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlanUpdateFormOverridesProps = {
    PlanUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    destination?: PrimitiveOverrideProps<TextFieldProps>;
    startDate?: PrimitiveOverrideProps<TextFieldProps>;
    endDate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PlanUpdateFormProps = React.PropsWithChildren<{
    overrides?: PlanUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    plan?: Plan;
    onSubmit?: (fields: PlanUpdateFormInputValues) => PlanUpdateFormInputValues;
    onSuccess?: (fields: PlanUpdateFormInputValues) => void;
    onError?: (fields: PlanUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PlanUpdateFormInputValues) => PlanUpdateFormInputValues;
    onValidate?: PlanUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PlanUpdateForm(props: PlanUpdateFormProps): React.ReactElement;
