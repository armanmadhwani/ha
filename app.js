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
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('3d-viewer').appendChild(renderer.domElement);

    // Add a simple molecule-like structure
    const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x007bff });
    const molecule = new THREE.Mesh(geometry, material);

    scene.add(molecule);
    camera.position.z = 5;

    // Animation function
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    animate();

    // Scroll-triggered animation
    gsap.to(molecule.position, {
        y: 5,
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
