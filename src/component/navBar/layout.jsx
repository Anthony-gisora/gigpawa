import NavBar from "./navBar";


const NavBarLayout = ({children}) => {
    return ( 
        <>
            <NavBar />
            <div>
                {children}
            </div>
        </>
     );
}
 
export default NavBarLayout;