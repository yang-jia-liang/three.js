import { createScene } from "./components/scene.js";
import { createCamera } from "./components/camera.js";
import { createCube } from "./components/cube.js";
import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";

let scene;
let camera;
let renderer;

class World {
  constructor(container) {
    scene = createScene();
    camera = createCamera();
    renderer = createRenderer();
    container.append(renderer.domElement); // 把画布挂上去

    const cube = createCube();
    scene.add(cube);

    const resizer = new Resizer(container, camera, renderer)
  }

  render() {
    renderer.render(scene, camera);
  }
}

export { World };