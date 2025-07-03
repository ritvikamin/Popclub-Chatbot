import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="max-w-lg mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
        <Card className="p-6 flex flex-col gap-4">
          <Input placeholder="Your Name" />
          <Input placeholder="Your Email" type="email" />
          <Textarea placeholder="Your Message" rows={5} />
          <Button disabled>Send Message</Button>
        </Card>
      </main>
      <Footer />
    </>
  );
} 