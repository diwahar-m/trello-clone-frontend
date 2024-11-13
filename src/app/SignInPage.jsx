import { useForm } from "react-hook-form";
import InputField from "../elements/inputField.jsx";
import { Button, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { getToken, postUser, setToken } from "../common/common.js";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function SignInPage({ isSignIn, setSignIn }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (getToken()) {
      navigate("/task");
    }
  }, []);
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

  const fields = isSignIn ? signInFields : signUpFields;

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    reset();
  }, [isSignIn]);

  const url = isSignIn ? "/api/user/login" : "/api/user/register";

  async function onSubmit(data) {
    if (!isSignIn) {
      if (data?.password !== data.confirm_password) {
        toast.error("Please recheck your passwword");
        return;
      }
      delete data.confirm_password;
    }
    const res = await postUser(url, data);
    if (!res?.data?.success) {
      toast.error(res?.data?.message);
    } else if (res?.data?.success) {
      console.log();
      const response = setToken(res?.data?.token);
      if (response) {
        console.log(response);
        toast.success("User Registered Successfully");
        navigate("/task");
      }
    }
  }

  function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId());
    console.log("Name: " + profile.getName());
  }

  return (
    <div className="w-full h-full">
      <Toaster />
      <div className="h-full flex  justify-center items-center ">
        <div className="w-[35vw]">
          <p className="text-[34px] text-[#1976d2] font-semibold self-start ">
            {isSignIn ? "Login" : "Signup"}
          </p>
          <div className="border-[3px]  flex flex-col gap-[8px] rounded-lg p-[20px] border-[#1976d2] w-[100%]">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-[12px]">
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
                type="submit"
              >
                {isSignIn ? "Login" : "Signup"}
              </Button>
            </form>
            <div className="flex gap-[4px] m-auto">
              <Text className="font-[500]">
                {isSignIn
                  ? "Don't have an account?"
                  : "Already have an account?"}
              </Text>
              <Text
                onClick={() => {
                  if (isSignIn) {
                    setSignIn(false);
                  } else {
                    setSignIn(true);
                  }
                }}
                className="font-[500] text-[#1976d2] underline cursor-pointer"
              >
                {isSignIn ? "Signup" : "Login"}
              </Text>
            </div>
            {/* <div class="g-signin2" data-onsuccess="onSignIn"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
