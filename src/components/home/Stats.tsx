import { useEffect, useState, useMemo } from "react";
import { Heart, Home, Users, Award } from "lucide-react";

const Stats = () => {
  const [isVisible] = useState(true);

  const stats = useMemo(
    () => [
      {
        icon: <Heart className="h-10 w-10" />,
        number: 2500,
        label: "Animals Rescued",
        suffix: "+",
        color: "text-primary",
        bgColor: "bg-primary-soft",
      },
      {
        icon: <Home className="h-10 w-10" />,
        number: 1800,
        label: "Successful Adoptions",
        suffix: "+",
        color: "text-secondary",
        bgColor: "bg-secondary-soft",
      },
      {
        icon: <Users className="h-10 w-10" />,
        number: 150,
        label: "Active Volunteers",
        suffix: "+",
        color: "text-accent",
        bgColor: "bg-accent-soft",
      },
      {
        icon: <Award className="h-10 w-10" />,
        number: 15,
        label: "Years of Service",
        color: "text-success",
        bgColor: "bg-success/10",
      },
    ],
    [],
  );

  // State to track counts for each stat
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  // Animate all counters when component becomes visible
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounts((prevCounts) =>
        prevCounts.map((_, index) => {
          const end = stats[index].number;
          return Math.floor(progress * end);
        }),
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [isVisible, stats]);

  return (
    <section
      id="stats-section"
      className="section-spacing bg-gradient-to-br from-primary-soft via-background to-secondary-soft"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our Impact in
            <span className="gradient-text"> Numbers</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every number represents a life saved, a family created, and a
            community that cares. Together, we're making a real difference.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              count={counts[index]}
              label={stat.label}
              suffix={stat.suffix}
              color={stat.color}
              bgColor={stat.bgColor}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16 p-8 bg-gradient-warm text-white rounded-2xl shadow-warm">
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            These numbers grow every day thanks to supporters like you. Whether
            through adoption, volunteering, or donations, you can be part of our
            mission to save more lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-hero-outline">Learn How to Help</button>
            <button className="btn-hero-outline">Volunteer Today</button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Individual stat card component
interface StatCardProps {
  icon: React.ReactNode;
  count: number;
  label: string;
  suffix?: string;
  color: string;
  bgColor: string;
  isVisible: boolean;
}

const StatCard = ({
  icon,
  count,
  label,
  suffix = "",
  color,
  bgColor,
  isVisible,
}: StatCardProps) => {
  return (
    <div
      className={`text-center p-8 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card ${isVisible ? "animate-scale-in" : ""}`}
    >
      <div
        className={`${bgColor} ${color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md`}
      >
        {icon}
      </div>
      <div className="counter text-5xl font-bold mb-2">
        {count.toLocaleString()}
        {suffix}
      </div>
      <p className="text-muted-foreground font-medium text-lg">{label}</p>
    </div>
  );
};

export default Stats;
