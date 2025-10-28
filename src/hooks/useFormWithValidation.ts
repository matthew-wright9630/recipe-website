import { useCallback, useState, ChangeEvent } from "react";

export function useFormWithValidation<T extends Record<string, any>>(
  inputValues: T
) {
  const [values, setValues] = useState<T>(inputValues);
  const [errors, setErrors] = useState<Record<keyof T, string>>(
    {} as Record<keyof T, string>
  );
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const target = event.target;
    const name = target.name as keyof T;
    const value = target.value;

    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: target.validationMessage }));
    setIsValid(target.closest("form")?.checkValidity() ?? false);
  };

  const resetForm = useCallback(
    (
      newValues: T = {} as T,
      newErrors: Record<keyof T, string> = {} as Record<keyof T, string>,
      newIsValid = false
    ) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    []
  );

  return {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
  };
}
