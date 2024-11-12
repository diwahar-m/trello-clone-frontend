import { BsTrello } from "react-icons/bs";
import { Button } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
export default function Header({ setSignIn }) {
  return (
    <div className="bg-[#1976d2] w-[100%] h-[65px] py-[10px] px-[20px] ">
      <div className="flex justify-between items-center">
        <BsTrello size={"30px"} color={"white"} />
        <div className="flex gap-[10px]">
          <Button onClick={() => setSignIn(true)}>Login </Button>
          <Button onClick={() => setSignIn(false)}>Signup</Button>
        </div>
      </div>
    </div>
  );
}
