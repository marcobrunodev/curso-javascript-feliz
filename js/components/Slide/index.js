const Item = (css, content) => (
    `<li style="${css}">${content}</li>`
)

const Slide = (css, content) => (
    `<ul style="${css}">${content}</ul>`
)

const item = Item`
    
`

const slideContent = 'Vai!!!'
const slide = Slide`
    width: 80%;
    height: 10px;
    background-color: #EAB543;
    margin-top: auto;
    ${slideContent}
`
