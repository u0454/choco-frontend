import { createSlice } from "@reduxjs/toolkit";

interface FormAuthSlice {
  emailValue: string;
  passwordValue: string;
  emailIsValid: boolean;
  passwordIsValid: boolean;
  emailIsTouched: boolean;
  passwordIsTouched: boolean;
}

const initialState: FormAuthSlice = {
  emailValue: "",
  passwordValue: "",
  emailIsValid: false,
  passwordIsValid: false,
  emailIsTouched: false,
  passwordIsTouched: false,
};

const formAuthSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    getEmail(state, action) {
      state.emailValue = action.payload;
    },
    getPassword(state, action) {
      state.passwordValue = action.payload;
    },
    emailValid(state, action) {
      state.emailIsValid = action.payload;
    },
    passwordValid(state, action) {
      state.passwordIsValid = action.payload;
    },
    emailTouched(state, action) {
      state.emailIsTouched = action.payload;
    },
    passwordTouched(state, action) {
      state.passwordIsTouched = action.payload;
    },
    resetFormState(state) {
      state.emailIsValid = false;
      state.emailIsTouched = false;
      state.passwordIsValid = false;
      state.passwordIsTouched = false;
    },
  },
});

export const {
  getEmail,
  getPassword,
  emailValid,
  passwordValid,
  emailTouched,
  passwordTouched,
  resetFormState,
} = formAuthSlice.actions;

export default formAuthSlice.reducer;