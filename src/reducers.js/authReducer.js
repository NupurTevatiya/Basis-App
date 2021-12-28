import {
  REQUEST_EMAIL_VERIFICATION,
  SIGNUP_WITHOUT_REFER,
  VERIFY_EMAIL_TOKEN,
} from "../constants/actions";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_EMAIL_VERIFICATION:
      const { token } = action.payload;
      return { ...state, userInfo: { email: action.email, token } };

    case VERIFY_EMAIL_TOKEN:
      return {
        ...state,
        userInfo: { ...state.userInfo, ...action.payload, isVerified: true },
      };

    case SIGNUP_WITHOUT_REFER:
      return { ...state, loggedInUser: { ...action.payload }, loginSuccess: true };

    default:
      return state;
  }
};
