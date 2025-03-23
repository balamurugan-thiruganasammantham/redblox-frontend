import { RootState } from "../configureStore";

export const profileInfoSelector = (state: RootState) => state.profile.profileInfo;