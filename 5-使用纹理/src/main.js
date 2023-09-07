import { World } from "./world/world.js";

function main() {
  const world = new World(document.getElementById('scene-container'));

  // 渲染单个静止帧
  // world.render();

  // 开始动画循环
  world.start();
}

main();