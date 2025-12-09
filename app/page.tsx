'use client';

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
  Quote
} from 'lucide-react';

export default function Home() {
  return (
    <main className="relative">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-sm border-b border-border/50">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8">
              <svg viewBox="0 0 32 32" className="w-full h-full">
                <circle cx="14" cy="16" r="8" fill="currentColor" className="text-foreground" />
                <circle cx="18" cy="16" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-foreground" />
              </svg>
            </div>
            <span className="font-display font-semibold text-lg">Tandem Technologies</span>
          </div>
          
          {/* Nav Links */}
          <div className="flex items-center gap-8">
            <a 
              href="#features" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a 
              href="#contact" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen pt-20 px-6 flex items-center justify-center overflow-hidden">
        {/* Background Orbs */}
        <div className="glow-orb w-[600px] h-[600px] -top-32 -left-32" />
        <div className="glow-orb w-[500px] h-[500px] top-1/3 -right-24" style={{ animationDelay: '2s' }} />
        
        {/* Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">AI-Powered Voice Agent for Healthcare</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="gradient-text">Meet Tana.</span>
            <br />
            Your 24/7 Patient
            <br />
            Concierge.
          </h1>

          {/* Waveform Bars */}
          <div className="my-8 flex items-center justify-center gap-1 h-16">
            <div className="w-1 bg-foreground/30 rounded-full" style={{ height: '20%' }} />
            <div className="w-1 bg-foreground/30 rounded-full" style={{ height: '40%' }} />
            <div className="w-1 bg-foreground/30 rounded-full" style={{ height: '65%' }} />
            <div className="w-1 bg-foreground/30 rounded-full" style={{ height: '45%' }} />
            <div className="w-1 bg-foreground/30 rounded-full" style={{ height: '80%' }} />
            <div className="w-1 bg-foreground/30 rounded-full" style={{ height: '55%' }} />
            <div className="w-1 bg-foreground/30 rounded-full" style={{ height: '95%' }} />
            <div className="w-1 bg-foreground/30 rounded-full" style={{ height: '70%' }} />
            <div className="w-1 bg-foreground/30 rounded-full" style={{ height: '50%' }} />
            <div className="w-1 bg-foreground/30 rounded-full" style={{ height: '75%' }} />
            <div className="w-1 bg-foreground/30 rounded-full" style={{ height: '60%' }} />
            <div className="w-1 bg-foreground/30 rounded-full" style={{ height: '35%' }} />
            <div className="w-1 bg-foreground/30 rounded-full" style={{ height: '50%' }} />
            <div className="w-1 bg-foreground/30 rounded-full" style={{ height: '25%' }} />
          </div>

          {/* Supporting Text */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance">
            Tana handles patient calls, books appointments, and answers queries instantly—so your team can focus on care, not admin.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold h-14 rounded-xl px-10 text-lg shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200">
              <Phone className="w-5 h-5" />
              Book a Demo
            </button>
            <button className="inline-flex items-center justify-center gap-2 border-2 border-primary/30 bg-transparent text-foreground h-12 rounded-xl px-8 text-base hover:bg-primary/10 hover:border-primary/50 transition-all duration-200">
              Learn More
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>No Hold Times</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Everything Your Front Desk Needs
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Tana handles the calls, so your staff handles the care.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="group glass-card p-8 hover:bg-card/80 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Smart Scheduling</h3>
              <p className="text-muted-foreground">
                Tana books, reschedules, and confirms appointments without human intervention.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group glass-card p-8 hover:bg-card/80 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Natural Conversations</h3>
              <p className="text-muted-foreground">
                Human-like dialogue that patients trust. No robotic scripts.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group glass-card p-8 hover:bg-card/80 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">24/7 Availability</h3>
              <p className="text-muted-foreground">
                Never miss a call. Tana works nights, weekends, and holidays.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group glass-card p-8 hover:bg-card/80 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">HIPAA Compliant</h3>
              <p className="text-muted-foreground">
                Enterprise-grade security. Patient data stays protected.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group glass-card p-8 hover:bg-card/80 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Instant Integration</h3>
              <p className="text-muted-foreground">
                Connects with your existing EHR and scheduling systems in days.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group glass-card p-8 hover:bg-card/80 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Adaptive Voice Recognition</h3>
              <p className="text-muted-foreground">
                Serve diverse patient populations with intelligent accent recognition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS + STATS SECTION */}
      <section className="relative py-24 md:py-32 bg-muted/30 overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm text-primary font-medium mb-2">Trusted by Healthcare Leaders</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              What Our Partners Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of healthcare providers who've elevated their patient experience with Tana.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Testimonial 1 */}
            <div className="group relative h-full bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Quote className="w-4 h-4" />
              </div>
              
              {/* Quote */}
              <p className="text-foreground mb-6 mt-4">
                "Tana has transformed how we handle patient inquiries. Our staff now focuses on care, not phone calls."
              </p>
              
              {/* Person */}
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
              
              {/* Hover Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Testimonial 2 */}
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

            {/* Testimonial 3 */}
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

          {/* Stats Row */}
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

      {/* CONTACT / CTA SECTION */}
      <section id="contact" className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12 md:p-16 relative overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            
            {/* Content */}
            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Ready to Transform Your
                <br />
                Patient Experience?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                Join forward-thinking healthcare providers using Tana to reduce wait times and improve patient satisfaction.
              </p>
              <button className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold h-14 rounded-xl px-10 text-lg shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200">
                Schedule a Demo
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="relative w-6 h-6">
              <svg viewBox="0 0 32 32" className="w-full h-full">
                <circle cx="14" cy="16" r="8" fill="currentColor" className="text-foreground" />
                <circle cx="18" cy="16" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-foreground" />
              </svg>
            </div>
            <span className="text-sm text-muted-foreground">
              © 2025 Tandem Technologies. All rights reserved.
            </span>
          </div>
          
          {/* Right */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
