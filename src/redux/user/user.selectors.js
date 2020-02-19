import { createSelector } from "reselect";

const selectUser = state => state.currentUser;

export const selectCurrentUser = state => createSelector(
    [selectUser],
    (user) => user.currentUser
)
