import { ProfileActions } from './consts';

export const changeName = (firstName: string, lastName: string): any => ({
  type: ProfileActions.CHANGE_NAME,
  payload: { lastName, firstName },
});

export const changeIntro = (intro: string): any => ({
  type: ProfileActions.CHANGE_INTRO,
  payload: { intro },
});