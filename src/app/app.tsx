import { RouterProvider } from "react-router-dom";
import { router } from "./app.router";
import SchoolContext from "./utilities/SchoolContext";
import "./app.scss";

export default function App() {
  return (
    <SchoolContext>
      <RouterProvider router={router} />
    </SchoolContext>
  );
}
