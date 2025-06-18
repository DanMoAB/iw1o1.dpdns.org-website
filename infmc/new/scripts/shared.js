function showSection(id) {
    // 隐藏所有section
    document.querySelectorAll('.hidden-section')
        .forEach(section => {
        section.style.display = 'none';
    });

    // 显示目标section
    document.getElementById(id)
        .style.display = 'block';

    // 移除所有导航链接的高亮样式
    document.querySelectorAll('.navbar ul li a')
        .forEach(link => {
        link.classList.remove('active');
    });

    // 为当前导航链接添加高亮样式
    if (id !== 'top') {
        document.getElementById(id + '-link')
            .classList.add('active');
    }
}

// 滚动到页面顶部
function scrollToTop() {
    window.scrollTo({
        top: 0, // 滚动到页面顶部
        behavior: 'smooth' // 平滑滚动
    });
}

// 页面加载时默认显示首页并高亮“首页”导航链接
window.onload = function() {
    showSection('home');
};

let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

// 自动轮播函数
function autoSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // 计算下一张图片的索引
    updateCarousel(); // 更新轮播图
}

// 更新轮播图位置
function updateCarousel() {
    const offset = -currentIndex * 100; // 计算偏移量
    document.querySelector('.carousel-inner')
        .style.transform = `translateX(${offset}%)`; // 设置偏移
}

function redirectToDonate() {
    window.location.href = "https://afdian.tv/a/infmc";
}

document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const footer = document.querySelector("footer");

    // 获取 footer 的顶部位置
    const footerTop = footer.offsetTop;

    // 监听滚动事件
    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;

        // 判断是否滚动到 footer
        if (scrollPosition >= footerTop - sidebar.offsetHeight) {
            // 滚动到 footer 时，将 sidebar 设置为绝对定位
            sidebar.classList.add("sidebar-scroll");
        } else {
            // 滚动离开 footer 时，恢复 sidebar 的固定定位
            sidebar.classList.remove("sidebar-scroll");
        }
    });
});

// 设置自动轮播定时器
setInterval(autoSlide, 3000); // 每3秒自动切换一次