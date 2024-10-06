import React from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../services/apiService'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'

const Login: React.FC = () => {
  const navigate = useNavigate()

  const initialValues = { email: '', password: '' }

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required')
  })

  const handleSubmit = async (values: typeof initialValues) => {
    try {
      await loginUser(values)
      toast.success('Login successful!')
      navigate('/dashboard') // Redirect to the dashboard after successful login
    } catch (error) {
      toast.error('Login failed. Please check your credentials and try again.')
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-4">
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
            <label className="block text-sm font-medium">Password</label>
            <Field
              name="password"
              type="password"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
            <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default Login
