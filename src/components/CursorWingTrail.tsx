import { useEffect, useRef } from 'react';

const TAIL_OFFSET_Y = 16;

type SpawnOptions = {
  onLink?: boolean;
  click?: boolean;
  velocityX?: number;
  velocityY?: number;
};

export function CursorWingTrail() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;

    if (prefersReducedMotion || !hasFinePointer) {
      return;
    }

    const container = containerRef.current;
    if (!container) {
      return;
    }

    let activeParticles = 0;
    const maxParticles = 36;
    const lastPosition = { x: 0, y: 0 };
    const smoothVelocity = { x: 0, y: 0 };
    let hasMoved = false;
    let lastSpawnTime = 0;
    let frameId = 0;
    let pendingMove: MouseEvent | null = null;

    const removeParticle = (element: Element) => {
      element.remove();
      activeParticles -= 1;
    };

    const getTailDrift = (velocityX: number, velocityY: number, click = false) => {
      const speed = Math.hypot(velocityX, velocityY);

      if (speed < 1.5) {
        return {
          x: (Math.random() - 0.5) * (click ? 18 : 12),
          y: 22 + Math.random() * (click ? 26 : 20),
        };
      }

      const normX = velocityX / speed;
      const normY = velocityY / speed;
      const trailStrength = click ? 26 : 20;

      return {
        x: -normX * trailStrength + (Math.random() - 0.5) * 10,
        y: 18 + Math.random() * 22 + Math.max(normY * 12, 0),
      };
    };

    const attachRemoval = (element: Element, durationMs: number) => {
      activeParticles += 1;
      container.appendChild(element);

      element.addEventListener(
        'animationend',
        () => {
          removeParticle(element);
        },
        { once: true },
      );

      window.setTimeout(() => {
        if (element.isConnected) {
          removeParticle(element);
        }
      }, durationMs + 120);
    };

    const spawnWing = (
      cursorX: number,
      cursorY: number,
      options: SpawnOptions = {},
    ) => {
      if (activeParticles >= maxParticles) {
        return;
      }

      const wing = document.createElement('span');
      wing.className = `cursor-wing${options.onLink ? ' cursor-wing--link' : ''}${options.click ? ' cursor-wing--click' : ''}`;

      const leftFeather = document.createElement('span');
      leftFeather.className = 'cursor-wing__side cursor-wing__side--left';

      const rightFeather = document.createElement('span');
      rightFeather.className = 'cursor-wing__side cursor-wing__side--right';

      wing.append(leftFeather, rightFeather);

      const drift = getTailDrift(options.velocityX ?? 0, options.velocityY ?? 0, options.click);
      const span = options.click ? 24 + Math.random() * 10 : 18 + Math.random() * 8;
      const height = span * 0.62;
      const duration = options.click ? 780 : 920 + Math.random() * 360;

      wing.style.left = `${cursorX + (Math.random() - 0.5) * (options.click ? 10 : 7)}px`;
      wing.style.top = `${cursorY + TAIL_OFFSET_Y + (Math.random() - 0.5) * (options.click ? 10 : 6)}px`;
      wing.style.setProperty('--wing-span', `${span}px`);
      wing.style.setProperty('--wing-height', `${height}px`);
      wing.style.setProperty('--wing-rotate', `${(Math.random() - 0.5) * 24}deg`);
      wing.style.setProperty('--wing-scale', `${0.82 + Math.random() * 0.28}`);
      wing.style.setProperty('--wing-drift-x', `${drift.x}px`);
      wing.style.setProperty('--wing-drift-y', `${drift.y}px`);
      wing.style.setProperty('--wing-duration', `${duration}ms`);

      attachRemoval(wing, duration);
    };

    const isOverInteractive = (x: number, y: number) => {
      const element = document.elementFromPoint(x, y);
      return !!element?.closest('a, button, [role="button"], .banner-social-link, select, input, textarea');
    };

    const processMove = (event: MouseEvent) => {
      const deltaX = event.clientX - lastPosition.x;
      const deltaY = event.clientY - lastPosition.y;
      const distance = Math.hypot(deltaX, deltaY);
      const now = performance.now();

      if (!hasMoved) {
        lastPosition.x = event.clientX;
        lastPosition.y = event.clientY;
        hasMoved = true;
        return;
      }

      if (distance < 6 && now - lastSpawnTime < 42) {
        return;
      }

      smoothVelocity.x = smoothVelocity.x * 0.55 + deltaX * 0.45;
      smoothVelocity.y = smoothVelocity.y * 0.55 + deltaY * 0.45;

      lastPosition.x = event.clientX;
      lastPosition.y = event.clientY;
      lastSpawnTime = now;

      const onLink = isOverInteractive(event.clientX, event.clientY);
      const wingCount = distance > 30 ? 2 : 1;

      for (let index = 0; index < wingCount; index += 1) {
        spawnWing(event.clientX, event.clientY, {
          onLink,
          velocityX: smoothVelocity.x,
          velocityY: smoothVelocity.y,
        });
      }
    };

    const handleMove = (event: MouseEvent) => {
      pendingMove = event;

      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = 0;
        if (pendingMove) {
          processMove(pendingMove);
          pendingMove = null;
        }
      });
    };

    const handleClick = (event: MouseEvent) => {
      const onLink = isOverInteractive(event.clientX, event.clientY);

      for (let index = 0; index < 3; index += 1) {
        spawnWing(event.clientX, event.clientY, {
          onLink,
          click: true,
          velocityX: smoothVelocity.x,
          velocityY: smoothVelocity.y,
        });
      }
    };

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('click', handleClick);

      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return <div ref={containerRef} className="cursor-wing-trail" aria-hidden="true" />;
}
