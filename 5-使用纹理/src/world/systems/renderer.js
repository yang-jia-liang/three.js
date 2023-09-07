import { WebGLRenderer } from "https://cdn.skypack.dev/three@0.132.2";

function createRenderer() {
  const renderer = new WebGLRenderer({ antialias: true });

  // 默认是canvas的默认大小 300*150
  // renderer.setSize(200, 200);
  // renderer.setPixelRatio(window.devicePixelRatio);

  renderer.physicallyCorrectLights = true;

  return renderer;
}

export { createRenderer }