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
    listTitle (){
        document.querySelector("#title").insertAdjacentHTML("beforeend",`<a class="blog-header-logo text-dark" href="${this.title.href}">${this.title.name}</a>`);
    },
    listarSongs(){
        let plantilla = "";
        this.songs.forEach((val,id)=>{
            plantilla += `<a class="p-2 link-secondary" href="${val.href}" target="_blank">${val.name}</a>`
        });
        document.querySelector("#songs").insertAdjacentHTML("beforeend", plantilla)
    },
}
