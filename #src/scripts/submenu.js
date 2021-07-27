window.onload = function () {
    document.addEventListener("click", documentActions);
}

function documentActions(e) {
    const targetElement = e.target;
    if (window.innerWidth > 768) {
        if (targetElement.classList.contains('_menuArrow')) {
            targetElement.closest('._menuItem').classList.toggle('_hover');
        }
        if (!targetElement.closest('._menuItem') && document.querySelectorAll('._menuItem._hover').length > 0) {
            _removeClasses(document.querySelectorAll('._menuItem._hover'), "_hover");
        }

        if (targetElement.classList.contains('_inputDiv')) {
            targetElement.classList.toggle('_hover');
        }

        if (!targetElement.closest('._inputDiv') && document.querySelectorAll('._inputDiv._hover').length > 0) {
            _removeClasses(document.querySelectorAll('._inputDiv._hover'), "_hover");
        }
    }
    if (isMobile.any()) {
        if (targetElement.classList.contains('_menuArrow')) {
            targetElement.closest('._menuItem').classList.toggle('_hoverMobile');
        }
        if (!targetElement.closest('._menuItem') && document.querySelectorAll('._menuItem._hoverMobile').length > 0) {
            _removeClasses(document.querySelectorAll('._menuItem._hoverMobile'), "_hoverMobile");
        }


        if (targetElement.classList.contains('_inputDiv')) {
            targetElement.classList.toggle('_hoverMobile');
        }

        if (!targetElement.closest('._inputDiv') && document.querySelectorAll('._inputDiv._hoverMobile').length > 0) {
            _removeClasses(document.querySelectorAll('._inputDiv._hoverMobile'), "_hoverMobile");
        }
    }
}