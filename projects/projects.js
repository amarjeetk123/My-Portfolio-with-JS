const Projects = [
    {
        name : "Blog and Article Written Website",
        about : "It a live website where anybody from anywhere can write a blog or artice on any topic and later on can update and delete that article.",
        img : "images/blog.png",
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
    {
        name : "Clone of Rode.com",
        about : "This is a home page clone of Rode Headphones Website and it is fully responsive. Mostly I have used Tailwind CSS for making it responsive.",
        img : "./images/rode.png",
        gitrepo : "https://github.com/amarjeetk123/Rode.com-Clone-project-03-Tailwind-CSS",
        // blog : "https://medium.com/@vdbhavani.648/agoda-clone-eb28c930815e",
        tech_stack : "HTML | Tailwind CSS",
        tech_stackicons : [
            `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
            `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
            `<img src="https://img.icons8.com/color/50/000000/tailwindcss.png"/>`,
           
        ],
        project_link : "https://rode-headphones-home-page-clone.netlify.app/",
        project_type : "Individual Project"
    },
    
   
 
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