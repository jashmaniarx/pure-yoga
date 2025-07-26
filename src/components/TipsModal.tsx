import { Button } from "@/components/ui/button";
import { X, ArrowLeft } from "lucide-react";

interface TipDetail {
  title: string;
  content: string[];
  benefits: string[];
  steps?: string[];
  recipe?: {
    ingredients: string[];
    instructions: string[];
  };
}

interface TipsModalProps {
  isOpen: boolean;
  onClose: () => void;
  tip: TipDetail | null;
}

const TipsModal = ({ isOpen, onClose, tip }: TipsModalProps) => {
  if (!isOpen || !tip) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md modal-enter">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="glass rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gradient">{tip.title}</h2>
            <Button
              variant="glass"
              size="icon"
              onClick={onClose}
              className="rounded-full ripple"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          <div className="space-y-8">
            {/* Content */}
            <div>
              <h3 className="text-xl font-semibold text-text-primary mb-4">Overview</h3>
              <div className="space-y-4">
                {tip.content.map((paragraph, index) => (
                  <p key={index} className="text-text-secondary leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Steps if available */}
            {tip.steps && (
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">Step-by-Step Guide</h3>
                <div className="space-y-3">
                  {tip.steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-aqua/20 flex items-center justify-center">
                        <span className="text-sm font-bold text-accent-aqua">{index + 1}</span>
                      </div>
                      <p className="text-text-secondary leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Recipe if available */}
            {tip.recipe && (
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">Recipe</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-accent-aqua mb-3">Ingredients:</h4>
                    <ul className="space-y-2">
                      {tip.recipe.ingredients.map((ingredient, index) => (
                        <li key={index} className="text-text-secondary flex items-start gap-2">
                          <span className="text-accent-coral">•</span>
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent-lavender mb-3">Instructions:</h4>
                    <ol className="space-y-2">
                      {tip.recipe.instructions.map((instruction, index) => (
                        <li key={index} className="text-text-secondary flex items-start gap-3">
                          <span className="flex-shrink-0 text-accent-lavender font-bold">{index + 1}.</span>
                          {instruction}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            )}

            {/* Benefits */}
            <div>
              <h3 className="text-xl font-semibold text-text-primary mb-4">Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {tip.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-accent-aqua">✓</span>
                    <span className="text-text-secondary">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Button
              variant="aqua"
              onClick={onClose}
              className="px-8 py-3 rounded-2xl ripple"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Tips
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipsModal;