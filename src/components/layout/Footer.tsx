import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Crown } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-royal text-royal-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Crown className="w-6 h-6 text-royal-accent" />
              <h3 className="text-xl font-bold royal-gold">NumerologySaar</h3>
            </div>
            <p className="text-royal-scroll/90">
              Discover your life's purpose through the ancient wisdom of Chaldean numerology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-royal-accent">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-royal-scroll/90 hover:text-royal-accent transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-royal-scroll/90 hover:text-royal-accent transition-colors">Services</Link></li>
              <li><Link to="/blog" className="text-royal-scroll/90 hover:text-royal-accent transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-royal-scroll/90 hover:text-royal-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media & Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-royal-accent">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com/numerologysaar" target="_blank" rel="noopener noreferrer" className="text-royal-scroll/90 hover:text-royal-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/numerologysaar" target="_blank" rel="noopener noreferrer" className="text-royal-scroll/90 hover:text-royal-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/numerologysaar" target="_blank" rel="noopener noreferrer" className="text-royal-scroll/90 hover:text-royal-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:connect@numerologysaar.com" className="text-royal-scroll/90 hover:text-royal-accent transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-royal-accent/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-sm text-royal-scroll/80">
              <p>© {new Date().getFullYear()} NumerologySaar. All rights reserved.</p>
              <p className="mt-2">
                <Link to="/privacy" className="hover:text-royal-accent transition-colors">Privacy Policy</Link>
                {' • '}
                <Link to="/terms" className="hover:text-royal-accent transition-colors">Terms of Service</Link>
              </p>
            </div>
            <div className="text-sm text-royal-scroll/80 md:text-right">
              <p>
                This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way.
              </p>
              <p className="mt-2">
                FACEBOOK is a trademark of FACEBOOK, Inc. ClickBank is the retailer of products on this site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}