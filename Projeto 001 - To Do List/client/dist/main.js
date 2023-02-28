"use strict";
void function main() {
    const btAdd = document.querySelector("header .bt-add");
    const inpAdd = document.querySelector("header .inp-add");
    const main = document.querySelector("main");
    const template = document.querySelector("main .line-template");
    if (!btAdd)
        return console.error("O elemento 'header .bt-add' não encontrado");
    if (!inpAdd)
        return console.error("O elemento 'header .inp-add' não encontrado");
    if (!(inpAdd instanceof HTMLInputElement))
        return console.error("O elemento 'header .inp-add' não encontrado");
    btAdd.addEventListener("click", () => {
        if (inpAdd.value.trim() == "")
            return;
        const line = template.content.cloneNode(true);
        main.append(line);
    });
}();
