import React from "react";
import { Button, Input, Modal } from "react-daisyui";
import { FaPlus } from "react-icons/fa";
import { SchoolContext } from "../../../../utilities/SchoolContext";

export default function AddNewStudent({ toggleVisible, visible }: any) {
  const { students, classes, setStudent } = React.useContext(SchoolContext);
  const formRef = React.useRef<any>(null);

  React.useEffect(() => {
    const from: HTMLFormElement = document.getElementById(
      "#studentForm"
    ) as HTMLFormElement;
    from && from?.reset();
  }, []);

  const addStudent = (event: any) => {
    event.preventDefault();
    const data: any = new FormData(event.target);
    const newStudent: any = {};
    newStudent["id"] = classes.length + 1;
    newStudent["name"] = `${data.get("fName")} ${data.get("lName")}`;
    newStudent["classesEnrolled"] = [];
    [...data.entries()].forEach((item: any) => {
      if (!(item[0] === "fName" || item[0] === "lName")) {
        newStudent["classesEnrolled"].push(item[1]);
      }
    });
    setStudent([...students, newStudent]);
    toggleVisible();
  };

  return (
    <>
      <Button onClick={toggleVisible}>
        <FaPlus /> &nbsp; Add new Student
      </Button>
      <Modal open={visible}>
        <form onSubmit={addStudent} id="studentForm">
          <Modal.Header className="font-bold text-center">
            Add new student
          </Modal.Header>
          <Modal.Body>
            <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold">
                    Student First name
                  </span>
                </label>
                <Input name="fName" required />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold">
                    Student Last name
                  </span>
                </label>
                <Input name="lName" required />
              </div>
            </div>
            <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text font-bold">
                    Student Enrolled For
                  </span>
                </label>
                <ul className="w-full flex justify-center items-center bg-base-200">
                  {classes.map((cls: any) => {
                    return (
                      <li className="flex justify-center items-center p-3 gap-3">
                        <span>{cls.name}</span>
                        <Input name={cls.id} value={cls.id} type="checkbox" />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </Modal.Body>
          <Modal.Actions>
            <Button onClick={toggleVisible}>cancel</Button>
            <Button type="submit">Add</Button>
          </Modal.Actions>
        </form>
      </Modal>
    </>
  );
}
