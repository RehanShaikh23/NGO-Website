import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * AnimatedNumber
 * Animates a numeric value from 0 to its target when scrolled into view.
 * Preserves surrounding formatting (prefixes, suffixes, commas).
 */
export default function AnimatedNumber({ value, duration = 1.5, delay = 0, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Convert value to string and extract numbers/decimals/commas
    const cleanString = String(value);
    const numericMatch = cleanString.match(/[\d,.]+/);
    if (!numericMatch) {
      el.textContent = cleanString;
      return;
    }

    const matchedStr = numericMatch[0];
    // Remove commas to parse as float
    const numberValue = parseFloat(matchedStr.replace(/,/g, ''));
    if (isNaN(numberValue)) {
      el.textContent = cleanString;
      return;
    }

    const prefix = cleanString.substring(0, numericMatch.index);
    const suffix = cleanString.substring(numericMatch.index + matchedStr.length);

    // Initial state
    el.textContent = `${prefix}0${suffix}`;

    // Target object for GSAP to animate
    const obj = { val: 0 };

    const formatNumber = (val) => {
      const rounded = Math.floor(val);
      return rounded.toLocaleString('en-US');
    };

    const tl = gsap.to(obj, {
      val: numberValue,
      duration: duration,
      ease: 'power2.out',
      paused: true,
      onUpdate: () => {
        el.textContent = `${prefix}${formatNumber(obj.val)}${suffix}`;
      },
    });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 90%', // Trigger when the element is near viewport bottom
      once: true,
      onEnter: () => {
        gsap.delayedCall(delay, () => tl.play());
      },
    });

    return () => {
      trigger.kill();
      tl.kill();
    };
  }, [value, duration, delay]);

  return <span ref={ref} className={className}>0</span>;
}
