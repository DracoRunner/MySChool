import React from "react";
import { Button, Input, Modal, Table } from "react-daisyui";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { SchoolContext } from "../../../utilities/SchoolContext";

export default function Class(params: any) {
  const { students, classes, setClasses } = React.useContext(SchoolContext);
  const [visible, setVisible] = React.useState<boolean>(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  const addClass = (event: any) => {
    event.preventDefault();
    const data: any = new FormData(event.target);
    const newClass: any = {};
    newClass["id"] = classes.length + 1;
    [...data.entries()].forEach((Item: any) => {
      newClass[Item[0]] = Item[1];
    });
    setClasses([...classes, newClass]);
    toggleVisible();
  };

  const removeClass = (id: any) => {
    const newClasses = classes.filter((cls: any) => cls.id !== id);
    setClasses(newClasses);
  };

  return (
    <div className="h-full w-full flex flex-col items-center p-10">
      <h1 className="text-7xl uppercase">
        <Link to="/school">My School</Link>
      </h1>
      <div className="overflow-x-auto h-full w-full flex flex-col p-10">
        <div className="flex mb-9 items-end justify-between">
          <h4 className="text-xl font-bold">Classes</h4>
          <div className="font-sans">
            <Button onClick={toggleVisible}>
              <FaPlus /> &nbsp; Add new class
            </Button>
            <Modal open={visible}>
              <form onSubmit={addClass}>
                <Modal.Header className="font-bold text-center">
                  Add new class
                </Modal.Header>
                <Modal.Body>
                  <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text font-bold">Class name</span>
                      </label>
                      <Input name="name" required />
                    </div>
                  </div>
                  <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text font-bold">
                          Class Start Time
                        </span>
                      </label>
                      <Input name="startTime" type={"time"} required />
                    </div>
                  </div>
                  <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text font-bold">
                          Class End Time
                        </span>
                      </label>
                      <Input name="endTime" type={"time"} required />
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Actions>
                  <Button onClick={toggleVisible}>cancel</Button>
                  <Button type="submit">Add</Button>
                </Modal.Actions>
              </form>
            </Modal>
          </div>
        </div>
        <Table>
          <Table.Head className="text-center">
            <span />
            <span>Class Name</span>
            <span>Timing</span>
            <span>Student Count</span>
            <span></span>
          </Table.Head>

          <Table.Body>
            {classes.map((cls: any) => {
              return (
                <Table.Row key={cls.id} className="text-center">
                  <span>{cls.id}</span>
                  <span>{cls.name}</span>
                  <span>
                    {cls.startTime} - {cls.endTime}
                  </span>
                  <span>
                    {
                      students.filter((stu: any) =>
                        stu.classesEnrolled.includes(cls.id)
                      )?.length
                    }
                  </span>
                  <span>
                    <MdDelete
                      size={20}
                      onClick={() => removeClass(cls.id)}
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
