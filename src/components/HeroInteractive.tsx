import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

type DotEl = HTMLDivElement;

type Props = {
  rows?: number;
  cols?: number;
  gap?: number;
  size?: number;
  pullDistance?: number;
  autoFit?: boolean;
  className?: string;
};

export default function HeroInteractive({
  rows = 11,
  cols = 11,
  gap = 12,
  size = 24,
  pullDistance = 70,
  autoFit = false,
  className = "",
}: Props) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const dotRefs = useRef<DotEl[]>([]);
  const [mounted, setMounted] = useState(false);

  const [layout, setLayout] = useState(() => ({
    rows,
    cols,
    padX: 0,
    padY: 0,
  }));

  const centersRef = useRef<Array<{ x: number; y: number }>>([]);
  const pulledMap = useRef<WeakMap<DotEl, boolean>>(new WeakMap());
  const clickedRef = useRef(false);
  const resetAllRef = useRef(false);

  // Measure and compute rows/cols to fit the container
  const recomputeLayout = () => {
    const host = wrapRef.current?.closest("section#hero") as HTMLElement | null;
    const grid = gridRef.current;
    if (!host || !grid) return;

    const { width, height } = host.getBoundingClientRect();

    // how many columns/rows fit?
    const cell = size + gap;
    const colsFit = Math.max(1, Math.floor((width + gap) / cell));
    const rowsFit = Math.max(1, Math.floor((height + gap) / cell));

    // center the grid by padding the container
    const contentW = colsFit * size + (colsFit - 1) * gap;
    const contentH = rowsFit * size + (rowsFit - 1) * gap;
    const padX = Math.max(0, (width - contentW) / 2);
    const padY = Math.max(0, (height - contentH) / 2);

    setLayout({
      rows: autoFit ? rowsFit : rows,
      cols: autoFit ? colsFit : cols,
      padX,
      padY,
    });
  };

  const updateCenters = () => {
    centersRef.current = dotRefs.current.map((el) => {
      const r = el.getBoundingClientRect();
      return { x: (r.left + r.right) / 2, y: (r.top + r.bottom) / 2 };
    });
  };

  const handlePointerMove = (e?: PointerEvent) => {
    if (clickedRef.current) return;
    const px = e?.clientX ?? -pullDistance;
    const py = e?.clientY ?? -pullDistance;

    dotRefs.current.forEach((el, i) => {
      const center = centersRef.current[i];
      if (!center) return;

      const dx = px - center.x;
      const dy = py - center.y;
      const dist = Math.hypot(dx, dy);

      if (dist < pullDistance) {
        const percent = dist / pullDistance;
        pulledMap.current.set(el, true);
        gsap.to(el, {
          x: dx * percent,
          y: dy * percent,
          duration: 0.2,
          ease: "power2.out",
        });
      } else {
        if (!pulledMap.current.get(el)) return;
        pulledMap.current.set(el, false);
        gsap.to(el, { x: 0, y: 0, duration: 1, ease: "elastic.out(1, 0.3)" });
      }
    });

    if (resetAllRef.current) {
      resetAllRef.current = false;
      gsap.to(dotRefs.current, {
        x: 0,
        y: 0,
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      });
    }
  };

  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    // wait for commit + paint
    const id1 = requestAnimationFrame(() => {
      updateCenters();

      // store nested id if you want to cancel both (optional)
    });
    return () => {
      cancelAnimationFrame(id1);
    };
  }, [layout.rows, layout.cols, layout.padX, layout.padY, gap, size]);

  useLayoutEffect(() => {
    if (!mounted) return;

    recomputeLayout();
    requestAnimationFrame(() => updateCenters());

    const onPointerMove = (e: PointerEvent) => handlePointerMove(e);
    const onPointerLeave = () => handlePointerMove(undefined);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerleave", onPointerLeave);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      gsap.killTweensOf(dotRefs.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted, gap, size, pullDistance, autoFit]);

  // Assign refs
  const setDotRef = (el: DotEl | null, i: number) => {
    if (!el) return;
    dotRefs.current[i] = el;
  };

  return (
    <div
      ref={wrapRef}
      className={`pointer-events-none select-none ${className}`}
      style={{ userSelect: "none" }}
    >
      <div
        ref={gridRef}
        className="flex flex-col"
        style={{
          gap: `${gap}px`,
          padding: `${layout.padY}px ${layout.padX}px`,
          width: "100%",
          height: "100%",
        }}
      >
        {Array.from({ length: layout.rows }).map((_, r) => (
          <div key={r} className="flex" style={{ gap: `${gap}px` }}>
            {Array.from({ length: layout.cols }).map((__, c) => {
              const i = r * layout.cols + c;
              return (
                <div
                  key={i}
                  ref={(el) => setDotRef(el, i)}
                  className="bg-primary"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    willChange: "transform",
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
