export const initialState = {
  initializing: true,
  introduced: false,
  signedIn: false,
  user: null,
  birthdate: null,
  setupComplete: false,
  profile: {
    starSign: null,
    birthMonth: null,
    birthDay: null,
    birthTime: null,
    birthLocation: null,
  },
};

const AstroReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'introduced':
      return Object.assign({}, state, {
        introduced: true,
      });
    case 'signIn':
      return Object.assign({}, state, {
        signedIn: true,
        setupComplete: action.payload,
      });
    case 'setBirthdate':
      return Object.assign({}, state, {
        birthdate: action.payload,
      });
    case 'profileBirth':
      return Object.assign({}, state, {
        user: Object.assign({}, state.user, {
          profile: Object.assign({}, state.user.profile, {
            birthMonth: action.payload[0],
            birthDay: action.payload[1],
          }),
        }),
      });
    case 'setSunSign':
        return Object.assign({}, state, {
            user: Object.assign({}, state.user, {
              profile: Object.assign({}, state.user.profile, {
                sunSign: action.payload
              }),
            }),
          });
    case 'markSetupComplete':
      return Object.assign({}, state, {
        setupComplete: action.payload,
      });
    case 'userData':
      return Object.assign({}, state, {
        user: Object.assign({}, state.user, action.payload),
      });
    case 'signOut':
      return Object.assign({}, state, {
        signedIn: false,
      });
    case 'resetProfile':
      return Object.assign({}, state, {
        setupComplete: false,
      });
    case 'setProfilePicture':
      return Object.assign({}, state, {
        user: Object.assign({}, state.user, {
          profilePicture: action.payload,
        }),
      });
    case 'setUsername':
      return Object.assign({}, state, {
        user: Object.assign({}, state.user, {
          username: action.payload,
        }),
      });
    default:
      return state;
  }
};

export default AstroReducers;
