"use client";

import { useMemo, useRef, useEffect, useState, useCallback } from "react";
import { brands } from "@/app/masters/brands";
import Image from "next/image";
import Container from "../ui/Container";

// Modern, sleek, auto-scrolling brand showcase with consistent sizing & theme alignment
export const BrandsMarquee = () => {
  // Duplicate list to create seamless loop
  // Duplicate list (A + A) for seamless looping
  const scrollingBrands = useMemo(() => [...brands, ...brands], []);

  const trackRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const setWidthRef = useRef(0); // width of one unique sequence (A)
  const posRef = useRef(0); // current translateX (negative values move left)
  const lastTsRef = useRef<number | null>(null);

  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1); // 1 = left (LTR scroll), -1 = right
  const [mounted, setMounted] = useState(false);

  // Manual speed adjustments if needed later; base speed in px/second responsive
  const baseSpeed = mounted && typeof window !== 'undefined' && window.innerWidth < 768 ? 90 : 60;

  // Measure width of single set using ResizeObserver (handles image load)
  useEffect(() => {
    if (!trackRef.current) return;
    const el = trackRef.current;
    const update = () => {
      const total = el.scrollWidth;
      setWidthRef.current = total / 2; // because content = A + A
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    setMounted(true);
    return () => ro.disconnect();
  }, []);

  const animate = useCallback((ts: number) => {
    if (isPaused || !trackRef.current) {
      lastTsRef.current = ts;
      frameRef.current = requestAnimationFrame(animate);
      return;
    }
    if (lastTsRef.current == null) lastTsRef.current = ts;
    const delta = (ts - lastTsRef.current) / 1000; // seconds
    lastTsRef.current = ts;
    const distance = baseSpeed * delta * direction; // direction influences sign
    posRef.current -= distance; // direction 1 = move left
    const width = setWidthRef.current;
    if (width > 0) {
      if (posRef.current <= -width) posRef.current += width;
      else if (posRef.current > 0) posRef.current -= width;
    }
    trackRef.current.style.transform = `translateX(${posRef.current}px)`;
    frameRef.current = requestAnimationFrame(animate);
  }, [baseSpeed, direction, isPaused]);

  useEffect(() => {
    // Skip animation for reduced motion users
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) return; // leave static
    frameRef.current = requestAnimationFrame(animate);
    return () => { if (frameRef.current) cancelAnimationFrame(frameRef.current); };
  }, [animate]);

  // Manual navigation: shift by one card width (approx first child width incl margin)
  const shift = (dir: 1 | -1) => {
    if (!trackRef.current) return;
    const firstCard = trackRef.current.querySelector<HTMLDivElement>('[data-brand-card]');
    const cardWidth = firstCard ? firstCard.getBoundingClientRect().width + 32 /* mx-4 */ : 180;
    posRef.current -= cardWidth * dir; // invert because posRef is negative as we move left
    const width = setWidthRef.current;
    if (width > 0) {
      if (posRef.current <= -width) posRef.current += width;
      else if (posRef.current > 0) posRef.current -= width;
    }
    if (trackRef.current) trackRef.current.style.transform = `translateX(${posRef.current}px)`;
  };

  const handleKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') { shift(1); }
    if (e.key === 'ArrowLeft') { shift(-1); }
    if (e.key === ' ') { e.preventDefault(); setIsPaused(p => !p); }
  };

  // Drag / swipe support
  const dragState = useRef<{startX: number; startPos: number; dragging: boolean; wasPaused: boolean}>({startX:0,startPos:0,dragging:false,wasPaused:false});
  const onPointerDown = (e: React.PointerEvent) => {
    if (!trackRef.current) return;
    dragState.current = { startX: e.clientX, startPos: posRef.current, dragging: true, wasPaused: isPaused };
    setIsPaused(true); // pause during drag
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragState.current.dragging || !trackRef.current) return;
    const dx = e.clientX - dragState.current.startX;
    posRef.current = dragState.current.startPos + dx; // direct mapping
    const width = setWidthRef.current;
    if (width > 0) {
      while (posRef.current <= -width) posRef.current += width;
      while (posRef.current > 0) posRef.current -= width;
    }
    trackRef.current.style.transform = `translateX(${posRef.current}px)`;
  };
  const endDrag = () => {
    if (!dragState.current.dragging) return;
    dragState.current.dragging = false;
    if (!dragState.current.wasPaused) setIsPaused(false);
  };

  return (
    <section id="brands" className="relative py-16 bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/60 overflow-hidden">
      {/* Subtle background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-primary-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-emerald-200/30 rounded-full blur-3xl"></div>
      </div>

      {/* Edge fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 via-slate-50/90 to-transparent"></div>

      <Container className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 space-y-4">
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full"></div>
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Our SupplyChain Partners</span>
            <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full"></div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-primary-700 via-primary-800 to-primary-900 bg-clip-text text-transparent">Brands</span>
          </h2>
          <p className="hidden md:block text-gray-600 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            Trusted collaborations with industry-leading brands delivering authentic quality across global markets.
          </p>
        </div>

        {/* Scrolling Track */}
        <div
          className="group relative overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y"
          onKeyDown={handleKey}
          tabIndex={0}
          aria-label="Brand logos carousel; drag, use arrow keys, or controls to navigate; space to pause"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
        >
          <div
            ref={trackRef}
            className="flex will-change-transform select-none"
            style={{ transform: 'translateX(0)' }}
          >
            {scrollingBrands.map((brand, i) => (
              <div
                key={`${brand.id}-${i}`}
                data-brand-card
                className="shrink-0 w-44 md:w-52 h-24 md:h-28 mx-4 flex items-center justify-center rounded-2xl bg-white/80 backdrop-blur border border-primary-100/60 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_18px_-2px_rgba(0,0,0,0.12)] transition-all duration-300 grayscale-[55%] hover:grayscale-0 hover:brightness-110 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-primary-500 outline-none"
                tabIndex={0}
                aria-label={`Brand: ${brand.name}`}
              >
                <Image
                  src={brand.image}
                  alt={brand.name}
                  width={180}
                  height={112}
                  className="object-contain w-36 md:w-44 h-16 md:h-20 drop-shadow-sm"
                  sizes="(max-width: 768px) 144px, 176px"
                  loading={i < brands.length ? "eager" : "lazy"}
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Local styles for keyframes */}
      {/* Overlay Controls (appear on hover/focus) */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity">
        <button
          type="button"
          aria-label="Previous"
          onClick={() => shift(-1)}
          className="pointer-events-auto p-2 rounded-full bg-white/80 backdrop-blur shadow hover:bg-white focus-visible:ring-2 focus-visible:ring-primary-500 transition hidden sm:inline-flex"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-700"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <div className="pointer-events-auto flex flex-col items-center gap-2 absolute bottom-3 left-1/2 -translate-x-1/2">
          <div className="flex gap-2">
            <button
              type="button"
              aria-label={isPaused ? 'Play auto scroll' : 'Pause auto scroll'}
              onClick={() => setIsPaused(p => !p)}
              className="p-2 rounded-full bg-white/85 backdrop-blur shadow hover:bg-white focus-visible:ring-2 focus-visible:ring-primary-500 transition"
            >
              {isPaused ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-primary-700"><path d="M8 5v14l11-7z"/></svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-primary-700"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>
              )}
            </button>
            <button
              type="button"
              aria-label="Reverse direction"
              onClick={() => setDirection(d => d * -1 as 1 | -1)}
              className="p-2 rounded-full bg-white/85 backdrop-blur shadow hover:bg-white focus-visible:ring-2 focus-visible:ring-primary-500 transition"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-700"><path d="M3 7h13a4 4 0 010 8H5"/><path d="M8 11l-4 4 4 4"/></svg>
            </button>
          </div>
          <div className="text-[10px] tracking-wide font-medium text-primary-700/70 bg-white/70 px-2 py-0.5 rounded-full hidden md:block">Drag / Scroll • {direction === 1 ? 'L→R loop' : 'R→L loop'}</div>
        </div>
        <button
          type="button"
          aria-label="Next"
          onClick={() => shift(1)}
          className="pointer-events-auto p-2 rounded-full bg-white/80 backdrop-blur shadow hover:bg-white focus-visible:ring-2 focus-visible:ring-primary-500 transition hidden sm:inline-flex"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-700"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
      <style jsx>{``}</style>
    </section>
  );
};
