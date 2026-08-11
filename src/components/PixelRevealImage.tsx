import { useState, useEffect, useRef, useCallback } from "react";

interface PixelRevealImageProps {
  src: string;
  alt: string;
  className?: string;
  pixelSize?: number;
  revealDuration?: number;
}

const PixelRevealImage: React.FC<PixelRevealImageProps> = ({
  src,
  alt,
  className = "",
  pixelSize = 12,
  revealDuration = 600,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const progressRef = useRef(0);
  const targetProgressRef = useRef(0);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      imageRef.current = img;
      setImageLoaded(true);
    };
    img.src = src;

    return () => {
      img.onload = null;
    };
  }, [src]);
  const drawPixelated = useCallback(
    (ctx: CanvasRenderingContext2D, img: HTMLImageElement, w: number, h: number, level: number) => {
      const imgRatio = img.width / img.height;
      const containerRatio = w / h;

      let drawW = w;
      let drawH = h;
      let offsetX = 0;
      let offsetY = 0;

      if (imgRatio > containerRatio) {
        drawH = h;
        drawW = h * imgRatio;
        offsetX = (w - drawW) / 2;
      } else {
        drawW = w;
        drawH = w / imgRatio;
        offsetY = (h - drawH) / 2;
      }

      if (level >= 0.99) {
        ctx.imageSmoothingEnabled = true;
        ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
        return;
      }

      const currentPixelSize = Math.max(1, Math.floor(pixelSize * (1 - level)));

      if (currentPixelSize <= 1) {
        ctx.imageSmoothingEnabled = true;
        ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
        return;
      }

      const smallW = Math.ceil(drawW / currentPixelSize);
      const smallH = Math.ceil(drawH / currentPixelSize);

      const offscreen = document.createElement("canvas");
      offscreen.width = smallW;
      offscreen.height = smallH;
      const offCtx = offscreen.getContext("2d");
      if (!offCtx) return;

      offCtx.imageSmoothingEnabled = false;
      offCtx.drawImage(img, 0, 0, smallW, smallH);

      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(offscreen, 0, 0, smallW, smallH, offsetX, offsetY, drawW, drawH);

      if (level > 0.5) {
        ctx.imageSmoothingEnabled = true;
        ctx.globalAlpha = (level - 0.5) * 2;
        ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
        ctx.globalAlpha = 1;
      }
    },
    [pixelSize]
  );

  useEffect(() => {
    if (!imageLoaded) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    const img = imageRef.current;
    if (!canvas || !container || !img) return;

    const rect = container.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;

    if (w === 0 || h === 0) return;

    canvas.width = w * window.devicePixelRatio;
    canvas.height = h * window.devicePixelRatio;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const speed = 1000 / revealDuration;
    let lastTime = performance.now();

    const animate = (time: number) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      targetProgressRef.current = isHovered ? 1 : 0;

      const diff = targetProgressRef.current - progressRef.current;
      const step = speed * dt;

      if (Math.abs(diff) < 0.01) {
        progressRef.current = targetProgressRef.current;
      } else {
        progressRef.current += Math.sign(diff) * Math.min(step, Math.abs(diff));
      }

      ctx.clearRect(0, 0, w, h);
      drawPixelated(ctx, img, w, h, progressRef.current);

      if (progressRef.current < 0.8) {
        ctx.fillStyle = `rgba(0, 0, 0, ${0.08 * (1 - progressRef.current)})`;
        for (let y = 0; y < h; y += 3) {
          ctx.fillRect(0, y, w, 1);
        }
      }

      if (progressRef.current < 0.5) {
        ctx.fillStyle = `rgba(0, 255, 200, ${0.05 * (1 - progressRef.current * 2)})`;
        ctx.fillRect(0, 0, w, h);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [imageLoaded, isHovered, drawPixelated, revealDuration]);

  useEffect(() => {
    if (!imageLoaded) return;

    const handleResize = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;

      const rect = container.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [imageLoaded]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-label={alt}
      />
     
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover opacity-0 pointer-events-none"
        aria-hidden="true"
      />
     
      {!isHovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: 1 - progressRef.current,
            backgroundImage: `
              linear-gradient(rgba(0, 255, 200, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 200, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: `${pixelSize}px ${pixelSize}px`,
          }}
        />
      )}
    </div>
  );
};

export default PixelRevealImage;
