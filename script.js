const inpt = document.querySelector('input')
const save = document.querySelector('#save')
const get = document.querySelector('#get')
const text_p = document.querySelector('p')

save.onclick = () => {
    save_cookie(inpt.value)
}   

get.onclick = () => {
    get_cookie()
} 

function save_cookie(text) {
    document.cookie = text
    console.log(document.cookie)
}

function get_cookie() {
    text_p.textContent = document.cookie
    console.log(document.cookie)
}