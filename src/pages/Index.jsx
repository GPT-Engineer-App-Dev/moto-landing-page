import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

function Index() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Simulate fetching testimonials from an API
    setTestimonials([
      {
        id: 1,
        name: "John Doe",
        feedback: "This is the best motorcycle SaaS I've ever used!",
      },
      {
        id: 2,
        name: "Jane Smith",
        feedback: "Amazing features and great support!",
      },
    ]);
  }, []);

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-100">
        <h1 className="text-5xl font-bold mb-4">Welcome to MotoSaaS</h1>
        <p className="text-xl mb-8">
          The ultimate SaaS solution for motorcycle enthusiasts.
        </p>
        <Button size="lg">Get Started</Button>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Feature One</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Detail about feature one.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Two</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Detail about feature two.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Three</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Detail about feature three.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-12">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id}>
              <CardHeader>
                <CardTitle>{testimonial.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{testimonial.feedback}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="cta" className="text-center py-20">
        <h2 className="text-4xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-xl mb-8">
          Join MotoSaaS today and take your motorcycle experience to the next
          level.
        </p>
        <Button size="lg">Sign Up Now</Button>
      </section>
    </main>
  );
}

export default Index;