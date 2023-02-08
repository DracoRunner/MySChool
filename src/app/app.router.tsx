import { createBrowserRouter } from "react-router-dom";
import Class from "./modules/school/class/class";
import School from "./modules/school/school";
import Student from "./modules/school/student/student";
export const router = createBrowserRouter([
  {
    path: "school",
    element: <School />,
  },
  {
    path: "class",
    element: <Class />,
  },
  {
    path: "student",
    element: <Student />,
  },
  {
    path: "*",
    element: <School />,
  },
]);
