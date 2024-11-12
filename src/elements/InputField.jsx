import {
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  FormControl,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/react";

export default function InputField({ ...rest }) {
  return (
    <FormControl>
      {rest?.labelName && <FormLabel>{rest?.labelName}</FormLabel>}
      <Input
        variant="outline"
        type={rest?.type || "text"}
        {...rest.register(rest?.name)}
        placeholder={rest?.placeholder || "Enter value"}
        onChange={rest?.handleInputChange}
        required={rest?.required || false}
      />
      {!rest?.errors[rest?.name] ? (
        <FormHelperText>{rest?.errors[rest?.name]}</FormHelperText>
      ) : (
        <FormErrorMessage>This field is required.</FormErrorMessage>
      )}
    </FormControl>
  );
}
