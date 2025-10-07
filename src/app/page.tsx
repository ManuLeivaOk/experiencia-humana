"use client";
import Nav from "@/components/NavBar";
import Nosotros from "@/components/About";
import ContactForm from "@/components/Contact";
import Courses from "@/components/Courses";
import Recursos from "@/components/Resources";
import Header from "@/components/Header";
import Presentation from "@/components/Presentation";

export default function HomePage() {
  return (
    <div className="">
      <Nav /> 
      <Header />
      <Presentation/>
      <div className="divider-modern"></div>;
      <Nosotros />
      <div className="divider-modern"></div>;
      <Courses />
      <div className="divider-modern"></div>;
      <Recursos />
      <div className="divider-modern"></div>;
      <ContactForm />
    </div>
  );
}
