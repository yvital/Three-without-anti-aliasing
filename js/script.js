window.onload = function(){
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 70, window.innerWidth/window.innerHeight, 0.1, 1000 );

	var renderer = new THREE.WebGLRenderer( );
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	var geometry = new THREE.BoxGeometry( 1.3, 1.3, 1.3 );
	var cubeTexture = new THREE.TextureLoader().load('https://raw.githubusercontent.com/yvital/Three/master/img/cube.jpg');
	var material = new THREE.MeshBasicMaterial({ map: cubeTexture });
	var cube = new THREE.Mesh( geometry, material );
	scene.add( cube );

	camera.position.z = 5;

	var animate = function () {
	requestAnimationFrame( animate );

		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;
		renderer.render( scene, camera );
	};

	animate();

}	