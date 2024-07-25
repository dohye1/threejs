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

  // 빛 추가
  const pointLight = new THREE.PointLight(0xffffff, 1)
  pointLight.position.set(0, 2, 12)
  scene.add(pointLight)

  // 도형 추가
  const geometry01 = new THREE.TorusGeometry(0.3, 0.15, 14, 40)
  const material01 = new THREE.MeshBasicMaterial({ color: 0xffff00 })
  const obj1 = new THREE.Mesh(geometry01, material01)
  obj1.position.x = -2
  scene.add(obj1)

  const geometry02 = new THREE.TorusGeometry(0.3, 0.15, 14, 40)
  const material02 = new THREE.MeshStandardMaterial({
    color: 0xffff00,
    metalness: 0.5,
    opacity: 0.5,
    roughness: 0.2,
  })
  const obj2 = new THREE.Mesh(geometry02, material02)
  obj2.position.x = -1
  scene.add(obj2)

  const geometry03 = new THREE.TorusGeometry(0.3, 0.15, 14, 40)
  const material03 = new THREE.MeshPhysicalMaterial({
    color: 0xffff00,
    clearcoat: 1,
  })
  const obj3 = new THREE.Mesh(geometry03, material03)
  obj3.position.x = 0
  scene.add(obj3)

  const geometry04 = new THREE.TorusGeometry(0.3, 0.15, 14, 40)
  const material04 = new THREE.MeshLambertMaterial({ color: 0xffff00 })
  const obj4 = new THREE.Mesh(geometry04, material04)
  obj4.position.x = 1
  scene.add(obj4)

  const geometry05 = new THREE.TorusGeometry(0.3, 0.15, 14, 40)
  const material05 = new THREE.MeshPhongMaterial({
    color: 0xffff00,
    shininess: 60,
  })
  const obj5 = new THREE.Mesh(geometry05, material05)
  obj5.position.x = 2
  scene.add(obj5)

  camera.position.z = 5

  function render(time) {
    time *= 0.0005

    obj1.rotation.x = time
    obj2.rotation.x = time
    obj3.rotation.x = time
    obj4.rotation.x = time
    obj5.rotation.x = time

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
