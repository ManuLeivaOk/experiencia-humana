"use client";
import Nav from "@/components/NavBar";
import Nosotros from "@/components/About";
import ContactForm from "@/components/Contact";
import Courses from "@/components/Courses";
import Recursos from "@/components/Resources";

export default function HomePage() {
  return (
    <div className="">
      <Nav />
      <Nosotros />
      <div className="divider-modern"></div>;
      <ContactForm />
      <div className="divider-modern"></div>;
      <Courses />
      <div className="divider-modern"></div>;
      <Recursos />
    </div>
  );
}
