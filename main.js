import './style.css'

import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.01, 1000);

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#pathapp')
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(innerWidth, innerHeight);

renderer.render(scene,camera);