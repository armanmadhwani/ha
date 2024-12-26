// app.js
document.addEventListener('DOMContentLoaded', () => {
    // Initialize ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Function to remove the loading screen
    function removeLoadingScreen() {
        const loadingScreen = document.getElementById('loading');
        loadingScreen.style.display = 'none';
    }

    // Remove the loading screen after 3 seconds
    setTimeout(removeLoadingScreen, 3000);

    // 3D Molecule Model using Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('3d-viewer').appendChild(renderer.domElement);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Create molecule structure
    const atoms = [];
    const atomGeometry = new THREE.SphereGeometry(0.3, 32, 32);
    const bondGeometry = new THREE.CylinderGeometry(0.05, 0.05, 1, 32);

    const atomMaterial1 = new THREE.MeshStandardMaterial({ color: 0x007bff });
    const atomMaterial2 = new THREE.MeshStandardMaterial({ color: 0xff5733 });
    const bondMaterial = new THREE.MeshStandardMaterial({ color: 0xaaaaaa });

    // Central atom
    const atom1 = new THREE.Mesh(atomGeometry, atomMaterial1);
    scene.add(atom1);
    atoms.push(atom1);

    // Surrounding atoms and bonds
    for (let i = 0; i < 4; i++) {
        const angle = i * (Math.PI / 2);
        const x = Math.cos(angle) * 1.5;
        const y = Math.sin(angle) * 1.5;
        const atom = new THREE.Mesh(atomGeometry, atomMaterial2);
        atom.position.set(x, y, 0);
        scene.add(atom);
        atoms.push(atom);

        const bond = new THREE.Mesh(bondGeometry, bondMaterial);
        bond.position.set(x / 2, y / 2, 0);
        bond.lookAt(atom1.position);
        scene.add(bond);
    }

    camera.position.z = 5;

    // Animation function
    function animate() {
        requestAnimationFrame(animate);
        atoms.forEach(atom => {
            atom.rotation.y += 0.01;
            atom.rotation.x += 0.01;
        });
        renderer.render(scene, camera);
    }

    animate();

    // Scroll-triggered animation
    gsap.to(camera.position, {
        z: 2,
        scrollTrigger: {
            trigger: "#home",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    gsap.from("#products h2", {
        duration: 1,
        x: -100,
        opacity: 0,
        scrollTrigger: {
            trigger: "#products",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none"
        }
    });

    gsap.from(".product-grid div", {
        duration: 1,
        scale: 0.5,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
            trigger: "#products",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none"
        }
    });

    gsap.from("#about h2", {
        duration: 1,
        x: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none"
        }
    });

    gsap.from("#about p", {
        duration: 1,
        y: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none"
        }
    });

    gsap.from("#contact h2", {
        duration: 1,
        scale: 0.5,
        opacity: 0,
        scrollTrigger: {
            trigger: "#contact",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none"
        }
    });

    gsap.from("#contact form", {
        duration: 1,
        y: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: "#contact",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none"
        }
    });
});
