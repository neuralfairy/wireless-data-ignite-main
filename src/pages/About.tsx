import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, Zap } from "lucide-react";

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "CEO & Founder",
    description: "Former VP of Marketing at TechCorp with 15+ years in B2B marketing automation.",
    image: "SC"
  },
  {
    name: "Michael Rodriguez",
    role: "CTO",
    description: "Ex-Google engineer with expertise in machine learning and scalable infrastructure.",
    image: "MR"
  },
  {
    name: "Emily Thompson",
    role: "Head of Customer Success",
    description: "Dedicated to ensuring our clients achieve maximum ROI from their email campaigns.",
    image: "ET"
  }
];

const values = [
  {
    icon: Target,
    title: "Customer-Centric",
    description: "Every feature we build is designed to solve real customer problems and drive measurable results."
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "We leverage cutting-edge AI and automation to stay ahead of industry trends."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in platform performance, security, and support."
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We work as an extension of your team, committed to your long-term success."
  }
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-hero text-white">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              About Wireless Data Solutions
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We're on a mission to help B2B companies build meaningful relationships 
              with their customers through intelligent email marketing automation.
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Our Story
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded in 2019 in Henderson, Nevada, Wireless Data Solutions emerged from a 
                  simple observation: most email marketing platforms were either too complex 
                  for small businesses or too basic for growing companies.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our founders, having experienced these challenges firsthand at previous companies, 
                  set out to create iEMA - a platform that combines enterprise-level sophistication 
                  with user-friendly design.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, we serve over 500 B2B companies worldwide, helping them automate their 
                  email marketing while maintaining the personal touch that drives real relationships 
                  and revenue growth.
                </p>
              </div>
              <div className="bg-gradient-card rounded-2xl p-8 shadow-medium">
                <h3 className="text-2xl font-bold text-foreground mb-6">Company Milestones</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <div>
                      <div className="font-semibold">2019</div>
                      <div className="text-sm text-muted-foreground">Company founded in Henderson, NV</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <div>
                      <div className="font-semibold">2020</div>
                      <div className="text-sm text-muted-foreground">First 100 customers milestone</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <div>
                      <div className="font-semibold">2022</div>
                      <div className="text-sm text-muted-foreground">AI-powered personalization launched</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <div>
                      <div className="font-semibold">2024</div>
                      <div className="text-sm text-muted-foreground">500+ active customers worldwide</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="section-padding bg-card">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Mission & Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We believe that great email marketing is about building relationships, 
                not just sending messages.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center shadow-soft card-hover">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Meet Our Leadership Team
              </h2>
              <p className="text-xl text-muted-foreground">
                Experienced professionals dedicated to your success
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {teamMembers.map((member, index) => (
                <Card key={index} className="text-center shadow-soft card-hover">
                  <CardHeader>
                    <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">{member.image}</span>
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-card">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Ready to Join Our Success Story?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's work together to transform your email marketing and drive real business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero">
                Start Free Trial
              </Button>
              <Button className="btn-secondary">
                Contact Our Team
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;