import Config from "../storage/Config.js"
export default {

    showWorkArOne(){
        Config.dataArOne();
        Object.assign(this,JSON.parse(localStorage.getItem("myArticleOne")));
        
        const ws = new Worker("storage/wsMyArticleOne.js",{type:"module"});
        let id = [];
        let count= 0;
        ws.postMessage({module: "showArticle", data: this.article});
        id=["#articulo"]

        ws.addEventListener("message", (e)=>{
            let doc= new DOMParser().parseFromString(e.data,"text/html");

            document.querySelector(id[count]).append(...doc.body.children);

            (id.length-1==count)? ws.terminate(): count++})
  }
}