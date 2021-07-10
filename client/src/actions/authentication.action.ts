import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { toast } from "react-toastify";

import { AuthenticationState } from "../reducers/authentication.reducer";
import { User } from "../models/user.model";

export type AuthenticationAction = { type: "ADD_USER"; payload: AddUserPayload }

export interface AddUserPayload {
  user: User
  token: string
}

export const createUser = (user: User):
  ThunkAction<void, AuthenticationState, unknown, AuthenticationAction> => async () => {
    try {
      const response = await axios.post("/user", user);
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

export const loginUser = (user: User):
  ThunkAction<void, AuthenticationState, unknown, AuthenticationAction> => async (dispatch) => {
    debugger;
    const tokenStream = await axios.post("/login", user);
    const token = tokenStream.data;
    // todo do the invalid login
    toast.success("Logged");

    dispatch({
      type: "ADD_USER",
      payload: {
        user: tokenStream.data.user,
        token: token.token
      }
    });
  };
