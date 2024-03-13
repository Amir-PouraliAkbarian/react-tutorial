import React, { useState } from "react";
import "../../assets/css/font.css";
import { Input, Button, ErrorSpan } from "../../component";
export default function Login() {
  const [userNameInfo, setUserNameInfo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    userNameInfo: "",
    password: "",
  });

  const userNamePattern =
    /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;

  const passwordPattern =
    /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;

  const handleUserNameChange = (e) => {
    const value = e.target.value;
    const isValid = userNamePattern.test(value);
    setUserNameInfo(value);
    setError({
      ...error,
      userNameInfo: isValid ? "" : "please enter Valid username",
    });
  };
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    const isValid = passwordPattern.test(value);
    setPassword(value);
    setError({
      ...error,
      password: isValid ? "" : "please enter valid password",
    });
  };

  const resetValue = () => {
    resetValue();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

      const isDuplicate = existingUsers.some(
        (user) => user.password === userNameInfo
      );

      if (isDuplicate) {
        setError({
          ...error,
          userNameInfo: "Username already exists",
        });

        return;
      }

      const uniqueId =
        existingUsers.length > 0
          ? Math.max(...existingUsers.map((user) => user.id)) + 1
          : 1;

      const newUser = {
        id: uniqueId,
        userNameInfo,
        password,
      };

      const updatedUsers = [...existingUsers, newUser];

      localStorage.setItem("users", JSON.stringify(updatedUsers));
      resetValue();
    }
  };

  const isFormValid = () => {
    return (
      userNameInfo &&
      password &&
      userNamePattern.test(userNameInfo) &&
      passwordPattern.test(password)
    );
  };

  // this is my html code

  return (
    <div className="bg-warning col-12 d-flex flex-column justify-content-center align-items-center">
      <div className=" col-7 rounded shadow-lg bg-white d-flex flex-column justify-content-center align-items-center border border-5 border-primary ">
        <div className="w-100 d-flex flex-column align-items-center justify-content-center">
          <h1>Login</h1>

          <form
            onSubmit={handleSubmit}
            className="w-100 d-flex flex-column "
            action="">
            <fieldset className="w-100 d-flex flex-column justify-content-center align-items-center">
              <Input
                labelValue="User Name"
                type=""
                labelClassName={" pb-4"}
                classNameContainer="col-7 p-3 "
                className="w-100 py-2 ps-2 shadow-lg border-0"
                value={userNameInfo}
                onChange={handleUserNameChange}
              />
              <ErrorSpan
                className="aaa bg-danger  shadow text-light"
                value={
                  userNameInfo
                    ? error.userNameInfo
                      ? error.userNameInfo
                      : null
                    : "must have a value"
                }
              />
            </fieldset>

            <fieldset className="w-100 d-flex flex-column justify-content-center align-items-center">
              <Input
                labelValue="Password"
                type="password"
                labelClassName={" pb-4"}
                classNameContainer="col-7 p-3 "
                className="w-100 py-2 ps-2 shadow-lg border-0"
                value={password}
                onChange={handlePasswordChange}
              />
              <ErrorSpan
                className="aaa bg-danger  shadow text-light"
                value={
                  password
                    ? error.password
                      ? error.password
                      : null
                    : "must have a value"
                }
              />
            </fieldset>

            <fieldset className="d-flex py-2 w-100 mb-4 justify-content-center gap-5 mt-3">
              {/* <Button
                title="Reset"
                onClick={resetValue}
                className="col-2 py-2 border-0 bg-secondary text-light"
                type={"reset"}
              /> */}
              <Button
                title="Login"
                onClick={handleSubmit}
                className="col-2 py-2 border-0 bg-secondary text-light"
                disabled={!isFormValid()}
                type="submit"
              />
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}
