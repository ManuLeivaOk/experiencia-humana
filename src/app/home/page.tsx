import Nav from "@/components/NavBar";
import Nosotros from "@/components/About";
import ContactForm from "@/components/Contact";
import Courses from "@/components/Courses";

export default function Home() {
  return (
    <>
      <Nav />
      {/*      <Header /> */}
      <Nosotros />
      <div className="divider-modern"></div>;
      <ContactForm />
      <div className="divider-modern"></div>;
      <Courses />
    </>
  );
}
