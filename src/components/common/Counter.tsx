import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring } from "framer-motion";

interface CounterProps {
  value: number;
  suffix?: string;
  label: string;
  "data-i18n"?: string;
}

const Counter = ({ value, suffix = "", label, "data-i18n": dataI18n }: CounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  const spring = useSpring(0, {
    stiffness: 50,
    damping: 30,
  });

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  useEffect(() => {
    return spring.on("change", (v) => {
      setDisplayValue(Math.floor(v));
    });
  }, [spring]);

  return (
    <div ref={ref} className="text-center p-6 space-y-2">
      <div className="text-4xl md:text-5xl font-serif font-bold text-primary flex justify-center items-center">
        <span>{displayValue.toLocaleString()}</span>
        <span>{suffix}</span>
      </div>
      <p data-i18n={dataI18n} className="text-foreground/70 font-medium uppercase tracking-widest text-xs">
        {label}
      </p>
    </div>
  );
};

export default Counter;