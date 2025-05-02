// src/api/volunteerProfileApi.ts

import instance from "./instance";

const url = "volunteer-profile";

// Create a new Volunteer Profile
export const createVolunteerProfileApi = (payload: any) =>
    instance.post(url, payload);

// Get all Volunteer Profiles
export const getAllVolunteerProfilesApi = () => instance.get(url);

// Get a specific Volunteer Profile by ID
export const getVolunteerProfileByIdApi = (id: string) =>
    instance.get(`${url}/${id}`);

// Get a specific Volunteer Profile by User ID
export const getVolunteerProfileByUserIdApi = (id: string) =>
    instance.get(`${url}/user/${id}`);

// Update a specific Volunteer Profile by ID
export const updateVolunteerProfileApi = (id: string, payload: any) =>
    instance.patch(`${url}/${id}`, payload);

// Delete a specific Volunteer Profile by ID
export const deleteVolunteerProfileApi = (id: string) =>
    instance.delete(`${url}/${id}`);
