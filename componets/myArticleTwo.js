import Config from "../storage/Config.js";

export default{

    showWorkArTwo(){
        Config.dataArTwo();
        Object.assign(this, JSON.parse(localStorage.getItem("myArticleTwo")));
        
        const ws = new Worker("storage/wsMyArticleTwo.js",{type:"module"});
        let id = [];
        let count= 0;
        ws.postMessage({module: "showArticle2", data: this.article});
        id=["#articulo2"]
  
        ws.addEventListener("message", (e)=>{
            let doc= new DOMParser().parseFromString(e.data,"text/html");
  
            document.querySelector(id[count]).append(...doc.body.children);
  
            (id.length-1==count)? ws.terminate(): count++})
    }
}