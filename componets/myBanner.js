export default{
    image : "../img/fd.jpg",
    title : "Arctic Monkeys",
    paragraph: "Unless you've been living under a soundproof rock for the last two decades, you will have undoubtedly heard of the legendary Arctic Monkeys. Churning out hits such as 'I Bet You Look Good On The Dancefloor', 'When The Sun Goes Down' and 'R U Mine?', the band have achieved monumental world-wide fame with their ever-changing sound since they burst onto the music scene in 2005.",
    btn:{
        name:"Continue...",
        href: "https://planetradio.co.uk/absolute-radio/music/news/arctic-monkeys/"
    },
    showImage(){
        document.querySelector(".imgBanner").style.backgroundImage = `url(${this.image})`;
    },
    showSectionBanner(){
        document.querySelector("#banner").insertAdjacentHTML("beforeend", `<h1 class="display-4 fst-italic">${this.title}</h1>
        <p class="lead my-3">${this.paragraph}</p>
        <p class="lead mb-0"><a href="${this.btn.href}" target="_blank" class="text-white fw-bold">${this.btn.name}</a></p>`)
    }
}
