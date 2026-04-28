// وظيفة الطلب عبر الواتساب برقمك المحدث
function orderWhatsApp(name, price) {
    const phone = "201120786594"; 
    const msg = `أهلاً 3DLAT Store، أريد طلب منتج: ${name} بسعر ${price} ج.م. من فضلك تواصل معي لتأكيد الشحن.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    
    Swal.fire({
        title: 'عاش يا بطل!',
        text: `جاري تحويلك لطلب ${name} عبر الواتساب`,
        icon: 'success',
        background: '#111',
        color: '#fff',
        confirmButtonColor: '#eab308',
        confirmButtonText: 'إتمام الطلب',
        cancelButtonText: 'إلغاء',
        showCancelButton: true
    }).then((result) => {
        if (result.isConfirmed) {
            window.open(url, '_blank');
        }
    });
}

// تأثير الهيدر عند السكرول
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('bg-black', 'shadow-2xl', 'py-3');
        nav.classList.remove('bg-black/80', 'py-5');
    } else {
        nav.classList.remove('bg-black', 'shadow-2xl', 'py-3');
        nav.classList.add('bg-black/80', 'py-5');
    }
});