import Header from "./components/sections/Header";
import Page from "./components/sections/Page";
import Navigation from "./components/sections/Navigation";
import Hero from "./components/sections/Hero";
import Reviews from "./components/sections/Reviews";
import Main from "./components/sections/Main";
import Logos from "./components/sections/Logos";
import Features from "./components/sections/Features";
import FAQs from "./components/sections/FAQs/FAQs";
import Testimonals from "./components/sections/Tesimonials/Testimonals";
import Footer from "./components/sections/Footer";
import Modal from "./components/sections/Modal/Modal";
import SignUpModal from "./components/sections/Modal/SignUpModal";
import { ModalContextProvider } from "./contexts/ModalContext";
import MobileMenu from "./components/sections/Mobile Menu/MobileMenu";
import { MobileMenuContextProvider } from "./contexts/MobileMenuContext";

function App() {
  return (
    <ModalContextProvider>
      <MobileMenuContextProvider>
        <Page>
          <Header>
            <Navigation />
            <Hero />
            <Reviews />
          </Header>

          <Main>
            <Logos />
            <Features />
            <FAQs />
            <Testimonals />
          </Main>

          <Footer />

          <Modal modal="sign-up">
            <SignUpModal />
          </Modal>

          <MobileMenu />
        </Page>
      </MobileMenuContextProvider>
    </ModalContextProvider>
  );
}

export default App;
