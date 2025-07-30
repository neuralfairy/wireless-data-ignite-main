import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Workflow, 
  Target, 
  BarChart3, 
  Timer, 
  Shield, 
  Users, 
  Zap, 
  Mail,
  Play,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const featureCategories = [
  {
    title: "Intelligent Automation",
    description: "AI-powered tools that work smarter, not harder",
    features: [
      {
        icon: Brain,
        title: "AI-Powered Personalization",
        description: "Machine learning algorithms analyze customer behavior to deliver personalized content that resonates with each individual recipient.",
        benefits: ["Increase engagement by 3x", "Improve conversion rates", "Reduce unsubscribe rates"]
      },
      {
        icon: Workflow,
        title: "Visual Workflow Builder",
        description: "Design complex automation sequences with our intuitive drag-and-drop interface. No coding required.",
        benefits: ["Reduce setup time by 80%", "Create sophisticated campaigns", "Easy A/B testing"]
      },
      {
        icon: Timer,
        title: "Send Time Optimization",
        description: "AI determines the optimal send time for each contact based on their historical engagement patterns.",
        benefits: ["Increase open rates by 25%", "Maximize engagement", "Global timezone support"]
      }
    ]
  },
  {
    title: "Advanced Targeting",
    description: "Reach the right people with the right message",
    features: [
      {
        icon: Target,
        title: "Dynamic Segmentation",
        description: "Create audience segments that automatically update based on customer behavior, preferences, and engagement.",
        benefits: ["Real-time updates", "Behavioral triggers", "Custom criteria"]
      },
      {
        icon: Users,
        title: "Lead Scoring",
        description: "Automatically score leads based on engagement, demographics, and behavior to prioritize your sales efforts.",
        benefits: ["Identify hot prospects", "Improve sales efficiency", "Custom scoring models"]
      },
      {
        icon: Zap,
        title: "Trigger-Based Campaigns",
        description: "Launch campaigns automatically based on customer actions, website behavior, or CRM data changes.",
        benefits: ["Instant responses", "Behavioral targeting", "Multi-channel triggers"]
      }
    ]
  },
  {
    title: "Analytics & Optimization",
    description: "Data-driven insights for continuous improvement",
    features: [
      {
        icon: BarChart3,
        title: "Advanced Analytics",
        description: "Comprehensive reporting with ROI tracking, conversion metrics, and detailed campaign performance insights.",
        benefits: ["ROI calculation", "Custom dashboards", "Exportable reports"]
      },
      {
        icon: Shield,
        title: "Deliverability Optimization",
        description: "Built-in tools to maintain high deliverability rates and protect your sender reputation.",
        benefits: ["99.2% delivery rate", "Spam score monitoring", "Reputation management"]
      },
      {
        icon: Mail,
        title: "A/B Testing Suite",
        description: "Test every element of your campaigns to optimize performance and maximize results.",
        benefits: ["Statistical significance", "Multivariate testing", "Automatic winners"]
      }
    ]
  }
];

const Features = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-hero text-white">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Powerful Features for Email Marketing Success
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Discover how iEMA's comprehensive feature set helps B2B companies 
              automate, optimize, and scale their email marketing efforts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Feature Categories */}
        {featureCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className={`section-padding ${categoryIndex % 2 === 0 ? 'bg-background' : 'bg-card'}`}>
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  {category.title}
                </h2>
                <p className="text-xl text-muted-foreground">
                  {category.description}
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {category.features.map((feature, featureIndex) => (
                  <Card key={featureIndex} className="card-hover bg-gradient-card border-0 shadow-soft">
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="section-padding bg-gradient-card">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Ready to Experience These Features?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start your free trial today and discover how iEMA can transform 
              your email marketing campaigns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero">
                Start Free Trial
              </Button>
              <Button className="btn-secondary">
                Schedule Demo
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Free 14-day trial • No credit card required • Setup in under 5 minutes
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Features;