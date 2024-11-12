import { useForm } from "react-hook-form";
import InputField from "../elements/inputField.jsx";
import { Button } from "@chakra-ui/react";

// Navy blue - #1976d2

// eslint-disable-next-line react/prop-types
export default function SignInPage({ isSignIn }) {
  const signInFields = [
    {
      name: "email",
      type: "email",
      placeholder: "Email",
      required: true,
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
      required: true,
    },
  ];

  const signUpFields = [
    {
      name: "first_name",
      placeholder: "First Name",
      required: true,
    },
    {
      name: "last_name",
      placeholder: "Last Name",
      required: true,
    },
    {
      name: "email",
      placeholder: "Email",
      type: "email",
      required: true,
    },
    {
      name: "password",
      placeholder: "Password",
      type: "password",
      required: true,
    },
    {
      name: "confirm_password",
      placeholder: "Confirm password",
      type: "password",
      required: true,
    },
  ];
  console.log(isSignIn);

  const fields = isSignIn ? signInFields : signUpFields;

  const {
    handleSubmit,
    register,
    formState: { errors, isLoading },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className="w-full h-full">
      <div className="h-full flex  justify-center items-center ">
        <div className="w-[35vw]">
          <p className="text-[34px] text-[#1976d2] font-semibold self-start ">
            {isSignIn ? "Login" : "Signup"}
          </p>
          <div className="border-[3px] rounded-lg p-[20px] border-[#1976d2] w-[100%]">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-[8px]">
                {fields?.map((field, index) => {
                  return (
                    <InputField
                      key={index}
                      name={field?.name}
                      type={field?.type}
                      placeholder={field?.placeholder}
                      required={field?.required}
                      register={register}
                      errors={errors}
                    />
                  );
                })}
              </div>
              <Button
                color={"white"}
                backgroundColor={"#1976d2"}
                mt={4}
                className="w-[100%] "
                isLoading={isLoading}
                type="submit"
              >
                {isSignIn ? "Login" : "Signup"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
