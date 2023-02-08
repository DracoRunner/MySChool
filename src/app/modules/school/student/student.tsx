import React, { FormEvent } from "react";
import { Button, Input, Modal, Table } from "react-daisyui";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { StudentType } from "../../../utilities/models/school-model";
import { SchoolContext } from "../../../utilities/SchoolContext";
import AddNewStudent from "./add-student/add-student";
import UpdateStudent from "./update-student/update-student";

export default function Student(params: any) {
  const { students, setStudent } = React.useContext(SchoolContext);

  const [visible, setVisible] = React.useState<boolean>(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  const removeStudent = (id: any) => {
    const newStudents = students.filter((cls: any) => cls.id != id);
    setStudent(newStudents);
  };

  return (
    <div className="h-full w-full flex flex-col items-center p-10">
      <h1 className="text-7xl uppercase">
        <Link to="/school">My School</Link>
      </h1>
      <div className="overflow-x-auto h-full w-full flex flex-col p-10">
        <div className="flex mb-9 items-end justify-between">
          <h4 className="text-xl font-bold">Students</h4>
          <AddNewStudent visible={visible} toggleVisible={toggleVisible} />
        </div>
        <Table>
          <Table.Head className="text-center">
            <span />
            <span>Student Name</span>
            <span>Classes Enrolled</span>
            <span>average-marks</span>
            <span></span>
          </Table.Head>

          <Table.Body>
            {students.map((stu: StudentType) => {
              return (
                <Table.Row key={stu.id} className="text-center">
                  <span>{stu.id}</span>
                  <span>
                    <UpdateStudent student={stu} />
                  </span>
                  <span>{stu.classesEnrolled.length}</span>
                  <span>
                    {Object.values(stu.marksPerClass).reduce(
                      (sum, mark) => sum + mark,
                      0
                    ) / Object.values(stu.marksPerClass).length}
                  </span>
                  <span>
                    <MdDelete
                      size={20}
                      onClick={() => removeStudent(stu.id)}
                      color="red"
                    />
                  </span>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
