import React from 'react';
import CardNav from './CardNav';
import { IMAGES } from '../data/siteData';

export default function Navbar() {
  const navItems = [
    {
      label: 'Explore',
      bgColor: '#20466A', // Pillar dark blue
      textColor: '#ffffff',
      links: [
        { label: 'Home', href: '/', ariaLabel: 'Go to homepage' },
        { label: 'Gallery', href: '/gallery', ariaLabel: 'Go to gallery' },
        { label: 'Our Team', href: '/team', ariaLabel: 'Meet our team' },
      ],
    },
    {
      label: 'What We Do',
      bgColor: '#006d40', // Brand primary green
      textColor: '#ffffff',
      links: [
        { label: 'About Us', href: '/#about', ariaLabel: 'Learn more about us' },
        { label: 'Programs', href: '/#programs', ariaLabel: 'Explore our programs' },
      ],
    },
    {
      label: 'Connect',
      bgColor: '#F7B500', // Pillar yellow
      textColor: '#1c1b1b', // High-contrast dark text
      links: [
        { label: 'Contact Us', href: '/#contact-us', ariaLabel: 'Get in touch with us' },
      ],
    },
  ];

  return (
    <CardNav
      logo={IMAGES.logoNav}
      logoAlt="Vision4Youth Logo"
      items={navItems}
      baseColor="var(--color-surface)"
      menuColor="var(--color-on-surface)"
    />
  );
}
