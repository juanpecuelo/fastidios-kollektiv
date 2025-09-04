import { AboutPage } from "./components/about-page/AboutPage";
import { Footer } from "./components/footer/Footer";
import LandingPage from "./components/landing-page/LandingPage";
import { PastEventsPage } from "./components/past-events-page/PastEventsPage";

function App() {
  return (
    <>
      <LandingPage />
      <AboutPage />
      <PastEventsPage />
      <Footer />
    </>
  );
}

export default App;
