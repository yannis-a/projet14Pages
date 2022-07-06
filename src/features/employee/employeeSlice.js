import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    firstName: "Izaac",
    lastName: "Newton",
    birthDay: "25/12/1645",
    startDate: "02/06/1705",
    street: "",
    city: "England",
    state: "LS",
    zipCode: "",
    department: "Phi",
  },
  {
    firstName: "Albert",
    lastName: "Einstein",
    birthDay: "19/03/1879",
    startDate: "18/09/1901",
    street: "",
    city: "German",
    state: "KW",
    zipCode: "",
    department: "Phy",
  }
];

export const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      const newEmployee = {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        birthDay: action.payload.birthDay,
        startDate: action.payload.startDate,
        street: action.payload.street,
        city: action.payload.city,
        state: action.payload.state,
        zipCode: action.payload.zipCode,
        department: action.payload.department,
      };
      state.push(newEmployee);
    },
  },
});

// Export of actions (reducer) that allow us to dispatch them
export const { addEmployee } = employeeSlice.actions;
// Exports of the selector that allow us to access state
export const selectEmployees = (state) => state.employees;
// Export of the reducer for the store
export default employeeSlice.reducer;
