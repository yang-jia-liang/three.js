const setSize = (container, camera, renderer) => {
  camera.aspect = container.clientWidth / container.clientHeight; // 相机纵横比
  camera.updateProjectionMatrix(); // 更新相机位置

  renderer.setSize(container.clientWidth, container.clientHeight); // 渲染器大小
  renderer.setPixelRatio(window.devicePixelRatio); // 像素比
};

class Resizer {
  constructor(container, camera, renderer) {
    // set initial size on load
    setSize(container, camera, renderer);

    window.addEventListener('resize', () => {
      // set the size again if a resize occurs
      setSize(container, camera, renderer);
      // perform any custom actions
      this.onResize();
    });
  }

  // onResize是一个 空方法， 我们可以从Resizer类的外部自定义
  // 在World中定义，执行World中的渲染方法
  onResize() {};
}

export { Resizer }