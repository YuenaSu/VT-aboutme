import { AppStateType } from '../rootReducer';
import { IMe } from './types';

export const selectMe = (state: AppStateType): IMe => state.profile;