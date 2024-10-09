import axios from "axios";
export const servalUrl = "http://localhost:8000";

const getRequest = async (endpoint) => {
  const response = await axios.get(`${servalUrl}${endpoint}`);
  console.log("..........", response);
  if (response.statusText === "OK") {
    return response.data.data;
  } else {
  }
};

export const postRequest = async (endpoint, body, options) => {
  console.log("formData", body, options);
  try {
    const response = await axios.post(`${servalUrl}${endpoint}`, body, {
      ...options,
    });
    if (response.statusText === "OK") {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteRequest = async (endpoint, id) => {
  const response = await axios.delete(`${servalUrl}${endpoint}/${id}`);
  console.log("|||||||||", response);
  if (response.statusText === "OK") {
    return true;
  } else {
    return false;
  }
};

export const updateRequest = async (endpoint,formData,options) => {
  try {
    const response = await axios.put(`${servalUrl}${endpoint}`, formData, {
      ...options,
    });
    if (response.statusText === "OK") {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export default getRequest;
