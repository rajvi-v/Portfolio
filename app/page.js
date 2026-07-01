import Header from "../components/header/page";
import Hero from "../components/hero/page";
import Credentials from "../components/credentials/page";
import Services from "../components/services/page";
import Projects from "../components/projects/page";
import Footer from "../components/footer/page";

export default function Home() {
  return (
    <main className="site-shell">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Credentials />
      
      <Footer />
    </main>
  );
}