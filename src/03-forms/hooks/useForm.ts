import { useState } from "react";

export const useForm = <T>(initState: T) => {
  const [formData, setFormData] = useState(initState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    ...formData,
    onChange
  }
}
