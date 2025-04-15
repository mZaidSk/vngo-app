import instance from "./instance";

const url = "activities";

// Create a new activity
export const createActivityApi = (payload: any) => instance.post(url, payload);

// Get all activities
export const getAllActivitiesApi = () => instance.get(url);

// Get a specific activity by ID
export const getActivityByIdApi = (id: string) => instance.get(`${url}/${id}`);

// Get activities by NGO ID (if you need to filter activities by organization)
export const getActivitiesByNgoIdApi = () => instance.get(`${url}/ngo`);

// Get activities by user ID (if you need activities related to a user)
export const getActivitiesByUserIdApi = () => instance.get(`${url}/user`);

// Update a specific activity by ID
export const updateActivityApi = (id: string, payload: any) =>
    instance.patch(`${url}/${id}`, payload);

// Delete a specific activity by ID
export const deleteActivityApi = (id: string) =>
    instance.delete(`${url}/${id}`);
