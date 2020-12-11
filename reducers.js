export const initialState = {
  sceneTransitionElements: {
    scene1Ancestor: null,
    scene1Node: null,
    scene2Ancestor: null,
    scene2Node: null
  }
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
            sunSign: action.payload,
          }),
        }),
      });
    case 'markSetupComplete':
      return Object.assign({}, state, {
        setupComplete: action.payload,
      });
    case 'userData':
      console.log('userdata');
      return Object.assign({}, state, {
        user: action.payload,
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
    case 'setIsLoading':
      return Object.assign({}, state, {
        isLoading: action.payload,
      });
    case 'setCheckedForUser':
      return Object.assign({}, state, {
        checkedForUser: action.payload,
      });
    case 'setSceneTransitionElement':
      return Object.assign({}, state, {
        sceneTransitionElements: Object.assign({}, state.sceneTransitionElements, action.payload)
      });
    default:
      return state;
  }
};

export default AstroReducers;
