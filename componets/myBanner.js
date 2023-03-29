import Config from "../storage/Config.js";
export default{

    showWorkB(){
        Config.dataBanner();
        Object.assign(this, JSON.parse(localStorage.getItem("myBanner")));
        
        const ws = new Worker("storage/wsMyBanner.js", {type:"module"});
        let ind = [];
        let count = 0;
        ws.postMessage({module:"showImage", data: this.image});
        ws.postMessage({module:"showSectionBanner", data: this.info});
        ind=[".imgBanner","#banner"]
        ws.addEventListener("message", (e)=>{
            let doc = new DOMParser().parseFromString(e.data,"text/html");

            document.querySelector(ind[count]).append(...doc.body.children);

            (ind.length-1==count)? ws.terminate(): count++
        })
    },
}
