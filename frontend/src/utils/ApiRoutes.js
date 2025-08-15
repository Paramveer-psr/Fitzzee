export const server = "http://localhost:8000/api";

//user routes
export const registerRoute = `${server}/auth/register`;
export const loginRoute = `${server}/auth/login`;

//review routes
export const addReviewRoute = `${server}/review/add-review`;
export const deleteReviewRoute = `${server}/review/delete-review`;
export const viewReviewRoute = `${server}/review/view-review`;
