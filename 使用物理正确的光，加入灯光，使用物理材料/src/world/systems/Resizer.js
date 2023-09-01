class Resizer {
  constructor(container, camera, renderer) {
    camera.aspect = container.clientWidth / container.clientHeight; // 相机纵横比
    camera.updateProjectionMatrix(); // 更新相机位置
    renderer.setSize(container.clientWidth, container.clientHeight); // 渲染器大小
    renderer.setPixelRatio(window.devicePixelRatio); // 像素比
  }


}

export { Resizer }