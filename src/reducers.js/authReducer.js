import { REQUEST_EMAIL_VERIFICATION } from "../constants/actions";

  
  export const authReducer = (state = {}, action) => {
    switch (action.type) {
      case REQUEST_EMAIL_VERIFICATION:
          const { isLogin, token } = action.payload
        return { ...state,  userInfo: { email: action.email, isLogin, token  } };
    
      default:
        return state;
    }
  };
  
