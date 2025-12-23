"use client";

import {
  Sparkles,
  Phone,
  Calendar,
  MessageSquare,
  Clock,
  Shield,
  Zap,
  Users,
  ArrowRight,
  Quote,
} from "lucide-react";

export default function Home() {
  return (
    <main className="relative">
      {/* NAVBAR */}
      {/* <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-sm border-b border-border/50">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="relative h-12 hover:opacity-80 transition-opacity"
            >
              
              <img
                src="/assets/tana.png"
                alt="Tana Logo"
                className="w-full h-full object-contain"
              />
            </button>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="#features"
              className="text-sm text-neutral-300 hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#contact"
              className="text-sm text-neutral-300 hover:text-foreground transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </nav> */}

      {/* HERO SECTION */}
      <section className="relative min-h-screen pt-20 px-6 flex items-center justify-center overflow-hidden">
        {/* Background Orbs */}
        {/* <div className="glow-orb w-[600px] h-[600px] -top-32 -left-32" /> */}
        {/* <div
          className="glow-orb w-[500px] h-[500px] top-1/3 -right-24"
          style={{ animationDelay: "2s" }}
        /> */}

        {/* Grid Overlay */}
        {/* <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        /> */}

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">
              AI-Powered Voice Agent for Healthcare
            </span>
          </div> */}

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
            <span>This webpage is not in use.</span>
          </h1>

          {/* Waveform Bars */}
          {/* <div className="my-8 flex items-center justify-center gap-1 h-16">
            <div
              className="w-1 bg-foreground/30 rounded-full"
              style={{
                animation: "soundwave-2 1.4s ease-in-out infinite",
                animationDelay: "0.1s",
              }}
            />
            <div
              className="w-1 bg-foreground/30 rounded-full"
              style={{
                animation: "soundwave-4 0.9s ease-in-out infinite",
                animationDelay: "0.3s",
              }}
            />
            <div
              className="w-1 bg-foreground/30 rounded-full"
              style={{
                animation: "soundwave-1 1.6s ease-in-out infinite",
                animationDelay: "0s",
              }}
            />
            <div
              className="w-1 bg-foreground/30 rounded-full"
              style={{
                animation: "soundwave-5 1.1s ease-in-out infinite",
                animationDelay: "0.5s",
              }}
            />
            <div
              className="w-1 bg-foreground/30 rounded-full"
              style={{
                animation: "soundwave-3 1.3s ease-in-out infinite",
                animationDelay: "0.2s",
              }}
            />
            <div
              className="w-1 bg-foreground/30 rounded-full"
              style={{
                animation: "soundwave-1 1s ease-in-out infinite",
                animationDelay: "0.4s",
              }}
            />
            <div
              className="w-1 bg-foreground/30 rounded-full"
              style={{
                animation: "soundwave-4 1.5s ease-in-out infinite",
                animationDelay: "0.1s",
              }}
            />
            <div
              className="w-1 bg-foreground/30 rounded-full"
              style={{
                animation: "soundwave-2 1.2s ease-in-out infinite",
                animationDelay: "0.6s",
              }}
            />
            <div
              className="w-1 bg-foreground/30 rounded-full"
              style={{
                animation: "soundwave-5 0.95s ease-in-out infinite",
                animationDelay: "0.3s",
              }}
            />
            <div
              className="w-1 bg-foreground/30 rounded-full"
              style={{
                animation: "soundwave-3 1.4s ease-in-out infinite",
                animationDelay: "0s",
              }}
            />
            <div
              className="w-1 bg-foreground/30 rounded-full"
              style={{
                animation: "soundwave-1 1.1s ease-in-out infinite",
                animationDelay: "0.45s",
              }}
            />
            <div
              className="w-1 bg-foreground/30 rounded-full"
              style={{
                animation: "soundwave-4 1.3s ease-in-out infinite",
                animationDelay: "0.2s",
              }}
            />
            <div
              className="w-1 bg-foreground/30 rounded-full"
              style={{
                animation: "soundwave-2 1.05s ease-in-out infinite",
                animationDelay: "0.5s",
              }}
            />
            <div
              className="w-1 bg-foreground/30 rounded-full"
              style={{
                animation: "soundwave-5 1.35s ease-in-out infinite",
                animationDelay: "0.15s",
              }}
            />
          </div> */}

          {/* Supporting Text */}
          {/* <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-2xl mx-auto mb-10 text-balance">
            Tana handles patient calls, books appointments, and answers queries
            instantly - so your team can focus on care, not admin.
          </p> */}

          {/* CTA Buttons */}
          {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold h-14 rounded-xl px-10 text-lg shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
              onClick={() => {
                window.open(
                  "https://calendly.com/team-tandem-tech/introduction-demo-with-kaushik-co-founder-ceo?month=2025-12&date=2025-12-12",
                  "_blank"
                );
              }}
            >
              <Phone className="w-5 h-5" />
              Book a Demo
            </button>
            <a href="#features">
              <button className="inline-flex items-center justify-center gap-2 border-2 border-primary/30 bg-transparent text-foreground h-12 rounded-xl px-8 text-base hover:bg-primary/10 hover:border-primary/50 transition-all duration-200">
                Learn More
              </button>
            </a>
          </div> */}

          {/* Trust Badges */}
          {/* <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-300">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>HIPAA & GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>Always-On</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>No Hold Times</span>
            </div>
          </div> */}
        </div>
      </section>

      {/* FEATURES SECTION */}
      {/* <section id="features" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-4">
              Everything Your Front Desk Needs
            </h2>
            <p className="text-lg text-neutral-300 leading-relaxed max-w-xl mx-auto">
              Tana handles the calls, so your staff handles the care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group glass-card p-8 hover:bg-neutral-800/90 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center mb-5 group-hover:bg-neutral-700 transition-colors">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-3">
                Smart Scheduling
              </h3>
              <p className="text-base text-neutral-300 leading-relaxed">
                Tana books and reschedules appointments without human
                intervention.
              </p>
            </div>

            <div className="group glass-card p-8 hover:bg-neutral-800/90 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center mb-5 group-hover:bg-neutral-700 transition-colors">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-3">
                Natural Conversations
              </h3>
              <p className="text-base text-neutral-300 leading-relaxed">
                Human-like dialogue that patients trust. No robotic scripts.
              </p>
            </div>

            <div className="group glass-card p-8 hover:bg-neutral-800/90 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center mb-5 group-hover:bg-neutral-700 transition-colors">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-3">
                24/7 Availability
              </h3>
              <p className="text-base text-neutral-300 leading-relaxed">
                Never miss a call. Tana works nights, weekends, and holidays.
              </p>
            </div>

            <div className="group glass-card p-8 hover:bg-neutral-800/90 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center mb-5 group-hover:bg-neutral-700 transition-colors">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-3">
                HIPAA & GDPR Compliant
              </h3>
              <p className="text-base text-neutral-300 leading-relaxed">
                Enterprise-grade security. Your patients' data stays protected.
              </p>
            </div>

            <div className="group glass-card p-8 hover:bg-neutral-800/90 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center mb-5 group-hover:bg-neutral-700 transition-colors">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-3">
                Instant Integration
              </h3>
              <p className="text-base text-neutral-300 leading-relaxed">
                Connects with your favourite EHR and scheduling systems
                seamlessly.
              </p>
            </div>

            <div className="group glass-card p-8 hover:bg-neutral-800/90 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center mb-5 group-hover:bg-neutral-700 transition-colors">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-3">
                Adaptive Voice Recognition
              </h3>
              <p className="text-base text-neutral-300 leading-relaxed">
                Serve diverse patient populations with intelligent accent
                recognition.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* TESTIMONIALS + STATS SECTION */}
      {/*
      <section className="relative py-24 md:py-32 bg-muted/30 overflow-hidden">
        
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <p className="text-sm text-primary font-medium mb-2">Trusted by Healthcare Leaders</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              What Our Partners Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of healthcare providers who've elevated their patient experience with Tana.
            </p>
          </div>

          {/* Testimonials Grid
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group relative h-full bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
              <div className="absolute -top-4 left-8 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Quote className="w-4 h-4" />
              </div>
              
              
              <p className="text-foreground mb-6 mt-4">
                "Tana has transformed how we handle patient inquiries. Our staff now focuses on care, not phone calls."
              </p>
              
            
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center font-semibold">
                  SM
                </div>
                <div>
                  <div className="font-semibold">Dr. Sarah Mitchell</div>
                  <div className="text-sm text-muted-foreground">Medical Director</div>
                  <div className="text-xs text-muted-foreground">Evergreen Medical Group</div>
                </div>
              </div>
              
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="group relative h-full bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
              <div className="absolute -top-4 left-8 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Quote className="w-4 h-4" />
              </div>
              
              <p className="text-foreground mb-6 mt-4">
                "We reduced missed appointments by 40% in the first month. The ROI speaks for itself."
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center font-semibold">
                  JC
                </div>
                <div>
                  <div className="font-semibold">James Chen</div>
                  <div className="text-sm text-muted-foreground">Practice Manager</div>
                  <div className="text-xs text-muted-foreground">Pacific Health Partners</div>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="group relative h-full bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
              <div className="absolute -top-4 left-8 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Quote className="w-4 h-4" />
              </div>
              
              <p className="text-foreground mb-6 mt-4">
                "Patients love the 24/7 availability. It's like having a full reception team that never sleeps."
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center font-semibold">
                  AF
                </div>
                <div>
                  <div className="font-semibold">Dr. Amanda Foster</div>
                  <div className="text-sm text-muted-foreground">Founder & Physician</div>
                  <div className="text-xs text-muted-foreground">Sunrise Family Clinic</div>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-b border-border/30">
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Healthcare Partners</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold mb-2">2M+</div>
              <div className="text-sm text-muted-foreground">Calls Handled</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Satisfaction Score</div>
            </div>
          </div>
        </div>
      </section>
*/}

      {/* CONTACT / CTA SECTION */}
      {/* <section id="contact" className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
                Ready to Transform Your
                <br />
                Patient Experience?
              </h2>
              <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-2xl mx-auto mb-10">
                Join forward-thinking healthcare providers using Tana to reduce
                wait times and improve patient satisfaction.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold h-14 rounded-xl px-10 text-lg shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
                  onClick={() => {
                    window.open(
                      "https://calendly.com/team-tandem-tech/introduction-demo-with-kaushik-co-founder-ceo?month=2025-12&date=2025-12-12",
                      "_blank"
                    );
                  }}
                >
                  <Phone className="w-5 h-5" />
                  Book a Demo
                </button>
                <a href="mailto:team@tandem-tech.co.uk">
                  <button className="inline-flex items-center justify-center gap-2 border-2 border-primary/30 bg-transparent text-foreground h-14 rounded-xl px-10 text-lg hover:bg-primary/10 hover:border-primary/50 transition-all duration-200">
                    Contact Us
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* FOOTER */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          {/* <div className="flex flex-col items-start gap-4">
            <a
              href="https://www.tandem-tech.co.uk"
              className="relative h-20 hover:opacity-80 transition-opacity"
            >
              <img
                src="/assets/tandem-logo.png"
                alt="Tandem Logo"
                className="w-full h-full object-contain"
              />
            </a>
            <span className="text-sm pl-4 text-neutral-400">
              © 2025 Tandem Technologies. All rights reserved.
            </span>
          </div> */}

          {/* Right */}
          <div className="flex items-center gap-6">
            {/* <a
              href="#"
              className="text-sm text-neutral-300 hover:text-foreground transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm text-neutral-300 hover:text-foreground transition-colors"
            >
              Terms
            </a> */}
            {/* <a
              href="mailto:team@tandem-tech.co.uk"
              className="text-sm text-neutral-300 hover:text-foreground transition-colors"
            >
              Contact
            </a> */}
          </div>
        </div>
      </footer>
    </main>
  );
}
