import * as THREE from 'three';

function init() {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.BufferGeometry();
  const vertices = new Float32Array([
    0.0,  1.0, 0.0,
   -1.0, -1.0, 0.0,
    1.0, -1.0, 0.0
  ]);
  geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, side: THREE.DoubleSide });
  const triangle = new THREE.Mesh(geometry, material);
  scene.add(triangle);

  function animate() {
    requestAnimationFrame(animate);
    triangle.rotation.x += 0.01;
    triangle.rotation.y += 0.01;
    renderer.render(scene, camera);
  }

  animate();
}

window.addEventListener('DOMContentLoaded', init);
