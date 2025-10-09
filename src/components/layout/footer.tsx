
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Twitter, Linkedin, Facebook, ChevronRight, MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

const socialLinks = [
  { name: 'Twitter', href: '#', icon: <Twitter className="h-5 w-5" /> },
  { name: 'LinkedIn', href: '#', icon: <Linkedin className="h-5 w-5" /> },
  { name: 'Facebook', href: '#', icon: <Facebook className="h-5 w-5" /> },
];

export function Footer() {
  const { translations } = useLanguage();

  const projectLinks = [
    { name: translations.footer.quickLinks.gold, href: '/projects/gold' },
    { name: translations.footer.quickLinks.shop, href: '/projects/shop' },
    { name: translations.footer.quickLinks.consulting, href: '/consulting' },
  ];
  
  const andrGoldImageUrl = "https://dalogo.ru/wp-content/uploads/2019/10/Sajjt-11132-SHokoladnyjj-mini-Slitok-zolota-New-3.jpg";
  const officeAddress = "Alamanda Office, Jl. Bypass Ngurah Rai Br. Kerthayasa No.67 5th Floor";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddress)}`;

  const developerLogoHtml = `
    <!DOCTYPE html>
    <html lang="ru">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"><\/script>
        <style>
            body { margin: 0; overflow: hidden; background-color: transparent; }
        </style>
    </head>
    <body>
        <script>
            let scene, camera, renderer, uGroup;
            const ROTATION_SPEED = 0.015;
            const GLOW_COLOR = 0x00ffff;

            function init() {
                try {
                    scene = new THREE.Scene();
                    const aspectRatio = 1;
                    camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
                    camera.position.z = 3.5;

                    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
                    renderer.setSize(25, 25);
                    renderer.setPixelRatio(window.devicePixelRatio);
                    document.body.appendChild(renderer.domElement);

                    uGroup = new THREE.Group();
                    scene.add(uGroup);

                    const thickness = 0.5;
                    const height = 3;
                    const width = 2.5;

                    const verticalBarGeometry = new THREE.BoxGeometry(thickness, height, thickness);
                    const horizontalBarGeometry = new THREE.BoxGeometry(width + thickness, thickness, thickness);

                    const coreMaterial = new THREE.MeshPhongMaterial({
                        color: GLOW_COLOR,
                        shininess: 100,
                        emissive: GLOW_COLOR,
                        emissiveIntensity: 0.5
                    });

                    const leftBar = new THREE.Mesh(verticalBarGeometry, coreMaterial);
                    leftBar.position.x = -width / 2;
                    leftBar.position.y = 0.5;
                    uGroup.add(leftBar);

                    const rightBar = new THREE.Mesh(verticalBarGeometry, coreMaterial);
                    rightBar.position.x = width / 2;
                    rightBar.position.y = 0.5;
                    uGroup.add(rightBar);

                    const bottomBar = new THREE.Mesh(horizontalBarGeometry, coreMaterial);
                    bottomBar.position.y = -height / 2 + thickness / 2;
                    bottomBar.scale.x = 0.7;
                    uGroup.add(bottomBar);
                    
                    const edgeMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 1 });
                    uGroup.children.forEach(mesh => {
                        const edges = new THREE.EdgesGeometry(mesh.geometry);
                        const line = new THREE.LineSegments(edges, edgeMaterial);
                        mesh.add(line);
                    });

                    const ambientLight = new THREE.AmbientLight(0x404040, 2);
                    scene.add(ambientLight);

                    const pointLight = new THREE.PointLight(GLOW_COLOR, 3, 50);
                    scene.add(pointLight);
                    
                } catch (error) {
                    console.error("3D logo error:", error);
                }
            }

            function animate() {
                if (!uGroup) return;
                requestAnimationFrame(animate);
                uGroup.rotation.y += ROTATION_SPEED * 1.5;
                renderer.render(scene, camera);
            }

            init();
            animate();
        <\/script>
    </body>
    </html>
  `;


  return (
    <footer className="bg-secondary/50 text-secondary-foreground" id="footer-projects">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <Separator className="my-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-start text-left">
            <Link href="/" className="flex flex-col items-start mb-4">
               <span className="text-xl font-bold text-primary uppercase font-headline tracking-wide">ANDR GLOBAL FINANCIAL</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs text-left">
              {translations.footer.companyDescription}
            </p>
          </div>
          
          <div className="text-left">
            <h4 className="font-headline font-semibold mb-4">{translations.footer.quickLinks.title}</h4>
            <ul className="space-y-2 text-sm">
              {projectLinks.map(link => (
                 <li key={link.name}><Link href={link.href} className="text-muted-foreground hover:text-foreground">{link.name}</Link></li>
              ))}
              <li><Link href="/#about" className="text-muted-foreground hover:text-foreground">{translations.footer.quickLinks.about}</Link></li>
              <li><Link href="/#contact" className="text-muted-foreground hoverText-foreground">{translations.footer.quickLinks.contact}</Link></li>
            </ul>
          </div>
          
          <div className="text-left">
            <h4 className="font-headline font-semibold mb-4">{translations.footer.followUs.title}</h4>
            <div className="flex justify-start gap-4">
              {socialLinks.map(link => (
                <Button key={link.name} variant="ghost" size="icon" asChild>
                    <Link href={link.href} aria-label={link.name} className="text-muted-foreground hover:text-foreground">
                        {link.icon}
                    </Link>
                </Button>
              ))}
            </div>
          </div>

          <div className="text-left">
            <h4 className="font-headline font-semibold mb-4">{translations.footer.ourOffice.title}</h4>
            <div className="text-sm text-muted-foreground space-y-3">
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-primary transition-colors">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{officeAddress}</span>
                </a>
                <a href="tel:+6289530825574" className="flex items-center gap-3 hover:text-primary transition-colors">
                    <Phone className="w-4 h-4 shrink-0" />
                    <span>+62 895 308 25574 (WhatsApp)</span>
                </a>
                <a href="mailto:sale@andrgf.id" className="flex items-center gap-3 hover:text-primary transition-colors">
                    <Mail className="w-4 h-4 shrink-0" />
                    <span>sale@andrgf.id</span>
                </a>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between text-left md:items-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {translations.footer.copyright}</p>
          <div className="flex items-center gap-2">
            <iframe 
                srcDoc={developerLogoHtml}
                width="25" 
                height="25" 
                style={{ border: 'none', background: 'transparent' }}
                title="Developer 3D Logo"
            />
            <a href="https://www.1target.ru/" target="_blank" rel="noopener noreferrer" className="transition-colors developer-link mt-2 md:mt-0">
                {translations.footer.developerCredit}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
