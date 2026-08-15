function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('open');
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('open');
    });
});

function createParticles(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const colors = ['#3B82F6', '#EF4444', '#8B5CF6', '#60A5FA'];
    for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.classList.add('particle');
        p.style.left = Math.random() * 100 + '%';
        p.style.width = (Math.random() * 3 + 1) + 'px';
        p.style.height = p.style.width;
        p.style.animationDuration = (Math.random() * 10 + 8) + 's';
        p.style.animationDelay = (Math.random() * 10) + 's';
        p.style.background = colors[Math.floor(Math.random() * colors.length)];
        container.appendChild(p);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    createParticles('particles');
    createParticles('particles-mace');
    createParticles('particles-sword');
    createParticles('particles-shard');
    createParticles('particles-processor');
    createParticles('particles-vps');
    createParticles('particles-premium');
});

function placeOrder(btn) {
    const form = btn.closest('.order-form');
    const select = form.querySelector('select');
    const inputs = form.querySelectorAll('input');

    let orderDetails = '🛒 **New Order!**\n';
    orderDetails += '📦 Product: ' + select.value + '\n';

    inputs.forEach(input => {
        if (input.value) {
            const label = input.placeholder || 'Detail';
            orderDetails += '📝 ' + label + ': ' + input.value + '\n';
        }
    });

    btn.textContent = '✅ Order Placed!';
    btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';

    setTimeout(() => {
        btn.textContent = 'Place Order →';
        btn.style.background = 'linear-gradient(135deg, #3B82F6, #2563EB)';
        inputs.forEach(input => input.value = '');
        select.selectedIndex = 0;
    }, 3000);

    console.log(orderDetails);
    alert('✅ Order placed!\nCheck console for details.');
}

document.querySelectorAll('.stat-number').forEach(counter => {
    const target = parseInt(counter.textContent);
    let current = 0;
    const increment = target / 40;
    const update = () => {
        current += increment;
        if (current < target) {
            counter.textContent = Math.ceil(current);
            requestAnimationFrame(update);
        } else {
            counter.textContent = target;
        }
    };
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            update();
            observer.disconnect();
        }
    });
    observer.observe(counter);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

console.log('🍯 FLUX GROUPS - Created by Akshat & Huzaifa');
console.log('⚡ FluxSMP IP: play.fluxsmp.fun');
console.log('🚀 Built with ❤️');
