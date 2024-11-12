import {
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  FormControl,
} from "@chakra-ui/form-control";
import { Input, Textarea } from "@chakra-ui/react";

export default function InputField({ ...rest }) {
  if (rest?.inputType === "textarea") {
    <FormControl>
      {rest?.labelName && <FormLabel>{rest?.labelName}</FormLabel>}
      <Textarea
        variant={rest?.variant || "outline"}
        {...rest.register(rest?.name)}
        placeholder={rest?.placeholder || "Enter value"}
        onChange={rest?.handleInputChange}
        required={rest?.required || false}
        size={"sm"}
      />
      {!rest?.errors[rest?.name] ? (
        <FormHelperText>{rest?.errors[rest?.name]}</FormHelperText>
      ) : (
        <FormErrorMessage>This field is required.</FormErrorMessage>
      )}
    </FormControl>;
  }

  return (
    <FormControl>
      {rest?.labelName && <FormLabel>{rest?.labelName}</FormLabel>}
      <Input
        variant={rest?.variant || "outline"}
        type={rest?.type || "text"}
        {...rest.register(rest?.name)}
        placeholder={rest?.placeholder || "Enter value"}
        onChange={rest?.handleInputChange}
        required={rest?.required || false}
        isInvalid={rest?.errors[rest?.name] || false}
      />
      {rest?.errors[rest?.name] ? (
        <FormHelperText>{rest?.errors[rest?.name]}</FormHelperText>
      ) : (
        <FormErrorMessage>This field is required.</FormErrorMessage>
      )}
    </FormControl>
  );
}
