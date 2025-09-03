import {useField, useFormState} from "informed";
import {useState} from "react";
import 'react-tabs/style/react-tabs.css';
import classes from "./textInput.module.css";

export default function TextInput({
        field,
        required,
        label,
        type = "text",
        validate,
        showErrors = false,
        classes: propClasses,
        ...rest
    }) {

    const {values} = useFormState();
    const passwordValue = values?.password;
    const {
        fieldApi,         // setValue, setTouched, etc.
        fieldState,       // value, error, touched
        ref,
        userProps
    } = useField({
        field,
        validate: (val) => {
            // required
            if (required && (val == null || String(val).trim() === "")) {
                return "This field is required";
            }

            // email validation
            if (type === "email" && val) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(val)) {
                    return "Please enter a valid email address";
                }
            }

            // confirm password
            if (field === "confirmPassword" && val) {
                if (val !== passwordValue) return "Passwords do not match";
            }

            if (validate) return validate(val);
        },
    });

    const [focused, setFocused] = useState(false);
    const empty = !fieldState.value || String(fieldState.value).trim() === "";
    const showLabel = empty && !focused;

    const showError = Boolean(fieldState.error || showErrors);

    const className = [
        propClasses?.input,
        showError ? classes.input_error : classes.input,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <div className="relative">
            {label && (
                <label
                    className={[
                        "pointer-events-none absolute left-[25px] top-[18px] text-[20px] text-white transition-opacity duration-150",
                        showLabel ? "opacity-100" : "opacity-0"
                    ].join(" ")}
                >
                    {label} {required && <span className="text-gold">*</span>}
                </label>
            )}
            <input
                ref={ref}
                {...userProps}
                type={type}
                value={fieldState.value ?? ""}
                onChange={(e) => fieldApi.setValue(e.target.value)}
                onBlur={() => setFocused(false)}
                // onBlurCapture={() => fieldApi.setTouched(true)}
                onFocus={() => setFocused(true)}
                aria-invalid={showError}
                className={className}
                {...rest}
            />
            {showError && (
                <small>{fieldState.error}</small>
            )}
        </div>
    );
}
