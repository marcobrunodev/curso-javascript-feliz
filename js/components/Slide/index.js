const states = [true, false, false]

function showItems(stateItems) {
    const item = (pos) => Item`
        .item {
            list-style: none;
            height: calc(var(--line-height) * 3);
            width: calc(var(--line-height) * 3);
            background-color: var(--happy-color);
            transition: transform 100ms linear;
            cursor: pointer;
        }
        ${`pos-${pos}`}
    `
    const itemActive = (pos) => Item`
        .item.active {
            transform: scale(1.6)
        }

        ${`active pos-${pos}`}
    `

    const items = stateItems.map((state, index) => {
        if (state) {
            return itemActive(index + 1)
        }
        return item(index + 1)
    })

    return items.join('')
}

function clearAction(action) {
    action.classList.remove('second')
    action.classList.remove('third')
}

function handleClick(event) {
    const { target } = event
    const allItems = document.querySelectorAll('.item')
    const action = document.querySelector('.action')

    allItems.forEach(item => item.classList.remove('active'))
    target.classList.add('active');

    clearAction(action)
    if (target.classList.contains('pos-2')) {
        action.classList.add('second')
    }

    if (target.classList.contains('pos-3')) {
        action.classList.add('third')
    }
}

function createStyle(css) {
    const head = document.querySelector('head')
    const style = `
        <style>
            ${css}
        </style>
    `

    head.insertAdjacentHTML('beforeend', style)
}

const Action = (css) => {
    createStyle(css)

    return (
        `<li class="action"></li>`
    )
}

const Item = (css, className) => {
    createStyle(css)

    return (`
        <li class="item ${className}" 
            onclick="handleClick(event)">
        </li>
    `)
}

const Slide = (css, content) => (
    `<ul style="${css}">${content}</ul>`
)

const action = Action`
    .action {
        list-style: none;
        background-color: var(--action-color);
        height: calc(var(--line-height) * 4);
        width: calc(var(--line-height) * 4);
        position: absolute;
        left: -5px;
        transition: transform 300ms linear;
    }

    .action.second {
        transform: translateX(293px) rotate(360deg);
    }

    .action.third {
        transform: translateX(585px) rotate(720deg);
    }
`

const slide = Slide`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 80%;
    height: var(--line-height);
    background-color: var(--happy-color);
    margin-top: auto;
    ${showItems(states) + action}
`