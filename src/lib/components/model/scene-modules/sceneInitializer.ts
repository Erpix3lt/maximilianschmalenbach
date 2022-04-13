export function initWorld(camera: THREE.PerspectiveCamera, THREE, scene){
	camera.position.z = 30;
	camera.position.x = 0;
	camera.position.y = -3;

	// Floor
	let floorGeometry = new THREE.PlaneGeometry(5000, 5000, 1, 1);
	let floorMaterial = new THREE.MeshPhongMaterial({
		color: 0x1d3040,
		shininess: 0 });

	let floor = new THREE.Mesh(floorGeometry, floorMaterial);
	floor.rotation.x = -0.5 * Math.PI;
	floor.receiveShadow = true;
	floor.position.y = -11;
	scene.add(floor);

	// Add lights
	let hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.61);
		hemiLight.position.set(0, 50, 0);
		// Add hemisphere light to scene
		scene.add(hemiLight);

		let d = 8.25;
		let dirLight = new THREE.DirectionalLight(0xffffff, 0.54);
		dirLight.position.set(-8, 12, 8);
		dirLight.castShadow = true;
		dirLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
		dirLight.shadow.camera.near = 0.1;
		dirLight.shadow.camera.far = 1500;
		dirLight.shadow.camera.left = d * -1;
		dirLight.shadow.camera.right = d;
		dirLight.shadow.camera.top = d;
		dirLight.shadow.camera.bottom = d * -1;
		// Add directional Light to scene
		scene.add(dirLight);
}