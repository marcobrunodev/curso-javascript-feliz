function Title(css, textContent) {
    console.log(css)

    return `
        <h1 style="${css[0]}}">
            ${textContent} 
        </h1>`
}