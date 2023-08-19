import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface IAuthContext {
  token: string | null;
  setToken: Dispatch<SetStateAction<string | null>>;
  // isAuthentified?: boolean;
  // setIsAuthentified?: Dispatch<SetStateAction<boolean>>;
}

interface AProps extends PropsWithChildren {}
interface Props extends PropsWithChildren {}

const AuthContext = createContext({} as IAuthContext);

const AuthProvider = ({ children }: AProps) => {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  // const [isAuthentified, setIsAuthentified] = useState(false);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

// const RequireAuth = ({ children }: Props) => {
//   const auth = useAuth();
//   console.log("auth.token in requireauth", auth.token);

//   if (!auth.token) {
//     return <Navigate to={"/"} />;
//   }

//   return <div>{children}</div>;
// };

export { AuthContext, AuthProvider, useAuth };
