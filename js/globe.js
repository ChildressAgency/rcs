// Source: https://codepen.io/aado29/pen/PyGqwa

// CSS3DRenderer.js
THREE.CSS3DObject = function ( element ) {

    THREE.Object3D.call( this );

    this.element = element;
    this.element.style.position = 'absolute';

    this.addEventListener( 'removed', function ( event ) {

        if ( this.element.parentNode !== null ) {

            this.element.parentNode.removeChild( this.element );

        }

    } );

};
THREE.CSS3DObject.prototype = Object.create( THREE.Object3D.prototype );
THREE.CSS3DObject.prototype.constructor = THREE.CSS3DObject;
THREE.CSS3DSprite = function ( element ) {

    THREE.CSS3DObject.call( this, element );

};
THREE.CSS3DSprite.prototype = Object.create( THREE.CSS3DObject.prototype );
THREE.CSS3DSprite.prototype.constructor = THREE.CSS3DSprite;
THREE.CSS3DRenderer = function () {

    // console.log( 'THREE.CSS3DRenderer', THREE.REVISION );

    var _width, _height;
    var _widthHalf, _heightHalf;

    var matrix = new THREE.Matrix4();

    var cache = {
        camera: { fov: 0, style: '' },
        objects: {}
    };

    var domElement = document.createElement( 'div' );
    domElement.style.overflow = 'hidden';

    domElement.style.WebkitTransformStyle = 'preserve-3d';
    domElement.style.MozTransformStyle = 'preserve-3d';
    domElement.style.oTransformStyle = 'preserve-3d';
    domElement.style.transformStyle = 'preserve-3d';

    this.domElement = domElement;

    var cameraElement = document.createElement( 'div' );

    cameraElement.style.WebkitTransformStyle = 'preserve-3d';
    cameraElement.style.MozTransformStyle = 'preserve-3d';
    cameraElement.style.oTransformStyle = 'preserve-3d';
    cameraElement.style.transformStyle = 'preserve-3d';

    domElement.appendChild( cameraElement );

    this.setClearColor = function () {};

    this.getSize = function() {

        return {
            width: _width,
            height: _height
        };

    };

    this.setSize = function ( width, height ) {

        _width = width;
        _height = height;

        _widthHalf = _width / 2;
        _heightHalf = _height / 2;

        domElement.style.width = width + 'px';
        domElement.style.height = height + 'px';

        cameraElement.style.width = width + 'px';
        cameraElement.style.height = height + 'px';

    };

    var epsilon = function ( value ) {

        return Math.abs( value ) < Number.EPSILON ? 0 : value;

    };

    var getCameraCSSMatrix = function ( matrix ) {

        var elements = matrix.elements;

        return 'matrix3d(' +
            epsilon( elements[ 0 ] ) + ',' +
            epsilon( - elements[ 1 ] ) + ',' +
            epsilon( elements[ 2 ] ) + ',' +
            epsilon( elements[ 3 ] ) + ',' +
            epsilon( elements[ 4 ] ) + ',' +
            epsilon( - elements[ 5 ] ) + ',' +
            epsilon( elements[ 6 ] ) + ',' +
            epsilon( elements[ 7 ] ) + ',' +
            epsilon( elements[ 8 ] ) + ',' +
            epsilon( - elements[ 9 ] ) + ',' +
            epsilon( elements[ 10 ] ) + ',' +
            epsilon( elements[ 11 ] ) + ',' +
            epsilon( elements[ 12 ] ) + ',' +
            epsilon( - elements[ 13 ] ) + ',' +
            epsilon( elements[ 14 ] ) + ',' +
            epsilon( elements[ 15 ] ) +
        ')';

    };

    var getObjectCSSMatrix = function ( matrix ) {

        var elements = matrix.elements;

        return 'translate3d(-50%,-50%,0) matrix3d(' +
            epsilon( elements[ 0 ] ) + ',' +
            epsilon( elements[ 1 ] ) + ',' +
            epsilon( elements[ 2 ] ) + ',' +
            epsilon( elements[ 3 ] ) + ',' +
            epsilon( - elements[ 4 ] ) + ',' +
            epsilon( - elements[ 5 ] ) + ',' +
            epsilon( - elements[ 6 ] ) + ',' +
            epsilon( - elements[ 7 ] ) + ',' +
            epsilon( elements[ 8 ] ) + ',' +
            epsilon( elements[ 9 ] ) + ',' +
            epsilon( elements[ 10 ] ) + ',' +
            epsilon( elements[ 11 ] ) + ',' +
            epsilon( elements[ 12 ] ) + ',' +
            epsilon( elements[ 13 ] ) + ',' +
            epsilon( elements[ 14 ] ) + ',' +
            epsilon( elements[ 15 ] ) +
        ')';

    };

    var renderObject = function ( object, camera ) {

        if ( object instanceof THREE.CSS3DObject ) {

            var style;

            if ( object instanceof THREE.CSS3DSprite ) {

                // http://swiftcoder.wordpress.com/2008/11/25/constructing-a-billboard-matrix/

                matrix.copy( camera.matrixWorldInverse );
                matrix.transpose();
                matrix.copyPosition( object.matrixWorld );
                matrix.scale( object.scale );

                matrix.elements[ 3 ] = 0;
                matrix.elements[ 7 ] = 0;
                matrix.elements[ 11 ] = 0;
                matrix.elements[ 15 ] = 1;

                style = getObjectCSSMatrix( matrix );

            } else {

                style = getObjectCSSMatrix( object.matrixWorld );

            }

            var element = object.element;
            var cachedStyle = cache.objects[ object.id ];

            if ( cachedStyle === undefined || cachedStyle !== style ) {

                element.style.WebkitTransform = style;
                element.style.MozTransform = style;
                element.style.oTransform = style;
                element.style.transform = style;

                cache.objects[ object.id ] = style;

            }

            if ( element.parentNode !== cameraElement ) {

                cameraElement.appendChild( element );

            }

        }

        for ( var i = 0, l = object.children.length; i < l; i ++ ) {

            renderObject( object.children[ i ], camera );

        }

    };

    this.render = function ( scene, camera ) {

        var fov = 0.5 / Math.tan( THREE.Math.degToRad( camera.getEffectiveFOV() * 0.5 ) ) * _height;

        if ( cache.camera.fov !== fov ) {

            domElement.style.WebkitPerspective = fov + "px";
            domElement.style.MozPerspective = fov + "px";
            domElement.style.oPerspective = fov + "px";
            domElement.style.perspective = fov + "px";

            cache.camera.fov = fov;

        }

        scene.updateMatrixWorld();

        if ( camera.parent === null ) camera.updateMatrixWorld();

        camera.matrixWorldInverse.getInverse( camera.matrixWorld );

        var style = "translate3d(0,0," + fov + "px)" + getCameraCSSMatrix( camera.matrixWorldInverse ) +
            " translate3d(" + _widthHalf + "px," + _heightHalf + "px, 0)";

        if ( cache.camera.style !== style ) {

            cameraElement.style.WebkitTransform = style;
            cameraElement.style.MozTransform = style;
            cameraElement.style.oTransform = style;
            cameraElement.style.transform = style;

            cache.camera.style = style;

        }

        renderObject( scene, camera );

    };

};

// Globe
var Globe = function( container ) {

  this.camera = null;
  this.glRenderer = null;
  this.cssScene = null;
  this.glScene = null;
  this.globeGroup = null;
  this.nodeGroup = null;
  this.cssRenderer = null;
  this.particleGroup = [];

  this.container = container.getElementsByClassName('gradient-box__globe')[0];

  this.WINDOW_WIDTH = this.container.clientWidth;
  this.WINDOW_HEIGHT = this.container.clientHeight;

  this.mouseX = 0;
  this.mouseY = 0;
  this.windowHalfX = this.WINDOW_WIDTH / 2;
  this.windowHalfY = this.WINDOW_HEIGHT / 2;
  this.globeRadius = 200;

  this.raycaster = new THREE.Raycaster();
  this.mouse = new THREE.Vector2();

  this.particleGroup = [];

  this.init;

  this.init = function() {

    var _this = this;

    // create camera object
    _this.camera = new THREE.PerspectiveCamera( 70, _this.WINDOW_WIDTH / _this.WINDOW_HEIGHT, 1, 1000 );

    // set camera perspective
    _this.camera.position.z = 500;

    // create GlRenderer and CssRenderer
    _this.glRenderer = _this.createGlRenderer();
    _this.cssRenderer = _this.createCssRenderer();

    // render components in selected container from constructor
    _this.container.appendChild(_this.cssRenderer.domElement);
    _this.cssRenderer.domElement.appendChild(_this.glRenderer.domElement);

    // create the scenes to show
    _this.glScene = new THREE.Scene();
    _this.cssScene = new THREE.Scene();

    // add events in the DOM

    // by window
    window.addEventListener( 'mousemove', _this.onWindowClick.bind(_this) );
    window.addEventListener( 'resize', _this.onWindowResize.bind(_this) );

    _this.addStuff();
  }

  this.createGlRenderer = function() {

    var glRenderer = new THREE.WebGLRenderer({alpha:true, antialias: true});
    glRenderer.setClearColor(0xffffff);
    glRenderer.setPixelRatio(window.devicePixelRatio);
    glRenderer.setSize(this.WINDOW_WIDTH, this.WINDOW_HEIGHT);
    glRenderer.domElement.style.position = 'absolute';
    glRenderer.domElement.style.zIndex = 1;
    glRenderer.domElement.style.top = 0;

    return glRenderer;

  }

  this.createCssRenderer = function() {

    var cssRenderer = new THREE.CSS3DRenderer();
    cssRenderer.setSize(this.WINDOW_WIDTH, this.WINDOW_HEIGHT);
    cssRenderer.domElement.style.position = 'absolute';
    this.glRenderer.domElement.style.zIndex = 0;
    cssRenderer.domElement.style.top = 0;
    cssRenderer.domElement.style.background = 'transparent';

    return cssRenderer;
  
  }

  this.addStuff = function() {

    this.drawGlobe();

  }

  this.createGlobeTexture = function() {

    var canvas, size = 256;

    // create canvas
    canvas = document.createElement( 'canvas' );
    canvas.width = size;
    canvas.height = size;

    // get context
    var context = canvas.getContext( '2d' );

    // draw gradient
    context.rect( 0, 0, size * 2, size * 2 );
    var gradient = context.createLinearGradient( 0, 0, size, size );
    gradient.addColorStop(0.2, '#53925C'); 
    // gradient.addColorStop(1, '#005d83'); // green
    context.fillStyle = gradient;
    context.fill();

    var texture = new THREE.Texture( canvas );
    texture.needsUpdate = true;

    return texture;

  }

  this.drawGlobe = function() {

    this.globeGroup = new THREE.Group();
    this.globeGroup.name = 'Globe Group';
    this.glScene.add( this.globeGroup );

    var geometry = new THREE.IcosahedronGeometry( this.globeRadius, 1 );

    // scale geometry to a uniform size
    geometry.computeBoundingSphere();

    var scaleFactor = 160 / geometry.boundingSphere.radius;
    geometry.scale( scaleFactor, scaleFactor, scaleFactor );

    // in case of duplicated vertices
    geometry.mergeVertices();
    geometry.computeFaceNormals();
    geometry.computeVertexNormals( true );

    var material = new THREE.MeshBasicMaterial( {
      map: this.createGlobeTexture(),
      transparent: true,
      wireframe: true,
      wireframeLinewidth: 0.1,
      opacity: 0.2,
    } );

    var mesh = new THREE.Mesh( geometry, material );

    mesh.name = 'Globe 3D';
    this.globeGroup.add( mesh );



    for (var i = 0; i < mesh.geometry.vertices.length; i++) {
      var coor = mesh.geometry.vertices[i];

      var particle = new THREE.Mesh( 
        new THREE.SphereGeometry( 4, 32, 32 ),
        new THREE.MeshBasicMaterial( {
          opacity: 1, 
          map: this.createGlobeTexture(),
          transparent: true
        } ) 
      );
      particle.name = 'Globe particle ' + i;
      particle.position.set( coor.x, coor.y, coor.z);
      
      this.globeGroup.add( particle );
    }

  }

  this.onWindowResize = function() {

    this.WINDOW_WIDTH = this.container.clientWidth;
    this.WINDOW_HEIGHT = this.container.clientHeight;

    this.camera.aspect = this.WINDOW_WIDTH / this.WINDOW_HEIGHT;
    this.camera.updateProjectionMatrix();

    this.glRenderer.setSize( this.WINDOW_WIDTH, this.WINDOW_HEIGHT );
    this.cssRenderer.setSize( this.WINDOW_WIDTH, this.WINDOW_HEIGHT );

  }

  this.onWindowClick = function(e) {

    this.mouseX = ( e.clientX - this.windowHalfX );
    this.mouseY = ( e.clientY - this.windowHalfY );

  }

  this.update = function() {

    window.requestAnimationFrame( this.update.bind(this) );

    this.render();

  }

  this.render = function() {

    var speed = 0.001;

    this.globeGroup.rotation.x += speed;
    this.globeGroup.rotation.y += speed;

    this.glRenderer.render( this.glScene, this.camera );
    this.cssRenderer.render( this.cssScene, this.camera );

  }

  

  

  var clearSpace = function(name, scene) {

    var object = scene.getObjectByName(name);
    if (object)
      scene.remove(object);

  }

}

// Script
window.onload = function() {
  var gradientBoxes = document.getElementsByClassName( 'wp-block-childress-gradient-box' );

  for( i = 0; i < gradientBoxes.length; i++ ){
    var newGlobe = new Globe( gradientBoxes[i] );
    newGlobe.init();
    newGlobe.update();
  }
}