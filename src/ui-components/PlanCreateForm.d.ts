/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PlanCreateFormInputValues = {
    name?: string;
    destination?: string;
    startDate?: string;
    endDate?: string;
};
export declare type PlanCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    destination?: ValidationFunction<string>;
    startDate?: ValidationFunction<string>;
    endDate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlanCreateFormOverridesProps = {
    PlanCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    destination?: PrimitiveOverrideProps<TextFieldProps>;
    startDate?: PrimitiveOverrideProps<TextFieldProps>;
    endDate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PlanCreateFormProps = React.PropsWithChildren<{
    overrides?: PlanCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PlanCreateFormInputValues) => PlanCreateFormInputValues;
    onSuccess?: (fields: PlanCreateFormInputValues) => void;
    onError?: (fields: PlanCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PlanCreateFormInputValues) => PlanCreateFormInputValues;
    onValidate?: PlanCreateFormValidationValues;
} & React.CSSProperties>;
export default function PlanCreateForm(props: PlanCreateFormProps): React.ReactElement;
