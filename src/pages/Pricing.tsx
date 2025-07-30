import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Star, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    yearlyPrice: "$39",
    description: "Perfect for small businesses getting started with email automation",
    features: [
      "Up to 2,500 contacts",
      "10,000 emails per month",
      "Basic automation workflows",
      "Email templates library (50+ templates)",
      "Basic analytics & reporting",
      "Email support",
      "Landing page builder",
      "Basic CRM integration"
    ],
    popular: false,
    savings: "Save $120/year"
  },
  {
    name: "Professional",
    price: "$149",
    period: "/month",
    yearlyPrice: "$119",
    description: "Advanced features for growing B2B companies",
    features: [
      "Up to 15,000 contacts",
      "100,000 emails per month",
      "Advanced automation & triggers",
      "A/B testing suite",
      "Advanced analytics & ROI tracking",
      "All CRM integrations",
      "Priority support",
      "Custom email domains",
      "Lead scoring",
      "Advanced segmentation",
      "Send time optimization",
      "Custom reporting"
    ],
    popular: true,
    savings: "Save $360/year"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    yearlyPrice: "Contact us",
    description: "Tailored solutions for large organizations",
    features: [
      "Unlimited contacts",
      "Unlimited emails",
      "Custom automation workflows",
      "Advanced personalization AI",
      "White-label options",
      "Dedicated account manager",
      "Custom integrations",
      "24/7 phone support",
      "Advanced security features",
      "Custom onboarding",
      "Training & consulting",
      "SLA guarantees"
    ],
    popular: false,
    savings: "Custom pricing"
  }
];

const addons = [
  {
    name: "SMS Marketing",
    price: "$29/month",
    description: "Add SMS campaigns to your email automation workflows"
  },
  {
    name: "Advanced Analytics",
    price: "$49/month", 
    description: "Enhanced reporting with custom dashboards and data exports"
  },
  {
    name: "Dedicated IP",
    price: "$99/month",
    description: "Improve deliverability with your own dedicated sending IP"
  }
];

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-hero text-white">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Choose the plan that fits your business needs. All plans include our core 
              automation features with no hidden fees or setup costs.
            </p>
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full p-1">
              <button className="px-4 py-2 rounded-full bg-white text-primary font-medium">
                Monthly
              </button>
              <button className="px-4 py-2 rounded-full text-white font-medium">
                Yearly (Save 20%)
              </button>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
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
                      <div className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>Most Popular</span>
                      </div>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground ml-1">{plan.period}</span>
                    </div>
                    {plan.yearlyPrice !== "Contact us" && plan.yearlyPrice !== "Custom pricing" && (
                      <div className="text-sm text-muted-foreground">
                        or ${plan.yearlyPrice}/month billed yearly
                      </div>
                    )}
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
                    >
                      {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    
                    {plan.savings && (
                      <p className="text-center text-sm text-primary font-medium">
                        {plan.savings}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="section-padding bg-card">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Optional Add-ons
              </h2>
              <p className="text-xl text-muted-foreground">
                Enhance your platform with additional features
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {addons.map((addon, index) => (
                <Card key={index} className="text-center shadow-soft">
                  <CardHeader>
                    <CardTitle className="text-xl">{addon.name}</CardTitle>
                    <div className="text-2xl font-bold text-primary">{addon.price}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{addon.description}</p>
                    <Button variant="outline" className="w-full">
                      Add to Plan
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-background">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 shadow-soft">
                <h3 className="font-semibold text-foreground mb-2">
                  What happens during the free trial?
                </h3>
                <p className="text-muted-foreground">
                  You get full access to all Professional plan features for 14 days. 
                  No credit card required, and you can cancel anytime.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-soft">
                <h3 className="font-semibold text-foreground mb-2">
                  Can I change plans anytime?
                </h3>
                <p className="text-muted-foreground">
                  Yes! You can upgrade or downgrade your plan at any time. 
                  Changes take effect immediately with prorated billing.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-soft">
                <h3 className="font-semibold text-foreground mb-2">
                  What CRM integrations do you offer?
                </h3>
                <p className="text-muted-foreground">
                  We integrate with 50+ platforms including Salesforce, HubSpot, 
                  Pipedrive, Zoho, and many more. Custom integrations available on Enterprise plans.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-card">
          <div className="container mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <Zap className="w-8 h-8 text-primary mr-2" />
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Ready to Get Started?
              </h2>
            </div>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of B2B companies already using iEMA to drive growth and revenue.
            </p>
            <Button className="btn-hero text-lg px-8 py-4">
              Start Your Free Trial Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              No credit card required • Full access • Cancel anytime
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;