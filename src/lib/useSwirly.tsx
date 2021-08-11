import { MutableRefObject, useEffect, useRef } from 'react';

const SWIRLY_CONFIG = {
  /** Scales the resolution up by x. Higher costs more, but this render is cheap anyway */
  resolutionScale: 4,

  /** Factor in determining how far to rotate each rectangle */
  rotationFactor: 2
};

interface SwirlyOpts {
  /** Rectangle color */
  color: string;

  /** Rectangle width */
  size?: number;

  /** Margin between rectangles */
  margin?: number;
}
function renderSwirly(el: HTMLCanvasElement, { color, size = 25, margin = 15 }: SwirlyOpts) {
  const ctx = el.getContext('2d');

  if (!ctx) throw new Error('getContext error');

  const {
    resolutionScale, rotationFactor
  } = SWIRLY_CONFIG;

  el.width = el.offsetWidth * resolutionScale;
  el.height = el.offsetHeight * resolutionScale;
  const { width, height } = el;

  ctx.clearRect(0, 0, width, height);
  ctx.scale(resolutionScale, resolutionScale);
  ctx.fillStyle = color;

  const diagonalSize = Math.sqrt(width ** 2 + height ** 2);
  const tileSize = size + margin;

  const rows = Math.ceil(height / tileSize) + 1;
  const cols = Math.ceil(width / tileSize) + 1;

  // Offset the render - maybe this should instead be done by using a constant offset and rendering outside of bounds
  // const offsetX = -size / 2;
  // const offsetY = -size / 2;
  const offsetX = (width - (cols * tileSize - margin)) / 2;
  const offsetY = (height - (rows * tileSize - margin)) / 2;

  for (let cellY = 0; cellY < rows; cellY++) {
    for (let cellX = 0; cellX < cols; cellX++) {
      const posX = cellX * tileSize + offsetX;
      const posY = cellY * tileSize + offsetY;

      const dist = Math.max(Math.sqrt(posX ** 2 + posY ** 2));
      // const dist = Math.max(Math.sqrt((width - x) ** 2 + (height - y) ** 2) - 100, 30);
      const rot = rotationFactor * (dist / diagonalSize);
      ctx.beginPath();
      ctx.translate(posX + (size / 2), posY + (size / 2));
      ctx.rotate(Math.PI * rot);
      ctx.fillRect(size / -2, size / -20, size, size / 10);
      ctx.fill();

      // Reset ctx transforms (translate, rotate)
      ctx.setTransform(resolutionScale, 0, 0, resolutionScale, 0, 0);
    }
  }
}

function useSwirly(opts: SwirlyOpts): MutableRefObject<HTMLCanvasElement | null> {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const el = canvasRef.current;
    if (el) {
      const render = () => renderSwirly(el, opts);
      render();

      window.addEventListener('resize', render);

      return () => window.removeEventListener('resize', render);
    }
  }, [canvasRef.current]);

  return canvasRef;
}

export default useSwirly;
