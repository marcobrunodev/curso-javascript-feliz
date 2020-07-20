const root = document.querySelector('#root')

function newElement(tag, content) {
    const title = `<${tag}>${content}</${tag}>`

    root.insertAdjacentHTML('beforeend', title)
}

newElement('h4', 'Eita!')
newElement('h1', 'A, vá')