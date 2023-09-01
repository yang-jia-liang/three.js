import { BoxBufferGeometry, MeshStandardMaterial, MeshNormalMaterial, Mesh } from "https://cdn.skypack.dev/three@0.132.2";

function createCube() {
  const geometry = new BoxBufferGeometry();

  const material = new MeshStandardMaterial({
    color: 'purple'
  });

  const cube = new Mesh(geometry, material);
  cube.rotation.y = 0.5;

  return cube;
}

export { createCube }