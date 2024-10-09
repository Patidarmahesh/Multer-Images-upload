import React, { useContext, useEffect } from "react";
import { Modal, Input, Button, Text } from "@nextui-org/react";
import { ModalData } from "../../usecontext";
import { useForm } from "react-hook-form";
import getRequest, {
  postRequest,
  putRequest,
  updateRequest,
} from "../apihandler";
import User_Table from "../table";

export default function ModalVisible() {
  const { visible, closeHandler, setData, data, userId, setUserId, handler } =
    useContext(ModalData);
  const { reset, handleSubmit, register, setValue } = useForm();

  const getData = async () => {
    const response = await getRequest("/student");
    console.log("))))))))))))))", response);
    if (response) {
      setData(response);
    } else {
    }
  };

  const userFormData = async (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("age", values.age);
    for (let i = 0; i < values.image.length; i++) {
      formData.append("image", values.image[i]);
    }

    const response = await postRequest("/student", formData, {
      Headers: {
        "content-Type": "multipart/form-data",
      },
    });
    if (response) {
      reset();
      closeHandler();
      getData();
    } else {
    }
  };

  const UpdateData = async (id, values) => {
    setUserId(id);
    setValue("name", values.name);
    setValue("age", values.age);
    setValue("email", values.email);
    setValue("image", values.image);
    handler();
  };

  const editFormData = async (values) => {
    if (!values) {
      return;
    }
    console.log("values", values);
    const formData = new FormData();
    if (values.name) formData.append("name", values.name);
    if (values.email) formData.append("email", values.email);
    if (values.age) formData.append("age", values.age);
    if (values.image) formData.append("image", values.image[0]);
    const response = await updateRequest(`/student/${userId}`, formData, {
      Headers: {
        "content-Type": "multipart/form-data",
      },
    });
    if (response) {
      reset();
      closeHandler();
      getData();
    } else {
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome to
            <Text b size={18}>
              NextUI
            </Text>
          </Text>
        </Modal.Header>
        <form
          onSubmit={
            userId ? handleSubmit(editFormData) : handleSubmit(userFormData)
          }
        >
          <Modal.Body>
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              name="name"
              type="text"
              {...register("name", {
                required: true,
              })}
              placeholder="Name"
            />
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              name="email"
              type="email"
              {...register("email", {
                required: true,
              })}
              placeholder="Email"
            />
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              name="age"
              type="number"
              {...register("age", {
                required: true,
              })}
              placeholder="Age"
            />
            <input
              type="file"
              name="image"
              multiple
              {...register("image")}
              style={{ width: "90%", border: "1px solid red", padding: "10px" }}
            />
            <Button
              style={{ color: "red", background: "black", fontSize: "18px" }}
              type="submit"
            >
              Submit User
            </Button>
          </Modal.Body>
        </form>
        <Modal.Footer></Modal.Footer>
      </Modal>
      <User_Table getData={getData} UpdateData={UpdateData} />
    </div>
  );
}
