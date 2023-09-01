import { World } from "./world/world.js";

function main() {
  const world = new World(document.getElementById('scene-container'));
  world.render();
}

main();