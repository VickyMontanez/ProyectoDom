export default{
    nav: [
        {
            title: "About - Arctic Monkeys",
            paragraph: "With their nervy and literate indie rock sound, Arctic Monkeys arrived with a blast in 2005. Assisted by rave reviews and online word of mouth (they were one of the first bands to benefit from social media), they quickly became a sensation in the United Kingdom, where they were seen as the heir apparent to the throne left vacant by Oasis and the Libertines. ",
        },

        {
            title: "Artist Awards",
            link:[
                {
                    name: "Best New Act",
                    link: "https://www.radiox.co.uk/",
                },

                {
                    name: "Best British Breakthrough Album",
                    link: "https://www.bbc.co.uk/radio1/news/brits2006/winners.shtml",
                },

                {
                    name: "Best New Band",
                    link: "https://www.nme.com/?s=awards",
                },

                {
                    name: "Best British Band",
                    link: "https://www.nme.com/?s=awards",
                },

                {
                    name: "Best New International Artist",
                    link: "http://news.bbc.co.uk/2/hi/entertainment/6567861.stm",
                },

                {
                    name: "People Choice",
                    link: "https://qawards.co.nz/portfolio-item-category/peoples-choice/",
                },

                {
                    name: "New Artist of the Year",
                    link: "https://www.brits.co.uk/",
                },

                {
                    name: "Best British Band",
                    link: "https://www.nme.com/?s=awards",
                },

                {
                    name: "Best Live Act",
                    link: "https://www2.bfi.org.uk/films-tv-people/4ce2b8c67f7b7",
                },

                {
                    name: "Best Act in the World Today",
                    link: "https://qawards.co.nz/portfolio-item-category/peoples-choice/",
                }
            ],
        },

        {
            title: "Award-Winning Releases",
            link:[
                {
                    name: "Whatever People Say I Am, That's What I'm Not",
                    link: "https://en.wikipedia.org/wiki/Whatever_People_Say_I_Am,_That%27s_What_I%27m_Not",
                },

                {
                    name: "I Bet You Look Good on the Dancefloor",
                    link: "https://en.wikipedia.org/wiki/I_Bet_You_Look_Good_on_the_Dancefloor",
                },

                {
                    name: "Scummy Man",
                    link: "https://en.wikipedia.org/wiki/Scummy_Man",
                },

                {
                    name: "Favourite Worst Nightmare",
                    link: "https://en.wikipedia.org/wiki/Favourite_Worst_Nightmare",
                },

                {
                    name: "Fluorescent Adolescent",
                    link: "https://en.wikipedia.org/wiki/Fluorescent_Adolescent",
                },

                {
                    name: "Teddy Picker",
                    link: "https://en.wikipedia.org/wiki/Teddy_Picker",
                }
            ],
        },

    ],

/*     showAside(){
        this.nav.forEach((val,id)=>{
            if(val.link){
                this.list(val);
            }else{
                this.cards(val);
            }
        })
    },

    cards(val){
        document.querySelector("#cardAside").insertAdjacentHTML("beforeend",`<h4 class="fst-italic">${val.title}</h4><br>
        <p class="mb-0">${val.paragraph}</p><br>`)
    },

    list(val){
        document.querySelector("#linkAside").insertAdjacentHTML("beforeend",`<h4 class="fst-italic">${val.title}</h4><br>
        <ol class="list-unstyled mb-0">
        ${val.link.map((val,id)=>`<li><a href="${val.link}" target="_blank">${val.name}</a></li>`).join("")}
        </ol><br>`)
    }, */

    showWorkerAside(){
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