import React, { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

interface FormData {
  password: string;
}

const CheckPasswordStrenght = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, watch, reset } = useForm<FormData>();

  const pass = watch("password", "");

  const hasUppercase = [...pass].some((ch) => ch >= "A" && ch <= "Z");

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Password submitted:", data.password);
    reset();
  };

  return (
    <>
      <h1>Create password</h1>
      <h2>Enter secure password</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            {...register("password", { required: true })}
          />

          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <br />
        <label htmlFor="">
          <input type="checkbox" value="" />
        </label>
        <p>At least 8 Characters: {hasUppercase ? "Yes" : "No"}</p>
        <p>Contains uppercase character: {hasUppercase ? "Yes" : "No"}</p>
        <p>Contains lower character: {hasUppercase ? "Yes" : "No"}</p>
        <p>Contains digit {hasUppercase ? "Yes" : "No"}</p>
        <p>Contains a special character: {hasUppercase ? "Yes" : "No"}</p>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default CheckPasswordStrenght;
