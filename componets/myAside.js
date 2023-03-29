import Config from "../storage/Config.js";
export default{

    showWorkerAside(){
        Config.dataAside();
        Object.assign(this, JSON.parse(localStorage.getItem("myAside")))
        const ws = new Worker("storage/wsMyAside.js", {type:"module"});
        ws.postMessage({module:"showAside", data: this.nav});
        ws.addEventListener("message",(e)=>{
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            console.log(doc);
            document.querySelector("#navi").append(...doc.body.children);
            ws.terminate();
        } )
    }


}