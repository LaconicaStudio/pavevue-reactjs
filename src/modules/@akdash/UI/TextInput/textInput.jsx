import { useField } from "informed";
import classes from "./textInput.module.css";

export default function TextInput({
  field,
  required,
  type = "text",
  validate,
  classes: propClasses,
  ...rest
}) {
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

      if (validate) return validate(val);
    },
  });

  const className = [
    propClasses?.input,
    fieldState.error && fieldState.touched ? classes.input_error : classes.input,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="relative">
      <input
        ref={ref}
        {...userProps}
        type={type}
        value={fieldState.value ?? ""}
        onChange={(e) => fieldApi.setValue(e.target.value)}
        onBlur={() => fieldApi.setTouched(true)}
        aria-invalid={!!(fieldState.error && fieldState.touched)}
        className={className}
        {...rest}
      />
      {fieldState.touched && fieldState.error && (
        <small>{fieldState.error}</small>
      )}
    </div>
  );
}
