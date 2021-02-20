import axios from "axios";

axios.defaults.baseURL = "http://localhost:5055";
const path = "/contacts";

export const getContacts = () => {
  return axios.get(path).then((response) => response.data);
};

export const uploadContacts = (contact) => {
  return axios.post(path, contact).then((response) => response.data);
};

export const removeContacts = (contactId) => {
  return axios.delete(`${path}/${contactId}`);
};
