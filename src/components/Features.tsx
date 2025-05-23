
import { Card, CardContent } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: "🥖",
      title: "Dough Perfection",
      description: "Learn to craft the perfect Neapolitan dough, achieving the ideal balance of elasticity and flavor."
    },
    {
      icon: "🔥",
      title: "Oven Mastery",
      description: "Master the art of cooking pizza in a wood-fired oven, understanding temperature control and baking techniques."
    },
    {
      icon: "🍅",
      title: "Topping Techniques",
      description: "Discover the secrets to selecting and preparing the finest toppings, creating a symphony of flavors on your pizza."
    }
  ];

  return (
    <section id="classes" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What You'll Learn
          </h2>
          <h3 className="text-3xl lg:text-4xl font-bold mb-6 gradient-text">
            Unlock the Secrets of Authentic Pizza Making
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our class covers every aspect of Neapolitan pizza creation, from the initial dough preparation to 
            the final bake. Gain hands-on experience and expert guidance to elevate your pizza-making skills.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover-scale border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-6 animate-bounce-slow">{feature.icon}</div>
                <h4 className="text-2xl font-bold mb-4 text-gray-800">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl p-8 lg:p-12 animate-scale-in">
          <h3 className="text-3xl font-bold mb-6 text-center">The Legacy of Neapolitan Pizza</h3>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
            Neapolitan pizza, a culinary icon originating from Naples, Italy, is renowned for its simplicity and quality ingredients. 
            This style of pizza is characterized by a thin, soft crust, a slightly charred edge, and a harmonious blend of fresh tomatoes, 
            mozzarella cheese, basil, and olive oil. Our class delves into the rich history and traditions of this beloved dish, 
            providing a deeper appreciation for its cultural significance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
