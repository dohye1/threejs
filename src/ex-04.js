import * as THREE from 'three'
import { WEBGL } from './webgl'

if (WEBGL.isWebGLAvailable()) {
  // 장면
  const scene = new THREE.Scene()

  // scene의 배경색 설정
  scene.background = new THREE.Color('tomato')

  // 카메라
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )

  // 렌더러
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  })

  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  // 매쉬
  const geometry01 = new THREE.BoxGeometry(0.5, 0.5, 0.5)
  const material01 = new THREE.MeshStandardMaterial({ color: 0x00ff00 })
  const obj1 = new THREE.Mesh(geometry01, material01)
  obj1.position.x = -1
  scene.add(obj1)

  const geometry02 = new THREE.ConeGeometry(0.4, 0.6, 0.5)
  const material02 = new THREE.MeshStandardMaterial({ color: 0x00ff00 })
  const obj2 = new THREE.Mesh(geometry02, material02)
  scene.add(obj2)

  const geometry03 = new THREE.IcosahedronGeometry(0.4, 0)
  const material03 = new THREE.MeshStandardMaterial({ color: 0x00ff00 })
  const obj3 = new THREE.Mesh(geometry03, material03)
  obj3.position.x = 1
  scene.add(obj3)

  camera.position.z = 5

  function render(time) {
    time *= 0.0005

    obj1.rotation.x = time
    obj1.rotation.y = time

    // obj2.rotation.x = time
    obj2.rotation.y = time

    obj3.rotation.x = time
    obj3.rotation.y = time

    renderer.render(scene, camera)

    requestAnimationFrame(render)
  }

  requestAnimationFrame(render)

  // 반응형 처리
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  window.addEventListener('resize', onWindowResize)
} else {
  var warning = WEBGL.getWebGLErrorMessage()
  document.body.appendChild(warning)
}
