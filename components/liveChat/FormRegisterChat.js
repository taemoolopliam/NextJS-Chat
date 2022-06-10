import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Category from "../../data/categoeySupprot.json";

const FormRegisterChatSchema = Yup.object().shape({
  name: Yup.string().max(100, "กรุณาระบุตัวอักษร <=  ${max} ").required("กรุณาระบุชื่อ"),
  messages: Yup.string().required("กรุณาระบุข้อความ"),
  email: Yup.string().email("กรุณาตรวจสอบอีเมลอีกครั้ง").required("กรุณาตรวจสอบอีเมลอีกครั้ง"),
});

export default function FormRegisterChat() {
  return (
    <Formik
      validationSchema={FormRegisterChatSchema}
      initialValues={{
        name: "",
        categoryID: "",
        email: "",
        messages: "",
      }}
      onSubmit={async (values) => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="h-96 overflow-auto">
            <div className="px-5 pt-5">
              <b>*โปรดใส่ชื่อและอีเมลของคุณเพื่อเริ่มคุยกับเรา</b>
              <div className="from-group">
                <label htmlFor="email">อีเมล</label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  className={`${touched.email && !!errors.email ? "input-invalid " : ""}`}
                />
                <ErrorMessage
                  component="span"
                  name="email"
                  className={errors.email && touched.email ? "error-message" : ""}
                />
              </div>
              <div className="from-group">
                <label htmlFor="name">ชื่อ</label>
                <Field
                  id="text"
                  name="name"
                  type="name"
                  className={`${touched.name && !!errors.name ? "input-invalid " : ""}`}
                />
                <ErrorMessage
                  component="span"
                  name="name"
                  className={errors.name && touched.name ? "error-message" : ""}
                />
              </div>
              <div className="from-group">
                <label htmlFor="categoryID">ท่านต้องการติดต่อเจ้าหน้าที่เรื่องใด</label>
                <Field as="select" name="categoryID" id="categoryID" value="05">
                  {Category.map((value) => (
                    <option value={value.categoryID} key={value.categoryID}>
                      {value.categoryName}
                    </option>
                  ))}
                </Field>
              </div>
              <div className="from-group">
                <label htmlFor="messages">ข้อความ</label>
                <Field
                  name="messages"
                  id="messages"
                  cols="30"
                  rows="5"
                  as="textarea"
                  className={`${touched.messages && !!errors.messages ? "input-invalid " : ""}`}
                />
                <ErrorMessage
                  component="span"
                  name="messages"
                  className={errors.messages && touched.messages ? "error-message" : ""}
                />
              </div>
            </div>
          </div>
          <div className="p-2 flex justify-end items-center ">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none "
            >
              เริ่มต้นการแชท
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
