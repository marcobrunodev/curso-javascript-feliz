const root = document.querySelector('#root')
const textTitle = 'Dificuldade'

const title = Title`
    color: #82589F; 
    font-size: 2.5rem;
    letter-spacing: 1.2px;
    margin-bottom: 4rem;
    ${textTitle}
`

root.insertAdjacentHTML('beforeend', title)
root.insertAdjacentHTML('beforeend', wrapperCharacters)
root.insertAdjacentHTML('beforeend', slide)