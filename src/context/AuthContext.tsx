import { ReactNode, createContext, useEffect, useReducer } from "react";
import {
  ActionMap,
  AuthState,
  AuthUser,
  ContextType,
} from "../common/types/auth";
import { ELocalStorageKeys } from "../common/enums";
import { getApi } from "../common/apis/main.api";
import { authApi } from "../common/apis/auth.api";
import { setSession } from "../utils/jwt";

type AuthProp = {
  children: ReactNode;
};

const initialState: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};
enum Types {
  Initial = "INITIALIZE",
  Login = "LOGIN",
  Logout = "LOGOUT",
  Register = "REGISTER",
}

type AuthPayload = {
  [Types.Initial]: {
    isAuthenticated: boolean;
    user: AuthUser;
  };
  [Types.Login]: {
    user: AuthUser;
  };
  [Types.Logout]: undefined;
  [Types.Register]: {
    user: AuthUser;
  };
};

export type AuthActions = ActionMap<AuthPayload>[keyof ActionMap<AuthPayload>];

const AuthReducer = (state: AuthState, action: AuthActions) => {
  switch (action.type) {
    case "INITIALIZE":
      return {
        isAuthenticated: action.payload.isAuthenticated,
        isInitialized: true,
        user: action.payload.user,
      };
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };

    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };

    default:
      return state;
  }
};

const AuthContext = createContext<ContextType | null>(null);

const AuthProvider = ({ children }: AuthProp) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    const initilize = async () => {
      try {
        const accessToken = localStorage.getItem(
          ELocalStorageKeys.ACCESS_TOKEN
        );
        if (accessToken) {
          const res = await getApi({ url: authApi.profile });
          if (res.data) {
            dispatch({
              type: Types.Initial,
              payload: {
                isAuthenticated: true,
                user: res.data,
              },
            });
          } else {
            // show toast access token expired
            dispatch({
              type: Types.Initial,
              payload: {
                isAuthenticated: false,
                user: null,
              },
            });
          }
        } else {
          dispatch({
            type: Types.Initial,
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (error) {
        console.error(error);
        dispatch({
          type: Types.Initial,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    initilize();
  }, []);

  const login = async () => {
    const res = await getApi({ url: authApi.profile });
    dispatch({
      type: Types.Login,
      payload: {
        user: res.data,
      },
    });
  };

  const register = () => {};

  const logout = async () => {
    setSession(null);
    dispatch({ type: Types.Logout });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
