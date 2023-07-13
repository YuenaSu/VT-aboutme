import { AnyAction } from 'redux';
import { ProfileActions } from './consts';

interface IInitialStateProfile {
  firstName: string;
  lastName: string;
  intro: string;
}

const initialState: IInitialStateProfile = {
  firstName: 'Yuena',
  lastName: 'Su',
  intro: 'Having recently completed my master program in Information Systems at Northeastern University, I find the great interest as a software developer in crafting user-friendly web interfaces with sleek and intuitive designs. I have a deep passion for designing new features and functions for products and translating those designs into fully functional software. '
};

export const profileReducer = (state = initialState, action: AnyAction): IInitialStateProfile => {
  switch (action.type) {
    case ProfileActions.CHANGE_NAME: {
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };
    }
    case ProfileActions.CHANGE_INTRO: {
      return {
        ...state,
        intro: action.payload.intro,
      };
    }
    default:
      return state;
  }
};

