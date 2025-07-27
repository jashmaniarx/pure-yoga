import { Button } from "@/components/ui/button";
import { X, CheckCircle, Clock, Star } from "lucide-react";

interface TipDetail {
  id: number;
  title: string;
  content: string;
  benefits: string[];
  steps: string[];
  icon: any;
  color: string;
}

interface TipsModalProps {
  isOpen: boolean;
  onClose: () => void;
  tip: TipDetail | null;
}

const EnhancedTipsModal = ({ isOpen, onClose, tip }: TipsModalProps) => {
  if (!isOpen || !tip) return null;

  const Icon = tip.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative glass rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full glass ${tip.color}`}>
                <Icon className="h-8 w-8" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gradient mb-2">{tip.title}</h2>
                <p className="text-text-secondary">Complete wellness guide</p>
              </div>
            </div>
            <Button 
              variant="glass" 
              size="icon" 
              onClick={onClose}
              className="rounded-full"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Overview & Steps */}
            <div className="space-y-6">
              <div className="glass rounded-3xl p-6">
                <h3 className="text-xl font-bold text-text-primary mb-4">Overview</h3>
                <p className="text-text-secondary leading-relaxed">{tip.content}</p>
              </div>

              <div className="glass rounded-3xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-5 w-5 text-accent-aqua" />
                  <h3 className="text-xl font-bold text-text-primary">Step-by-Step Guide</h3>
                </div>
                <div className="space-y-3">
                  {tip.steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-aqua/20 flex items-center justify-center text-xs font-bold text-accent-aqua mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-text-secondary text-sm leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Benefits */}
            <div className="space-y-6">
              <div className="glass rounded-3xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="h-5 w-5 text-accent-coral" />
                  <h3 className="text-xl font-bold text-text-primary">Key Benefits</h3>
                </div>
                <div className="space-y-3">
                  {tip.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent-coral flex-shrink-0 mt-0.5" />
                      <p className="text-text-secondary text-sm leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Tips */}
              <div className="glass rounded-3xl p-6">
                <h3 className="text-xl font-bold text-text-primary mb-4">Quick Tips</h3>
                <div className="space-y-3 text-sm text-text-secondary">
                  <div className="flex items-start gap-2">
                    <span className="text-accent-lavender">•</span>
                    <span>Start small and build consistency before increasing intensity</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-accent-lavender">•</span>
                    <span>Track your progress in a journal or app</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-accent-lavender">•</span>
                    <span>Be patient with yourself - lasting change takes time</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-accent-lavender">•</span>
                    <span>Celebrate small victories along the way</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <Button 
              variant="coral" 
              onClick={onClose}
              className="px-8 py-3"
            >
              Start Your Journey
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedTipsModal;