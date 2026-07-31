import api from "./api";

export const getCustomers = async () => {
  const { data } = await api.get("/customers");
  return data;
};

export const getCustomer = async (id) => {
  const { data } = await api.get(`/customers/${id}`);
  return data;
};

export const createCustomer = async (customer) => {
  const { data } = await api.post("/customers", customer);
  return data;
};

export const updateCustomer = async ({ id, customer }) => {
  const { data } = await api.put(`/customers/${id}`, customer);
  return data;
};

export const deleteCustomer = async (id) => {
  const { data } = await api.delete(`/customers/${id}`);
  return data;
};