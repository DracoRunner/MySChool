import React from "react";
import { SchoolClass, StudentType } from "./models/school-model";

const CLASSES: SchoolClass[] = [
  {
    id: 1,
    name: "hindi",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 2,
    name: "English",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 3,
    name: "History",
    startTime: "10:00",
    endTime: "11:00",
  },
];

const STUDENTS: StudentType[] = [
  {
    id: 1,
    name: "User Name 1",
    classesEnrolled: [1, 2],
    marksPerClass: {
      1: 10,
      2: 30,
    },
  },
  {
    id: 2,
    name: "User Name 2",
    classesEnrolled: [2, 3],
    marksPerClass: {
      1: 10,
      2: 30,
    },
  },
  {
    id: 3,
    name: "User Name 3",
    classesEnrolled: [3],
    marksPerClass: {
      1: 10,
      2: 30,
    },
  },
];
export const SchoolContext = React.createContext<any>("light");

// eslint-disable-next-line
export default ({ children }: any) => {
  const [students, setStudent] = React.useState(STUDENTS);
  const [classes, setClasses] = React.useState(CLASSES);

  const defaultContext = {
    students,
    setStudent,
    classes,
    setClasses,
  };

  return (
    <SchoolContext.Provider value={defaultContext}>
      {children}
    </SchoolContext.Provider>
  );
};
