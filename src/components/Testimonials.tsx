
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const testimonials = [
    {
      name: "Olivia Rossi",
      date: "June 15, 2023",
      rating: 5,
      text: "This class was an incredible experience! Chef Matteo's expertise and passion for pizza making were truly inspiring. I learned so much and can now confidently make authentic Neapolitan pizza at home.",
      likes: 12,
      avatar: "OR"
    },
    {
      name: "Luca Bianchi",
      date: "June 10, 2023",
      rating: 5,
      text: "The hands-on approach and personalized guidance made this class exceptional. I highly recommend it to anyone looking to master the art of pizza making.",
      likes: 15,
      avatar: "LB"
    },
    {
      name: "Sofia Conti",
      date: "June 5, 2023",
      rating: 5,
      text: "From the dough to the toppings, every detail was covered with precision and care. The class was not only educational but also a lot of fun. I can't wait to share my new skills with friends and family.",
      likes: 10,
      avatar: "SC"
    }
  ];

  const changeTestimonial = (newIndex: number) => {
    if (isAnimating || newIndex === currentTestimonial) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentTestimonial(newIndex);
      setTimeout(() => setIsAnimating(false), 50);
    }, 150);
  };

  const nextTestimonial = () => {
    const newIndex = (currentTestimonial + 1) % testimonials.length;
    changeTestimonial(newIndex);
  };

  const prevTestimonial = () => {
    const newIndex = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    changeTestimonial(newIndex);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Hear From Our <span className="gradient-text">Alumni</span>
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 animate-scale-in">
            <CardContent className="p-8 lg:p-12">
              <div className={`flex flex-col items-center text-center transition-all duration-300 ${
                isAnimating ? 'opacity-0 transform translate-x-4' : 'opacity-100 transform translate-x-0'
              }`}>
                {/* Avatar */}
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 animate-bounce-slow">
                  {testimonials[currentTestimonial].avatar}
                </div>
                
                {/* Stars */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl animate-bounce-slow" style={{ animationDelay: `${i * 0.1}s` }}>★</span>
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                
                {/* Author Info */}
                <div className="mb-6">
                  <h4 className="font-bold text-xl text-gray-800">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-gray-500">{testimonials[currentTestimonial].date}</p>
                </div>
                
                {/* Likes */}
                <div className="flex items-center space-x-2 text-gray-500 mb-8">
                  <span className="text-red-500">❤️</span>
                  <span>{testimonials[currentTestimonial].likes}</span>
                </div>
                
                {/* Navigation */}
                <div className="flex space-x-4">
                  <Button 
                    variant="outline" 
                    onClick={prevTestimonial}
                    className="rounded-full hover-scale"
                    disabled={isAnimating}
                  >
                    ←
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={nextTestimonial}
                    className="rounded-full hover-scale"
                    disabled={isAnimating}
                  >
                    →
                  </Button>
                </div>
                
                {/* Dots indicator */}
                <div className="flex space-x-2 mt-6">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => changeTestimonial(index)}
                      disabled={isAnimating}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentTestimonial 
                          ? 'bg-orange-500 scale-125' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
