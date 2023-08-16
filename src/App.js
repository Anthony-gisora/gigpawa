import './App.css';
import { Route, Routes } from 'react-router-dom';
import JobSeeker from './pages/signUp/JobSeeker/jobSeeker';
import ClientSignUp from './pages/signUp/client/client';
import NavBarLayout from './component/navBar/layout';
import LandingPage from './pages/landingPage/landingPage';
import SignUpLandingPage from './pages/signUp/signUp';
import Testing from './component/testing/texting';
import Footer from './component/footer/footer';
import styles from "./Stayles/navBar.module.css" 
import CreateProfile from './pages/createProfile/CreateProfile';
import LogIn from './pages/login/logIn';
import ResetPass from './pages/resetPassword/researtPassword';
import UsingEmail from './pages/resetPassword/resetUsingEmail';
import Verification from './pages/resetPassword/verification';
import NewPassword from './pages/resetPassword/newPassword';
import GigPawa from './pages/gigPawa/gigPawa';


function App() {
  return (
    <Routes>
      <Route path='/' element={
        <NavBarLayout>
          <div className="App">
            <div className={ styles.searchSec }>
                <div className={styles.searchCont}>
                    <input className={ styles.searchInput } type="search" placeholder="Search for Job e.g Virtial Assistant" />
                    <button className={styles.searchBtn}>search</button>
                </div>
            </div>
            <LandingPage />
            <Footer />
          </div>
          </NavBarLayout>
      } />
      <Route path='/gigpawa' element={
        <NavBarLayout>
          <div className="App">
            <div className={ styles.searchSec }>
                <div className={styles.searchCont}>
                    <input className={ styles.searchInput } type="search" placeholder="Search for Job e.g Virtial Assistant" />
                    <button className={styles.searchBtn}>search</button>
                </div>
            </div>
            <GigPawa />
            <Footer />
          </div>
          </NavBarLayout>
      } />
      <Route path='/testing' element={
        <Testing />
      } />
      <Route path='/signUp' element={
        <NavBarLayout>
          <div className="App">
            <SignUpLandingPage />
          </div>
          </NavBarLayout>
      } />
      <Route path="/signup/client" element={
        <NavBarLayout>
          <div className="App">
            <ClientSignUp />
          </div>
          </NavBarLayout>
      } />
      <Route path="/signup/jobseeker"
        element={
          <NavBarLayout>
            <div className="App">
              <JobSeeker />
                <div className="footer">
              </div>
            </div>
          </NavBarLayout>
        } />
      <Route path="/login"
        element={
          <NavBarLayout>
            <div className="App">
              <LogIn />
                <div className="footer">
              </div>
            </div>
          </NavBarLayout>
        } />
      <Route path="/create profile"
        element={
          <NavBarLayout>
            <div className="App">
              <CreateProfile />
                <div className="footer">
              </div>
            </div>
          </NavBarLayout>
        } />
      <Route path="/reset password"
        element={
          <NavBarLayout>
            <div className="App">
              <ResetPass />
                <div className="footer">
              </div>
            </div>
          </NavBarLayout>
        } />
      <Route path="/reset using email"
        element={
          <NavBarLayout>
            <div className="App">
              <UsingEmail />
                <div className="footer">
              </div>
            </div>
          </NavBarLayout>
        } />
      <Route path="/verification"
        element={
          <NavBarLayout>
            <div className="App">
              <Verification />
                <div className="footer">
              </div>
            </div>
          </NavBarLayout>
        } />
      <Route path="/new password"
        element={
          <NavBarLayout>
            <div className="App">
              <NewPassword />
                <div className="footer">
              </div>
            </div>
          </NavBarLayout>
        } />
    </Routes>
    
  );
}

export default App;
