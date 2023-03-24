export default{
    title:"Arctic Monkeys’ Alex Turner Tells How ‘The Car’ Brings Together Historic and Current Sounds of One of Rock’s Most Important Bands",
    date:"Octuber 21st, 2022",
    autor:{
        name:"Alex Swhear",
        href:"https://variety.com/2022/music/news/arctic-monkeys-alex-turner-the-car-new-album-interview-1235411208/",
    },
    paragraph:"For Arctic Monkeys, recording the album is just the beginning. The next step is its own undertaking, a daunting one for a band with an increasingly eclectic catalogue: finding a way to make the new songs coexist with the old. Arctic Monkeys are one of the few authentically huge rock bands in an era where the genre’s cultural dominance has continued to wane; even rarer, they are one of the few authentically huge bands to refuse to make the same album twice. Alex Turner, the band’s frontman, says that the Monkeys are encouraged by early reactions to the new material. “One thing that seems to happen on every record is that it’s not until you start playing these things in front of a bunch of people that they reveal what they really are,” Turner says over a Zoom call. “These new ones… they don’t just fit anywhere, but it feels like we can find a way through a set.”",

    img:"./img/5.jpg",

    showArticle3(){
        document.querySelector("#articulo3").insertAdjacentHTML("beforeend",`<h2 class="blog-post-title">${this.title}</h2>
        <p class="blog-post-meta">${this.date} by <a href="#${this.autor.href}">${this.autor.name}</a></p>
        <p>${this.paragraph}</p><br>
        <img src="${this.img}" style ="max-width: 100%;">`)
    }
}