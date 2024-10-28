import { PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqItems = [
  {
    question: "What makes your platform unique for small businesses?",
    answer: "Our platform is specifically designed for SMBs, offering streamlined trade processes, intuitive interfaces, and features tailored to small business needs. We focus on simplifying complex tasks and reducing the time spent on administrative work."
  },
  {
    question: "How secure is the data on your platform?",
    answer: "We prioritize data security with industry-standard encryption, regular security audits, and compliance with data protection regulations. Your business information is protected with multi-factor authentication and role-based access controls."
  },
  {
    question: "Can I integrate your platform with my existing tools?",
    answer: "Yes, our platform offers seamless integration with a wide range of popular business tools and software. We provide APIs and pre-built connectors to ensure smooth data flow between our platform and your existing systems."
  },
  {
    question: "What kind of customer support do you offer?",
    answer: "We provide comprehensive customer support including 24/7 live chat, email support, and phone assistance during business hours. Our dedicated support team is trained to help you with any issues or questions you may have about using our platform."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 14-day free trial that gives you full access to all features of our platform. This allows you to explore the system, test its capabilities, and see how it can benefit your business before making a commitment."
  }
];

export const FAQs = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge variant="outline">FAQ</Badge>
          <div className="flex gap-2 flex-col">
            <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
              Frequently Asked Questions
            </h4>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
              Find answers to common questions about our platform and how it can help streamline your small business operations.
            </p>
          </div>
          <div>
            <Button className="gap-4" variant="outline">
              Any questions? Reach out <PhoneCall className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="max-w-3xl w-full mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  </div>
);
