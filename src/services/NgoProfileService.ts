import instance from "./instance";

const url = "ngo-profile";

// Create a new NGO profile
export const createNgoProfileApi = (payload: any) =>
    instance.post(url, payload);

// Get all NGO profiles
export const getAllNgoProfilesApi = () => instance.get(url);

// Get a specific NGO profile by ID
export const getNgoProfileByIdApi = (id: string) =>
    instance.get(`${url}/${id}`);

export const getNgoProfileByUserIdApi = () => instance.get(`${url}/user`);

// Update a specific NGO profile by ID
export const updateNgoProfileApi = (id: string, payload: any) =>
    instance.patch(`${url}/${id}`, payload);

// Delete a specific NGO profile by ID
export const deleteNgoProfileApi = (id: string) =>
    instance.delete(`${url}/${id}`);
