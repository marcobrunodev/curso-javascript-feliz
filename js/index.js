const root = document.querySelector('#root')
const textTitle = 'Marcosdid'
const textSmall = 'Texto pequeno'
const otherText = 'Outro texto'

// Tagged Template String
const title = Title`
    color: red; font-size: 20px;
    ${textTitle}
`

root.insertAdjacentHTML('beforeend', title)