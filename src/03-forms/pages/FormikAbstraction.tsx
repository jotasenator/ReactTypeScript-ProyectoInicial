import "../styles/styles.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components/MyTextInput";
import { MySelect } from "../components/MySelect";

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction Tutorial</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(10, "Debe tener 10 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("Debe tener un formato de email correcto")
            .required("Requerido"),
          terms: Yup.boolean().oneOf([true], "Debe de aceptar las condiciones"),
          jobType: Yup.string()
            .notOneOf(["it-junior"], "Esta opcion no es permitida")
            .required("Requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label={"First Name"}
              name={"firstName"}
              placeholder="First Name"
            />
            <MyTextInput
              label={"Last Name"}
              name={"lastName"}
              placeholder="Last Name"
            />
            <MyTextInput
              label={"Email"}
              name={"email"}
              placeholder="email@gmail.com"
              type="email"
            />

            <MySelect label={"Job Type"} name="jobType" as="select">
              <option value="">Choose</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-junior">IT Jr.</option>
            </MySelect>

            <label>
              <Field name="terms" type="checkbox" />
              Terms and conditions
            </label>
            <ErrorMessage name="terms" component={"span"} />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
