import api from "./api";

// Get All Leads
export const getLeads = async () => {
  const { data } = await api.get("/leads");
  return data;
};

// Get Single Lead
export const getLead = async (id) => {
  const { data } = await api.get(`/leads/${id}`);
  return data;
};

// Create Lead
export const createLead = async (leadData) => {
  const { data } = await api.post("/leads", leadData);
  return data;
};

// Update Lead
export const updateLead = async ({ id, leadData }) => {
  const { data } = await api.put(`/leads/${id}`, leadData);
  return data;
};

// Delete Lead
export const deleteLead = async (id) => {
  const { data } = await api.delete(`/leads/${id}`);
  return data;
};