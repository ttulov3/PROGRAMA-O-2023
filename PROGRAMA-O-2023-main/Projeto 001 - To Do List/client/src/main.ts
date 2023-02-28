void function main(){
    const btAdd= document.querySelector("header .bt-add")
    const inpAdd= document.querySelector("header .inp-add")
    const main= <HTMLElement>document.querySelector("main")
    const template= document.querySelector("main .line-template") as HTMLTemplateElement
    
    
    if (!btAdd)
    return console.error("O elemento 'header .bt-add' não encontrado")
    
    if (!inpAdd)
    return console.error("O elemento 'header .inp-add' não encontrado")
    
    if (!(inpAdd instanceof HTMLInputElement))
    return console.error("O elemento 'header .inp-add' não encontrado")
    
    
    btAdd.addEventListener("click", () => { 
        if (inpAdd.value.trim() == "") return
        const line = template.content.cloneNode(true) as DocumentFragment
        
        const title = line.querySelector(".title") as HTMLElement
        title.innerText = inpAdd.value
        inpAdd.value = ""
        
        const container = line.querySelector("line-conteiner") as HTMLDivElement
        const btRm = line.querySelector(".bt-rm") as HTMLButtonElement
        btRm.addEventListener("click", () => container.remove())
        
        main.append(line)
})
}();



