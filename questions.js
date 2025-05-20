// Array of questins grouped by category (20 question)

const questions = [
    {
        category:"programming",
        questions: [
        {
            questions:"Which method is used to parse a JSON string in JavaScript?",
            options:["JSON.stringify()","JSON.parse()","JSON.decode()"," JSON.convert()"],
            correctAnswer:1,
        },
        {
            questions:"JS output:  console.log(2 + '2');",
            options:["22","4","Nan","Undefined"],
            correctAnswer: 0,
        },
        {
            questions:"Which of the following is used to declare a constant in JavaScript?",
            options:["var","let","const","final"],
            correctAnswer: 2,
        },
        {
            questions:" Which HTML tag is used to create a hyperlink?",
            options:["<a>","<link>","<href>","<url>"],
            correctAnswer: 0,
        },
        {
            questions:"What is the correct HTML element for inserting a line break?",
            options:["<break>","<lb>","<br>","<line>"],
            correctAnswer: 2,
        },
        {
            questions:" Which HTML tag is used to define an unordered list?",
            options:["<ul>","<ol>","<li>","<list>"],
            correctAnswer: 0,
        },
        {
            questions:"Which attribute is used to specify an alternate text for an image?",
            options:["alt","title","src","href"],
            correctAnswer: 0,
        },
        {
            questions:" Which property is used to change the background color in CSS?",
            options:["color","bg","bg-color","background-color"],
            correctAnswer: 3,
        },
        {
            questions:" How do you make text bold in CSS?",
            options:["font-weight: bold;","font-style: bold;","text-decoration: bold;","text-weight: bold;"],
            correctAnswer:0 ,
        },
        {
            questions:"Which CSS property is used to control the space between lines of text?",
            options:["letter-spacing","line-height","word-spacing","text-indent"],
            correctAnswer:1 ,
        },
        {
            questions:"What does the z-index property in CSS control?",
            options:["opacity","Position in the stacking order","Size of element","Rotation"],
            correctAnswer: 1,
        },
        {
            questions:"How can you make an element take the full width of its parent in CSS?",
            options:["width: 100%","width: auto","width: full","width: inherit"],
            correctAnswer:0 ,
        },
        {
            questions:"In JavaScript, which keyword is used to check for errors in a block of code?",
            options:["try","catch","throw","check"],
            correctAnswer: 0,
        },
        {
            questions:"Which HTML tag is used to embed a JavaScript file?",
            options:["<script>","<jsscript>","<js>","<code>"],
            correctAnswer: 0,
        },
        {
            questions:"What is the default position value of an HTML element in CSS?",
            options:["absolute","relative","static","fixed"],
            correctAnswer:2 ,
        },
        {
            questions:"Which JavaScript function is used to delay code execution?",
            options:["delay()","setTimeout()","wait()","pause()"],
            correctAnswer: 1,
        },
        {
            questions:"In CSS, how do you select an element with the class name example?",
            options:["#example",".example","example","class=example"],
            correctAnswer: 1,
        },
        {
            questions:"What is the result of Boolean(0) in JavaScript?",
            options:["true","false","undefined","NaN"],
            correctAnswer: 1,
        },
        {
            questions:" Which HTML element is used to define a table row?",
            options:["<tr>","<td>","<th>","<table-row>"],
            correctAnswer: 0,
        },
        {
            questions:"Which symbol is used for comments in JavaScript?",
            options:["<!-- -->","//","**","##"],
            correctAnswer:1, 
        },

        ]

    },

    {
        category:"Gaming",
        questions:[
            {
                questions:" Game of the Year award in 2024?",
                options:["Spider man2","Astro bot","Elden Ring","WW3"],
                correctAnswer: 1,
            },
            {
                questions:"Best Gaming Hardware award in 2024",
                options:["PC","XboX","Playstations","Nitendo"],
                correctAnswer: 0,
            },
            {
                questions:"Best Esports Player award in 2024?",
                options:["s1mple","Faker","TenZ","Mongraal"],
                correctAnswer: 1,
            },
            {
                questions:"Who is the main character of the God of War series?",
                options:["Zeus","Kratos","Thor","Ares"],
                correctAnswer:1 ,
            },
            {
                questions:"What realm does Kratos visit in God of War: Ragnarok?",
                options:["Asgard","Midgard","Vanheim","All of the Above"],
                correctAnswer: 3,
            },
            {
                questions:"Who is Atreus revealed to be in God of War: Ragnarok?",
                options:["Loki","Odin son","Heimdall","Ares"],
                correctAnswer: 0,
            },
            {
                questions:"What weapon does Kratos receive in addition to the Leviathan Axe in God of War (2018)?",
                options:["Blade of Chaos","Mjolnir","Bow of Apollo","Olympion sword"],
                correctAnswer:0 ,
            },
            {
                questions:"What year was the original God of War game released?",
                options:["2004","2005","2006","2007"],
                correctAnswer: 1,
            },
            {
                questions:"What type of game is God Hand?",
                options:["Action RPG","Beat em up","Shooter","Puzzle"],
                correctAnswer: 1,
            },
            {
                questions:"Which studio developed God Hand?",
                options:["Naughty Dog","Santa Monica","Capcom","Senix"],
                correctAnswer: 1,
            },
            {
                questions:"What is the name of the protagonist in God Hand?",
                options:["Gene","Chris","Leon","nathan"],
                correctAnswer: 0,
            },
            {
                questions:" What is the primary gameplay mechanic of God Hand?",
                options:["Time Manipulating","Stealth","Customizable Combo Attacks","Weapons"],
                correctAnswer: 2,
            },
            {
                questions:" On which platform was God Hand first released?",
                options:["Ps2","XboX","GAmecube","PC"],
                correctAnswer: 0,
            },
            {
                questions:"Who is the main protagonist of the Uncharted series",
                options:["Croft","N.Drake","J.Miller","A.morgan"],
                correctAnswer: 1,
            },
            {
                questions:"Who is Nathan Drake’s mentor in the series?",
                options:["C.Frazer","E.Fiser","V.Sullivan","S.Drake"],
                correctAnswer: 2,
            },
            {
                questions:"Who is the main protagonist of The Last of Us?",
                options:["Ellie","joel","Abby","Tess"],
                correctAnswer: 1,
            },
            {
                questions:"What is the primary infection in The Last of Us caused by?",
                options:["Bacteria","Fungi","Viruses","Radiation"],
                correctAnswer: 1,
            },
            {
                questions:"What city do Joel and Ellie start their journey in The Last of Us?",
                options:["Boston","Seattle","Austin","Lake city"],
                correctAnswer: 0,
            },
            {
                questions:" What year was The Last of Us originally released?",
                options:["2011","2012","2013","2014"],
                correctAnswer: 2,
            },
            {
                questions:"Gamer is born or made",
                options:["Born","Made","Inspire","All"],
                correctAnswer:3 ,
            },

        ]
    },

    {
        category:"GK",
        questions:[
            {
                questions:"What is the largest country in the world by area?",
                options:["USA","canada","China","Russia"],
                correctAnswer: 3,
            },
            {
                questions:"Which ocean is the largest in the world?",
                options:["Atlantic","Indian","pacific","Artic"],
                correctAnswer: 2,
            },
            {
                questions:"Which desert is the largest in the world?",
                options:["Gobi","Sahara","Atacama","Kalahari"],
                correctAnswer: 1,
            },
            {
                questions:"Who was the first man to step on the moon?",
                options:["Aldrin","Armstrong","Yuri","Glenn"],
                correctAnswer: 1,
            },
            {
                questions:"Which ancient civilization is known for building pyramids?",
                options:["Romans","Greeks","Egyptian","mayans"],
                correctAnswer: 2,
            },
            {
                questions:"What is the chemical symbol for water?",
                options:["o2","co2","H2o","H2so4"],
                correctAnswer: 2,
            },
            {
                questions:"Which planet is known as the Red Planet?",
                options:["Venus","Mars","Jupiter","earth"],
                correctAnswer:1 ,
            },
            {
                questions:"Who invented the telephone?",
                options:["A.graham bell","T.edison","Nikola","marconi"],
                correctAnswer:0 ,
            },
            {
                questions:"Which country will host the 2024 Summer Olympics?",
                options:["Japan","USA","France","Austraila"],
                correctAnswer: 2,
            },
            {
                questions:"Which organization won the Nobel Peace Prize in 2024?",
                options:["UNICEF","WHO","UNCHR","NihonHidanky"],
                correctAnswer: 3,
            },
            {
                questions:"What is the official currency of Japan?",
                options:["Yuan","Yen","Won","Rupee"],
                correctAnswer: 1,
            },
            {
                questions:"Which is the tallest mountain in the world?",
                options:["Everest","K2","Elbrus","Kilimanjiro"],
                correctAnswer: 0,
            },
            {
                questions:"Which river is the longest in the world?",
                options:["Amazon","Nile","Yangtze","Missisippi"],
                correctAnswer:1 ,
            },
            {
                questions:"Which city is known as the City of Love?",
                options:["Rome","Paris","Venice","Vience"],
                correctAnswer: 1,
            },
            {
                questions:"Who wrote the play Romeo and Juliet?",
                options:["C.Dickens","W.Shakespeare","M.Twain","J.K.R"],
                correctAnswer: 1,
            },
            {
                questions:"What is the smallest country in the world by area?",
                options:["Monaco","Vatican City","San marino","Inida"],
                correctAnswer:1 ,
            },
            {
                questions:"Which continent has the most countries?",
                options:["Asia","Africa","Eruope","SAmerica"],
                correctAnswer: 1,
            },
            {
                questions:"What is the capital of Australia?",
                options:["Sydney","Canberra","Melbourne","Brisbane"],
                correctAnswer: 1,
            },
            {
                questions:"Which river flows through Egypt?",
                options:["Amazon","Nile","Ganges","Danube"],
                correctAnswer: 1,
            },
            {
                questions:"Which river flows through Egypt?",
                options:["Japan","China","Korea","mangolia"],
                correctAnswer: 1,
            }

        ]



    },

    {
        category:"Movies",
        questions:[
            {
                questions:"What is Vijay's full name?",
                options:["Joseph Vijay Chandrasekhar","Vijay Kumar Chandrasekhar","Vijay Joseph Doss","Vijay Nathan Chandrasekhar"],
                correctAnswer: 0,
            },
            {
                questions:"Which was Vijay's debut movie as a lead actor?",
                options:["Poove Unakkaga","Naalaiya Theerpu","Kadhalukku Mariyadhai"," Thirumalai"],
                correctAnswer:1 ,
            },
            {
                questions:"Which Vijay movie is considered his first blockbuster hit?",
                options:["Ghilli"," Poove Unakkaga","Thuppakki","Kaththi"],
                correctAnswer: 1,
            },
            {
                questions:"Who directed the movie Mersal starring Vijay?",
                options:["Atlee","ARM","Shankar","Loki"],
                correctAnswer: 0,
            },
            {
                questions:"What is Vijay's popular nickname among fans?",
                options:["Superstar","Thalapathy","Captain"," Ulaga Nayagan"],
                correctAnswer: 1,
            },
            {
                questions:"What is Vijayakanth's political party called?",
                options:["DMK","AIADMK","DMDK","PMK"],
                correctAnswer: 2,
            },
            {
                questions:"Which Vijayakanth movie earned him the nickname Captain?",
                options:[" Captain Prabhakaran","Sethupathi IPS"," Chinna Gounder"," Ramana"],
                correctAnswer: 0,
            },
            {
                questions:"What was Vijayakanth’s debut movie?",
                options:["Neerottam","Sattam Oru Iruttarai","Ramana"," Sendhoorapandi"],
                correctAnswer: 0,
            },
            {
                questions:"What is Vijayakanth popularly called by his fans?",
                options:["Thalapathy"," Captain","Super Star"," Ilayathalapathy"],
                correctAnswer:1 ,
            },
            {
                questions:"Which Rajinikanth movie was directed by Mani Ratnam?",
                options:[" Thalapathi","Muthu"," Sivaji","Padayappa"],
                correctAnswer: 0,
            },
            {
                questions:"Which movie gave Rajinikanth the title Superstar?",
                options:["Baashha"," Mullum Malarum","Moondru Mugam"," Sivaji"],
                correctAnswer: 0,
            },
            {
                questions:"Which Kamal Haasan movie won an Oscar nomination?",
                options:["Thevar Magan","Indian","Nayakan","HEy Ram"],
                correctAnswer: 2,
            },
            {
                questions:"Which Kamal Haasan movie featured 10 roles by him?",
                options:["Indian","Dasavatharam","Avvai Shanmugi","Vishwaroopam"],
                correctAnswer: 1,
            },
            {
                questions:"Which Indian music composer won an Oscar for Slumdog Millionaire?",
                options:["IR","ARR","HJ","VJ"],
                correctAnswer: 1,
            },
            {
                questions:"Which Tamil movie won the National Film Award for Best Feature Film in 2021?",
                options:["Asuran","Sorari Potru","JaiBhim","Visarani"],
                correctAnswer: 1,
            },
            {
                questions:"Which Tamil composer was the first to win a National Award?",
                options:["MSV","I.raja","ARR","GR"],
                correctAnswer: 1,
            },
            {
                questions:"Which Indian director received an Honorary Oscar?",
                options:["S.Ray","M.Ratnam","KB","Shaym"],
                correctAnswer: 0,
            },
            {
                questions:"Who is the  female superstar of tamilnadu ?",
                options:["Nayanthara","Wikki Husband","Simbu EX","All of the above"],
                correctAnswer: 3,
            },
            {
                questions:"Which celebriity has most 100+ crore films ",
                options:["Thalpathy Vijay","Rajini","SRK","Allu arjun"],
                correctAnswer:0 ,
            },
            {
                questions:"All time fav Yt Vlogger of 2024 ?",
                options:["Irfan view","Cherry vlogger","VJ Siddhu vlogs","TTF"],
                correctAnswer: 2,
            },

        ]

    },

];