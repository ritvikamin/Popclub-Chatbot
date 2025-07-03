import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-darkCard text-darkText py-10 px-4 mt-24 border-t border-popYellow/20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-4 md:items-start items-center">
          <span className="font-bold text-xl text-popYellow">POPCLUB</span>
          <div className="flex gap-4 mt-2">
            <a href="#" aria-label="Instagram" className="hover:text-popYellow"><Instagram className="w-6 h-6" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-popYellow"><Twitter className="w-6 h-6" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-popYellow"><Linkedin className="w-6 h-6" /></a>
          </div>
        </div>
        <form className="flex gap-2 items-center w-full md:w-auto max-w-md">
          <Input placeholder="Your email" type="email" className="bg-darkBg text-popYellow border-popYellow/40" />
          <Button className="bg-popYellow text-darkBg font-bold hover:bg-popBlue hover:text-popYellow">Subscribe</Button>
        </form>
        <span className="text-sm text-popYellow/80">&copy; {new Date().getFullYear()} POPCLUB. All rights reserved.</span>
      </div>
    </footer>
  );
} 