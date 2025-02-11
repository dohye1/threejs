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

  const canvas = document.getElementById('ex-03')

  // 렌더러
  const renderer = new THREE.WebGLRenderer({ canvas })

  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.render(scene, camera)
} else {
  var warning = WEBGL.getWebGLErrorMessage()
  document.body.appendChild(warning)
}
