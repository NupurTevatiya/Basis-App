import axios from "axios";
import {
  REQUEST_EMAIL_VERIFICATION,
  SIGNUP_WITHOUT_REFER,
  VERIFY_EMAIL_TOKEN,
} from "../constants/actions";

export const requestEmailVerification = (email) => async (dispatch) => {
  try {
    const res = await axios.post(
      "https://hiring.getbasis.co/candidate/users/email",
      {
        email,
      }
    );

    dispatch({
      type: REQUEST_EMAIL_VERIFICATION,
      payload: res?.data?.results,
      message: res?.data?.success && "Success!",
      email,
    });
  } catch (e) {
    alert(e.message);
  }
};
export const verifyEmailToken = (user) => async (dispatch) => {
  try {
    const res = await axios.put(
      "https://hiring.getbasis.co/candidate/users/email/verify",
      {
        ...user,
      }
    );

    dispatch({
      type: VERIFY_EMAIL_TOKEN,
      payload: res?.data?.results,
    });
  } catch (e) {
    alert(e.message);
  }
};

export const signup = (user) => async (dispatch) => {
  try {
    const { email, name, agree, token, referCode } = user;
    console.log(user, "user in signup action");

    if (!referCode) {
      const res = await axios.post(
        "https://hiring.getbasis.co/candidate/users",
        {
          firstName: name,
          email,
          agreeToPrivacyPolicy: agree,
          token,
          source: "WEB_APP",
        }
      );
      dispatch({
        type: SIGNUP_WITHOUT_REFER,
        payload: res?.data?.results?.user,
      });
    }
  } catch (e) {
    alert(e.message);
  }
};
