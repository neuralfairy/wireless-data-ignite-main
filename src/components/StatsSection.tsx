import { TrendingUp, Users, Mail, DollarSign } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Active B2B Clients",
    description: "Companies trust our platform"
  },
  {
    icon: Mail,
    value: "50M+",
    label: "Emails Delivered",
    description: "Monthly email volume"
  },
  {
    icon: TrendingUp,
    value: "127%",
    label: "Average ROI Increase",
    description: "Within first 6 months"
  },
  {
    icon: DollarSign,
    value: "$2.4M",
    label: "Revenue Generated",
    description: "For our clients last quarter"
  }
];

const StatsSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Proven Results Across Industries
          </h2>
          <p className="text-xl text-muted-foreground">
            Real numbers from real B2B companies using iEMA
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="text-center mb-8">
            <p className="text-muted-foreground font-medium">
              Trusted by leading companies and certified for security
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="bg-muted rounded-lg px-6 py-3 text-sm font-medium">SOC 2 Certified</div>
            <div className="bg-muted rounded-lg px-6 py-3 text-sm font-medium">GDPR Compliant</div>
            <div className="bg-muted rounded-lg px-6 py-3 text-sm font-medium">CAN-SPAM Compliant</div>
            <div className="bg-muted rounded-lg px-6 py-3 text-sm font-medium">99.9% Uptime SLA</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;