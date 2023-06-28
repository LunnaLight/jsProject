const body = document.body;
//burger-menu
let menuBut = document.querySelector('.menu-but');
let menu = document.querySelector('.menu');
menuBut.addEventListener('click', function () {
	menuBut.classList.toggle('active');
	menu.classList.toggle('active');
	body.classList.toggle("blocked");
})



//modal vindow
const pop_open = document.getElementById("pop_open");
const pop_container = document.getElementById("pop_container");
const pop_close = document.getElementById("pop_close");

pop_open.addEventListener("click", function () {
	pop_container.classList.add("open");
	body.classList.add("blocked");

})
pop_close.addEventListener('click', function () {
	pop_container.classList.remove("open");
	body.classList.remove("blocked");
})



//tab
const sec1__but = document.querySelectorAll('.sec1__but');
const tabs = document.querySelectorAll('.tab');
sec1__but.forEach(function (item) {
	item.addEventListener("click", function () {
		sec1__but.forEach(function (item2) {
			item2.classList.remove('active');
		})
		item.classList.add('active');

		tabs.forEach(function (item3) {
			item3.classList.remove("active")
		})

		let but_id = item.getAttribute("but_id");
		let tab = document.querySelector(but_id);
		tab.classList.add("active");
	})
})



//slider
let count = 1
const slider__butleft = document.querySelector(".slider__butleft")
const slider__butright = document.querySelector(".slider__butright")
const sliders = document.querySelectorAll('.slider__container')

slider__butleft.addEventListener("click", function () {
	if (count == 1) {
		count = 3
	}
	else {
		count = count - 1
	}
	sliderUpdate(count)
})
slider__butright.addEventListener('click', function () {
	if (count == 3) {
		count = 1
	}
	else {
		count = count + 1
	}
	sliderUpdate(count)
})

function sliderUpdate(c) {
	sliders.forEach(function (i) {
		i.classList.remove('active')
	})
	let slideActive;
	if (c == 1) {
		slideActive = document.querySelector(".slid1")
	}
	else if (c == 2) {
		slideActive = document.querySelector(".slid2")
	}
	else if (c == 3) {
		slideActive = document.querySelector(".slid3")
	}
	slideActive.classList.add('active')
}



//accordion
const accordHead = document.querySelectorAll(".accordHead")
const accordContent = document.querySelectorAll(".accordContent")

accordHead.forEach(function (header) {
	header.addEventListener("click", function () {
		header.classList.toggle("active")
		accordContent.forEach(function (content) {
			if (content.getAttribute("id") == header.getAttribute("id")) {
				content.classList.toggle("active")
			}
		})
	})
})



//filtration
const filtr_buts = document.querySelectorAll('.sec3__but')
const filtr_items = document.querySelectorAll('.filtr__item')

filtr_buts.forEach(function (but) {
	but.addEventListener("click", function () {
		filtr_buts.forEach(function (but) {
			but.classList.remove("active")
		})
		
		but.classList.add("active")
		if (but.getAttribute("filtr") == "all") {
			filtr_items.forEach(function (item) {
				item.classList.add("active")
			})
		}

		else {
			filtr_items.forEach(function (item) {
				if (item.getAttribute("filtr") == but.getAttribute("filtr")) {
					item.classList.add("active")
				}
				else {
					item.classList.remove("active")
				}
			})
		}


	})
})
