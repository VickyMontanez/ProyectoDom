export default{
    image : "../img/fd.jpg",
    info:{
        title : "Arctic Monkeys",
        paragraph: "Unless you've been living under a soundproof rock for the last two decades, you will have undoubtedly heard of the legendary Arctic Monkeys. Churning out hits such as 'I Bet You Look Good On The Dancefloor', 'When The Sun Goes Down' and 'R U Mine?', the band have achieved monumental world-wide fame with their ever-changing sound since they burst onto the music scene in 2005.",
        btn:{
        name:"Continue...",
        href: "https://planetradio.co.uk/absolute-radio/music/news/arctic-monkeys/"},
    },


    showWorkB(){
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
