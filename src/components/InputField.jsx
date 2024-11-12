import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

export default function InputField(
  isError = false,
  input = "",
  handleInputChange,
  labelName = "",
  placeholder = ""
) {
  return (
    <FormControl isInvalid={isError}>
      {labelName && <FormLabel>{labelName}</FormLabel>}
      <Input
        type="email"
        value={input}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
      {!isError ? (
        <FormHelperText>Type your text</FormHelperText>
      ) : (
        <FormErrorMessage>This field is required.</FormErrorMessage>
      )}
    </FormControl>
  );
}
