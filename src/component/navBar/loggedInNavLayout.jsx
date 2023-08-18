import LoggedInNavBar from "./loggedNavBar";

const LoggedInNavBarLayout = ({children}) => {
    return ( 
            <div className='flex flex-col items-center '>
            <LoggedInNavBar />
                {children}
            </div>
     );
}
 
export default LoggedInNavBarLayout;