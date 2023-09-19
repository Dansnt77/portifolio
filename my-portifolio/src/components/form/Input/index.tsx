import { forwardRef, ForwardedRef, InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: FieldError;
}

interface ITextProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: FieldError;
}

export const Input = forwardRef(function InputComponent(
    { label, error, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
) {
    return (
        <div className="flex flex-col">
            {label ? <label className="text-white mb-1 mt-1">{label}</label> : null}
            <input ref={ref} {...rest} className="rounded-md border-2 bg-transparent border-violet-900" />
            {error ? <p className="text-white mb-[0.5rem]">{error.message}</p> : null}
        </div>
    );
});

Input.displayName = 'Input';

export const TextArea = forwardRef(function TextAreaComponent(
    { label, error, ...rest }: ITextProps,
    ref: ForwardedRef<HTMLTextAreaElement>
) {
    return (
        <div className="flex flex-col">
            {label ? <label className="text-white mb-[0.875rem]">{label}</label> : null}
            <textarea ref={ref} {...rest} className="rounded-md border-2 bg-transparent border-violet-900" />
            {error ? <p className="text-white mb-[0.5rem]">{error.message}</p> : null}
        </div>
    );
});

TextArea.displayName = 'TextArea';
