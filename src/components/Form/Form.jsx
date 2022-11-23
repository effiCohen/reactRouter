import React from "react";
import { useForm } from "react-hook-form";
import "./form.css";

const Form = () => {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSub = (data) => {
    console.log(data);
  };

  return (
    <div className=" d-flex flex-column align-items-center mt-4  ">
      <div>
        <h1>sign Up</h1>
      </div>
      <form
        onSubmit={handleSubmit(onSub)}
        className="col-9 col-md-5 col-lg-2 mt-3 col m-0 p-0 "
      >
        <div>
          <label className="label">First name</label>
          <input
            className="form-control mx-auto"
            {...register("firstName", {
              required: { value: true, message: "first name is requried" },
              minLength: {
                value: 2,
                message: "first name must be at least 2 characters",
              },
            })}
          />
          {errors.firstName && errors.firstName.type == "required" && (
            <small className="error">{errors?.firstName?.message}</small>
          )}
          {errors.firstName && errors.firstName.type == "minLength" && (
            <small className="error">{errors?.firstName?.message}</small>
          )}
        </div>
        <div>
          <label className="label">last name</label>
          <input
            className="form-control bg-success"
            {...register("lastName", {
              required: { value: true, message: "last name is requried" },
              minLength: {
                value: 2,
                message: "last name must be at least 2 characters",
              },
            })}
          />
          {errors.lastName && errors.lastName.type == "required" && (
            <small className="error">{errors?.lastName?.message}</small>
          )}
          {errors.lastName && errors.lastName.type == "minLength" && (
            <small className="error">{errors?.lastName?.message}</small>
          )}
        </div>
        <div>
          <label className="label">Email</label>
          <input className=" form-control bg-primary"
            {...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
         
          />
          {errors.email && <small className="error">invalid email</small>}
        </div>
        <div>
          <label className="label">password</label>
          <input
            type={"password"}
            className="form-control bg-warning"
            {...register("password", {
              required: { value: true, message: "password is requried" },
              minLength: {
                value: 8,
                message: "password must be at least 8 characters",
              },
            })}
          />
          {errors.password && errors.password.type == "required" && (
            <small className="error">{errors?.password?.message}</small>
          )}
          {errors.password && errors.password.type == "minLength" && (
            <small className="error">{errors?.password?.message}</small>
          )}
        </div>
        <div>
          <label className="label">confirm password</label>
          <input className="form-control" type={"password"} {...register('confirmPassword', { required:true  ,validate: value =>value === getValues("Password") || "The passwords do not match"} )}/>
            {errors.confirmPassword && <small className='text-danger'>{ errors.confirmPassword.message}</small>}

        </div>
        <div>
          <label className="label">phone</label>
          <input
            className="form-control bg-danger"
            {...register("phone", {
              required: { value: true, message: "phone is requried" },
              minLength: {
                value: 10,
                message: "phone must be at least 10 characters",
              },
            })}
          />
          {errors.phone && errors.phone.type == "required" && (
            <small className="error">{errors?.phone?.message}</small>
          )}
          {errors.phone && errors.phone.type == "minLength" && (
            <small className="error">{errors?.phone?.message}</small>
          )}
        </div>
        <div className="d-flex text-center   justify-content-center">
          <button className="btn mt-2">sumbit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
