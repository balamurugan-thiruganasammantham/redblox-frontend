import { resetState as resetProfileState } from 'store/reducers/profile';
import type { AppDispatch } from 'store/configureStore';


export const cleanStoreDataOnUserLogOut = (dispatch: AppDispatch) => {
  dispatch(resetProfileState());
};
