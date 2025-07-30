"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const [subscribe, setSubscribe] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const handleEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      setTimeout(() => setError(""), 3000); // Reset error after 3 seconds
      return;
    }
    setSubscribe(true);
    setTimeout(() => setSubscribe(false), 3000); // Reset after 3 seconds
    setEmail(""); // Clear input after submission
  };
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">SensAI</h3>
            <p className="text-muted-foreground">
              Accelerate your career growth with AI-powered guidance and
              personalized recommendations.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/resume"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Build Resume
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-cover-letter"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Cover Letter
                </Link>
              </li>
              <li>
                <Link
                  href="/interview"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Interview Prep
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p className="text-muted-foreground">
              Subscribe to our newsletter for the latest updates and career
              tips.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button onClick={handleEmail} className="w-full">
                Subscribe
              </Button>
              {subscribe && (
                <p className="text-sm text-muted-foreground">
                  Thank you for subscribing!
                </p>
              )}
              {error && <p className="text-sm text-red-500">{error}</p>}
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">contact@sensai.com</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">San Francisco, CA</span>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2025 SensAI. All rights reserved.
            </p>
            <span className="text-muted-foreground">
              Made with 💗 by ASAD ALI
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
