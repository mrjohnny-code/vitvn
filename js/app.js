'use strict'

document.addEventListener("DOMContentLoaded", () => {
	fixedHeader()
	headerSearch()
	headerAsideMenu()
	introMobileBurger()
	registrationForm()
})

function fixedHeader() {
	const header = document.querySelector('.header')

	function checkPosition() {
		if(header) {
			if(window.scrollY > 50) {
				header.classList.add('fixed')
			} else {
				header.classList.remove('fixed')
			}
		}
	}
	
	checkPosition()
	window.addEventListener('scroll', function(e) {
		checkPosition()
	})
}

function headerSearch() {
	const searchOpenButton = document.querySelector('.header__search .header__search_button')
	const searchCloseButton = document.querySelector('.header__search .header__close_button')
	const searchInner = document.querySelector('.header__search_inner')

	if(searchOpenButton && searchInner) {
		document.addEventListener('click', function(e) {

			const target = e.target

			if(searchOpenButton.contains(target)) {
				searchInner.classList.add('opened')
			}
			if(searchCloseButton.contains(target) && searchInner.classList.contains('opened')) {
				searchInner.classList.remove('opened')
			}

		})
	}
}

function headerAsideMenu() {
	const asideOpenButton = document.querySelector('.header .header__burger_menu')
	const asideCloseButton = document.querySelector('.header__aside_menu .header__close_button')
	const asidehInner = document.querySelector('.header .header__aside_menu')
	const body = document.querySelector('body')

	if(asideOpenButton && asidehInner) {
		document.addEventListener('click', function(e) {

			const target = e.target
			const asideOpened = body.classList.contains('aside_menu_opened')

			if(asideOpenButton.contains(target)) {
				body.classList.add('aside_menu_opened')
			}
			if(asideCloseButton.contains(target) && asideOpened) {
				body.classList.remove('aside_menu_opened')
			} else if(asideOpened && target.classList.contains('header')) {
				body.classList.remove('aside_menu_opened')
			}
		})
	}
}

function introMobileBurger() {
	const introOpenButton = document.querySelector('.intro__nav .intro__burger_button')
	const introNav = document.querySelector('.intro__nav .intro__nav_list')

	if(introOpenButton && introNav) {
		document.addEventListener('click', function(e) {
			
			const target = e.target

			if(introOpenButton.contains(target)) {
				introNav.classList.toggle('menu_opened')
			} else if(introNav.classList.contains('menu_opened') && !introNav.contains(target)) {
				introNav.classList.remove('menu_opened')
			}
		})
	}
}

function registrationForm() {
	const form = document.querySelector('.registration__form')
	const button = form.querySelector('.registration__button')
	
	form.addEventListener('input', function(e) {

		const inputName = form.querySelector('#name').checkValidity()
		const inputSurname = form.querySelector('#surname').checkValidity()
		const inputEmail = form.querySelector('#email').checkValidity()
		const inputPhone = form.querySelector('#phone').checkValidity()

		if(inputName && inputSurname && inputEmail && inputPhone) {
			button.removeAttribute('disabled')
		} else {
			button.setAttribute('disabled', '')
		}
	})
	
}