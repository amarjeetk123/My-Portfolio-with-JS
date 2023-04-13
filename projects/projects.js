const Projects = [
    {
        name : "Blog and Article Written Website",
        about : "It a live website where anybody from anywhere can write a blog or artice on any topic and later on can update and delete that article",
        img : "./images/ToggleTrack.png",
        gitrepo : "https://github.com/amarjeetk123/Blog-Website",
        // blog : "https://medium.com/@vdbhavani.648/agoda-clone-eb28c930815e",
        tech_stack : " React  | Nodejs | MongoDB | Express ",
        tech_stackicons : [
            `<img src="https://img.icons8.com/color/50/000000/react-native.png"/>`,
            `<img src="https://img.icons8.com/windows/48/000000/node-js.png"/>`,
            `<img src="https://img.icons8.com/color/48/000000/mongodb.png"/>`,
            `<img src="https://img.icons8.com/color/48/000000/express.png"/>`
        ],
        project_link : "https://amarjeet-writeme.vercel.app/",
        project_type : "Individual Project"
    },
    // {
    //     name : "Clone of CoSchedule.com",
    //     about : " CoSchedule is an all-in-one platform for planning, organizing, and executing all things content marketing. It's easy to use drag-and-drop calendar interface makes it easy to collaborate and schedule all your projects in one place.",
    //     img : "./images/CoSchedule.png",
    //     gitrepo : "https://github.com/Goluchandan/Coschedule-Clone",
    //     // blog : "https://medium.com/@vdbhavani.648/agoda-clone-eb28c930815e",
    //     tech_stack : "HTML | CSS | JAVASCRIPT | React | Redux | Nodejs",
    //     tech_stackicons : [
    //         `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
    //         `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
    //         `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
    //         `<img src="https://img.icons8.com/color/50/000000/react-native.png"/>`,
    //         `<img src="https://img.icons8.com/color/48/000000/redux.png"/>`,
    //         `<img src="https://img.icons8.com/windows/48/000000/node-js.png"/>`,
    //         `<img src="https://img.icons8.com/color/48/000000/mongodb.png"/>`,
    //         `<img src="https://img.icons8.com/color/48/000000/express.png"/>`
    //     ],
    //     project_link : "https://coschedule-web.netlify.app/",
    //     project_type : "Individual Project"
    // },
    // {
    //     name : "Clone of IdeaKart.com",
    //     about : " Ideakart is a site that gives u an idea about the book you want to buy. We offer a huge collection of books in diverse categories. And we even provide best discounts on our books. You can write to us for any idea or any help you need.",
    //     img : "./images/IdeaKart_React.png",
    //     gitrepo : "https://github.com/Goluchandan/Ideakart-clone",
    //     // blog : "https://medium.com/@vdbhavani.648/agoda-clone-eb28c930815e",
    //     tech_stack : "HTML | CSS | JAVASCRIPT | React | Redux | Nodejs",
    //     tech_stackicons : [
    //         `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
    //         `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
    //         `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
    //         `<img src="https://img.icons8.com/color/50/000000/react-native.png"/>`,
    //         `<img src="https://img.icons8.com/color/48/000000/redux.png"/>`,
    //         `<img src="https://img.icons8.com/windows/48/000000/node-js.png"/>`,
    //         // `<img src="https://img.icons8.com/color/48/000000/mongodb.png"/>`,
    //         // `<img src="https://img.icons8.com/color/48/000000/express.png"/>`
    //     ],
    //     project_link : "https://stupendous-cajeta-bbcb82.netlify.app/",
    //     project_type : "Individual Project"
    // },
    // {
    //     name : "Clone of Lybrate.com",
    //     about : "Lybrate is the best way to seek medical help. To make it seamless and smooth, we beat onerous challenges every day to ensure easy access to doctors for billion people, creating an experience that is truly magical for both healthcare experts and users.",
    //     img : "./images/Lybrate.png",
    //     gitrepo : "https://github.com/Goluchandan/lybrate",
    //     blog : "https://medium.com/@vdbhavani.648/specsmakers-clone-8e0434e3ed0e",
    //     tech_stack : "HTML | CSS | JAVASCRIPT | API | JSON-SERVER",
    //     tech_stackicons : [
    //     `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
    //     `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
    //     `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
    //     `<img src="https://img.icons8.com/nolan/64/api-settings.png" width="48px"/>`,
    //     `<img src="https://img.icons8.com/windows/48/000000/node-js.png"/>`
    //     ],
    //     project_link : "https://lybrate-clone.netlify.app/",
    //     project_type : "Individual Project"
    // }

 
]

let projects__container = document.getElementById("projects--container")

Projects.forEach(pro => {
    let main = document.createElement("div")
    main.setAttribute("class", "portfolio-item padd-15")
    main.innerHTML = `
    <div class="portfolio-item-inner shadow-dark">
    <div class = "portfolio_main_div">
    <div class="portfolio-img portImg">
      <img src=${pro.img} alt="">
    </div>
    <div>
    <div class="portfolio-img media">
      <h2 class="project-name"><b>${pro.name}</b></h2> <br/>
      <h4 class="project-about ">${pro.about}</h4>
      <a href=${pro.project_link} target="_blank" class="see-project">Live💻</a>
      <a href=${pro.gitrepo} target="_blank" class="github-repo">GitHub</a>
      </div>
      <br/>
      <h3 class="project-name techcen"><b>Tech Stack</b></h3>
      <span>${pro.tech_stackicons[0] ? pro.tech_stackicons[0] : '' }
      ${pro.tech_stackicons[1] ? pro.tech_stackicons[1] : ''}
      ${pro.tech_stackicons[2] ? pro.tech_stackicons[2] : ''}
      ${pro.tech_stackicons[3] ? pro.tech_stackicons[3] : ''}
      ${pro.tech_stackicons[4] ? pro.tech_stackicons[4] : ''}
      ${pro.tech_stackicons[5] ? pro.tech_stackicons[5] : ''}
      ${pro.tech_stackicons[6] ? pro.tech_stackicons[6] : ''}
      ${pro.tech_stackicons[7] ? pro.tech_stackicons[7] : ''}
      ${pro.tech_stackicons[8] ? pro.tech_stackicons[8] : ''}
      ${pro.tech_stackicons[9] ? pro.tech_stackicons[9] : ''}
      </span>
      
      </div>
      </div>
    </div>
  </div>
    `
    projects__container.append(main)

})