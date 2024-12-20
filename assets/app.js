// تحديد الأزرار والقائمة
const burgerMenu = document.querySelector('.toggle');
const navbar = document.querySelector('.navbar-mobile2');

// إضافة حدث عند الضغط على أيقونة الـ Burger Menu
burgerMenu.addEventListener('click', function() {
    // التبديل بين إظهار وإخفاء القائمة
    navbar.style.display = (navbar.style.display === 'none' || navbar.style.display === '') ? 'block' : 'none';
});
