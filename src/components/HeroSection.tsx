import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Play } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

const HeroSection = () => {
  return (
    <section className="section-padding bg-gradient-hero text-white overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                <CheckCircle className="w-4 h-4" />
                <span>Trusted by 500+ B2B Companies</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Automate Email Marketing That
                <span className="block text-brand-cream">Drives Real ROI</span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed">
                Transform your B2B email campaigns with iEMA - our intelligent Email Marketing 
                Automation platform that personalizes every interaction, optimizes sequences, 
                and delivers measurable results.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-brand-cream" />
                <span className="text-sm">3X Higher Engagement</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-brand-cream" />
                <span className="text-sm">50% More Conversions</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-brand-cream" />
                <span className="text-sm">24/7 Automation</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 rounded-lg shadow-strong transition-bounce hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-lg transition-smooth"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="text-sm text-white/70">
              <span>Free 14-day trial • No credit card required • Setup in under 5 minutes</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="iEMA Email Marketing Automation Dashboard" 
                className="rounded-2xl shadow-strong w-full h-auto"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 z-20">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-cream">98%</div>
                <div className="text-xs text-white/80">Delivery Rate</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 z-20">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-cream">+127%</div>
                <div className="text-xs text-white/80">ROI Increase</div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;