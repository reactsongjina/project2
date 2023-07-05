window.addEventListener("DOMContentLoaded",function(){
    let mainSwiper = new Swiper("#slider .mySwiper", {
        speed:1200,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
		},
    });

    let menuData=[
        {subject:"신메뉴"},
        {subject:"오므라이스"},
        {subject:"커리"},
        {subject:"카츠"},
    ];
    let menuList=menuData.map((d,i) => (d.subject));
    for(let i=0; i<menuData.length; i++){
        let menuSwiper = new Swiper("#menu .mySwiper", {
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                renderBullet: function (i, className) {
                    return '<span class="' + className + '">' + (menuList[i]) + "</span>";
                },
            },
            speed:1200,
            slidesPerView: 1,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }
});