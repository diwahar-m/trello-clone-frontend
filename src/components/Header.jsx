import { BsTrello } from "react-icons/bs";
import { Button } from "@chakra-ui/react";
import { removeToken } from "../common/common";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Header({ setSignIn }) {
  const location = useLocation();
  const [taskPage, setTaskPage] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname?.includes("task")) {
      setTaskPage(true);
    } else {
      setTaskPage(false);
    }
  }, [location?.pathname]);
  console.log(location.pathname);
  return (
    <div className="bg-[#1976d2] w-[100%] h-[65px] py-[10px] px-[20px] ">
      <div className="flex justify-between items-center">
        <BsTrello size={"30px"} color={"white"} />
        {taskPage ? (
          <Button
            color={"white"}
            backgroundColor={"red"}
            onClick={() => {
              removeToken();
              navigate("/");
            }}
          >
            Logout{" "}
          </Button>
        ) : (
          <div className="flex gap-[10px]">
            <Button onClick={() => setSignIn(true)}>Login </Button>
            <Button
              color={"white"}
              backgroundColor={"#1976d2"}
              onClick={() => setSignIn(false)}
            >
              Signup
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
