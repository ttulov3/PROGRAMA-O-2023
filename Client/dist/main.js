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
        return console.error("O elemento 'header .inp-add' não é um HTMLInputElement");
    btAdd.addEventListener("click", () => {
        if (inpAdd.value.trim() == "")
            return;
        const clonado = template.content.cloneNode(true);
        const title = clonado.querySelector(".title");
        title.innerText = inpAdd.value;
        inpAdd.value = "";
        const container = clonado.querySelector(".line-container");
        const btrm = clonado.querySelector(".bt-rm");
        btrm.addEventListener("click", () => {
            container.remove();
        });
        const checkbox = clonado.querySelector("input[type=checkbox]");
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                container.classList.add("mudar");
                main.append(container);
            }
            else {
                container.classList.remove("mudar");
                main.prepend(container);
            }
        });
        main.append(clonado);
    });
}();
