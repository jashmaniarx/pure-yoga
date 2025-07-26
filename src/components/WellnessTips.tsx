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
  const [selectedTip, setSelectedTip] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tipDetails: { [key: string]: any } = {
    "Morning Rituals": {
      title: "Morning Rituals for Mindful Living",
      content: [
        "Starting your day with intention sets the tone for everything that follows. Morning rituals are powerful practices that help you connect with your inner self before the demands of the day take over.",
        "Research shows that having a consistent morning routine can reduce stress, improve focus, and increase overall life satisfaction. When you begin each day mindfully, you create space for clarity and peace."
      ],
      steps: [
        "Wake up 15 minutes earlier than usual to avoid rushing",
        "Drink a glass of warm water with lemon to hydrate and energize",
        "Spend 5 minutes in meditation or deep breathing",
        "Write down three things you're grateful for",
        "Set one positive intention for the day",
        "Do gentle stretching or light yoga poses"
      ],
      benefits: [
        "Improved mental clarity and focus",
        "Reduced stress and anxiety levels",
        "Better emotional regulation throughout the day",
        "Enhanced sense of purpose and direction",
        "Increased energy and vitality",
        "Stronger connection to personal values"
      ]
    },
    "Balanced Nutrition": {
      title: "Balanced Nutrition for Optimal Wellness",
      content: [
        "Nutrition is the foundation of physical and mental well-being. What we eat directly impacts our energy levels, mood, cognitive function, and overall health.",
        "A balanced approach to nutrition focuses on whole foods, proper hydration, and mindful eating practices that nourish both body and soul."
      ],
      steps: [
        "Fill half your plate with colorful vegetables and fruits",
        "Include lean proteins like fish, legumes, or plant-based options",
        "Choose whole grains over processed alternatives",
        "Stay hydrated with 8-10 glasses of water daily",
        "Practice mindful eating by chewing slowly and savoring flavors",
        "Limit processed foods and added sugars"
      ],
      benefits: [
        "Sustained energy throughout the day",
        "Improved mood and mental clarity",
        "Better digestive health",
        "Stronger immune system",
        "Healthy weight management",
        "Reduced risk of chronic diseases"
      ]
    },
    "Mindful Breathing": {
      title: "Mindful Breathing Techniques",
      content: [
        "Breath is the bridge between body and mind. Conscious breathing practices can instantly calm the nervous system, reduce stress, and bring you into the present moment.",
        "These ancient techniques have been scientifically proven to lower blood pressure, reduce anxiety, and improve overall mental health."
      ],
      steps: [
        "Find a comfortable seated or lying position",
        "Close your eyes and bring attention to your natural breath",
        "Inhale slowly through your nose for 4 counts",
        "Hold your breath gently for 4 counts",
        "Exhale slowly through your mouth for 6 counts",
        "Repeat this cycle 10-15 times",
        "End by taking three natural breaths"
      ],
      benefits: [
        "Immediate stress relief",
        "Lower blood pressure and heart rate",
        "Improved focus and concentration",
        "Better sleep quality",
        "Enhanced emotional balance",
        "Increased self-awareness"
      ]
    },
    "Quality Sleep": {
      title: "Quality Sleep for Restoration",
      content: [
        "Sleep is not a luxury—it's a biological necessity. During sleep, our bodies repair tissues, consolidate memories, and restore energy for the next day.",
        "Creating healthy sleep habits is one of the most powerful things you can do for your physical and mental health."
      ],
      steps: [
        "Establish a consistent bedtime routine",
        "Create a cool, dark, and quiet sleep environment",
        "Avoid screens 1-2 hours before bedtime",
        "Practice relaxation techniques like gentle stretching",
        "Keep a gratitude journal by your bedside",
        "Wake up at the same time every day, even on weekends"
      ],
      benefits: [
        "Enhanced cognitive function and memory",
        "Stronger immune system",
        "Better emotional regulation",
        "Improved physical recovery",
        "Increased creativity and problem-solving",
        "Reduced risk of chronic diseases"
      ]
    },
    "Digital Detox": {
      title: "Digital Detox for Mental Clarity",
      content: [
        "In our hyperconnected world, taking breaks from technology has become essential for mental health. Constant stimulation from devices can lead to anxiety, decreased attention span, and disrupted sleep.",
        "Regular digital detoxes help restore balance, improve relationships, and reconnect you with the present moment."
      ],
      steps: [
        "Designate specific 'phone-free' times each day",
        "Create technology-free zones in your home",
        "Turn off non-essential notifications",
        "Practice the 20-20-20 rule: every 20 minutes, look at something 20 feet away for 20 seconds",
        "Engage in offline activities like reading, walking, or crafting",
        "Use apps that track and limit screen time"
      ],
      benefits: [
        "Improved focus and attention span",
        "Better sleep quality",
        "Reduced anxiety and stress",
        "Enhanced real-world relationships",
        "Increased creativity and imagination",
        "Greater present-moment awareness"
      ]
    },
    "Movement Practice": {
      title: "Daily Movement for Vitality",
      content: [
        "Movement is medicine for both body and mind. Regular physical activity doesn't have to mean intense workouts—gentle, consistent movement can be just as beneficial.",
        "The key is finding activities you enjoy and making them a natural part of your daily routine."
      ],
      steps: [
        "Start with 10-15 minutes of movement daily",
        "Choose activities you genuinely enjoy",
        "Incorporate movement into daily tasks (take stairs, walk during calls)",
        "Try different types: yoga, dancing, walking, swimming",
        "Listen to your body and rest when needed",
        "Gradually increase duration and intensity"
      ],
      benefits: [
        "Increased energy and stamina",
        "Improved mood and mental health",
        "Better cardiovascular health",
        "Enhanced flexibility and strength",
        "Reduced risk of chronic diseases",
        "Better sleep and stress management"
      ]
    },
    "Stress Management": {
      title: "Effective Stress Management",
      content: [
        "Stress is a natural part of life, but chronic stress can negatively impact every aspect of your health. Learning to manage stress effectively is crucial for long-term wellness.",
        "The goal isn't to eliminate all stress, but to develop healthy coping mechanisms and build resilience."
      ],
      steps: [
        "Identify your personal stress triggers",
        "Practice deep breathing exercises daily",
        "Use progressive muscle relaxation techniques",
        "Engage in regular physical activity",
        "Maintain social connections and seek support",
        "Set realistic expectations and boundaries",
        "Practice gratitude and positive thinking"
      ],
      benefits: [
        "Improved emotional resilience",
        "Better physical health",
        "Enhanced problem-solving abilities",
        "Stronger relationships",
        "Increased life satisfaction",
        "Better work-life balance"
      ]
    },
    "Golden Milk Latte": {
      title: "Golden Milk Latte Recipe",
      content: [
        "Golden milk, also known as turmeric latte, is an ancient Ayurvedic drink that combines powerful anti-inflammatory spices with creamy, nourishing ingredients.",
        "This warming beverage is perfect for evening relaxation and provides numerous health benefits while satisfying your taste buds."
      ],
      recipe: {
        ingredients: [
          "1 cup unsweetened coconut milk",
          "1 tsp turmeric powder",
          "1/2 tsp cinnamon powder",
          "1/4 tsp ginger powder",
          "Pinch of black pepper",
          "1 tbsp maple syrup or honey",
          "1/2 tsp vanilla extract",
          "Pinch of cardamom (optional)"
        ],
        instructions: [
          "Heat coconut milk in a small saucepan over medium heat",
          "Whisk in turmeric, cinnamon, ginger, and black pepper",
          "Simmer for 3-5 minutes, stirring frequently",
          "Remove from heat and stir in maple syrup and vanilla",
          "Strain if desired for smooth texture",
          "Pour into mug and sprinkle with cinnamon",
          "Enjoy warm before bedtime or as an afternoon treat"
        ]
      },
      benefits: [
        "Powerful anti-inflammatory properties",
        "Supports immune system function",
        "Promotes better sleep quality",
        "Rich in antioxidants",
        "Aids in digestion",
        "May help reduce joint pain",
        "Supports brain health and cognitive function"
      ]
    }
  };

  const handleTipClick = (tipTitle: string) => {
    const tipDetail = tipDetails[tipTitle];
    if (tipDetail) {
      setSelectedTip(tipDetail);
      setIsModalOpen(true);
    }
  };
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