import { Link } from "react-router-dom";
import {
  Heart,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-warm p-2 rounded-xl shadow-warm">
                <Heart className="h-6 w-6 text-white" fill="currentColor" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Animal Shelter</h3>
                <p className="text-sm text-neutral-300">Foundation</p>
              </div>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Dedicated to rescuing, rehabilitating, and rehoming animals in
              need. Every life matters, and every pet deserves a loving home.
            </p>
            <div className="flex space-x-3">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link
                to="/adopt"
                className="text-neutral-300 hover:text-primary transition-colors text-sm"
              >
                Adopt a Pet
              </Link>
              <Link
                to="/donate"
                className="text-neutral-300 hover:text-primary transition-colors text-sm"
              >
                Make a Donation
              </Link>
              <Link
                to="/volunteer"
                className="text-neutral-300 hover:text-primary transition-colors text-sm"
              >
                Volunteer
              </Link>
              <Link
                to="/events"
                className="text-neutral-300 hover:text-primary transition-colors text-sm"
              >
                Events & News
              </Link>
              <Link
                to="/about"
                className="text-neutral-300 hover:text-primary transition-colors text-sm"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-neutral-300 hover:text-primary transition-colors text-sm"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-neutral-300 text-sm">
                  123 Shelter Lane
                  <br />
                  Pet City, PC 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-neutral-300 text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-neutral-300 text-sm">
                  info@animalshelter.org
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-neutral-300 text-sm">
              Subscribe to our newsletter for adoption updates, events, and
              success stories.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-400"
              />
              <Button className="w-full btn-hero">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-400 text-sm">
              © 2024 Animal Shelter Foundation. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/privacy"
                className="text-neutral-400 hover:text-primary text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-neutral-400 hover:text-primary text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
