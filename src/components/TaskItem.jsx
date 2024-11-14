import { Button, Text, useDisclosure } from "@chakra-ui/react";
import { deleteTask, formatDate, updateTask } from "../common/common";
import { useContext, useState } from "react";
import { TaskContext } from "../app/TaskPage.jsx";
import AppModal from "../elements/AppModal.jsx";
import InputField from "../elements/inputField";
import { useForm } from "react-hook-form";
import { Draggable } from "../drag/Draggable.jsx";

// eslint-disable-next-line react/prop-types
export default function TaskItem({ taskItem }) {
  const { getTaskLists, taskList } = useContext(TaskContext);
  let filteredList = taskList?.filter((task) => task.category === taskItem);
  const [selectedItem, setSelectedItem] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure();
  const {
    handleSubmit,
    register,
    watch,
    reset,
    formState: { errors },
  } = useForm();

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
      variant: "flushed",
    },
  ];

  const onSubmit = async (data) => {
    console.log(data);
    data.id = selectedItem?._id;
    const res = await updateTask(data);
    if (res?.data?.success) {
      onEditClose();
      await getTaskLists();
    }
  };

  const deleteHandler = async (id) => {
    const res = await deleteTask({ id: id });
    if (res?.data?.success) {
      await getTaskLists();
    }
  };
  const editHandler = async (each) => {
    setSelectedItem(each);
    reset({
      title: selectedItem?.title,
      description: selectedItem?.description,
    });
    onEditOpen();
    console.log(watch());
  };
  return (
    <div className="p-2 border-[1px] rounded border-[#d3d3d3]">
      <Text
        rounded={"2px"}
        textAlign={"left"}
        backgroundColor={"#1976d2"}
        color={"white"}
        fontSize="xl"
        fontWeight={500}
        padding={"5px"}
        paddingLeft={"8px"}
        className="uppercase"
      >
        {taskItem}
      </Text>
      <div className="min-h-[400px] flex flex-col gap-[10px]  overflow-y-auto py-[4px]">
        {filteredList?.map((each, ind) => (
          <Draggable id="draggable" key={each}>
            <div key={ind} className="bg-[#9DE8F2] flex flex-col gap-3 p-4">
              <Text className="font-[600] text-left">{each?.title}</Text>
              <Text className="font-400 text-left">
                {each?.description || ""}
              </Text>
              <Text className="font-400 text-left">{`Created at: ${formatDate(
                each?.date
              )}`}</Text>
              <div className="ml-auto flex flex-row w-[80%] gap-[4px] justify-end">
                <Button
                  color={"white"}
                  backgroundColor={"red"}
                  className="rounded"
                  onClick={() => deleteHandler(each?._id)}
                >
                  Delete
                </Button>
                <Button
                  color={"white"}
                  backgroundColor={"blue"}
                  className="rounded"
                  onClick={() => {
                    editHandler(each);
                  }}
                >
                  Edit
                </Button>
                <Button
                  color={"white"}
                  backgroundColor={"blue"}
                  className="rounded"
                  onClick={() => {
                    setSelectedItem(each);
                    onOpen();
                  }}
                >
                  View Details
                </Button>
              </div>
            </div>
          </Draggable>
        ))}
      </div>
      {/* Task Details */}
      <AppModal
        edit={true}
        title={"Add Task"}
        isOpen={isOpen}
        onClose={onClose}
      >
        <div className="flex flex-col justify-start gap-[10px]">
          <Text className="font-[700] text-[22px] text-left">Task Details</Text>
          <div className="flex flex-col justify-start gap-[6px]">
            <Text className="font-[600] text-left">{`Title: ${selectedItem?.title}`}</Text>
            <Text className="font-[600] text-left">{`Description: ${
              selectedItem?.description || ""
            }`}</Text>
            <Text className="font-[600] text-left">{`Created at: ${formatDate(
              selectedItem?.date
            )}`}</Text>
          </div>
        </div>
      </AppModal>
      {/* Edit Details */}
      <AppModal title={"Edit Task"} isOpen={isEditOpen} onClose={onEditClose}>
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
              <div className="ml-auto flex flex-end gap-[4px]">
                <Button type="submit" colorScheme="blue">
                  Save
                </Button>
                <Button variant="ghost" mr={3} onClick={onEditClose}>
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </form>
        {/*  */}
      </AppModal>
    </div>
  );
}
