export default {
    title : {
        name: `Arctic Monkeys`,
        href: "#",
    },
    songs: [
        {
            name:"Teddy Picker",
            href: "#"
        },
        {
            name:"505",
            href: "#"
        },
        {
            name:"Arabella",
            href: "#"
        },
        {
            name:"Brianstorm",
            href: "#"
        },
        {
            name:"Do I Wanna Know?",
            href: "#"
        },
        {
            name:"Do Me a Favour",
            href: "#"
        },
        {
            name:"Fluorescent Adolescent",
            href: "#"
        },
        {
            name:"Old Yellow Bricks",
            href: "#"
        },
        {
            name:"Snap Out of It" ,
            href: "#"
        },
    ],
    listTitle (){
        document.querySelector("#title").insertAdjacentHTML("beforeend",`<a class="blog-header-logo text-dark" href="${this.title.href}">${this.title.name}</a>`);
    },
    listarSongs(){
        let plantilla = "";
        this.songs.forEach((val,id)=>{
            plantilla += `<a class="p-2 link-secondary" href="#">${val.name}</a>`
        });
        document.querySelector("#songs").insertAdjacentHTML("beforeend", plantilla)
    },
}
