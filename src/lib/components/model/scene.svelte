<script type="ts">
	import { Character, Settings, World } from './scene-modules/scene';
	import { initWorld } from './scene-modules/sceneInitializer';
	import { getMouseDegrees } from './logic/mouse';

	import * as THREE from 'three';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
	import { onMount } from 'svelte';
import About from '../about.svelte';

	let sceneWidth = 300;
	let sceneHeight = 300;

	$: outerWidth = 0;
	$: innerWidth = 0;
	$: outerHeight = 0;
	$: innerHeight = 0;

	if(innerWidth < 992){
		console.log("hello")
		sceneWidth = innerWidth - 32;		
	}

	
	
	console.log(innerWidth)

	//initiate sceneSetting object, saving dimensions and path
	let sceneSetting = new Settings(
		sceneWidth,
		sceneHeight,
		'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/stacy_lightweight.glb'
	);
	let character = new Character();
	let world = new World();

	const loader = new GLTFLoader();
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(
		40,
		sceneSetting.displayWidth / sceneSetting.displayHeight,
		0.1,
		1000
	);
	world.clock = new THREE.Clock();
	let raycaster = new THREE.Raycaster(); // Used to detect the click on our character

	async function loadGLTFModel() {
		await loader.load(
			// resource URL
			sceneSetting.pathToGLTF,
			// called when the resource is loaded
			function (gltf) {
				character.model = gltf.scene;
				let fileAnimations = gltf.animations;

				character.model.traverse((child) => {
					if (child.isMesh) {
						child.castShadow = true;
						child.receiveShadow = true;
					}
					// Reference the neck and waist bones
					if (child.isBone && child.name === 'mixamorigNeck') {
						character.neck = child;
					}
					if (child.isBone && child.name === 'mixamorigSpine') {
						character.waist = child;
					}
				});

				character.model.scale.set(7, 7, 7);
				character.model.position.y = -11;

				scene.add(gltf.scene);

				world.mixer = new THREE.AnimationMixer(character.model);

				let clips = fileAnimations.filter((val) => val.name !== 'idle');
				world.possibleAnimations = clips.map((val) => {
					let clip = THREE.AnimationClip.findByName(clips, val.name);

					clip.tracks.splice(3, 3);
					clip.tracks.splice(9, 3);

					clip = world.mixer.clipAction(clip);
					return clip;
				});

				let idleAnim = THREE.AnimationClip.findByName(fileAnimations, 'idle');
				console.log(idleAnim);
				idleAnim.tracks.splice(3, 3);
				idleAnim.tracks.splice(9, 3);

				world.idle = world.mixer.clipAction(idleAnim);
				world.idle.play();
			},
			// called when loading has errors
			function (error) {
				console.log('An error happened');
			}
		);
	}

	function animate() {
		try {
			if (world.mixer) {
				world.mixer.update(world.clock.getDelta());
			}
			requestAnimationFrame(animate);
			world.renderer.render(scene, camera);
		} catch (error) {
			console.log('Model has not loaded yet.');
		}
	}

	function resize() {
		world.renderer.setSize(sceneSetting.displayWidth, sceneSetting.displayHeight);
		world.renderer.setPixelRatio(window.devicePixelRatio);
		camera.aspect = sceneSetting.displayWidth / sceneSetting.displayHeight;
		camera.updateProjectionMatrix();
	}

	function createScene(el) {
		world.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, canvas: el });
		world.renderer.shadowMap.enabled = true;
		camera.position.z = -10;
		initWorld(camera, THREE, scene);
		resize();
		animate();
		return world.renderer;
	}

	function raycast(e, touch = false) {
		var mouse = {
			x: 0,
			y: 0
		};
		if (touch) {
			mouse.x = 2 * (e.changedTouches[0].clientX / outerWidth) - 1;
			mouse.y = 1 - 2 * (e.changedTouches[0].clientY / outerHeight);
		} else {
			mouse.x = 2 * (e.clientX / outerWidth) - 1;
			mouse.y = 1 - 2 * (e.clientY / outerHeight);
		}
		// update the picking ray with the camera and mouse position
		raycaster.setFromCamera(mouse, camera);

		// calculate objects intersecting the picking ray
		var intersects = raycaster.intersectObjects(scene.children, true);

		if (intersects[0]) {
			var object = intersects[0].object;

			if (object.name === 'stacy') {
				if (!world.currentlyAnimating) {
					world.currentlyAnimating = true;
					playOnClick();
				}
			}
		}
	}

	// Get a random animation, and play it
	function playOnClick() {
		let anim = Math.floor(Math.random() * world.possibleAnimations.length) + 0;
		playModifierAnimation(world.idle, 0.25, world.possibleAnimations[anim], 0.25);
	}

	function playModifierAnimation(from, fSpeed, to, tSpeed) {
		to.setLoop(THREE.LoopOnce);
		to.reset();
		to.play();
		from.crossFadeTo(to, fSpeed, true);
		setTimeout(function () {
			from.enabled = true;
			to.crossFadeTo(from, tSpeed, true);
			world.currentlyAnimating = false;
		}, to._clip.duration * 1000 - (tSpeed + fSpeed) * 1000);
	}

	function moveCharacterOnMouse(e) {
		var mousecoords = getMousePos(e);
		if (character.neck && character.waist) {
			moveJoint(mousecoords, character.neck, 50);
			moveJoint(mousecoords, character.waist, 30);
		}
	}

	function getMousePos(e) {
		return { x: e.clientX, y: e.clientY };
	}

	function moveJoint(mouse, joint, degreeLimit) {
		let degrees = getMouseDegrees(mouse.x, mouse.y, degreeLimit);
		joint.rotation.y = THREE.MathUtils.degToRad(degrees.x);
		joint.rotation.x = THREE.MathUtils.degToRad(degrees.y);
		console.log(joint.rotation.x);
	}

	let el;
	onMount(() => {
		loadGLTFModel();
		createScene(el);
	});
</script>

<svelte:window
	bind:innerWidth
	bind:outerWidth
	bind:innerHeight
	bind:outerHeight
	on:click={(e) => raycast(e)}
	on:mousemove={(e) => moveCharacterOnMouse(e)}
/>
<canvas bind:this={el} />