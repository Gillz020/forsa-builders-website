import React, { useEffect, useState } from "react";
import { Phone, Mail, MapPin, CheckCircle2, ShieldCheck, HardHat, Hammer, Home as HomeIcon, Leaf, ArrowRight, MessageCircle, Wrench, Menu, X, Star, Building, Droplet, Zap, Ruler, Clock, Paintbrush, Scissors, Trees, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Assets
import teamOnSiteImg from "@assets/real_photos/team_on_site.jpg";
import houseExtensionImg from "@assets/real_photos/house_extension.jpg";
import opendi1Img from "@assets/real_photos/opendi_1.webp";
import opendi2Img from "@assets/real_photos/opendi_2.webp";
import opendi3Img from "@assets/real_photos/opendi_3.webp";
import opendi4Img from "@assets/real_photos/opendi_4.webp";
import streetviewImg from "@assets/real_photos/google_streetview.jpg";

import trustmarkLogo from "@assets/logos/trustmark.png";
import niceicLogo from "@assets/logos/niceic.png";
import constructionlineLogo from "@assets/logos/constructionline.png";
import environmentAgencyLogo from "@assets/logos/environment_agency.png";
import ecsLogo from "@assets/logos/ecs.png";
import fmbLogo from "@assets/logos/fmb.png";
import chasLogo from "@assets/logos/chas.png";
import gassafeLogo from "@assets/logos/gassafe.png";

const WHATSAPP_URL = "https://wa.me/447478734143";
const PHONE_HREF = "tel:07478734143";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm py-3" : "bg-primary text-white py-5"}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <HardHat className={`h-8 w-8 ${scrolled ? "text-secondary" : "text-secondary"}`} />
          <span className={`text-2xl font-heading font-bold ${scrolled ? "text-primary" : "text-white"}`}>
            Forsa Builders Ltd
          </span>
        </div>
        
        <nav className="hidden lg:flex items-center gap-8 font-medium">
          <a href="#services" className={`transition-colors ${scrolled ? "text-slate-600 hover:text-primary" : "text-slate-200 hover:text-white"}`}>Services</a>
          <a href="#about" className={`transition-colors ${scrolled ? "text-slate-600 hover:text-primary" : "text-slate-200 hover:text-white"}`}>About Us</a>
          <a href="#portfolio" className={`transition-colors ${scrolled ? "text-slate-600 hover:text-primary" : "text-slate-200 hover:text-white"}`}>Our Work</a>
          <a href="#faq" className={`transition-colors ${scrolled ? "text-slate-600 hover:text-primary" : "text-slate-200 hover:text-white"}`}>FAQ</a>
          
          <div className="flex items-center gap-4 ml-4">
            <a href={PHONE_HREF} className={`flex items-center gap-2 font-bold ${scrolled ? "text-primary" : "text-white"}`}>
              <Phone className="h-4 w-4 text-secondary" />
              07478 734 143
            </a>
            <Button asChild className="bg-[#25D366] hover:bg-[#20BA56] text-white border-none shadow-md">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </nav>

        <button 
          className="lg:hidden p-2" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className={scrolled ? "text-primary" : "text-white"} /> : <Menu className={scrolled ? "text-primary" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 px-4 flex flex-col gap-4 text-primary font-medium">
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About Us</a>
          <a href="#portfolio" onClick={() => setMobileMenuOpen(false)}>Our Work</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
          <div className="h-px bg-slate-100 my-2"></div>
          <a href={PHONE_HREF} className="flex items-center gap-2 font-bold text-lg">
            <Phone className="h-5 w-5 text-secondary" />
            07478 734 143
          </a>
          <Button asChild className="w-full bg-[#25D366] hover:bg-[#20BA56] text-white">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us Now
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-primary text-white">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/85 mix-blend-multiply z-10" />
        <img 
          src={houseExtensionImg} 
          alt="Modern residential extension" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-sm font-medium">
              <ShieldCheck className="h-4 w-4 text-secondary" />
              <span>Trusted Wolverhampton Builders • 1-Year Guarantee</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-sm font-medium">
              <Clock className="h-4 w-4 text-secondary" />
              <span>Open 7 days a week, 8:00 AM – 6:00 PM</span>
            </div>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Craftsmanship That <span className="text-secondary">Stands</span> The Test Of Time.
          </h1>
          
          <p className="text-lg lg:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
            Specialists in residential extensions, high-end refurbishments, and bespoke sustainable construction. Fully accredited, locally trusted, and built to last.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#20BA56] text-white text-lg h-14 px-8 shadow-lg shadow-[#25D366]/20">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-6 w-6" />
                WhatsApp Us Now
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-primary bg-white hover:bg-slate-50 border-transparent text-lg h-14 px-8">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-6 text-sm text-slate-400 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-secondary" />
              8+ Years Experience
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-secondary" />
              Fully Insured
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-secondary" />
              Wolverhampton Based
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBadges() {
  const logos = [
    { src: trustmarkLogo, alt: "TrustMark" },
    { src: niceicLogo, alt: "NIC EIC" },
    { src: constructionlineLogo, alt: "ConstructionLine" },
    { src: environmentAgencyLogo, alt: "Environment Agency" },
    { src: ecsLogo, alt: "ECS" },
    { src: fmbLogo, alt: "Federation of Master Builders" },
    { src: chasLogo, alt: "CHAS" },
    { src: gassafeLogo, alt: "Gas Safe" },
  ];

  return (
    <section className="py-10 bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">
          Accredited & Certified By Industry Leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {logos.map((logo, i) => (
            <img 
              key={i} 
              src={logo.src} 
              alt={logo.alt} 
              className="h-12 md:h-14 object-contain opacity-80 hover:opacity-100 transition-opacity mix-blend-multiply"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      title: "Extensions",
      icon: <HomeIcon className="h-6 w-6 text-secondary" />
    },
    {
      title: "New Build House / Commercial Development",
      icon: <Building className="h-6 w-6 text-secondary" />
    },
    {
      title: "Loft Conversions",
      icon: <Compass className="h-6 w-6 text-secondary" />
    },
    {
      title: "Roofing Work",
      icon: <HomeIcon className="h-6 w-6 text-secondary" />
    },
    {
      title: "Plastering & Skimming",
      icon: <Paintbrush className="h-6 w-6 text-secondary" />
    },
    {
      title: "Plumbing",
      icon: <Droplet className="h-6 w-6 text-secondary" />
    },
    {
      title: "Electrical Work",
      icon: <Zap className="h-6 w-6 text-secondary" />
    },
    {
      title: "Drainage Work",
      icon: <Zap className="h-6 w-6 text-secondary" />
    },
    {
      title: "Bathroom Installations",
      icon: <Droplet className="h-6 w-6 text-secondary" />
    },
    {
      title: "Bespoke Kitchen Design & Installation",
      icon: <Wrench className="h-6 w-6 text-secondary" />
    },
    {
      title: "Eco-Friendly & Sustainable Construction",
      icon: <Leaf className="h-6 w-6 text-secondary" />
    },
    {
      title: "Architectural Renovations & Structural Modifications",
      icon: <Hammer className="h-6 w-6 text-secondary" />
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Expertise</h2>
          <p className="text-lg text-slate-600">
            From groundworks to the final coat of paint, we manage every aspect of your project with uncompromising standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow group flex items-start gap-4">
              <div className="h-12 w-12 shrink-0 bg-white rounded-lg shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold text-primary mt-2">{s.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GuaranteeBanner() {
  return (
    <section className="py-16 bg-secondary text-white">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-6">
          <ShieldCheck className="h-16 w-16 text-white/90" />
          <div>
            <h3 className="text-3xl font-bold mb-2">1-Year Guarantee On All New Builds</h3>
            <p className="text-white/80 text-lg">We stand by the quality of our craftsmanship. Complete peace of mind.</p>
          </div>
        </div>
        <Button asChild size="lg" className="bg-white text-secondary hover:bg-slate-100 text-lg px-8 h-14">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            Discuss Your Project
          </a>
        </Button>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-primary mb-4">Recent Projects</h2>
            <p className="text-lg text-slate-600">
              A glimpse into our recent extensions, renovations, and structural modifications across the West Midlands.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 group overflow-hidden rounded-2xl relative h-80">
            <img src={opendi1Img} alt="House extension in progress" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
              <h3 className="text-2xl font-bold text-white">House Extension Build</h3>
            </div>
          </div>
          <div className="group overflow-hidden rounded-2xl relative h-80">
            <img src={opendi2Img} alt="Construction site portrait" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
              <h3 className="text-2xl font-bold text-white">Structural Modifications</h3>
            </div>
          </div>
          <div className="group overflow-hidden rounded-2xl relative h-80">
            <img src={opendi4Img} alt="Site framing" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
              <h3 className="text-2xl font-bold text-white">Roofing & Framing</h3>
            </div>
          </div>
          <div className="md:col-span-2 group overflow-hidden rounded-2xl relative h-80">
            <img src={opendi3Img} alt="Brickwork and team member" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
              <h3 className="text-2xl font-bold text-white">Brickwork & Groundworks</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GoogleReviewsCTA() {
  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-100 shadow-sm max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center shadow-md shrink-0">
              <svg xmlns="http://www.google.com/svg" viewBox="0 0 48 48" className="w-10 h-10">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.7 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">See what our clients say</h3>
              <div className="flex items-center justify-center md:justify-start gap-1 text-[#FBBC05] mb-2">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <p className="text-slate-600 font-medium">Read our excellent reviews on Google</p>
            </div>
          </div>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shrink-0 px-8 h-14 text-lg">
            <a href="https://www.google.com/maps/place/Forsa+Builders+Ltd/@52.5702383,-2.1241001,658m/data=!3m2!1e3!4b1!4m6!3m5!1s0x48709b4558957911:0x310c941e34d9e542!8m2!3d52.5702383!4d-2.1241001!16s%2Fg%2F11vyx6qs5c" target="_blank" rel="noopener noreferrer">
              Read Our Google Reviews
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "What areas do you cover?",
      a: "We work across the West Midlands and the wider UK."
    },
    {
      q: "How long does a project take?",
      a: "It depends on the size and scope of the job — every project is different. Give us a call and we'll give you an honest timeframe for your specific job."
    },
    {
      q: "Do you offer free quotes?",
      a: "Yes — we offer free, no-obligation quotes and site visits before you commit to anything."
    },
    {
      q: "Do you handle planning permission and building regulations?",
      a: "Give us a call to talk through your project and we'll help sort out what's needed for planning permission and building regs."
    },
    {
      q: "Do you offer a guarantee on your work?",
      a: "Yes, we provide a 1-year guarantee on all new build projects."
    },
    {
      q: "What are your opening hours?",
      a: "We're open 7 days a week, 8:00 AM to 6:00 PM. Call, WhatsApp, or email us any time."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-600">Got a question? We're here to help.</p>
        </div>
        
        <Accordion type="single" collapsible className="w-full bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="last:border-0 border-b border-slate-100 py-2">
              <AccordionTrigger className="text-left text-lg font-semibold text-primary hover:text-secondary hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 bg-primary text-white text-center">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready To Build Something Exceptional?</h2>
        <p className="text-xl text-slate-300 mb-10">
          Contact Forsa Builders today for a free, no-obligation consultation. Let's bring your architectural vision to reality.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#20BA56] text-white text-xl h-16 px-10 w-full sm:w-auto shadow-xl shadow-[#25D366]/20">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-3 h-6 w-6" />
              WhatsApp Us Now
            </a>
          </Button>
          <span className="text-slate-400 font-medium text-lg">or call directly</span>
          <a href={PHONE_HREF} className="text-2xl font-bold hover:text-secondary transition-colors flex items-center">
            <Phone className="mr-2 h-6 w-6" />
            07478 734 143
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary pt-16 pb-8 border-t border-white/10 text-slate-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <HardHat className="h-8 w-8 text-secondary" />
              <span className="text-2xl font-heading font-bold text-white">
                Forsa Builders Ltd
              </span>
            </div>
            <p className="max-w-md leading-relaxed mb-6">
              Wolverhampton's trusted construction company. Specializing in extensions, refurbishments, and high-quality residential builds with an 8+ year reputation for excellence.
            </p>
            <div className="flex gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors" aria-label="WhatsApp">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="mailto:info@forsabuilders.net" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61571220123358" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors" aria-label="Facebook">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@sonusinghgill33" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors" aria-label="TikTok">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.23-.9 4.45-2.36 6.13-1.64 1.9-4.16 3.03-6.69 2.87-2.67-.18-5.18-1.55-6.68-3.76-1.39-2.04-1.74-4.73-.91-7.05.8-2.22 2.53-4.04 4.74-4.88 2.01-.76 4.31-.8 6.36-.21v4.13c-1.36-.5-2.92-.37-4.13.33-1.07.62-1.78 1.8-1.85 3.05-.08 1.34.46 2.71 1.48 3.56 1.11.93 2.76 1.14 4.16.66 1.38-.47 2.37-1.66 2.65-3.08.13-.67.14-1.37.14-2.06V.02z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href={PHONE_HREF} className="flex items-center hover:text-white transition-colors">
                  <Phone className="h-5 w-5 mr-3 text-secondary" />
                  07478 734 143
                </a>
              </li>
              <li>
                <a href="mailto:info@forsabuilders.net" className="flex items-center hover:text-white transition-colors">
                  <Mail className="h-5 w-5 mr-3 text-secondary" />
                  info@forsabuilders.net
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-secondary shrink-0 mt-1" />
                <span>
                  2B Arthur Street<br />
                  Wolverhampton<br />
                  WV2 3DZ
                </span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-3 text-secondary shrink-0 mt-1" />
                <span>
                  Open 7 days a week<br />
                  8:00 AM – 6:00 PM
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Recent Projects</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href={WHATSAPP_URL} className="hover:text-white transition-colors">Get a Quote</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Forsa Builders Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <TrustBadges />
        <Services />
        <GuaranteeBanner />
        <div id="about" className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">A Reputation Built On Solid Foundations</h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  For over 8 years, Forsa Builders has been delivering uncompromising quality across the West Midlands. We are not a faceless corporate contractor; we are a dedicated team of master tradesmen who take immense pride in our craft.
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  From navigating complex architectural renovations to seamlessly executing eco-friendly builds, we handle every detail so you don't have to.
                </p>
                <ul className="space-y-4 mb-8">
                  {["Dedicated project management", "Transparent pricing & timelines", "Highest standards of health & safety", "Clean and respectful site operations"].map((item, i) => (
                    <li key={i} className="flex items-center text-primary font-medium">
                      <CheckCircle2 className="h-5 w-5 text-secondary mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img src={teamOnSiteImg} alt="Forsa Builders team on site" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-primary text-white p-8 rounded-xl shadow-xl max-w-[240px]">
                  <p className="text-4xl font-bold mb-2">8+</p>
                  <p className="text-sm text-slate-300">Years of delivering exceptional construction projects.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Portfolio />
        <GoogleReviewsCTA />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
