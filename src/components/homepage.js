import NavBar from './navBar'
import Listings from './listings'
import LandingPage from './landingpage'
import Footer from './footerSection'
import About from  './about'

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <LandingPage />
      <Listings />
      <About/>
      <Footer/>
    </div>
  )
}

export default HomePage