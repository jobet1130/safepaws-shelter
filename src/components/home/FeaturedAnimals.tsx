import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Link } from "react-router-dom";
import dogImage1 from "../../assets/dog1.jpg";
import catImage1 from "../../assets/cat1.jpg";
import dogImage2 from "../../assets/dog2.jpg";

const FeaturedAnimals = () => {
  const featuredAnimals = [
    {
      id: 1,
      name: "Buddy",
      breed: "Golden Retriever",
      age: "2 years old",
      description:
        "Friendly and energetic dog who loves to play fetch and go on long walks.",
      image: dogImage1,
      isUrgent: false,
    },
    {
      id: 2,
      name: "Luna",
      breed: "Domestic Shorthair",
      age: "1 year old",
      description:
        "Sweet and gentle cat who enjoys quiet moments and loves gentle pets.",
      image: catImage1,
      isUrgent: true,
    },
    {
      id: 3,
      name: "Max",
      breed: "Border Collie Mix",
      age: "3 years old",
      description:
        "Intelligent and loyal companion perfect for active families who enjoy outdoor adventures.",
      image: dogImage2,
      isUrgent: false,
    },
  ];

  return (
    <section className="section-spacing bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Meet Our Featured
            <span className="gradient-text"> Friends</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            These amazing animals are ready to find their forever homes. Each
            one has a unique personality and so much love to give.
          </p>
        </div>

        {/* Animals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredAnimals.map((animal) => (
            <Card key={animal.id} className="card-elevated group">
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={animal.image}
                  alt={animal.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {animal.isUrgent && (
                  <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    Urgent
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      {animal.name}
                    </h3>
                    <p className="text-muted-foreground">{animal.breed}</p>
                  </div>
                  <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    {animal.age}
                  </span>
                </div>

                <p className="text-muted-foreground mb-6 line-clamp-2">
                  {animal.description}
                </p>

                <Button className="w-full btn-hero group">
                  View Profile
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button asChild className="btn-hero-secondary text-lg px-8 py-6">
            <Link to="/adopt">
              See All Available Pets
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAnimals;
