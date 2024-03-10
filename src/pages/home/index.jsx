import React, { useState } from "react";
import "../../assets/css/font.css";
import { Input, Button, ErrorSpan } from "../../component";
export default function Home() {
  const [firstNameInfo, setFirstNameInfo] = useState("");
  const [lastNameInfo, setLastNameInfo] = useState("");
  const [userNameInfo, setUserNameInfo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    firstNameInfo: "",
    lastNameInfo: "",
    userNameInfo: "",
    password: "",
  });

  const firstNamePattern = /^[a-zA-Z]+$/;

  const handleFirstNameChange = (e) => {
    const value = e.target.value;
    const isValid = firstNamePattern.test(value);
    setFirstNameInfo(value);
    setError({
      ...error,
      firstNameInfo: isValid ? "" : "Please enter a valid first name.",
    });
  };
  const handleLastNameChange = (e) => {
    const value = e.target.value;
    setFirstNameInfo(value);
    {
      setError(
        firstNamePattern.test(value)
          ? lastNameInfo
          : "Please enter a valid email address."
      );
    }
  };
  const handleUserNameChange = (e) => {
    const value = e.target.value;
    setFirstNameInfo(value);
    {
      setError(
        firstNamePattern.test(value)
          ? userNameInfo
          : "Please enter a valid email address."
      );
    }
  };
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setFirstNameInfo(value);
    {
      setError(
        firstNamePattern.test(value)
          ? password
          : "Please enter a valid email address"
      );
    }
  };

  const callValue = () => {
    console.log(firstNameInfo, lastNameInfo, userNameInfo, password);
  };

  const resetValue = () => {
    setFirstNameInfo("");
    setLastNameInfo("");
    setUserNameInfo("");
    setPassword("");
  };

  return (
    <div className="bg-warning vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className=" col-7 rounded shadow-lg bg-white d-flex flex-column justify-content-center align-items-center border border-5 border-primary ">
        <div className="w-100 d-flex flex-column align-items-center justify-content-center">
          <h1>Login</h1>

          <form className="w-100 d-flex flex-column " action="">
            <fieldset className="w-100 d-flex flex-column justify-content-center align-items-center">
              <Input
                labelValue="First Name"
                type=""
                labelClassName={"aaa pb-4"}
                classNameContainer="col-7 p-3 "
                className="w-100 py-2 ps-2 shadow-lg border-0"
                value={firstNameInfo}
                onChange={handleFirstNameChange}
              />
              <ErrorSpan
                value={
                  firstNameInfo
                    ? error.firstNameInfo
                      ? error.firstNameInfo
                      : null
                    : "must have a value"
                }
              />
            </fieldset>

            {/* <fieldset className="w-100 d-flex flex-column justify-content-center align-items-center">
              <Input
                labelValue="Last Name"
                type=""
                labelClasssName={"aaa pb-4"}
                classNameContainer="col-7 p-3 "
                className="w-100 py-2 ps-2 shadow-lg border-0"
                value={lastNameInfo}
                onChange={handleLastNameChange}
              />
              {error ? (
                <span className={"bg-danger text-light"}>
                  {"its not valid"}
                </span>
              ) : null}
            </fieldset>

            <fieldset className="w-100 d-flex flex-column justify-content-center align-items-center">
              <Input
                labelValue="User Name"
                type=""
                labelClassName={"aaa pb-4"}
                classNameContainer="col-7 p-3 "
                className="w-100 py-2 ps-2 shadow-lg border-0"
                value={userNameInfo}
                onChange={handleUserNameChange}
              />
              {error ? (
                <span className={"bg-danger text-light"}>
                  {"its not valid"}
                </span>
              ) : null}
            </fieldset>

            <fieldset className="w-100 d-flex flex-column justify-content-center align-items-center">
              <Input
                labelValue="Password"
                type="password"
                labelClassName={"aaa pb-4"}
                classNameContainer="col-7 p-3 "
                className="w-100 py-2 ps-2 shadow-lg border-0"
                value={password}
                onChange={handlePasswordChange}
              />
              {error ? (
                <span className={"bg-danger text-light"}>{error}</span>
              ) : null}
            </fieldset> */}
          </form>

          <div className="d-flex py-2 w-100 mb-4 justify-content-center gap-5 mt-3">
            <Button
              title="Reset"
              onClick={resetValue}
              className="col-2 py-2 border-0 bg-secondary text-light"
            />
            <Button
              title="sign UP"
              onClick={callValue}
              className="col-2 py-2 border-0 bg-secondary text-light"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
