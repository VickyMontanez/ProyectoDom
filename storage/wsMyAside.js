let wsMyAside= {
    showAside(p1){
        let plantilla = '';
        p1.forEach((val,id)=>{
            if(val.link){
               plantilla+=this.list(val);
            }else{
               plantilla+= this.cards(val);
            }  
        })
        return plantilla;
    },

    cards(val){
        return (`
        <div id="cardAside" class="p-4 mb-3 bg-light rounded">
            <h4 class="fst-italic">${val.title}</h4><br>
            <p class="mb-0">${val.paragraph}</p><br>
        </div>
        `)
    },

    list(val){
        return(`
        <div class="p-4" id="linkAside">
            <h4 class="fst-italic">${val.title}</h4><br>
            <ol class="list-unstyled mb-0">
            ${val.link.map((val,id)=>`<li><a href="${val.link}" target="_blank">${val.name}</a></li>`).join("")}
            </ol><br>
        </div>
        `)
    },
}

self.addEventListener("message",(e)=>{
    postMessage(wsMyAside[e.data.module](e.data.data));
})