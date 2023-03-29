import Config from "../storage/Config.js";
export default{

    showWorkC(){
        Config.dataCards();
        Object.assign(this, JSON.parse(localStorage.getItem("myCards")));

        const ws = new Worker("storage/wsMyCards.js",{type:"module"});
        let id = [];
        let count= 0;
        ws.postMessage({module: "showCard", data: this.post});
        id=["#card"]
        ws.addEventListener("message", (e)=>{
            let doc= new DOMParser().parseFromString(e.data,"text/html");

            document.querySelector(id[count]).append(...doc.body.children);

            (id.length-1==count)? ws.terminate(): count++})
    }
}


