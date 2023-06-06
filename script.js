import * as THREE from './js/three.module.js';
import { OrbitControls } from './js/OrbitControls.js';

const container = document.getElementById('container');

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

const loader = new THREE.TextureLoader();
const texture = loader.load('assets/images/scifi_small_having_only_bed__table_and_chair_lap.jpg');

const geometry = new THREE.SphereGeometry(500, 60, 40);

geometry.scale(-1, 1, 1);

const material = new THREE.MeshBasicMaterial({
    map: texture
});

const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

window.sphere = sphere

camera.position.set(0, 0, 0.1);


const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false;
controls.enablePan = false;

controls.rotateSpeed = -0.3;

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

let lastTime = 0;
const rotationSpeed = 0.00004;

function animate(time) {
    const delta = time - lastTime;
    lastTime = time;
    requestAnimationFrame(animate);

    sphere.rotation.y += rotationSpeed * delta;

    controls.update();
    renderer.render(scene, camera);
}

animate(0);






