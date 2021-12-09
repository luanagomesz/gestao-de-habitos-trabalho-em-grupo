import { MenuProvider } from "./Menu";

const Providers = ({ children }) =>{
    return(
        <MenuProvider>
        { children }
        </MenuProvider>
    )
}

export default Providers