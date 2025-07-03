import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const faqs = [
  { q: 'What is POPCLUB?', a: 'POPCLUB is a modern rewards and payments platform.' },
  { q: 'How do I earn POPcoins?', a: 'Earn POPcoins by shopping with partner brands or using the POPCLUB card.' },
  { q: 'Is there a joining fee?', a: 'No, there is zero joining fee for the POPCLUB card.' },
  { q: 'How do I contact support?', a: 'Use the contact page or email us at support@popclub.co.' },
];

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={faq.q} className="mb-2">
              <AccordionTrigger className="font-semibold text-popBlue">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-gray-700">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </main>
      <Footer />
    </>
  );
} 