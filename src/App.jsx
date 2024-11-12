import "./App.css";
import { useRoutes } from "react-router-dom";
import SignIn from "./app/SignIn";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [isSignIn, setSignIn] = useState(true);
  const routes = useRoutes([
    {
      path: "/",
      element: <SignIn isSignIn={isSignIn} />,
    },
  ]);

  return (
    <div className="w-full h-full">
      <div className="flex flex-col h-full ">
        <Header setSignIn={setSignIn} />
        <>{routes}</>
      </div>
    </div>
  );
}

export default App;
