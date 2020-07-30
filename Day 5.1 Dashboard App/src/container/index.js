/* eslint-disable react/prop-types */
import React, { createContext, useReducer } from 'react';
const defaultValue = () => ({
  user: {
    isAuthenticated: false,
    user: {},
    error: null,
    accessTokens: {}, // This will hold all integrated API and graph access tokens
    settings: null,
  },
  jobData: {}
});

const ConfigReducer = (state, action) => {
  switch (action.type) {
    case 'update-state': {
      const user = action.user ? action.user : {};
      // eslint-disable-next-line no-console
      return { ...state, user };
    }
    default:
      return state;
  }
};

export const ApplicationContext = createContext({});

export default function ApplicationCtxProvider({ children }) {
  const [state, dispatch] = useReducer(ConfigReducer, defaultValue());
  return (
    <ApplicationContext.Provider value={{ state, dispatch }}>
      {children}
    </ApplicationContext.Provider>
  );
}

