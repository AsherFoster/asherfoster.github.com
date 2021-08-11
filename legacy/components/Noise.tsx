import React, {RefObject, useEffect} from 'react';

function Noise(props) {
  const canvasRef = React.createRef() as RefObject<HTMLCanvasElement>;

  function render() {
    const el = canvasRef.current;
    el.height = el.offsetHeight / 2;
    el.width = el.offsetWidth / 2;

    const ctx = el.getContext('2d');
    const imageData = ctx.createImageData(el.width, el.height);

    const buff = new Uint32Array(imageData.data.buffer); // Get a 32 bit view...?
    let len = buff.length - 1;
    // tslint:disable-next-line:no-bitwise
    while(len--) buff[len] = Math.random() < 0.5 ? 0 : -1 >> 0;
    ctx.putImageData(imageData, 0, 0);
  }

  useEffect(() => render());

  return (<canvas ref={canvasRef} className={props.className} />);
}

export default Noise;
