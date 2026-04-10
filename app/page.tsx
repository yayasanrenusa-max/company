import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#020617] text-white selection:bg-primary selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full px-6 py-4 glass bg-opacity-30">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="text-2xl font-bold tracking-tighter">
            VALF<span className="text-primary italic">.io</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#hero" className="hover:text-primary transition-colors">Home</a>
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#founders" className="hover:text-primary transition-colors">Founders</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <button className="px-6 py-2 text-sm font-semibold rounded-full bg-primary hover:bg-sky-500 transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)]">
            Let's Talk
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-hero-pattern">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020617]" />
          
          <div className="relative z-10 text-center px-4 max-w-4xl animate-float">
            <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight leading-none">
              Transforming Ideas into <br />
              <span className="text-gradient">Digital Reality</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
              We specialize in creating state-of-the-art web applications and complex IoT ecosystems that bridge the gap between software and hardware.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#services" className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-all">
                Explore Services
              </a>
              <a href="#contact" className="px-8 py-4 glass font-bold rounded-xl hover:bg-white/10 transition-all border-white/20">
                Contact Us
              </a>
            </div>
          </div>

          {/* Abstract IoT Elements (Floating) */}
          <div className="absolute bottom-20 left-10 w-24 h-24 rounded-3xl bg-primary/20 blur-2xl animate-pulse" />
          <div className="absolute top-40 right-10 w-32 h-32 rounded-full bg-secondary/20 blur-3xl animate-pulse" />
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Expertise</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full" />
            <p className="text-zinc-500 max-w-xl mx-auto">Merging modern web architectures with seamless hardware integration to power the next generation of industry.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-center sm:text-left">
            <div className="glass p-8 rounded-3xl group hover:border-primary/50 transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="Tag 9.75 17L9 21l-1 1h8l-1-1-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Modern Web Development</h3>
              <p className="text-zinc-400 leading-relaxed">
                Building lightning-fast, highly interactive, and SEO-optimized web applications using Next.js, React, and cutting-edge frontend technologies.
              </p>
            </div>

            <div className="glass p-8 rounded-3xl group hover:border-secondary/50 transition-all">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Advanced IoT Solutions</h3>
              <p className="text-zinc-400 leading-relaxed">
                Connecting physical devices to the cloud. We design and deploy smart monitoring systems, industrial automation, and custom embedded hardware.
              </p>
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section id="founders" className="py-24 px-6 bg-[#03081a]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
              <div>
                <h2 className="text-4xl font-bold mb-4">Meet the Visionaries</h2>
                <p className="text-zinc-500 max-w-md">Driven by passion, led by innovation. The duo behind our technological breakthroughs.</p>
              </div>
              <div className="h-0.5 flex-1 bg-white/5 mx-8 h-px hidden md:block" />
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Founder 1 */}
              <div className="relative group overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-white/5">
                <div className="aspect-[4/5] relative">
                  <Image 
                    src="/images/alfi.png" 
                    alt="Alfi Ihktiar" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold mb-3 border border-primary/20">
                    CO-FOUNDER & CEO
                  </span>
                  <h3 className="text-3xl font-black mb-2 leading-none tracking-tight">Alfi Ihktiar</h3>
                  <p className="text-zinc-400 text-sm max-w-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    Strategic leader specializing in product vision and business growth in the tech ecosystem.
                  </p>
                </div>
              </div>

              {/* Founder 2 */}
              <div className="relative group overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-white/5">
                <div className="aspect-[4/5] relative">
                  <Image 
                    src="/images/vargas.png" 
                    alt="Vargas Braja Pamungkas" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform">
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-bold mb-3 border border-secondary/20">
                    CO-FOUNDER & CTO
                  </span>
                  <h3 className="text-3xl font-black mb-2 leading-none tracking-tight">Vargas Braja Pamungkas</h3>
                  <p className="text-zinc-400 text-sm max-w-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    Technical visionary leading hardware engineering and complex system architectures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-24 px-6 text-center">
          <div className="glass p-16 rounded-[3rem] max-w-5xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
            <h2 className="text-4xl md:text-6xl font-black mb-8">Ready to Build <br />the Future?</h2>
            <p className="text-zinc-400 mb-12 max-w-xl mx-auto text-lg leading-relaxed">
              Whether it's a digital platform or a smart hardware solution, we have the expertise to bring your vision to life.
            </p>
            <button className="px-12 py-5 bg-white text-black font-black text-lg rounded-2xl hover:scale-105 transition-all shadow-xl shadow-white/10">
              Start Your Project
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-[#01030e] px-6 text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-bold tracking-tighter">
            VALF<span className="text-primary italic">.io</span>
          </div>
          <div className="text-zinc-500 text-sm">
            © 2026 Valf.io. All rights reserved. Built with Next.js & Passion.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-zinc-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-zinc-400 hover:text-white transition-colors">GitHub</a>
            <a href="#" className="text-zinc-400 hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
