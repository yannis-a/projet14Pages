import React, { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import Select from "react-select";
import Modal from "reactal";
import { useAppDispatch } from "../app/hook";
import { addEmployee } from "../features/employee/employeeSlice";
import { US_STATES, DEPARTMENT, MONTHS, YEARS } from "../app/data";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Formik } from "formik";

const Form = () => {
  const dispatch = useAppDispatch();
  const [state, setState] = useState("");
  const [department, setDepartment] = useState("");
  const [startDate, setStartDate] = useState();
  const [birthDay, setBirthDay] = useState();
  const [show, setShow] = useState(false);

  const [today, setToday] = useState(false);

  const changeState = (value) => {
    setState(value);
  };
  const changeDepartment = (value) => {
    setDepartment(value);
  };

  useEffect(() => {
    const allDay = Array.from(
      document.querySelectorAll("div.react-datepicker__day")
    );
    allDay.forEach((d) => {
      d.classList.remove("react-datepicker__day--keyboard-selected");
    });
  }, [today, setToday]);

  return (
    <div className="main">
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <a href={process.env.PUBLIC_URL + "/employees"} >
          View Current Employees
        </a>
        <h2 className="sr-only">Create Employee</h2>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            birthDay: "",
            startDate: "",
            street: "",
            city: "",
            state: "",
            zipCode: "",
            department: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            setShow(true);
            dispatch(addEmployee(values));
            setSubmitting(false);
          }}
        >
          {({ values, handleSubmit, isSubmitting, handleChange }) => (
            <form onSubmit={handleSubmit}>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                value={values.firstName}
                onChange={handleChange}
              />

              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                value={values.lastName}
                onChange={handleChange}
              />

              <label htmlFor="dateOfBirth">Date of Birth</label>
              <DatePicker
                renderCustomHeader={({
                  date,
                  changeYear,
                  changeMonth,
                  decreaseMonth,
                  increaseMonth,
                  prevMonthButtonDisabled,
                  nextMonthButtonDisabled,
                }) => (
                  <div
                    style={{
                      margin: 10,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <button
                      onClick={(e) => {
                        decreaseMonth();
                        return e.preventDefault();
                      }}
                      disabled={prevMonthButtonDisabled}
                    >
                      {"<"}
                    </button>
                    <button
                      onClick={(e) => {
                        var date = new Date();
                        setBirthDay(date);
                        values.birthDay = date.toLocaleDateString("en");
                        changeYear(date.getFullYear());
                        changeMonth(date.getMonth());
                        setToday(true);
                        return e.preventDefault();
                      }}
                    >
                      <AiFillHome />
                    </button>
                    <select
                      value={date.getFullYear()}
                      onChange={({ target: { value } }) => changeYear(value)}
                    >
                      {YEARS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>

                    <select
                      value={MONTHS[date.getMonth()]}
                      onChange={({ target: { value } }) =>
                        changeMonth(MONTHS.indexOf(value))
                      }
                    >
                      {MONTHS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>

                    <button
                      onClick={(e) => {
                        increaseMonth();
                        return e.preventDefault();
                      }}
                      disabled={nextMonthButtonDisabled}
                    >
                      {">"}
                    </button>
                  </div>
                )}
                selected={birthDay}
                onChange={(date) => {
                  setBirthDay(date);
                  setToday(false);
                  values.birthDay = date.toLocaleDateString("en");
                }}
              />

              <label htmlFor="start-date">Start Date</label>
              <DatePicker
                renderCustomHeader={({
                  date,
                  changeYear,
                  changeMonth,
                  decreaseMonth,
                  increaseMonth,
                  prevMonthButtonDisabled,
                  nextMonthButtonDisabled,
                }) => (
                  <div
                    style={{
                      margin: 10,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <button
                      onClick={(e) => {
                        decreaseMonth();
                        return e.preventDefault();
                      }}
                      disabled={prevMonthButtonDisabled}
                    >
                      {"<"}
                    </button>
                    <button
                      onClick={(e) => {
                        var date = new Date();
                        setStartDate(date);
                        values.startDate = date.toLocaleDateString("en");
                        changeYear(date.getFullYear());
                        changeMonth(date.getMonth());
                        setToday(true);
                        return e.preventDefault();
                      }}
                    >
                      <AiFillHome />
                    </button>
                    <select
                      id="selectBirthYear"
                      value={date.getFullYear()}
                      onChange={({ target: { value } }) => changeYear(value)}
                    >
                      {YEARS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>

                    <select
                      value={MONTHS[date.getMonth()]}
                      onChange={({ target: { value } }) =>
                        changeMonth(MONTHS.indexOf(value))
                      }
                    >
                      {MONTHS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>

                    <button
                      onClick={(e) => {
                        increaseMonth();
                        return e.preventDefault();
                      }}
                      disabled={nextMonthButtonDisabled}
                    >
                      {">"}
                    </button>
                  </div>
                )}
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date);
                  setToday(false);
                  values.startDate = date.toLocaleDateString("en");
                }}
              />

              <fieldset className="address">
                <legend>Address</legend>

                <label htmlFor="street">Street</label>
                <input
                  id="street"
                  type="text"
                  value={values.street}
                  onChange={handleChange}
                />

                <label htmlFor="city">City</label>
                <input
                  id="city"
                  type="text"
                  value={values.city}
                  onChange={handleChange}
                />

                <label htmlFor="state-button">State</label>
                <Select
                  id="state-button"
                  options={US_STATES}
                  value={state}
                  onChange={(e) => {
                    changeState(e);
                    values.state = e.value;
                  }}
                />
                <label htmlFor="zipCode">Zip Code</label>
                <input
                  id="zipCode"
                  type="number"
                  value={values.zipCode}
                  onChange={handleChange}
                />
              </fieldset>

              <label htmlFor="department-button">Department</label>
              <Select
                name="department"
                id="department"
                options={DEPARTMENT}
                value={department}
                onChange={(e) => {
                  changeDepartment(e);
                  values.department = e.label;
                }}
              />

              <button
                type="submit"
                className="addEmployee"
                disabled={isSubmitting}
              >
                Save
              </button>
            </form>
          )}
        </Formik>
      </div>
      <Modal show={show} onClose={() => setShow(false)}>
        Employee Created!
      </Modal>
    </div>
  );
};

export default Form;
