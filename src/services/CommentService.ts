import instance from "./instance";

const url = "comments";

// Create a new Comment
export const createCommentApi = (payload: any) => instance.post(url, payload);

// Get all Comments
export const getAllCommentsApi = () => instance.get(url);

// Get a specific Comment by ID
export const getCommentByIdApi = (id: string) => instance.get(`${url}/${id}`);

// Update a specific Comment by ID
export const updateCommentApi = (id: string, payload: any) =>
    instance.patch(`${url}/${id}`, payload);

// Delete a specific Comment by ID
export const deleteCommentApi = (id: string) => instance.delete(`${url}/${id}`);
