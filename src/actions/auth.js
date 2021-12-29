import axios from "axios";
import {
  ERROR,
  REQUEST_EMAIL_VERIFICATION,
  SIGNUP_WITHOUT_REFER,
  SIGNUP_WITH_REFER,
  USER_LOGOUT,
  VERIFY_EMAIL_TOKEN,
} from "../constants/actions";

const BASE_URL = 'https://hiring.getbasis.co/candidate';

export const requestEmailVerification = (email) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/users/email`,
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
      `${BASE_URL}/users/email/verify`,
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
        `${BASE_URL}/users`,
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
    } else if (referCode) {
      const response = await axios.get(
        `${BASE_URL}/users/referral/${referCode}`
      );

      if (response?.data?.success) {
        const res = await axios.post(
          `${BASE_URL}/users`,
          {
            firstName: name,
            email,
            agreeToPrivacyPolicy: agree,
            token,
            source: "WEB_APP",
            referredCodeKey: referCode,
          }
        );
        dispatch({
          type: SIGNUP_WITH_REFER,
          payload: res?.data?.results?.user,
        });
      }
      else {
        dispatch({
          type: ERROR,
          payload: 'Invalid Referral Code',
        });
      }
    }
  } catch (e) {
    alert(e.message);
  }
};

export const logout =
  ({ id, token }) =>
  async (dispatch) => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${id},${token}` },
      };

      await axios.delete(
        `${BASE_URL}/users/logout/${id}`,
        config
      );

      dispatch({ type: USER_LOGOUT });
    } catch (e) {
      alert(e.message);
    }
  };
