/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, {
	Navigation, Pagination, Scrollbar,
	Keyboard, Mousewheel, FreeMode, Autoplay, EffectFade, EffectCube, EffectFlip, Lazy, Parallax
} from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
//import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.slider-main__controls')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.slider-main__controls', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Scrollbar, Keyboard, Mousewheel, FreeMode, Autoplay, EffectFade, EffectCube, EffectFlip, Lazy, Parallax],
			observer: true, //f оновить свайпер при зміні елементів слайдера 
			observeParents: true,//f оновити свайпер при зміні батьківських елементів слайдера
			//observeSlideChildren: true, //Оновити свайпер при зміні дочірніх елементів слайда 
			slidesPerView: 1,//f кількість слайдів для показу
			spaceBetween: 32,//f отступ між слайдами
			//autoHeight: true, // Автовисота
			speed: 800,//f
			watchOverflow: true,//f відключення функціоналу, якщо слайдів менше, чим потрібно
			loopAdditionalSlides: 5, //f
			//slidesPerGroup: 1, // кількість слайдів для пролистування
			//centeredSlides: true, // активний слайд по центрі
			//touchRatio: 1, //чувствительность свайпа
			//simulateTouch: true, // вкл, викл свайп
			//touchAngle: 45, // кут спрацювання свайпа
			//grabCursor: false, // курсор перетаскивания 
			//slideToClickedSlide: true, // переключення при кліку на слайд
			//initialSlide: 0, // Стартовий слайд(перший слайд має 0-вий індекс)
			//slidesPerColumn: 2, //Мультирядність
			loop: true, //f Безкінечний слайдер
			loopAdditionalSlides: 5,
			//loopedSlides: 0, //кількість доблюючих слайдів
			//freeMode: true, // Вільний режим
			//direction: "vertical", //вертикланий слайдер
			parallax: true,

			
			preloadImages: false, //f Відключення предзагрузку картинки
			/*
			lazy: {
				loadOnTransitionStart: false, //підгружати на старті підключення слайда
				loadPrevNext: false, // підгружати предедущу та наступну картинки
			},

			watchSlidesProgress: true, // сліжка за видимими слайдами
			watchSlidesVisibility: true, // добавлення класу видимим слайдам
			*/
			//=====<Эффекти переключення слайдів>========================
			/*
			effect: 'fade', // ефект зміни прозорості
			//Доповнення до fade
			fadeEffect: {
				crossFade: true, //Паралельна зміна прозорості
			},

			// Перевертання у вигляді куба
			effect: "cube",

			cubeEffect: {
				//настройка тіні
				slideShadows: true,
				shadow: true,
				shadowOffset: 20,
				shadowScale: 0.94,
			},
			
			// Перевертання
			effect: "flip",

			flipEffect: {
				slideShadows: true,
				limitRotation: true,
			},
			*/
			//=====</Эффекти переключення слайдів>========================

			// Автопрокрутка
			/*
			autoplay: {
				delay: 1000, // пауза автопрокрутки в мс
				stopOnLastSlide: false, // Зупинка на останньому слайді
				disableOnInteraction: false, // зупинка після вручного втручання(продовження, якщо фолс)
			},
			*/

			/*
			// управління клавіатурою
			keyboard: {
				enabled: true, // вкл/викл
				onlyInViewport: true, // вкл/викл тільки коли слайдер в межах вюпорту
				pageUpDown: true, // вкл/викл управління pageUp, pageDown 
			},

			mousewheel: {
				sensitivity: 1, // чутливість колеса миші

				//eventsTarget: ".image-slider", // клас обєкта над яким спрацює колесо миші
			},
			*/
			// Пагинация

			pagination: {
				el: '.controls-slider-main__dotts',
				
				clickable: true,
				/*
				dynamicBullets: true,
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (index + 1) + '</span>'
				}
				*/
				//type: "fraction",
				//type: "progressbar",
			},


			// Скроллбар
/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.slider-arrow.slider-arrow_prew',
				nextEl: '.slider-arrow.slider-arrow_next',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
	}

	if (document.querySelector('.slider-rooms__body')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.slider-rooms__body', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Scrollbar, Keyboard, Mousewheel, FreeMode, Autoplay, EffectFade, EffectCube, EffectFlip, Lazy, Parallax],
			observer: true, //f оновить свайпер при зміні елементів слайдера 
			observeParents: true,//f оновити свайпер при зміні батьківських елементів слайдера
			//observeSlideChildren: true, //Оновити свайпер при зміні дочірніх елементів слайда 
			slidesPerView: "auto",//f кількість слайдів для показу
			spaceBetween: 24,//f отступ між слайдами
			//autoHeight: true, // Автовисота
			speed: 800,//f
			watchOverflow: true,//f відключення функціоналу, якщо слайдів менше, чим потрібно
			//loopAdditionalSlides: 5, //f
			//slidesPerGroup: 1, // кількість слайдів для пролистування
			//centeredSlides: true, // активний слайд по центрі
			//touchRatio: 1, //чувствительность свайпа
			//simulateTouch: true, // вкл, викл свайп
			//touchAngle: 45, // кут спрацювання свайпа
			//grabCursor: false, // курсор перетаскивания 
			//slideToClickedSlide: true, // переключення при кліку на слайд
			//initialSlide: 0, // Стартовий слайд(перший слайд має 0-вий індекс)
			//slidesPerColumn: 2, //Мультирядність
			loop: true, //f Безкінечний слайдер
			loopAdditionalSlides: 5,
			//loopedSlides: 0, //кількість доблюючих слайдів
			//freeMode: true, // Вільний режим
			//direction: "vertical", //вертикланий слайдер
			parallax: true,

			
			preloadImages: false, //f Відключення предзагрузку картинки
			/*
			lazy: {
				loadOnTransitionStart: false, //підгружати на старті підключення слайда
				loadPrevNext: false, // підгружати предедущу та наступну картинки
			},

			watchSlidesProgress: true, // сліжка за видимими слайдами
			watchSlidesVisibility: true, // добавлення класу видимим слайдам
			*/
			//=====<Эффекти переключення слайдів>========================
			/*
			effect: 'fade', // ефект зміни прозорості
			//Доповнення до fade
			fadeEffect: {
				crossFade: true, //Паралельна зміна прозорості
			},

			// Перевертання у вигляді куба
			effect: "cube",

			cubeEffect: {
				//настройка тіні
				slideShadows: true,
				shadow: true,
				shadowOffset: 20,
				shadowScale: 0.94,
			},
			
			// Перевертання
			effect: "flip",

			flipEffect: {
				slideShadows: true,
				limitRotation: true,
			},
			*/
			//=====</Эффекти переключення слайдів>========================

			// Автопрокрутка
			/*
			autoplay: {
				delay: 1000, // пауза автопрокрутки в мс
				stopOnLastSlide: false, // Зупинка на останньому слайді
				disableOnInteraction: false, // зупинка після вручного втручання(продовження, якщо фолс)
			},
			*/

			/*
			// управління клавіатурою
			keyboard: {
				enabled: true, // вкл/викл
				onlyInViewport: true, // вкл/викл тільки коли слайдер в межах вюпорту
				pageUpDown: true, // вкл/викл управління pageUp, pageDown 
			},

			mousewheel: {
				sensitivity: 1, // чутливість колеса миші

				//eventsTarget: ".image-slider", // клас обєкта над яким спрацює колесо миші
			},
			*/
			// Пагинация

			pagination: {
				el: '.slider-rooms__dotts',
				
				clickable: true,
				/*
				dynamicBullets: true,
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (index + 1) + '</span>'
				}
				*/
				//type: "fraction",
				//type: "progressbar",
			},


			// Скроллбар
/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.slider-rooms .slider-arrow_prew',
				nextEl: '.slider-rooms .slider-arrow_next',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
}

if (document.querySelector('.slider-tips__slider')) { // Указываем скласс нужного слайдера
	// Создаем слайдер
	new Swiper('.slider-tips__slider', { // Указываем скласс нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Pagination, Scrollbar, Keyboard, Mousewheel, FreeMode, Autoplay, EffectFade, EffectCube, EffectFlip, Lazy, Parallax],
		observer: true, //f оновить свайпер при зміні елементів слайдера 
		observeParents: true,//f оновити свайпер при зміні батьківських елементів слайдера
		//observeSlideChildren: true, //Оновити свайпер при зміні дочірніх елементів слайда 
		slidesPerView: 3,//f кількість слайдів для показу
		spaceBetween: 32,//f отступ між слайдами
		//autoHeight: true, // Автовисота
		speed: 800,//f
		watchOverflow: true,//f відключення функціоналу, якщо слайдів менше, чим потрібно
		//loopAdditionalSlides: 5, //f
		//slidesPerGroup: 1, // кількість слайдів для пролистування
		//centeredSlides: true, // активний слайд по центрі
		//touchRatio: 1, //чувствительность свайпа
		//simulateTouch: true, // вкл, викл свайп
		//touchAngle: 45, // кут спрацювання свайпа
		//grabCursor: false, // курсор перетаскивания 
		//slideToClickedSlide: true, // переключення при кліку на слайд
		//initialSlide: 0, // Стартовий слайд(перший слайд має 0-вий індекс)
		//slidesPerColumn: 2, //Мультирядність
		loop: true, //f Безкінечний слайдер
		//loopAdditionalSlides: 5,
		//loopedSlides: 0, //кількість доблюючих слайдів
		//freeMode: true, // Вільний режим
		//direction: "vertical", //вертикланий слайдер
		//parallax: true,

		
		//preloadImages: false, //f Відключення предзагрузку картинки
		/*
		lazy: {
			loadOnTransitionStart: false, //підгружати на старті підключення слайда
			loadPrevNext: false, // підгружати предедущу та наступну картинки
		},

		watchSlidesProgress: true, // сліжка за видимими слайдами
		watchSlidesVisibility: true, // добавлення класу видимим слайдам
		*/
		//=====<Эффекти переключення слайдів>========================
		/*
		effect: 'fade', // ефект зміни прозорості
		//Доповнення до fade
		fadeEffect: {
			crossFade: true, //Паралельна зміна прозорості
		},

		// Перевертання у вигляді куба
		effect: "cube",

		cubeEffect: {
			//настройка тіні
			slideShadows: true,
			shadow: true,
			shadowOffset: 20,
			shadowScale: 0.94,
		},
		
		// Перевертання
		effect: "flip",

		flipEffect: {
			slideShadows: true,
			limitRotation: true,
		},
		*/
		//=====</Эффекти переключення слайдів>========================

		// Автопрокрутка
		/*
		autoplay: {
			delay: 1000, // пауза автопрокрутки в мс
			stopOnLastSlide: false, // Зупинка на останньому слайді
			disableOnInteraction: false, // зупинка після вручного втручання(продовження, якщо фолс)
		},
		*/

		/*
		// управління клавіатурою
		keyboard: {
			enabled: true, // вкл/викл
			onlyInViewport: true, // вкл/викл тільки коли слайдер в межах вюпорту
			pageUpDown: true, // вкл/викл управління pageUp, pageDown 
		},

		mousewheel: {
			sensitivity: 1, // чутливість колеса миші

			//eventsTarget: ".image-slider", // клас обєкта над яким спрацює колесо миші
		},
		*/
		// Пагинация

		pagination: {
			el: '.slider-tips__dotts',
			
			clickable: true,
			/*
			dynamicBullets: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + '</span>'
			}
			*/
			//type: "fraction",
			//type: "progressbar",
		},


		// Скроллбар
/*
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
		},
*/

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: '.slider-tips .slider-arrow_prew',
			nextEl: '.slider-tips .slider-arrow_next',
		},

		// Брейкпоинты
		
		breakpoints: {
			240: {
				slidesPerView: 1,
				spaceBetween: 5,
			},
			320: {
				slidesPerView: 1.1,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 32,
			},
		},
		
		// События
		on: {

		}
	});
}

}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});