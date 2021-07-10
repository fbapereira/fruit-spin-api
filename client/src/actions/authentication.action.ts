import axios from "axios"
import { ThunkAction } from "redux-thunk"
import { User } from "../models/user.model"
import { AuthenticationState } from "../reducers/authentication.reducer"
import { toast } from "react-toastify"

export type AuthenticationAction = { type: "ADD_USER"; payload: AddUserPayload }

export interface AddUserPayload {
  user: User
  token: string
}

export interface CreateUserPayload {
  user: User
}
export const createUser = ({
  user,
}: CreateUserPayload): ThunkAction<void, AuthenticationState, unknown, AuthenticationAction> => {
  return async () => {
    try {
      const response = await axios.post("/user", user)
      toast.success(response.data.message)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
}

export interface LoginUserPayload {
  user: User
}
export const loginUser = ({
  user,
}: LoginUserPayload): ThunkAction<void, AuthenticationState, unknown, AuthenticationAction> => {
  return async (dispatch) => {
    debugger
    const tokenStream = await axios.post("/login", user)
    const token = tokenStream.data
    // todo do the invalid login
    toast.success("Logged")

    dispatch({
      type: "ADD_USER",
      payload: {
        user: tokenStream.data.user,
        token: token.token,
      },
    })
  }
}
