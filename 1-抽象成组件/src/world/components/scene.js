import { Scene, Color } from "https://cdn.skypack.dev/three@0.132.2";

function createScene() {
  const scene = new Scene();

  scene.background = new Color('skyblue'); // 设置背景色

  return scene;
}

export { createScene }