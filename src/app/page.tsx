"use client";
import Nav from "@/components/NavBar";
import Nosotros from "@/components/About";
import ContactForm from "@/components/Contact";
import Courses from "@/components/Courses";

export default function HomePage() {
  return (
    <div className="">
      <Nav />
      <Nosotros />
      <div className="divider-modern"></div>;
      <ContactForm />
      <div className="divider-modern"></div>;
      <Courses />
    </div>
  );
}
