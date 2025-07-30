import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, TrendingUp } from "lucide-react";

const blogPosts = [
  {
    title: "10 Email Marketing Automation Best Practices for B2B Companies",
    excerpt: "Learn how to create effective email sequences that nurture leads and drive conversions for your B2B business.",
    category: "Best Practices",
    author: "Sarah Chen",
    date: "March 15, 2024",
    readTime: "8 min read",
    featured: true
  },
  {
    title: "How to Improve Email Deliverability: A Complete Guide",
    excerpt: "Discover proven strategies to ensure your emails reach the inbox and maintain a strong sender reputation.",
    category: "Deliverability",
    author: "Michael Rodriguez",
    date: "March 12, 2024",
    readTime: "12 min read",
    featured: false
  },
  {
    title: "The ROI of Email Marketing Automation: Real Case Studies",
    excerpt: "See how our clients achieved 3x ROI improvements with intelligent email marketing automation.",
    category: "Case Studies",
    author: "Emily Thompson",
    date: "March 8, 2024",
    readTime: "6 min read",
    featured: false
  },
  {
    title: "Email Personalization: Beyond First Names",
    excerpt: "Advanced personalization techniques that create meaningful connections with your B2B prospects.",
    category: "Personalization",
    author: "Sarah Chen",
    date: "March 5, 2024",
    readTime: "10 min read",
    featured: false
  },
  {
    title: "A/B Testing Your Email Campaigns: What to Test and When",
    excerpt: "Master the art of email A/B testing to optimize open rates, click-through rates, and conversions.",
    category: "Optimization",
    author: "Michael Rodriguez",
    date: "March 1, 2024",
    readTime: "7 min read",
    featured: false
  },
  {
    title: "CRM Integration: Syncing Your Sales and Marketing Efforts",
    excerpt: "How to seamlessly connect your email marketing platform with your CRM for better lead management.",
    category: "Integration",
    author: "Emily Thompson",
    date: "February 28, 2024",
    readTime: "9 min read",
    featured: false
  }
];

const categories = [
  "All Posts",
  "Best Practices", 
  "Case Studies",
  "Deliverability",
  "Integration",
  "Optimization",
  "Personalization"
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-hero text-white">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Email Marketing Insights & Tips
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Stay ahead of the curve with expert advice, industry insights, 
              and practical strategies to maximize your email marketing success.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="mb-12">
              <div className="flex items-center space-x-2 mb-6">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="font-medium text-primary">Featured Article</span>
              </div>
              
              {blogPosts.filter(post => post.featured).map((post, index) => (
                <Card key={index} className="shadow-medium card-hover bg-gradient-card">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="bg-gradient-primary/10 p-8 lg:p-12 flex items-center">
                      <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                          <Badge variant="secondary">{post.category}</Badge>
                          <span className="text-sm text-muted-foreground">{post.readTime}</span>
                        </div>
                        
                        <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                          {post.title}
                        </h2>
                        
                        <p className="text-lg text-muted-foreground">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-2">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                        
                        <Button className="btn-hero">
                          Read Article
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="bg-gradient-primary/5 p-8"></div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="section-padding bg-card">
          <div className="container mx-auto">
            {/* Categories Filter */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">All Articles</h2>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <Button 
                    key={index}
                    variant={index === 0 ? "default" : "outline"}
                    size="sm"
                    className={index === 0 ? "btn-hero" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post, index) => (
                <Card key={index} className="shadow-soft card-hover">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl hover:text-primary transition-smooth cursor-pointer">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground mt-2">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                        Read More
                        <ArrowRight className="ml-1 w-3 h-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button className="btn-secondary">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="section-padding bg-gradient-card">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Stay Updated with Email Marketing Trends
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the latest insights, tips, and case studies delivered to your inbox every week.
            </p>
            
            <div className="max-w-md mx-auto flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="btn-hero px-6 py-3">
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;