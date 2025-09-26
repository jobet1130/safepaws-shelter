import { useState } from "react";
import { Mail, CheckCircle, Heart, Bell, Gift } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card, CardContent } from "../ui/card";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail("");
    }, 1000);
  };

  const benefits = [
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: "Adoption Alerts",
      description: "Be the first to meet new arrivals and special needs pets",
    },
    {
      icon: <Bell className="h-6 w-6 text-secondary" />,
      title: "Event Updates",
      description:
        "Get notified about adoption events and community activities",
    },
    {
      icon: <Gift className="h-6 w-6 text-accent" />,
      title: "Success Stories",
      description:
        "Heartwarming updates on adopted pets and their new families",
    },
  ];

  if (isSubscribed) {
    return (
      <section className="section-spacing bg-gradient-warm">
        <div className="container mx-auto text-center">
          <Card className="max-w-md mx-auto card-elevated">
            <CardContent className="p-8">
              <CheckCircle className="h-16 w-16 text-success mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">
                Welcome to Our Family!
              </h3>
              <p className="text-muted-foreground">
                Thank you for subscribing! You'll receive our next newsletter
                with the latest updates, adoption stories, and upcoming events.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="section-spacing bg-gradient-warm text-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Mail className="h-16 w-16 mx-auto mb-6 text-white/80" />
            <h2 className="text-4xl font-bold mb-4">
              Stay Connected with Our Mission
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join our newsletter community and never miss an update on our
              rescue efforts, success stories, and opportunities to make a
              difference.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Newsletter Benefits */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">
                What You'll Receive:
              </h3>

              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-white/80">{benefit.description}</p>
                  </div>
                </div>
              ))}

              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 mt-8">
                <p className="text-sm text-white/90">
                  <strong>Privacy Promise:</strong> We respect your inbox and
                  will never share your email. Unsubscribe anytime with one
                  click.
                </p>
              </div>
            </div>

            {/* Subscription Form */}
            <Card className="card-elevated">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  Join Our Newsletter
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full text-lg py-6"
                      disabled={isLoading}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full btn-hero text-lg py-6"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Subscribing...
                      </>
                    ) : (
                      <>
                        <Mail className="mr-2 h-5 w-5" />
                        Subscribe for Free
                      </>
                    )}
                  </Button>
                </form>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  By subscribing, you agree to receive updates from Animal
                  Shelter Foundation. We send 2-3 emails per month.
                </p>

                {/* Social Proof */}
                <div className="mt-6 pt-6 border-t border-border text-center">
                  <p className="text-sm text-muted-foreground">
                    Join <strong>2,800+</strong> animal lovers already
                    subscribed
                  </p>
                  <div className="flex justify-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 bg-gradient-warm rounded-full border-2 border-white -ml-2 flex items-center justify-center text-white text-xs font-bold"
                      >
                        🐾
                      </div>
                    ))}
                    <div className="w-8 h-8 bg-muted rounded-full border-2 border-white -ml-2 flex items-center justify-center text-xs font-bold">
                      +
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
