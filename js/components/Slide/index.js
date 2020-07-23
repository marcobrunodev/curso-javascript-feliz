const states = [true, false, false]

function showItems(stateItems) {
    const item = Item`
        .item {
            list-style: none;
            height: calc(var(--line-height) * 3);
            width: calc(var(--line-height) * 3);
            background-color: var(--happy-color);
        }
    `
    const itemActive = Item`
        .item {
            list-style: none;
            height: calc(var(--line-height) * 3);
            width: calc(var(--line-height) * 3);
            background-color: var(--happy-color);
        }

        .item.active {
            transform: scale(1.6)
        }

        ${'active'}
    `

    const items = stateItems.map(state => {
        if (state) {
            return itemActive
        }
        return item
    })

    return items.join('')
}

function handleClick() {
    console.log('Show!!!')
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
        `<li class="action" style="${css}"></li>`
    )
}

const Item = (css, className) => {
    createStyle(css)

    return (`
        <li class="item ${className}" 
            style="${css}" 
            onclick="handleClick()">
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