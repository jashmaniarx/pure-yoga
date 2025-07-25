import { Button } from "@/components/ui/button";
import { Leaf, Sun, Moon, Apple, Dumbbell, Brain, ArrowRight } from "lucide-react";

const tips = [
  {
    id: 1,
    title: "Morning Ritual",
    description: "Start your day with 5 minutes of deep breathing and intention setting",
    icon: Sun,
    color: "text-accent-gold",
    category: "Morning"
  },
  {
    id: 2,
    title: "Mindful Eating",
    description: "Practice gratitude before meals and eat slowly to enhance digestion",
    icon: Apple,
    color: "text-accent-coral",
    category: "Nutrition"
  },
  {
    id: 3,
    title: "Evening Wind-Down",
    description: "Create a calming routine with gentle stretches and herbal tea",
    icon: Moon,
    color: "text-accent-lavender",
    category: "Evening"
  },
  {
    id: 4,
    title: "Gentle Movement",
    description: "Incorporate 10-minute movement breaks throughout your day",
    icon: Dumbbell,
    color: "text-accent-aqua",
    category: "Exercise"
  },
  {
    id: 5,
    title: "Nature Connection",
    description: "Spend at least 15 minutes outdoors daily to ground yourself",
    icon: Leaf,
    color: "text-accent-aqua",
    category: "Nature"
  },
  {
    id: 6,
    title: "Mental Clarity",
    description: "Practice the 4-7-8 breathing technique to calm your nervous system",
    icon: Brain,
    color: "text-accent-lavender",
    category: "Mental Health"
  }
];

const WellnessTips = () => {
  return (
    <section className="py-20 px-4" id="tips">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Wellness Wisdom</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Simple, actionable tips to cultivate balance and well-being in your daily life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tips.map((tip) => {
            const Icon = tip.icon;
            
            return (
              <div
                key={tip.id}
                className="glass rounded-3xl p-6 glass-hover group"
              >
                <div className="flex items-start gap-4">
                  <div className={`glass rounded-2xl p-3 ${tip.color} flex-shrink-0`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-text-muted uppercase tracking-wider">
                        {tip.category}
                      </span>
                      <ArrowRight className="h-4 w-4 text-text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    <h3 className="font-bold text-lg text-text-primary mb-2">
                      {tip.title}
                    </h3>
                    
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {tip.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Recipe Card */}
        <div className="glass rounded-3xl p-8 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-text-primary mb-2">
              Today's Wellness Recipe
            </h3>
            <p className="text-text-secondary">Nourish your body with this calming evening blend</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="glass rounded-2xl p-6">
              <h4 className="font-bold text-lg text-accent-lavender mb-4">Golden Milk Latte</h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• 1 cup warm almond milk</li>
                <li>• 1/2 tsp turmeric powder</li>
                <li>• 1/4 tsp cinnamon</li>
                <li>• Pinch of black pepper</li>
                <li>• 1 tsp honey or maple syrup</li>
                <li>• 1/4 tsp vanilla extract</li>
              </ul>
            </div>
            
            <div className="text-center md:text-left">
              <p className="text-text-secondary mb-6 leading-relaxed">
                This anti-inflammatory drink promotes relaxation and better sleep. 
                The turmeric provides natural healing properties while the warm spices 
                create a comforting evening ritual.
              </p>
              <Button variant="coral">
                Get Full Recipe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessTips;