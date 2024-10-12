document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card, .review-card, .popular-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.3s, box-shadow 0.3s';
            card.style.transform = 'scale(1.05)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
});
// تحديث التاريخ الحالي في الهيدر
function updateDate() {
    const currentDateElement = document.getElementById('current-date');
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = new Date().toLocaleDateString('ar-EG', options);
    currentDateElement.textContent = currentDate;
}

updateDate();
// عرض التاريخ الحالي
const currentDate = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
document.getElementById('current-date').textContent = currentDate.toLocaleDateString('ar-EG', options);
// تأكد من تحميل الصفحة بالكامل قبل تنفيذ الكود
document.addEventListener("DOMContentLoaded", function() {

    // عناصر التحكم
    var addButton = document.getElementById("addButton");
    var modal = document.getElementById("modal");
    var closeModal = document.getElementById("closeModal");

    // عند الضغط على زر الإضافة "+"
    addButton.addEventListener("click", function() {
        modal.style.display = "block";  // عرض المودال
    });

    // عند الضغط على زر الإغلاق في المودال
    closeModal.addEventListener("click", function() {
        modal.style.display = "none";  // إخفاء المودال
    });

    // إغلاق المودال عند الضغط خارج النافذة
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";  // إخفاء المودال
        }
    });

});
// تأثير ظهور العناصر عند التمرير
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;

    elements.forEach(function(element) {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight) {
            element.classList.add('visible');
        }
    });
});
const sound = new Howl({
    src: ['sound.mp3']
});

document.querySelector('.button').addEventListener('click', function() {
    sound.play(); // تشغيل الصوت عند الضغط على الزر
});
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 }},
        color: { value: "#ffffff" },
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
            value: 3,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            grab: { distance: 400, line_linked: { opacity: 1 }},
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
        }
    },
    retina_detect: true
});
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
document.getElementById("myButton").onclick = function() {
    // تشغيل الصوت
    document.getElementById("buttonSound").play();

    // إضافة الحركة
    anime({
        targets: '#myButton',
        translateX: 250,
        duration: 1000,
        easing: 'easeInOutQuad',
        loop: true,
        direction: 'alternate'
    });
};
