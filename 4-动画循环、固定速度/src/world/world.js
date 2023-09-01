import { createScene } from "./components/scene.js";
import { createCamera } from "./components/camera.js";
import { createCube } from "./components/cube.js";
import { createLights } from "./components/light.js";
import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";
import { Loop } from "./systems/Loop.js";

// 模块作用域变量，不希望从World类外访问
let scene;
let camera;
let renderer;
let loop;

class World {
  constructor(container) {
    scene = createScene();
    camera = createCamera();
    renderer = createRenderer();
    container.append(renderer.domElement); // 把画布挂上去

    const cube = createCube();
    const light = createLights();
    scene.add(cube, light);

    const resizer = new Resizer(container, camera, renderer);

    loop = new Loop(renderer, scene, camera);
    loop.updatables.push(cube, camera, light);
  }

  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };