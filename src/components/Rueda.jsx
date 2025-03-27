import React, { useEffect, useRef } from 'react';
import IconoRueda from '@/assets/images/icono-rueda.svg'; // Ajusta la ruta según tu estructura

const AnimatedWheelIcon = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svgElement = svgRef.current;
    
    // Buscamos o creamos el filtro de resplandor
    let filterElement = svgElement.querySelector('#outer-glow-1') as SVGFilterElement;
    let blurElement = filterElement?.querySelector('feGaussianBlur') as SVGFEGaussianBlurElement;

    // Si no existe el filtro, lo creamos
    if (!filterElement) {
      const defs = svgElement.querySelector('defs') || document.createElementNS('http://www.w3.org/2000/svg', 'defs');
      if (!svgElement.querySelector('defs')) {
        svgElement.prepend(defs);
      }

      filterElement = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
      filterElement.id = 'outer-glow-1';
      filterElement.setAttribute('x', '0');
      filterElement.setAttribute('y', '0');
      filterElement.setAttribute('width', '510');
      filterElement.setAttribute('height', '501');
      filterElement.setAttribute('filterUnits', 'userSpaceOnUse');

      const feOffset = document.createElementNS('http://www.w3.org/2000/svg', 'feOffset');
      feOffset.setAttribute('dx', '0');
      feOffset.setAttribute('dy', '0');

      blurElement = document.createElementNS('http://www.w3.org/2000/svg', 'feGaussianBlur');
      blurElement.setAttribute('result', 'blur');
      blurElement.setAttribute('stdDeviation', '3');

      const feFlood = document.createElementNS('http://www.w3.org/2000/svg', 'feFlood');
      feFlood.setAttribute('flood-color', 'aqua');
      feFlood.setAttribute('flood-opacity', '0.9');

      const feComposite1 = document.createElementNS('http://www.w3.org/2000/svg', 'feComposite');
      feComposite1.setAttribute('in2', 'blur');
      feComposite1.setAttribute('operator', 'in');

      const feComposite2 = document.createElementNS('http://www.w3.org/2000/svg', 'feComposite');
      feComposite2.setAttribute('in', 'SourceGraphic');

      filterElement.append(feOffset, blurElement, feFlood, feComposite1, feComposite2);
      defs.appendChild(filterElement);

      // Aplicamos el filtro al path principal si existe
      const mainPath = svgElement.querySelector('path:nth-child(2)');
      if (mainPath) {
        mainPath.setAttribute('style', 'fill: aqua; filter: url(#outer-glow-1);');
      }
    }

    // Animación
    let direction = 1;
    let currentBlur = 3;
    const maxBlur = 7; // 70% más que el valor original (3 → 7)

    const animate = () => {
      currentBlur += direction * 0.1;
      
      if (currentBlur >= maxBlur) {
        direction = -1;
      } else if (currentBlur <= 3) {
        direction = 1;
      }

      if (blurElement) {
        blurElement.setAttribute('stdDeviation', currentBlur.toString());
      }

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-64 bg-gray-900 rounded-xl p-4">
      <IconoRueda 
        ref={svgRef}
        className="w-48 h-48"
      />
    </div>
  );
};

export default AnimatedWheelIcon;