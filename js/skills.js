// Animate skill bars when they come into view
const progressBars = document.querySelectorAll('.progress');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const percent = bar.getAttribute('data-percent');
            bar.style.width = percent + '%';
            observer.unobserve(bar);
        }
    });
}, { threshold: 0.5 });

progressBars.forEach(bar => observer.observe(bar));