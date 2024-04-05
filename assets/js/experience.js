AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
   {
    title: "Electric/Hybrid-Electric Product Development Engineering ",
    cardImage: "assets/images/experience-page/22_FRD_F15_LIGHTNING_56319.tif.jpeg",
    place: "Ford Motor Co.",
    time: "(May - Aug, 2024)",
     desp: "<li>Assist VHE team in producing mechanical systems.</li><li>Connect physical and logical architecture using SysML (Magic Draw).</li><li>Work with a cross-disciplinary team to handle challenges in problem definition and communication effectively.</li><li>Identify opportunities for improvement in MBFMA tools and processes.</li><li>Make suggestions to the team and management for enhancements.</li><li>Adapt to the new 3DX environment.</li><li>Utilize or test new FMA software as needed.</li>",
  },
  {
    title: "Manufacturing Engineering Co-Op",
    cardImage: "assets/images/experience-page/RAT.jpeg",
    place: "Collins Aero.(Raytheon)",
    time: "(Jan - Aug, 2023)",
     desp: "<li>Improved Ram Air Turbine Mfg processes.</li><li>Implemented shadowboards in nearly 15% of plant assembly areas/75% of test areas.</li><li>Overhauled wind tunnel gantry mounting processes to protect Airbus A320 ram air turbines from damage due to FOD and impact</li>",
  },
  {
    title: "Production Team",
    cardImage: "assets/images/experience-page/108dd1_712dcf02a6584b7783bf273ae2fd14b1~mv2.png",
    place: "Bemis Manufacturing",
    time: "(Jun - Aug, 22)",
    desp: "<li>Fulfilled roles regarding the manufacture of Bemis' products while studying processes such as injection molding and shearing.</li>",
  },
  {
    title: "Assembly Team",
    cardImage: "assets/images/experience-page/352530575_585479516906219_3990836165438009731_n.png",
    place: "Visa Lighting",
    time: "(May - Dec, 21)",
    desp: "<li>Ensured quality assembly of light fixtures for high end residential and commercial spaces.</li>",
  },
  {
    title: "Manufacturing Engineering Co-OP",
    cardImage: "assets/images/experience-page/Unknown.jpeg",
    place: "American Orthodontics",
    time: "(Jan - May, 2020)",
    desp: "<li>Collaborated in production and distribution of orthodontic devices to customers in over 110 different countries.</li><li>Learned how to conduct root cause analysis and enforce corrective actions to improve product quality and reduce defects to ideally, 3.4 errors per one million opportunities.</li>",
  },
  {
    title: "Airport Ground Crew",
    cardImage: "assets/images/experience-page/IMG_1774.jpeg",
    place: "West Bend Municipal Airport",
    time: "(Aug, 19 - Sep, 21)",
    desp: "<li>Marshalled and fueled transient aircraft while ensuring high attention to detail and precision.</li><li>Conducted superficial maintenance on a fleet of 5 training aircraft.</li>",
  },
   
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};


document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "M.A and Lila Self Leadership Academy(Present)",
    cardImage: "assets/images/SIMPLE_outline_clear.jpg",
    description:
      "'The M. A. and Lila Self Leadership Academy Full-Ride Scholarship is awarded to individuals who exude extraordinary leadership potential.'",
  },
  {
    title: "Private Pilot Training",
    cardImage: "assets/images/IMG_0625.jpeg",
    description:
      "I'm a Private Pilot-I'm constantly honing my skills, and striving to achieve a higher order of precision and hone my decision making skills.",
  },
   {
    title: "IIT Motorsports",
    cardImage: "assets/images/SAE_International_logo.svg.png",
    description:
      "As I return to campus I'm getting active with IIT motorsports - a cross-disciplinary team where students can convert knowledge into practical experience via the design of a race car.",
  },
    {
    title: "IIT Student Government",
    cardImage: "assets/images/experience-page/download.jpg",
    description:
      "I'm a Senator for the IIT Student Government Association.  It's my goal to ensure the needs of all +8,000 students are met, and IIT becomes a driving force in global change.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Empowerment, Leadership, Mentorship Program",
    subtitle: "Mentor",
    image: "assets/images/elm_icon_mentorship-01.jpg",
    desp: "I would be responsible for utilizing a battery of tools acquired in my academic and professional journey to mentor members of the IIT community and motivate them as they reach toward new goals.",
    href: "https://www.iit.edu/elm",
  },
  {
    title: "Just Roots",
    subtitle: "Cultivator",
    image: "assets/images/IMG_1111.jpeg",
    desp: "Just Roots is an urban farm focused on developing methods to provide fresh and healthy produce to the local Bronzeville community.",
    href: "https://justrootschicago.org",
  },
  {
    title: "EAA Kidventure",
    subtitle: "Volunteer",
    image: "assets/images/KtuvE6gA-1024x682.jpeg",
    desp: "Kidventure is a workshop event within the broader EAA Airventure umbrella, where children interact with aviation in new and inspirational ways.",
    href: "https://www.eaa.org/airventure/features-and-attractions/kidventure",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
