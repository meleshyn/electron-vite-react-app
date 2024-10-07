import React from 'react'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../services/apiService'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'

const Register: React.FC = () => {
  const navigate = useNavigate()

  const initialValues = { name: '', email: '', phone: '', password: '' }

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string(),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required')
  })

  const handleSubmit = async (values: typeof initialValues): Promise<void> => {
    try {
      await registerUser(values)
      toast.success('Registration successful!')
      navigate('/login') // Redirect to the login page after successful registration
    } catch (error) {
      toast.error('Registration failed. Please try again.')
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <Field name="name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
            <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <Field
              name="email"
              type="email"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium">Phone</label>
            <Field
              name="phone"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
            <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <Field
              name="password"
              type="password"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
            <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default Register
