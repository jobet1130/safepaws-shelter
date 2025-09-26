import { ArrowRight, Heart, Users } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import heroImage from "../../assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-up">
          {/* Tagline */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
            <Heart
              className="h-5 w-5 mr-2 text-secondary"
              fill="currentColor"
            />
            <span className="text-sm font-medium">
              Saving Lives, One Pet at a Time
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Find Your Perfect
            <span className="block text-secondary">Furry Companion</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Every animal deserves love, care, and a forever home. Join our
            mission to rescue, rehabilitate, and rehome pets in need. Your new
            best friend is waiting for you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild className="btn-hero group text-lg px-8 py-6">
              <Link to="/adopt">
                Adopt Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild className="btn-hero-outline text-lg px-8 py-6">
              <Link to="/donate">Make a Donation</Link>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-16 pt-12 border-t border-white/20">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Heart className="h-6 w-6 mr-2 text-secondary" />
                <span className="text-3xl font-bold">2,500+</span>
              </div>
              <p className="text-white/80 text-sm">Animals Rescued</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-6 w-6 mr-2 text-primary" />
                <span className="text-3xl font-bold">1,800+</span>
              </div>
              <p className="text-white/80 text-sm">Successful Adoptions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse-gentle" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
