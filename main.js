import './style.css'

import * as THREE from 'three';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';


const loader = new GLTFLoader();

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.01, 1000);

/* loader.load('',
  function (gltf) {
    scene.add(gltf.scene);

    gltf.animations;
  }
) */

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({color: 0x00ffff});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#pathapp')
});

camera.position.z = 5;

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(innerWidth, innerHeight);

renderer.render(scene, camera);