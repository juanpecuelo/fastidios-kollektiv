import { AboutPage } from "./components/about-page/AboutPage";
import { Footer } from "./components/footer/Footer";
import LandingPage from "./components/landing-page/LandingPage";
import { NewsletterPage } from "./components/landing-page/NewsletterPage";
import { PastEventsPage } from "./components/past-events-page/PastEventsPage";

function App() {
  return (
    <>
      <LandingPage />;
      <AboutPage />
      <PastEventsPage />
      <NewsletterPage />
      <Footer />
    </>
  );
}

export default App;
