export default
    {
        //(Please Do Not Remove The comma(,) after every variable)
        //Change The Website Template
        name :'',
        headerTagline: [//Line 1 For Header
                        'Bethany Webb',
                        //Line 2 For Header
                        'Full-Stack Web Developer ',
                        //Line 3 For Header
                        'Cleveland, Ohio'
    ],
        //Contact Email
        contactEmail:'Bywebb306@gmail.com',
        // Add Your About Text Here
        abouttext: "I am a full stack web developer who finds a thrill in troubleshooting. I have experience in Javascript and Node.js, but am open to learning any languages needed to further my career in development. My previous projects have used a combination of html, css, and javascript along with node.js, react, mysql, mongodb, and others. I am seeking a role as a web developer with a company that i can learn and grow with and where my passions for problem solving will be put to good use. ",
        aboutImage:'https://user-images.githubusercontent.com/60364470/94216072-704ac600-feac-11ea-8acc-00e2524f12b4.jpg',
       //Change This To Hide The Image of About Section (True Or False)
       ShowAboutImage:false,//true or false (Change Here)
       // Change Projects Here 
       projects:[
           {
            id: 1,//DO NOT CHANGE THIS (Please)😅
            title:'Chicken Tinder', //Project Title - Add Your Project Title Here
             service: 'React, React-Strap, MongoDB, Mongoose, Node.js, Express, JSX, CSS3, Axios, API', // Add Your Service Type Here
            //Project Image - Add Your Project Image Here
             imageSrc:"https://github.com/BethanyWebb/BethanyWebb.github.io/blob/master/assets/imgs/chickentinder.gif?raw=true",
             //Project URL - Add Your Project Url Here
             url:'https://github.com/BethanyWebb/Final'
            },
            {
                id: 2,//DO NOT CHANGE THIS (Please)😅
                title: 'Apply Abroad',
                service: 'JS, Passport, Bycrypt, MySQL, Sequelize, AJAX, JSON, HTML, CSS',
                imageSrc: "https://github.com/BethanyWebb/BethanyWebb.github.io/blob/master/assets/imgs/project2.gif?raw=true",
                url: 'https://github.com/BethanyWebb/project2'
            },
            { 
                id: 3,//DO NOT CHANGE THIS (Please)😅
                title: 'Recipe Generator',
                service: 'JS, AJAX, HTML, CSS',
                imageSrc: "https://github.com/BethanyWebb/BethanyWebb.github.io/blob/master/assets/imgs/project1.gif?raw=true",
                url: 'https://github.com/BethanyWebb/Project1'
            },
            {
                id: 4,//DO NOT CHANGE THIS (Please)😅
                title: 'Burger App',
                service: 'Express, Node.Js, MySQL, HTML, CSS',
                imageSrc: "https://raw.githubusercontent.com/BethanyWebb/BethanyWebb.github.io/master/assets/imgs/burger.gif",
                url: 'https://github.com/BethanyWebb/Homework13'
           }

                    /*

                    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
                ,{
                id: 5,
                title: 'Project Five',
                service: 'Something Amazing',
                imageSrc: "",
                url: ''
            }
                */
        ],
        social: [
            // Add Or Remove The Link Accordingly
            {   name:'Github',
                url:'https://github.com/BethanyWebb'},
            {
                name: 'Linkdin',
                url: 'https://www.linkedin.com/in/bywebb306/'
            },
            // {
            //     name: 'Dribbble',
            //     url: 'https://dribbble.com/chetanverma'
            // },
            // {
            //     name: 'Instagram',
            //     url: 'https://www.instagram.com/cv.uidesign/'
            // }

        ]
    }