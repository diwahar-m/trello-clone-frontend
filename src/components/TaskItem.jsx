import { Text } from "@chakra-ui/react";

export default function TaskItem({ taskItem }) {
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
      >
        {taskItem}
      </Text>
      <div className="min-h-[400px]"></div>
    </div>
  );
}
