import { StyledForm } from "./styles"
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form"

type FormData = {
  email: string,
  password: string
}

export const LoginForm = () => {

  const { register, handleSubmit, formState: { errors }} = useForm<FormData>()

  const onFormSubmit: SubmitHandler<FormData> = (data) => {
      alert('submit')
  } 

  const onFormError: SubmitErrorHandler<FormData> = (errors) => {

  } 

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

  return (
    <StyledForm onSubmit={ handleSubmit(onFormSubmit, onFormError)}>
      <h1 className="font-bold text-3xl">Login</h1>
      <input {...register("email", { required: "This field cannot be empty.", pattern: {value: emailRegex, message: 'Invalid email type'}})} type="email" placeholder="email" />
      <p className="error" >{errors.email && errors.email.message}</p>
      <input {...register("password", { required: "This field cannot be empty.", minLength: { value: 8, message: "The password field must have 8 characters." }})} type="password" placeholder="password" />
      <p className="error">{errors.password && errors.password.message}</p>
      <button type="submit">Login</button>
      <p>Not registered? <span><a>create an account</a></span></p>
    </StyledForm>
  )
}