import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Zap, 
  Target, 
  BarChart3, 
  Users, 
  Mail, 
  Timer,
  Shield,
  Workflow,
  Brain
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Personalization",
    description: "Intelligent content recommendations based on customer behavior, preferences, and engagement history.",
    highlight: "Machine Learning"
  },
  {
    icon: Workflow,
    title: "Advanced Drip Campaigns",
    description: "Create sophisticated automation workflows with triggers, conditions, and branching logic.",
    highlight: "Visual Builder"
  },
  {
    icon: Target,
    title: "Smart Segmentation",
    description: "Dynamic audience segmentation that automatically updates based on customer actions and data.",
    highlight: "Real-time Updates"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Comprehensive reporting with ROI tracking, conversion metrics, and campaign performance insights.",
    highlight: "Custom Dashboards"
  },
  {
    icon: Timer,
    title: "Send Time Optimization",
    description: "AI determines the optimal send time for each contact to maximize open and click rates.",
    highlight: "Per-Contact Timing"
  },
  {
    icon: Shield,
    title: "Compliance & Security",
    description: "GDPR, CAN-SPAM compliant with enterprise-grade security and data protection.",
    highlight: "SOC 2 Certified"
  },
  {
    icon: Users,
    title: "CRM Integration",
    description: "Seamlessly sync with Salesforce, HubSpot, Pipedrive, and 50+ other CRM platforms.",
    highlight: "2-Way Sync"
  },
  {
    icon: Zap,
    title: "A/B Testing Suite",
    description: "Test subject lines, content, send times, and entire workflows to optimize performance.",
    highlight: "Statistical Significance"
  },
  {
    icon: Mail,
    title: "Deliverability Optimization",
    description: "Built-in tools to maintain high deliverability rates and protect your sender reputation.",
    highlight: "99.2% Delivery Rate"
  }
];

const FeaturesOverview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent rounded-full px-4 py-2 text-sm font-medium text-accent-foreground mb-4">
            <Zap className="w-4 h-4" />
            <span>Powerful Features</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Everything You Need for Email Marketing Success
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive iEMA platform combines cutting-edge automation, 
            intelligent personalization, and robust analytics to drive real business results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover bg-gradient-card border-0 shadow-soft">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-medium text-primary bg-accent px-2 py-1 rounded-full">
                    {feature.highlight}
                  </span>
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-medium">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Your Email Marketing?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of B2B companies already using iEMA to drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero">
                Start Free Trial
              </button>
              <button className="btn-secondary">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverview;