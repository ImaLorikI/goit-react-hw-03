import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { useId } from 'react';
import * as Yup from 'yup';

const dataSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required name'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(10, 'Too Long!')
    .matches(
      /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/g,
      'Must be only digits'
    )
    .required('Required number'),
});

export const ContactForm = ({ AddContact }) => {
  const nameFiealId = useId();
  const numberFiealId = useId();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(values, action) => {
        const addCon = {
          id: nanoid(),
          name: values.name,
          number: values.number,
        };
        AddContact(addCon);
        action.resetForm();
      }}
      validationSchema={dataSchema}
    >
      <Form className={css.form}>
        <div className={css.div}>
          <div className={css.items}>
            <label htmlFor={nameFiealId}> Username:</label>
            <Field className={css.input} type="text" name="name" id={nameFiealId}></Field>
            <ErrorMessage className={css.error} component="span" name="name" />
          </div>
          <div className={css.items}>
            <label className={css.label} htmlFor={numberFiealId}>
              Number:
            </label>
            <Field className={css.input} type="text" name="number" id={numberFiealId}></Field>
            <ErrorMessage className={css.error} component="span" name="number" />
          </div>
        </div>
        <button type="submit" className={css.button}>
          Add user
        </button>
      </Form>
    </Formik>
  );
};
