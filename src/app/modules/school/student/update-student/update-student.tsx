import React from "react";
import { Button, Input, Link, Modal, Form, Checkbox } from "react-daisyui";
import { FaPlus } from "react-icons/fa";
import { SchoolContext } from "../../../../utilities/SchoolContext";

export default function UpdateStudent({ student }: any) {
  const { classes, setStudent } = React.useContext(SchoolContext);

  const [visible, setVisible] = React.useState<boolean>(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <>
      <Link onClick={toggleVisible} className="font-bold link-secondary">
        {student.name}
      </Link>
      <Modal open={visible}>
        <Form className="">
          <Modal.Header className="font-bold text-center">
            Add new student
          </Modal.Header>
          <Modal.Body>
            <div className="flex w-full flex-col items-center">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold">Student name</span>
                </label>
                <Input name="fName" required value={student.name} />
              </div>
              <div className="form-control w-full max-w-xs mt-4">
                <label className="label">
                  <span className="label-text font-bold">Marks</span>
                </label>
                <ul>
                  {classes.map((cls: any) => {
                    if (student.classesEnrolled.includes(cls.id)) {
                      return (
                        <li>
                          <Form.Label
                            className="flex flex-row justify-between gap-4 font-bold uppercase"
                            title={cls.name}
                          >
                            <Checkbox />
                            <Input
                              value={student.marksPerClass[cls.id]}
                              type="number"
                            />
                          </Form.Label>
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
            </div>
          </Modal.Body>
          <Modal.Actions>
            <Button onClick={toggleVisible}>cancel</Button>
            <Button type="submit">Add</Button>
          </Modal.Actions>
        </Form>
      </Modal>
    </>
  );
}
