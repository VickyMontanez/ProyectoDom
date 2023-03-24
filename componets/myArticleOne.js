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
            blockquote:"“We weren’t mentally ready to play stadiums up until now”",
            reference:"By throwing themselves into new, more daring sounds, Arctic Monkeys have emerged fearless, Turner says decisively:",
            quote:" “Well, the fact we gave ourselves the name ‘Arctic Monkeys’ alludes to the extent of ambitions we had... Clearly hardly any.”",
            additiona:"‘The Car’’s daring centrepiece, ‘Body Paint’ flips the script entirely: you can practically hear Turner wink as he sings, “and if you’re thinking of me / I’m probably thinking of you”, before swirling atmospherics and O’Malley’s tumbling bass make way for a gale-force guitar solo from Cook. It’s the full-bodied sound of the Butley Priory trip, which was solely about having fun and bringing that feeling into the new record.",
            title2:"Beginnings of the band",
            paragraph2:"They built a fanbase on the basis of a few early demos shared by fans through MySpace, and before the four-piece signed with the independent Domino Records – also home to Wet Leg and Hot Chip – they’d already made a pact to never agree to their music being used in advertising. They even turned down a then-coveted offer to appear on Top Of The Pops. Weeks later, their monstrous debut album ‘Whatever People Say I Am, That's What I'm Not’ stormed to the top of the UK Singles Chart instantly, with songs like:",
            list1: "Dancing Shoes",
            list2: "I Bet You Look Good on the Dancefloor",
            list3: "Still Take You Home",
            list4 : "A Certain Romance",
            reference2:"And win awards like:",
            list6 :"NME Award for Best Album",
            list7 :"Mercury award",
            list8 : "Brit Award for Best British Album",
            title3:"Next Albums",
            paragraph3:"English rock band Arctic Monkeys have released seven studio albums, five extended plays, two video albums, 24 music videos and 23 singles. ",
            album1:"'Favourite Worst Nightmare' (2007)",
            album2:"'Humbug' (2009)",
            album3:"'Suck It And See' (2011)",
            album4:"'AM' (2013)",
            album5:"'Tranquility Base Hotel + Casino' (2018)",
            album6:"'The Car' (2022)",
            title4:"“I’m pretty happy with how ‘Tranquility Base..’ went down”",
            paragraph4: "As Turner speaks, it’s easy to picture the studio and imagine the Monkeys, once again, as teenagers in a garage: Turner the leader, Helders and O’Malley the jokers, and Cook the near-silent but cunning sage.",
            title5:"“I don’t think much has changed within the band since the start”",
            paragraph5:"Arctic Monkeys’ recent live performances have also seen them bring out rarities from their back catalogue, including a moodier rendition of ‘Humbug’ standout ‘Potion Approaching’, and ‘That’s Where You’re Wrong’, a fuzzed-out singalong from the unfairly overlooked ‘Suck It And See’ era.",
            img1:"./img/1.png",
            img2:"./img/2.webp",
            img3:"./img/3.jpeg",
            img4:"./img/4.jpg",
        },
    ],

    showArticle(){
        this.article.forEach((val,id)=>{
            document.querySelector("#articulo").insertAdjacentHTML("beforeend",`
            <h2 class="blog-post-title">${val.title}</h2>
            <p class="blog-post-meta">${val.date} by <a href="${val.autor.href}" target="_blank">${val.autor.name}</a></p>
            <p>${val.paragraph}</p>
            <hr>
            <p>${val.content}</p>
            <img src="${val.img1}" style ="max-width: 100%;"><br>
            <h2>${val.blockquote}</h2>
            <p>${val.reference}</p>
            <blockquote class="blockquote">
              <p>${val.quote}</p>
            </blockquote>
            <p>${val.additiona}</p>
            <img src="${val.img2}" style ="max-width: 100%;"><br><br>
            <h3>${val.title2}</h3>
            <p>${val.paragraph2}</p>
          <ul>
            <li>${val.list1}</li>
            <li>${val.list2}</li>
            <li>${val.list3} </li>
          </ul>
          <p>${val.reference2}</p>
          <ol>
            <li>${val.list6}</li>
            <li>${val.list7}</li>
            <li>${val.list8}</li>
          </ol>
          <dl>
            <dt>${val.list6}</dt>
            <dd>2006</dd>
            <dt>${val.list7}</dt>
            <dd>2007</dd>
            <dt>${val.list8}</dt>
            <dd>2007/2008</dd>
          </dl>
          <img src="${val.img3}" style ="max-width: 100%;"><br>
          <h2>${val.title3}</h2>
          <p>${val.paragraph3}</p>
          <ul>
            <li>${val.album1}</li>
            <li>${val.album2}</li>
            <li>${val.album3}</li>
            <li>${val.album4}</li>
            <li>${val.album5}</li>
            <li>${val.album6}</li>
          </ul>
          <h2>${val.title4}</h2>
          <p>${val.paragraph4}</p>
          <img src="${val.img4}" style ="max-width: 100%;">
          <h3>${val.title5}</h3>
          <p>${val.paragraph5}</p>
        </article>`)
        })
    }
}