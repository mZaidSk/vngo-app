import instance from "./instance";

const url = "application";

// Create a new Application
export const createApplicationApi = (payload: any) =>
    instance.post(url, payload);

// Get all Applications
export const getAllApplicationsApi = () => instance.get(url);

// Get a specific Application by ID
export const getApplicationByIdApi = (id: string) =>
    instance.get(`${url}/${id}`);

// Update a specific Application by ID
export const updateApplicationApi = (id: string, payload: any) =>
    instance.patch(`${url}/${id}`, payload);

// Delete a specific Application by ID
export const deleteApplicationApi = (id: string) =>
    instance.delete(`${url}/${id}`);

// Get all applications by a specific user ID
export const getApplicationsByUserIdApi = (userId: string) =>
    instance.get(`${url}/user/${userId}`);

// Get all applications by a specific activity ID
export const getApplicationsByActivityIdApi = (activityId: string) =>
    instance.get(`${url}/activity/${activityId}`);

// Generate and assign a certificate to an application
export const generateApplicationCertificateApi = (payload: {
    userId: string;
    applicationId: string;
}) => instance.post(`${url}/certificate`, payload);
