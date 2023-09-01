import { DirectionalLight } from 'https://cdn.skypack.dev/three@0.132.2';

function createLights() {
  const light = new DirectionalLight('white', 80);

  light.position.set(10, 10, 10);


  const posPerSecond = 1;
  light.tick = (delta) => {
    light.position.y += posPerSecond * delta;
  }

  return light;
}

export { createLights }