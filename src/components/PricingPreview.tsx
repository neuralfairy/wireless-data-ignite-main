import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "Perfect for small businesses getting started with email automation",
    features: [
      "Up to 2,500 contacts",
      "10,000 emails/month",
      "Basic automation workflows",
      "Email templates library",
      "Basic analytics & reporting",
      "Email support"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$149",
    period: "/month",
    description: "Advanced features for growing B2B companies",
    features: [
      "Up to 15,000 contacts",
      "100,000 emails/month",
      "Advanced automation & triggers",
      "A/B testing suite",
      "Advanced analytics & ROI tracking",
      "CRM integrations",
      "Priority support",
      "Custom email domains"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "Tailored solutions for large organizations",
    features: [
      "Unlimited contacts",
      "Unlimited emails",
      "Custom automation workflows",
      "Advanced personalization AI",
      "White-label options",
      "Dedicated account manager",
      "Custom integrations",
      "24/7 phone support"
    ],
    popular: false
  }
];

const PricingPreview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your business needs. All plans include our core automation features 
            with no hidden fees or setup costs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative card-hover ${
                plan.popular 
                  ? 'border-primary shadow-medium scale-105' 
                  : 'border-border shadow-soft'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                </div>
                <CardDescription className="mt-4 text-base">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'btn-hero' 
                      : 'btn-secondary'
                  }`}
                  asChild
                >
                  <Link to="/pricing">
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <Link 
            to="/pricing" 
            className="text-primary hover:text-primary/80 font-medium transition-smooth"
          >
            View detailed pricing and features →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;