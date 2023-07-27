import { UserProvider } from "./UserContext";
import { IProvidersProps } from "./@types";

const Providers = ({ children }: IProvidersProps) => (
  <UserProvider>{children}</UserProvider>
);

export default Providers;
