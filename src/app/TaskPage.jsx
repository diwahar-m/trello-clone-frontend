import { Button, useDisclosure } from "@chakra-ui/react";
import TaskList from "../components/TaskList";
import AppModal from "../elements/AppModal";
import { useForm } from "react-hook-form";
import InputField from "../elements/inputField";

export default function TaskPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const addTaskFields = [
    {
      labelName: "Title",
      name: "title",
      placeholder: "Email",
      required: true,
      variant: "flushed",
    },
    {
      labelName: "Description",
      inputType: "textarea",
      name: "description",
      placeholder: "Description",
      required: true,
      variant: "flushed",
    },
  ];

  const {
    handleSubmit,
    register,
    formState: { errors, isLoading },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="p-9 flex flex-col gap-6 w-[100%]">
      <Button
        color={"white"}
        backgroundColor={"#1976d2"}
        mt={4}
        className="w-[200px] "
        isLoading={false}
        type="submit"
        onClick={() => onOpen()}
      >
        Add Task
      </Button>
      <TaskList />
      <AppModal title={" Add Task"} isOpen={isOpen} onClose={onClose}>
        {/* Modal Content */}
        <div className=" rounded-lg p-[20px] w-[100%]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-[8px]">
              {addTaskFields?.map((field, index) => {
                return (
                  <InputField
                    key={index}
                    name={field?.name}
                    type={field?.type}
                    placeholder={field?.placeholder}
                    required={field?.required}
                    register={register}
                    errors={errors}
                    variant={field?.variant}
                    inputType={field?.inputType}
                    labelName={field?.labelName}
                  />
                );
              })}
            </div>
          </form>
        </div>
        {/*  */}
      </AppModal>
    </div>
  );
}
