import { BoxBufferGeometry, MeshStandardMaterial, Mesh, MathUtils } from "https://cdn.skypack.dev/three@0.132.2";

function createCube() {
  const geometry = new BoxBufferGeometry();
  const material = new MeshStandardMaterial({ color: 'purple' });
  const cube = new Mesh(geometry, material);

  cube.rotation.set(-0.5, -0.1, 0.8);

  const radiansPerSecond = MathUtils.degToRad(30); // 度数转弧度，每秒转30° => 每秒弧度

  // this method will be called once per frame
  cube.tick = (delta) => {
    // increase the cube's rotation each frame

    // 0.01弧度大约是0.5°，在60hz显示器上 + requestAnimationFrame = 16ms渲染一帧 = 1s大约是30°
    // cube.rotation.z += 0.01;
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;

    cube.rotation.z += radiansPerSecond * delta; // 每秒弧度 * 距离上次过了多少秒 = 这次应该转动多少弧度
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
  }

  return cube;
}

export { createCube }