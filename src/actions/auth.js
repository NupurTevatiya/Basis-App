import axios from "axios";
import { REQUEST_EMAIL_VERIFICATION } from "../constants/actions";

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
