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

    // 3D Background using Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Particle settings
    const particles = new THREE.BufferGeometry();
    const particleCount = 5000;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() * 2 - 1) * 100;
        positions[i * 3 + 1] = (Math.random() * 2 - 1) * 100;
        positions[i * 3 + 2] = (Math.random() * 2 - 1) * 100;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
        color: 0x888888,
        size: 0.5,
        transparent: true,
        opacity: 0.75
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    camera.position.z = 50;

    // Mouse interaction
    const mouse = { x: 0, y: 0 };
    document.addEventListener('mousemove', (event) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    // Animation function
    function animate() {
        requestAnimationFrame(animate);
        particleSystem.rotation.y += 0.002;
        particleSystem.rotation.x += 0.002;

        particleSystem.position.x += (mouse.x * 0.1 - particleSystem.position.x) * 0.05;
        particleSystem.position.y += (mouse.y * 0.1 - particleSystem.position.y) * 0.05;

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
