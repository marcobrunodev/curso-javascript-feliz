const Item = (css, content = '') => (
    `<li style="${css}">${content}</li>`
)

const Slide = (css, content) => (
    `<ul style="${css}">${content}</ul>`
)

const item = Item`
    list-style: none;
    height: calc(var(--line-height) * 3);
    width: calc(var(--line-height) * 3);
    background-color: var(--happy-color);
`

const slideContent = 'Vai!!!'
const slide = Slide`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: var(--line-height);
    background-color: var(--happy-color);
    margin-top: auto;
    ${item + item + item}
`
