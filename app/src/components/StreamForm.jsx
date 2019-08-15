import React from 'react'
import { Field, Form, Formik, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { useStoreActions } from 'easy-peasy'

export default function StreamForm() {
  const createStream = useStoreActions(action => action.stream.addStream)

  return (
    <Formik
      initialValues={{ title: '', description: '' }}
      validationSchema={localSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        await createStream(values)
      }}
    >
      {({ isSubmitting }) => (
        <Form className='ui form error'>
          <div className='field'>
            <label>Title</label>
            <Field type='text' name='title' />
            <ErrorMessage
              className='ui error message'
              name='title'
              component='div'
            />
          </div>
          <div className='field'>
            <label>Description</label>
            <Field type='text' name='description' />
            <ErrorMessage
              className='ui error message'
              name='description'
              component='div'
            />
          </div>

          <button
            className='ui button primary'
            type='submit'
            disabled={isSubmitting}
          >
            create
          </button>
        </Form>
      )}
    </Formik>
  )
}

const localSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required()
})
