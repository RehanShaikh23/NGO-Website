import { IMAGES, FOOTER_QUICK_LINKS, FOOTER_RESOURCES, CONTACT_INFO } from '../data/siteData';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="w-full py-stack-lg relative overflow-hidden bg-surface-container-low border-t border-outline-variant mt-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-gutter max-w-container-max mx-auto relative z-10">
        {/* Logo & Social */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <img
              alt="Vision For Youth Foundation"
              className="h-10 w-auto object-contain"
              src={IMAGES.logoFooter}
            />
          </div>
          <div className="mt-6">
            <SocialLinks />
          </div>
        </div>

        {/* Quick Links */}
        <div className="col-span-1">
          <h4 className="text-label-lg font-bold mb-4 text-on-surface">Quick Links</h4>
          <ul className="space-y-2">
            {FOOTER_QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  className="text-body-md text-on-surface-variant hover:text-primary opacity-80 hover:opacity-100 transition-opacity"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div className="col-span-1">
          <h4 className="text-label-lg font-bold mb-4 text-on-surface">Resources</h4>
          <ul className="space-y-2">
            {FOOTER_RESOURCES.map((link) => (
              <li key={link.label}>
                <a
                  className="text-body-md text-on-surface-variant hover:text-primary opacity-80 hover:opacity-100 transition-opacity"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="col-span-1">
          <h4 className="text-label-lg font-bold mb-4 text-on-surface">Contact Us</h4>
          <p className="text-body-md text-on-surface font-semibold mb-2">Vision For Youth</p>
          <p className="text-body-md text-on-surface-variant mb-3">{CONTACT_INFO.address}</p>
          <p className="text-body-md text-on-surface-variant mb-1">{CONTACT_INFO.emails[1]}</p>
          <p className="text-body-md text-on-surface-variant mb-4">{CONTACT_INFO.phones[0]}</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-container-max mx-auto px-gutter mt-12 pt-6 border-t border-outline-variant/50 flex flex-col md:flex-row justify-between items-center z-10 relative">
        <p className="text-label-sm text-on-surface-variant">
          © {new Date().getFullYear()} Youth For Vision. All Rights Reserved.
        </p>
      </div>

      {/* Decorative Doodle */}
      <div className="absolute bottom-0 right-0 opacity-20 pointer-events-none translate-x-1/4 translate-y-1/4 text-primary">
        <span className="material-symbols-outlined" style={{ fontSize: '300px' }}>group</span>
      </div>
    </footer>
  );
}
