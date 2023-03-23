export default {
    article:[
        {
            title:"Arctic Monkeys: “We know more tricks now, but we’re still rolling on that same instinct”.",
            date:"21st October 2022",
            autor:{
                name:"Sophie Williams",
                href:"https://www.nme.com/big-reads/arctic-monkeys-cover-interview-2022-the-car-3332436"
            },
            paragraph:"After a glorious, but divisive, sonic shift, the Sheffield band double down with their lush new album ‘The Car’, proof that they’re ready to follow wherever the road takes them",
            content:"Crucially, the new album presents both a more cohesive and collaborative band than the one we heard on 2018’s divisive ‘Tranquility Base Hotel & Casino’. That record riffed on consumerism and technology with a burnished depth, but traded it’s wildly successful predecessor’s tsunami of bravado, riffs and hairgel for searching lounge-pop.",
            blockquote:"“We weren’t mentally ready to play stadiums up until now” – Alex Turner",
            reference:"By throwing themselves into new, more daring sounds, Arctic Monkeys have emerged fearless, Turner says decisively:",
            quote:" “Well, the fact we gave ourselves the name ‘Arctic Monkeys’ alludes to the extent of ambitions we had... Clearly hardly any.”",
            additiona:"‘The Car’’s daring centrepiece, ‘Body Paint’ flips the script entirely: you can practically hear Turner wink as he sings, “and if you’re thinking of me / I’m probably thinking of you”, before swirling atmospherics and O’Malley’s tumbling bass make way for a gale-force guitar solo from Cook. It’s the full-bodied sound of the Butley Priory trip, which was solely about having fun and bringing that feeling into the new record.",
            list:[
                {
                    title:"Beginnings of the band",
                    paragraph:"They built a fanbase on the basis of a few early demos shared by fans through MySpace, and before the four-piece signed with the independent Domino Records – also home to Wet Leg and Hot Chip – they’d already made a pact to never agree to their music being used in advertising. They even turned down a then-coveted offer to appear on Top Of The Pops. Weeks later, their monstrous debut album ‘Whatever People Say I Am, That's What I'm Not’ stormed to the top of the UK Singles Chart instantly, with songs like:",
                    exlist:[
                        {
                            name: "Dancing Shoes",
                        },
                        {
                            name: "I Bet You Look Good on the Dancefloor",
                        },
                        {
                            name: "Still Take You Home",
                        },
                        {
                            name: "A Certain Romance",
                        },
                    ],
                    deflist: ""
                }
            ]
        },
    ],

    showArticle(){
        this.article.forEach((val,id)=>{
            document.querySelector("#articulo").insertAdjacentHTML("beforeend",`<hr>
            <h2 class="blog-post-title">${val.title}</h2>
            <p class="blog-post-meta">${val.date} by <a href="${val.autor.href}" target="_blank">${val.autor.name}</a></p>
            <p>${val.paragraph}</p>
            <hr>
            <p>${val.content}</p>
            <h2>${val.blockquote}</h2>
            <p>${val.reference}</p>
            <blockquote class="blockquote">
              <p>${val.quote}</p>
            </blockquote>
            <p>${val.additiona}</p>`)
        })
    }
}