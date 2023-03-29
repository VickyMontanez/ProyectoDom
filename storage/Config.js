export default{
    dataHeader(){
        localStorage.setItem("myHeader", JSON.stringify({
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
        ]
    }))

    },

    dataBanner(){
        localStorage.setItem("myBanner", JSON.stringify({
            image : "../img/fd.jpg",
            info:{
                title : "Arctic Monkeys",
                paragraph: "Unless you've been living under a soundproof rock for the last two decades, you will have undoubtedly heard of the legendary Arctic Monkeys. Churning out hits such as 'I Bet You Look Good On The Dancefloor', 'When The Sun Goes Down' and 'R U Mine?', the band have achieved monumental world-wide fame with their ever-changing sound since they burst onto the music scene in 2005.",
                btn:{
                name:"Continue...",
                href: "https://planetradio.co.uk/absolute-radio/music/news/arctic-monkeys/"},
            },
        }))
    },

    dataCards(){
        localStorage.setItem("myCards", JSON.stringify({
            post:[
                {
                    article:"Albums",
                    title:"AM",
                    year:"2013",
                    paragraph:"AM is the stunning fifth album from Sheffield's finest.",
                    Image:"./img/card1.jpg",
                    btn:{
                        name :"Buy",
                        href: "https://www.amazon.com/AM-Arctic-Monkeys/dp/B00DKY4LBW",
                    }
                },
                
                {
                    article:"Albums",
                    title:"The Car",
                    year:"2022",
                    paragraph:"Another solid album from one of the greatest modern bands",
                    Image:"./img/card2.jpg",
                    btn:{
                        name :"Buy",
                        href: "https://www.amazon.com/Car-Arctic-Monkeys/dp/B0BBH73H1X",
                    }
                },
        
                {
                    article:"Albums",
                    title:"Favourite Worst Nightmare",
                    year:"2009",
                    paragraph:"Arctic Monkeys have exceeded expectations with this record.",
                    Image:"./img/card3.webp",
                    btn:{
                        name :"Buy",
                        href: "https://www.amazon.com/-/en/Arctic-Monkeys/dp/B000PMFUP8",
                    }
                },
        
                {
                    article:"Albums",
                    title:"Tranquility Base Hotel & Casino",
                    year:"2018",
                    paragraph:"A brilliant work that finds new musical terrain.",
                    Image:"./img/card4.jpg",
                    btn:{
                        name :"Buy",
                        href: "https://www.amazon.com/-/en/Arctic-Monkeys/dp/B07CDZ6F9H",
                    }
                },
        
                {
                    article:"Albums",
                    title:"Whatever People Say I Am, That's What I'm Not",
                    year:"2006",
                    paragraph:"The debut Arctic Monkeys album.",
                    Image:"./img/card5.jpg",
                    btn:{
                        name :"Buy",
                        href: "https://www.amazon.com/Whatever-People-Say-Thats-What/dp/B000E116BM",
                    }
                },
        
                {
                    article:"Albums",
                    title:"Suck It & See",
                    year:"2011",
                    paragraph:"Fourth studio album from the British indie rock band.",
                    Image:"./img/card6.jpg",
                    btn:{
                        name :"Buy",
                        href: "https://www.amazon.com/-/es/Artic-Monkeys/dp/B004SGYJFE",
                    }
                },
            ]  
        }))
    },

    dataAside(){
        localStorage.setItem("myAside", JSON.stringify({
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
        
            ]
        }))
    },

    dataArOne(){
        localStorage.setItem("myArticleOne", JSON.stringify({
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
            ]
        }))
    },

    dataArTwo(){
        localStorage.setItem("myArticleTwo", JSON.stringify({
            article:[
                {
                    title:"Arctic Monkeys in Colombia: ticket office and presale",
                    date:"12th June 2022",
                    autor:{
                        name:"Anderson Labrador",
                        href:"https://canaltrece.com.co/noticias/arctic-monkeys-bogota-2022/"
                    },
                    paragraph:"November 17 will be the third and final opportunity to see the band, Arctic Monkeys in all their splendor in Colombia. In 2014 it was its premiere in Bogotá in a concert at the El Campín Coliseum, in 2019 they closed the Estéreo Picnic Festival with impetus and fervor and Now it will be at the Live Coliseum, which will open its doors for the first concert of Páramo Presents in this new venue for Colombia. The valuations of the prices for the entrances are:",
                    local:{
                        name:"Location",
                        l1:"Platea 1",
                        l2:"113 - 120",
                        l3:"107 - 112",
                        l4:"Platea 2",
                        l5:"103 - 106",
                        l6:"100 - 102",
                        l7:"121 - 122",
                    },
                    Prec:{
                        name:"Price",
                        p1:"$369.000 COP",
                        p2:"$319.000 COP",
                        p3:"$279.000 COP",
                        p4:"$229.000 COP",
                        p5:"$249.000 COP",
                        p6:"$199.000 COP",
                        p7:"$139.000 COP",
                    },
                    Serv:{
                        name:"Service",
                        s1:"$66.000 COP",
                        s2:"$57.000 COP",
                        s3:"$50.000 COP",
                        s4:"$41.000 COP",
                        s5:"$44.000 COP",
                        s6:"$36.000 COP",
                        s7:"$25.000 COP",   
                    },
                    img:"./img/concert2.webp",
                }
            ]
        }))
    },

    dataArThree(){
        localStorage.setItem("myArticleThree", JSON.stringify({
            article:[
                {
                    title:"Arctic Monkeys’ Alex Turner Tells How ‘The Car’ Brings Together Historic and Current Sounds of One of Rock’s Most Important Bands",
                    date:"Octuber 21st, 2022",
                    autor:{
                        name:"Alex Swhear",
                        href:"https://variety.com/2022/music/news/arctic-monkeys-alex-turner-the-car-new-album-interview-1235411208/",
                    },
                    paragraph:"For Arctic Monkeys, recording the album is just the beginning. The next step is its own undertaking, a daunting one for a band with an increasingly eclectic catalogue: finding a way to make the new songs coexist with the old. Arctic Monkeys are one of the few authentically huge rock bands in an era where the genre’s cultural dominance has continued to wane; even rarer, they are one of the few authentically huge bands to refuse to make the same album twice. Alex Turner, the band’s frontman, says that the Monkeys are encouraged by early reactions to the new material. “One thing that seems to happen on every record is that it’s not until you start playing these things in front of a bunch of people that they reveal what they really are,” Turner says over a Zoom call. “These new ones… they don’t just fit anywhere, but it feels like we can find a way through a set.”",
                
                    img:"./img/5.jpg",
                }
            ]            
        }))
    }
}