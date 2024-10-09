import { CATEGORY_SET, USER_SET, EDIT, PRODUCT_LOADING, REGISTER, LOGIN, DETAIL_SET, DETAIL_CATEGORY, IMAGE_DETAIL } from '../action/actionType'
// const BASE_URL = `http://localhost:3000`
const BASE_URL = `https://api-be-production.up.railway.app`
import { toast } from 'react-toastify';

// --------------------- REGISTER ----------------------\\
export const registerAction = () => ({
  type: REGISTER,
});

export const registerMiddleware = (data) => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        // access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify(data)
    });
    const responseJson = await response.json();
    if (!response.ok) {
      throw new Error(responseJson.message);
    }

    dispatch(registerAction(responseJson));
    toast.success("Registration successful!");
  } catch (err) {
    toast.error(err.message);
  }
};

// --------------------- LOGIN ----------------------\\
export const loginAction = (payload) => ({
  type: LOGIN,
  payload
}
);

export const loginMiddleware = (data) => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseJson = await response.json();

    if (!response.ok) {
      throw new Error(responseJson.message);
    }

    localStorage.setItem("access_token", responseJson.token);
    dispatch(loginAction(responseJson));
    toast.success("Login successful!");
    return true;
  } catch (err) {
    toast.error(err.message);
  }
};

// --------------------- PRODUCT ----------------------\\
export const fetchUser = (payload) => ({
  type: USER_SET,
  payload
});

export const setUser = () => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/list-user`, {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      }
    })
    const responseJson = await response.json();
    dispatch(fetchUser(responseJson))
  } catch (err) {
    console.log(err);
  }
}

// --------------------- DELETE USER ----------------------\\
export const deleteUserMiddleware = (id) => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/user/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
    });
    const responseJson = response.json();
    toast.success("Delete user successful!");
    console.log(responseJson);
  } catch (err) {
    console.log(err);
  }
};

// --------------------- EDIT USER ----------------------\\
export const editAction = (payload) => ({
  type: EDIT,
  payload,
});

export const editProduct = (data, id) => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/user/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token")
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error("Failed to update user");
    }
    const responseJson = await response.json();
    dispatch(editAction(responseJson));
    toast.success("Edit user successful!");

  } catch (err) {
    console.log("Error editing user:", err);
  }
};
