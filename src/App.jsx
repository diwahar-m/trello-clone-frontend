import "./App.css";
import { useRoutes } from "react-router-dom";
import SignInPage from "./app/SignInPage";
import Header from "./components/Header";
import { useState } from "react";
import TaskPage from "./app/TaskPage";
import RequireAuth from "./components/RequireAuth.js";

function App() {
  const [isSignIn, setSignIn] = useState(true);
  const routes = useRoutes([
    {
      path: "/",
      element: <SignInPage isSignIn={isSignIn} setSignIn={setSignIn} />,
    },
    {
      path: "/task",
      element: (
        <RequireAuth>
          <TaskPage isSignIn={isSignIn} />
        </RequireAuth>
      ),
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
