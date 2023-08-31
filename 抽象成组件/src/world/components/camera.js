import { PerspectiveCamera } from "https://cdn.skypack.dev/three@0.132.2";

function createCamera() {
  const fov = 35;
  const aspect = 1; // 先占位，后续在Resizer中做响应式
  const near = 1;
  const far = 100;

  const camera = new PerspectiveCamera(fov, aspect, near, far);

  camera.position.set(0, 0, 10); // 设置相机视角

  return camera;
}

export { createCamera }