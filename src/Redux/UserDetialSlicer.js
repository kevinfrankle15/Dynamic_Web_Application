import { createSlice } from "@reduxjs/toolkit";
// import update from "immutability-helper";
JSON.parse(localStorage.getItem("registered-user"));
// const initialState = {
//   company_name: null,
//   email: null,
//   id: null,
//   mobile_number: null,
//   name: null,
// };
const initialState = { userDetail: [] };
const slice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    userDetials: (state, action) => {
      // state.value = action.payload;
      // var details = update(state, {
      //   id: { $set: action.payload.id },
      //   name: { $set: action.payload.name },
      // });
      var details = {
        userId: action.payload,
      };
      localStorage.setItem("registered-user", JSON.stringify(details));
      return state.userDetail.push(details);
    },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
  },
});

export const { userDetials } = slice.actions;
export default slice.reducer;
