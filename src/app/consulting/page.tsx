import { Card, CardDescription, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { Briefcase, BarChart, Settings, Rocket, DollarSign, Users } from "lucide-react";

const allServices = [
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: "Strategic Business Planning",
    description: "Crafting long-term strategies that align with your vision and drive sustainable growth. We help you define your mission, set achievable goals, and create a roadmap for success.",
  },
  {
    icon: <BarChart className="h-10 w-10 text-primary" />,
    title: "Market & Competitive Analysis",
    description: "Gain a competitive edge with our in-depth market research. We analyze market trends, customer behavior, and competitor landscapes to uncover opportunities.",
  },
  {
    icon: <Settings className="h-10 w-10 text-primary" />,
    title: "Operational Improvement & Efficiency",
    description: "Streamline your operations, reduce costs, and increase productivity. We identify bottlenecks and implement process improvements using lean methodologies.",
  },
  {
    icon: <Rocket className="h-10 w-10 text-primary" />,
    title: "Product & Service Innovation",
    description: "From ideation to launch, we guide you through the innovation lifecycle. We help you develop new products and services that meet market needs and delight customers.",
  },
   {
    icon: <DollarSign className="h-10 w-10 text-primary" />,
    title: "Financial Advisory",
    description: "Optimize your financial performance with our expert advisory services, including budgeting, forecasting, and investment strategy to ensure long-term stability and profitability.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Organizational Development",
    description: "Build a high-performing organization by focusing on talent management, leadership development, and fostering a culture of continuous improvement and collaboration.",
  },
];

export default function ConsultingPage() {
  return (
    <div>
      <section className="bg-secondary/50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Our Consulting Expertise</h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            We provide a comprehensive suite of consulting services designed to address your most complex business challenges and unlock your full potential.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {allServices.map((service) => (
              <Card key={service.title} className="flex flex-col md:flex-row items-start overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-accent/50 transform hover:-translate-y-1">
                <div className="p-6 flex-shrink-0 bg-secondary/50 md:bg-transparent rounded-full md:rounded-none m-6 md:m-0 md:p-6">
                  {service.icon}
                </div>
                <div className="p-6 pt-0 md:pt-6 md:border-l w-full">
                  <CardTitle className="font-headline text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-16 md:py-24" id="contact-consulting">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Start Your Transformation</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ready to take the next step? Contact us for a personalized consultation.
            </p>
          </div>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6 md:p-8">
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
