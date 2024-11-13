import { Button, useDisclosure } from "@chakra-ui/react";
import TaskList from "../components/TaskList";
import AppModal from "../elements/AppModal";
import { useForm } from "react-hook-form";
import InputField from "../elements/inputField";
import { addTask, getTasks } from "../common/common";
import toast, { Toaster } from "react-hot-toast";

export default function TaskPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [taskList, setTaskList] = useState([]);

  async function getTaskLists() {
    const res = await getTasks();
    console.log(res)
  }
   
  useEffect(()=> {
    getTaskLists()
  },[])

  const addTaskFields = [
    {
      labelName: "Title",
      name: "title",
      placeholder: "Title",
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
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    data.category = "todo";
    console.log(data);
    const res = await addTask(data);
    if (!res?.data?.success) {
      toast.error(res?.data?.message);
    } else if (res?.data?.success) {
        console.log(res);
        toast.success(res?.data?.message);
      }
    }
  };

  return (
    <>
    <div className="p-9 flex flex-col gap-6 w-[100%]">
      <Toaster />
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" rounded-lg p-[20px] w-[100%]">
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
              <div className="flex flex-end gap-[4px]">
                <Button type="submit" colorScheme="blue">
                  Save
                </Button>
                <Button variant="ghost" mr={3} onClick={onClose}>
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </form>
        {/*  */}
      </AppModal>
    </div>
    </>
  )
  
}
