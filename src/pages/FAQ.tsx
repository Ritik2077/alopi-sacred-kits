
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FAQ = () => {
  const faqs = [
    {
      question: "How does the subscription service work?",
      answer: "Our subscription service delivers fresh pooja essentials to your doorstep daily, weekly, or monthly based on your chosen plan. Simply select your preferred frequency and we'll handle the rest."
    },
    {
      question: "What items are included in the daily pooja kit?",
      answer: "Each daily kit includes fresh flowers, incense sticks, kumkum, turmeric, rice, and other essential items needed for your daily prayers."
    },
    {
      question: "Can I customize my pooja kit?",
      answer: "Yes! You can customize your kit based on your specific requirements and regional preferences. Contact our support team for personalized options."
    },
    {
      question: "What are your delivery areas?",
      answer: "We currently deliver across major cities in India. Enter your pincode during checkout to confirm delivery availability in your area."
    },
    {
      question: "How can I pause or cancel my subscription?",
      answer: "You can pause or cancel your subscription anytime through your account dashboard or by contacting our customer support team."
    },
    {
      question: "What if I'm not satisfied with the quality?",
      answer: "We guarantee the freshness and quality of all our products. If you're not satisfied, contact us within 24 hours for a replacement or refund."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-gradient">Frequently Asked Questions</h1>
          
          <Card className="glassmorphism">
            <CardHeader>
              <CardTitle>Common Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FAQ;
