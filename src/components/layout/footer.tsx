import Link from 'next/link';
import { AndrGlobalLogo } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Twitter, Linkedin, Facebook } from 'lucide-react';

const projectLinks = [
  { name: 'ANDROGOLD', description: 'Commission-based gold sales.', href: '/projects/gold' },
  { name: 'ANDRESHOP', description: 'Wholesale food supplies.', href: '/projects/shop' },
];

const socialLinks = [
  { name: 'Twitter', href: '#', icon: <Twitter className="h-5 w-5" /> },
  { name: 'LinkedIn', href: '#', icon: <Linkedin className="h-5 w-5" /> },
  { name: 'Facebook', href: '#', icon: <Facebook className="h-5 w-5" /> },
];

export function Footer() {
  return (
    <footer className="bg-secondary/50 text-secondary-foreground" id="projects">
      <div className="container mx-auto px-4 md:px-6 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          <div className="md:col-span-1">
            <h3 className="font-headline text-2xl font-semibold mb-2">Our Partner Projects</h3>
            <p className="text-muted-foreground">
              Expanding our expertise into diverse markets.
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {projectLinks.map((project) => (
              <div key={project.name} className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h4 className="font-headline text-xl font-bold text-primary">{project.name}</h4>
                <p className="text-muted-foreground mt-2 mb-4">{project.description}</p>
                <Button asChild variant="outline">
                  <Link href={project.href}>Learn More</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <Link href="/" className="flex items-center gap-2 font-headline text-xl font-bold text-primary mb-4">
              <AndrGlobalLogo className="h-7 w-7" />
              <span>AndrGlobal</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Professional business consulting to elevate your strategy and operations.
            </p>
          </div>
          
          <div className="text-center lg:text-left">
            <h4 className="font-headline font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/consulting" className="text-muted-foreground hover:text-foreground">Consulting</Link></li>
              <li><Link href="/#about" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link href="/#contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          
          <div className="text-center lg:text-left">
            <h4 className="font-headline font-semibold mb-4">Follow Us</h4>
            <div className="flex justify-center lg:justify-start gap-4">
              {socialLinks.map(link => (
                <Button key={link.name} variant="ghost" size="icon" asChild>
                    <Link href={link.href} aria-label={link.name} className="text-muted-foreground hover:text-foreground">
                        {link.icon}
                    </Link>
                </Button>
              ))}
            </div>
          </div>

          <div className="text-center lg:text-left">
            <h4 className="font-headline font-semibold mb-4">Subscribe to our Newsletter</h4>
            <form className="flex flex-col sm:flex-row gap-2">
              <Input type="email" placeholder="Your email" className="bg-background" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} AndrGlobal Consulting. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
