
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 to-red-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-300 rounded-full animate-float"></div>
        <div className="absolute top-60 right-32 w-24 h-24 bg-red-300 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-yellow-300 rounded-full animate-float"></div>
      </div>
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left animate-fade-in">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Master the Art of{' '}
            <span className="gradient-text">Neapolitan Pizza</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Join our exclusive yearly cooking class in Naples and learn the secrets of authentic homemade pizza from a renowned chef.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-full text-lg hover-scale">
              Book Your Spot
            </Button>
            <Button variant="outline" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full text-lg hover-scale">
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Right Content - Pizza Image */}
        <div className="relative animate-slide-in-right">
          <div className="relative w-full max-w-lg mx-auto">
            {/* Main Pizza Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover-scale">
              <div className="aspect-square bg-gradient-to-br from-orange-200 to-red-200 p-8">
                {/* Pizza Illustration */}
                <div className="w-full h-full bg-amber-100 rounded-full relative flex items-center justify-center shadow-inner">
                  <div className="w-4/5 h-4/5 bg-yellow-200 rounded-full relative">
                    {/* Cheese base */}
                    <div className="absolute inset-2 bg-yellow-100 rounded-full"></div>
                    
                    {/* Tomato slices */}
                    <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-red-400 rounded-full animate-float"></div>
                    <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-red-500 rounded-full animate-bounce-slow"></div>
                    <div className="absolute bottom-1/3 left-1/3 w-7 h-7 bg-red-400 rounded-full animate-float"></div>
                    <div className="absolute bottom-1/4 right-1/3 w-6 h-6 bg-red-500 rounded-full animate-bounce-slow"></div>
                    
                    {/* Basil leaves */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-6 bg-green-500 rounded-full rotate-12 animate-float"></div>
                    <div className="absolute top-3/5 left-2/5 w-3 h-5 bg-green-400 rounded-full -rotate-12 animate-bounce-slow"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange-400 rounded-full animate-bounce-slow opacity-80"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-red-400 rounded-full animate-float opacity-80"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-300 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
