
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="col-span-2 animate-fade-in">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <span className="text-2xl font-bold">Pizza Elite</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Master the authentic art of Neapolitan pizza making with our exclusive yearly cooking classes in Naples.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="animate-slide-in-right">
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-orange-400 transition-colors">About</a>
              <a href="#classes" className="block text-gray-400 hover:text-orange-400 transition-colors">Class Details</a>
              <a href="#testimonials" className="block text-gray-400 hover:text-orange-400 transition-colors">Testimonials</a>
              <a href="#contact" className="block text-gray-400 hover:text-orange-400 transition-colors">Contact</a>
            </div>
          </div>
          
          {/* Legal */}
          <div className="animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-orange-400 transition-colors">Privacy Policy</a>
              <a href="#" className="block text-gray-400 hover:text-orange-400 transition-colors">Terms of Service</a>
              <a href="#" className="block text-gray-400 hover:text-orange-400 transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8 animate-fade-in">
          <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors hover-scale">
            <span className="text-2xl">📘</span>
          </a>
          <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors hover-scale">
            <span className="text-2xl">📷</span>
          </a>
          <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors hover-scale">
            <span className="text-2xl">🎥</span>
          </a>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-gray-400 pt-8 border-t border-gray-800 animate-fade-in">
          <p>© 2024 Pizza Elite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
