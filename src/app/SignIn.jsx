import { Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import InputField from "../components/inputField";

export default function SignIn() {
  const signInFields = [];

  const {
    handleSubmit,
    register,
    formState: { errors, isLoading },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {signInFields?.map((each, index) => {
        return <InputField key={index} each={each} />;
      })}
      <Button mt={4} isLoading={isLoading} type="submit">
        Submit
      </Button>
    </form>
  );
}
