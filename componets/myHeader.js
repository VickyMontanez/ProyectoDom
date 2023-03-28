export default {
    title : {
        name: `Arctic Monkeys`,
        href: "#",
    },
    songs: [
        {
            name:"Teddy Picker",
            href: "https://youtu.be/2A2XBoxtcUA"
        },
        {
            name:"505",
            href: "https://youtu.be/bhk-yqnGlpM"
        },
        {
            name:"Arabella",
            href: "https://youtu.be/Nj8r3qmOoZ8"
        },
        {
            name:"Brianstorm",
            href: "https://youtu.be/30w8DyEJ__0"
        },
        {
            name:"Do I Wanna Know?",
            href: "https://youtu.be/bpOSxM0rNPM"
        },
        {
            name:"Do Me a Favour",
            href: "https://youtu.be/MaFEHf34fCQ"
        },
        {
            name:"Fluorescent Adolescent",
            href: "https://youtu.be/ma9I9VBKPiw"
        },
        {
            name:"Old Yellow Bricks",
            href: "https://youtu.be/NgLWF2XJyKA"
        },
        {
            name:"Snap Out of It" ,
            href: "https://youtu.be/H8tLS_NOWLs"
        },
    ],

    showWork(){
        const ws = new Worker("storage/wsMyHeader.js",{type:"module"});
        let id = [];
        let count= 0;
        ws.postMessage({module: "listTitle", data: this.title});
        ws.postMessage({module: "listarSongs", data: this.songs});
        id=["#title","#songs"]
        ws.addEventListener("message", (e)=>{
            let doc= new DOMParser().parseFromString(e.data,"text/html");

            document.querySelector(id[count]).append(...doc.body.children);

            (id.length-1==count)? ws.terminate(): count++
        })
    },
}
