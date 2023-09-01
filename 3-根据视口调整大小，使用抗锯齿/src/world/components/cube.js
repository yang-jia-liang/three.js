import { BoxBufferGeometry, MeshStandardMaterial, MeshNormalMaterial, Mesh } from "https://cdn.skypack.dev/three@0.132.2";

function createCube() {
  const geometry = new BoxBufferGeometry();

  const material = new MeshStandardMaterial({
    color: 'purple'
  });

  const cube = new Mesh(geometry, material);
  cube.rotation.y = 0.5;

  cube.position.z = 1;
  cube.scale.set(2, 2, 2);

  return cube;
}

export { createCube }