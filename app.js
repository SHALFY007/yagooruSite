const answearTop = document.querySelectorAll('.answear-top')

answearTop.forEach(answear => {
    answear.addEventListener('click', (e) => {
        const dropdown = e.currentTarget.parentNode.querySelector('.answear-down')
        const pluse = e.currentTarget.parentNode.querySelector('.pluse')
        const minus = e.currentTarget.parentNode.querySelector('.minus')

        pluse.classList.toggle('close')
        minus.classList.toggle('close')
        dropdown.classList.toggle('hide')
    })
})