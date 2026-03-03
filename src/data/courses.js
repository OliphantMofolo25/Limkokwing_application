export const faculties = [
  {
    id: 'f1',
    name: 'Faculty of Design Innovation',
    shortName: 'Design',
    icon: 'color-palette-outline',
    description: 'Unleash your creativity through cutting-edge design disciplines that blend art, technology and innovation.',
    courses: [
      {
        id: 'f1c1',
        name: 'Diploma in Creative Advertising',
        duration: '3 Years',
        level: 'Diploma',
        description: 'Explore the dynamic world of advertising and branding. Students master visual communication, campaign strategy, copywriting, and digital media to create impactful messages that resonate with audiences globally.',
        entryRequirements: 'Minimum 3 C grades and 2 D passes with at least a D in English. Portfolio submission required.',
        careerPaths: ['Art Director', 'Brand Strategist', 'Copywriter', 'Creative Director'],
        image:[
                  require('../../assets/courses/ad_1.jpg'),
                  require('../../assets/courses/ad_2.jpg'),
                  require('../../assets/courses/ad_3.jpg')
              ],
        video: require('../../assets/videos/Graphic Design.mp4')
      },
      {
        id: 'f1c2',
        name: 'Diploma in Graphic Design',
        duration: '3 Years',
        level: 'Diploma',
        description: 'Master the art of visual storytelling through typography, illustration, layout design and digital tools. Build a professional portfolio that opens doors in print, digital and motion design industries.',
        entryRequirements: 'Minimum 3 C grades and 2 D passes with at least a D in English. Portfolio submission required.',
        careerPaths: ['Graphic Designer', 'UI Designer', 'Brand Identity Designer', 'Motion Designer'],
        image:[
                  require('../../assets/courses/Graphic Design.png'),
                  require('../../assets/courses/Graphic Design_1.png'),
                  require('../../assets/courses/Graphic Design_2.png'),
                  require('../../assets/courses/Graphic Design_3.png')
              ],
        video: require('../../assets/videos/Graphic video.mp4')
      },
      {
        id: 'f1c3',
        name: 'Diploma in Fashion and Apparel Design',
        duration: '3 Years',
        level: 'Diploma',
        description: 'From concept sketches to runway-ready garments, this programme covers textile science, pattern-making, fashion illustration and trend forecasting for aspiring global fashion designers.',
        entryRequirements: 'Minimum 3 C grades and 2 D passes with at least a D in English. Portfolio required.',
        careerPaths: ['Fashion Designer', 'Textile Designer', 'Costume Designer', 'Fashion Buyer'],
       image:[
                  require('../../assets/courses/Fashion.jpg'),
              ],
        video: require('../../assets/videos/Fashion Design.mp4')
      },
      {
        id: 'f1c4',
        name: 'Diploma in Interior Design',
        duration: '3 Years',
        level: 'Diploma',
        description: 'Transform spaces into inspiring environments. Learn spatial planning, materials selection, lighting design and 3D visualisation for residential and commercial clients.',
        entryRequirements: 'Minimum 3 C grades and 2 D passes with at least a D in English. Portfolio required.',
        careerPaths: ['Interior Designer', 'Space Planner', 'Set Designer', 'Exhibition Designer'],
         image:[
                  require('../../assets/courses/Interior.jpg'),
              ],
        video: require('../../assets/videos/Interior Design.mp4')
      },
      {
        id: 'f1c5',
        name: 'Diploma in Product Design',
        duration: '3 Years',
        level: 'Diploma',
        description: 'Design products that change the world. Blend industrial design principles with UX research, prototyping and manufacturing processes to create innovative consumer products.',
        entryRequirements: 'Minimum 3 C grades and 2 D passes with at least a D in English. Portfolio required.',
        careerPaths: ['Product Designer', 'Industrial Designer', 'UX Researcher', 'Packaging Designer'],
        image:[
                  require('../../assets/courses/Product_1.jpg'),
                  require('../../assets/courses/Product_2.jpg')
              ],
        video: require('../../assets/videos/Product Design.mp4')
      },
    ],
  },
  {
    id: 'f2',
    name: 'Faculty of Communication, Media and Broadcasting',
    shortName: 'Media',
    icon: 'mic-outline',
    description: 'Shape the future of storytelling through media, journalism, broadcasting and communication.',
    courses: [
      {
        id: 'f2c1',
        name: 'Degree in Professional Communication',
        duration: '4 Years',
        level: 'Degree',
        description: 'Develop elite communication competencies across corporate, digital and interpersonal contexts. Gain expertise in public speaking, crisis communication and strategic messaging.',
        entryRequirements: 'Minimum 4 C grades and 2 D passes including a C in English Language or Literature.',
        careerPaths: ['Communications Manager', 'PR Specialist', 'Corporate Spokesperson', 'Consultant'],
         image:[
                  require('../../assets/courses/Communication.jpg'),
              ],
        video: require('../../assets/videos/Communication.mp4')
      },
      {
        id: 'f2c2',
        name: 'Degree in Broadcasting and Journalism',
        duration: '4 Years',
        level: 'Degree',
        description: 'Train in TV and radio presenting, investigative journalism, digital reporting and multimedia content production for modern newsrooms.',
        entryRequirements: 'Minimum 4 C grades and 2 D passes including a C in English Language or Literature.',
        careerPaths: ['News Anchor', 'Broadcast Journalist', 'Radio Host', 'Digital Creator'],
        image:[
                  require('../../assets/courses/Communication.jpg'),
              ],
        video: require('../../assets/videos/Professional Communication.mp4')
      },
      {
        id: 'f2c3',
        name: 'Diploma in TV and Film Production',
        duration: '3 Years',
        level: 'Diploma',
        description: 'Bring stories to life on screen. Master filmmaking from pre-production and screenwriting to directing, cinematography, editing and post-production visual effects.',
        entryRequirements: 'Minimum 3 C grades and 2 D passes including C in English. Drama is an added advantage.',
        careerPaths: ['Film Director', 'Cinematographer', 'Video Editor', 'Screenwriter'],
        image:[
                  require('../../assets/courses/Television.jpg'),
              ],
        video: require('../../assets/videos/TV and Film Production.mp4')
      },
      {
        id: 'f2c4',
        name: 'Diploma in Public Relations',
        duration: '3 Years',
        level: 'Diploma',
        description: 'Build and protect reputations in the digital age. Study media strategy, event management, crisis communication and social media management.',
        entryRequirements: 'Minimum 3 C grades and 2 D passes including a C in English Language or Literature.',
        careerPaths: ['PR Manager', 'Brand Ambassador', 'Event Coordinator', 'Social Media Manager'],
        image:[
                  require('../../assets/courses/Public.jpg'),
              ],
        video: require('../../assets/videos/Public Relations.mp4')
      },
      {
        id: 'f2c5',
        name: 'Diploma in Journalism and Media',
        duration: '3 Years',
        level: 'Diploma',
        description: 'Develop investigative instincts and storytelling skills covering print, digital and broadcast media across all platforms.',
        entryRequirements: 'Minimum 3 C grades and 2 D passes including a C in English Language or Literature.',
        careerPaths: ['Journalist', 'Feature Writer', 'Media Correspondent', 'Online Editor'],
        image:[
                  require('../../assets/courses/Public.jpg'),
              ],
        video: require('../../assets/videos/Journalism and Media.mp4')
      },
    ],
  },
  {
    id: 'f3',
    name: 'Faculty of Architecture and Built Environment',
    shortName: 'Architecture',
    icon: 'business-outline',
    description: 'Design the cities and spaces of tomorrow through innovative architecture, construction and planning.',
    courses: [
      {
        id: 'f3c1',
        name: 'Diploma in Architectural Technology',
        duration: '3 Years',
        level: 'Diploma',
        description: 'Bridge architectural design and construction. Master technical drawing, BIM, structural systems, materials science and project management for real-world construction projects.',
        entryRequirements: 'Minimum 3 C grades and 2 D passes with at least a D in Mathematics and English.',
        careerPaths: ['Architectural Technologist', 'Building Inspector', 'CAD Technician', 'Project Manager'],
        image:[
                  require('../../assets/courses/Architecture.jpg'),
              ],
        video: require('../../assets/videos/Architectural Technology.mp4')
      },
      {
        id: 'f3c2',
        name: 'Diploma in Construction Management',
        duration: '3 Years',
        level: 'Diploma',
        description: 'Lead construction projects from groundbreaking to completion. Covers quantity surveying, site management, health and safety, contract administration and sustainable building.',
        entryRequirements: 'Minimum 3 C grades and 2 D passes with at least a D in Mathematics and English.',
        careerPaths: ['Site Manager', 'Quantity Surveyor', 'Construction Manager', 'Property Developer'],
        image:[
                  require('../../assets/courses/construction.jpg'),
              ],
        video: require('../../assets/videos/Construction Management.mp4')
      },
      {
        id: 'f3c3',
        name: 'Diploma in Interior Architecture',
        duration: '3 Years',
        level: 'Diploma',
        description: 'Reimagine built spaces from the inside out. Explore architectural history, spatial aesthetics, sustainable design and advanced CAD visualisation.',
        entryRequirements: 'Minimum 3 C grades and 2 D passes with at least a D in Mathematics and English.',
        careerPaths: ['Interior Architect', 'Space Designer', 'Furniture Designer', 'Renovation Consultant'],
         image:[
                  require('../../assets/courses/Interior_1.jpg'),
              ],
        video: require('../../assets/videos/Interior Architecture.mp4')
      },
      {
        id: 'f3c4',
        name: 'Diploma in Urban Design and Planning',
        duration: '3 Years',
        level: 'Diploma',
        description: 'Shape the cities of the future. Study land use planning, community engagement, transportation design, green infrastructure and GIS mapping for sustainable urban environments.',
        entryRequirements: 'Minimum 3 C grades and 2 D passes with at least a D in Mathematics and English.',
        careerPaths: ['Urban Planner', 'Town Planner', 'GIS Analyst', 'Environmental Consultant'],
        image:[
                  require('../../assets/courses/urban_planning_and_design.jpg'),
              ],
        video: require('../../assets/videos/Planning.mp4')
      },
      {
        id: 'f3c5',
        name: 'Diploma in Quantity Surveying',
        duration: '3 Years',
        level: 'Diploma',
        description: 'Master financial management of construction projects. Covers cost estimation, procurement, contract law, financial reporting and risk assessment for the built environment.',
        entryRequirements: 'Minimum 3 C grades and 2 D passes with at least a D in Mathematics and English.',
        careerPaths: ['Quantity Surveyor', 'Cost Estimator', 'Procurement Manager', 'Contract Administrator'],
         image:[
                  require('../../assets/courses/Quantity Surveying.jpg'),
              ],
        video: require('../../assets/videos/Quantity Surveying.mp4')
      },
    ],
  },
  {
    id: 'f4',
    name: 'Faculty of Business and Globalization',
    shortName: 'Business',
    icon: 'briefcase-outline',
    description: 'Build business acumen to lead organisations, launch ventures and drive growth in a global economy.',
    courses: [
      {
        id: 'f4c1',
        name: 'Degree in International Business',
        duration: '4 Years',
        level: 'Degree',
        description: 'Navigate global commerce with confidence. Study international trade, cross-cultural management, global marketing, foreign exchange and international business law.',
        entryRequirements: 'Minimum 4 C grades with at least a C in commercial subjects and 2 D passes including Maths.',
        careerPaths: ['International Business Manager', 'Trade Analyst', 'Export Manager', 'Global Consultant'],
         image:[
                  require('../../assets/courses/International Business.jpg'),
              ],
        video: require('../../assets/videos/International Business.mp4')
      },
      {
        id: 'f4c2',
        name: 'Degree in Entrepreneurship',
        duration: '4 Years',
        level: 'Degree',
        description: 'Turn ideas into thriving businesses. Gain innovation methodologies, business modelling, venture financing and digital entrepreneurship skills to launch successful startups.',
        entryRequirements: 'Minimum 4 C grades with at least a C in commercial subjects and 2 D passes including Maths.',
        careerPaths: ['Entrepreneur', 'Startup Founder', 'Business Developer', 'Innovation Manager'],
        image:[
                  require('../../assets/courses/Entrepreneurship.jpeg'),
              ],
        video: require('../../assets/videos/Entrepreneurship.mp4')
      },
      {
        id: 'f4c3',
        name: 'Degree in Human Resource Management',
        duration: '4 Years',
        level: 'Degree',
        description: 'Learn recruitment strategy, talent development, labour law, organisational behaviour and HR analytics to build high-performing teams.',
        entryRequirements: 'Minimum 4 C grades with at least a C in commercial subjects and 2 D passes including Maths.',
        careerPaths: ['HR Manager', 'Talent Acquisition Specialist', 'Training Manager', 'Labour Relations Officer'],
        image:[
                  require('../../assets/courses/Human Resource Management.png'),
              ],
        video: require('../../assets/videos/human resource.mp4')
      },
      {
        id: 'f4c4',
        name: 'Diploma in Business Management',
        duration: '3 Years',
        level: 'Diploma',
        description: 'Solid foundation in business operations covering accounting, marketing, operations management, business communication and organisational strategy for immediate career impact.',
        entryRequirements: 'Minimum 3 C grades with at least a C in commercial subjects and 2 D passes including English and Maths.',
        careerPaths: ['Business Manager', 'Operations Supervisor', 'Office Manager', 'Business Analyst'],
         image:[
                  require('../../assets/courses/Business Management.jpg'),
              ],
        video: require('../../assets/videos/Business Management.mp4')
      },
      {
        id: 'f4c5',
        name: 'Diploma in Marketing',
        duration: '3 Years',
        level: 'Diploma',
        description: 'Study market research, digital marketing, consumer behaviour, brand management and data-driven campaign optimisation to connect brands with consumers.',
        entryRequirements: 'Minimum 3 C grades with at least a C in commercial subjects and 2 D passes including English and Maths.',
        careerPaths: ['Marketing Manager', 'Digital Marketer', 'Brand Manager', 'Market Research Analyst'],
         image:[
                  require('../../assets/courses/Marketing.jpg'),
              ], 
        video: require('../../assets/videos/market.mp4')
      },
    ],
  },
  {
    id: 'f5',
    name: 'Faculty of Information and Communication Technology',
    shortName: 'ICT',
    icon: 'laptop-outline',
    description: 'Power the digital future through software engineering, cybersecurity, multimedia and IT.',
    courses: [
      {
        id: 'f5c1',
        name: 'Degree in Software Engineering with Multimedia',
        duration: '4 Years',
        level: 'Degree',
        description: 'Master full-stack development, algorithms, database architecture, mobile app development, cloud computing and multimedia integration.',
        entryRequirements: 'Minimum 4 C grades and 2 D passes with a C grade or better in Mathematics.',
        careerPaths: ['Software Engineer', 'Full-Stack Developer', 'Mobile App Developer', 'Cloud Architect'],
        image:[
                  require('../../assets/courses/Software Engineering with Multimedia.jpg'),
              ],
        video: require('../../assets/videos/software.mp4')
      },
      {
        id: 'f5c2',
        name: 'Degree in Business Information Technology',
        duration: '4 Years',
        level: 'Degree',
        description: 'Bridge business and technology. Gain enterprise systems management, IT project management, business analytics, e-commerce solutions and digital transformation strategies.',
        entryRequirements: 'Minimum 4 C grades and 2 D passes with a C grade in Mathematics and commercial subjects.',
        careerPaths: ['Business Analyst', 'IT Project Manager', 'Systems Analyst', 'ERP Consultant'],
       image:[
                  require('../../assets/courses/Business Information Technology.jpg'),
              ],
        video: require('../../assets/videos/business_IT.mp4')
      },
      {
        id: 'f5c3',
        name: 'Degree in Information Technology',
        duration: '4 Years',
        level: 'Degree',
        description: 'Study networking, cybersecurity, systems administration, database management, web development and IT service management.',
        entryRequirements: 'Minimum 4 C grades and 2 D passes with a C grade or better in Mathematics.',
        careerPaths: ['IT Administrator', 'Network Engineer', 'Cybersecurity Analyst', 'Systems Administrator'],
        image:[
                  require('../../assets/courses/Information Technology.jpg'),
              ],
        video: require('../../assets/videos/Informantion_Tech.mp4')
      },
      {
        id: 'f5c4',
        name: 'Diploma in Multimedia and Software Engineering',
        duration: '3 Years',
        level: 'Diploma',
        description: 'Integrate 2D/3D animation, game development and interactive media design with software engineering principles to create immersive digital experiences.',
        entryRequirements: 'Minimum 3 C grades and 2 D passes with a C grade or better in Mathematics.',
        careerPaths: ['Game Developer', 'Multimedia Designer', 'Animator', 'Interactive Media Developer'],
        image:[
                  require('../../assets/courses/Multimedia and Software Engineering.jpg'),
              ],
        video: require('../../assets/videos/diploma in software.mp4')
      },
      {
        id: 'f5c5',
        name: 'Diploma in Cybersecurity',
        duration: '3 Years',
        level: 'Diploma',
        description: 'Learn ethical hacking, network security, cryptography, incident response and security operations to protect organisations against cyber threats.',
        entryRequirements: 'Minimum 3 C grades and 2 D passes with a C grade or better in Mathematics.',
        careerPaths: ['Cybersecurity Analyst', 'Ethical Hacker', 'Security Consultant', 'SOC Analyst'],
        image:[
                  require('../../assets/courses/Diploma in Cybersecurity.jpg'),
              ],
        video: require('../../assets/videos/Cybersecurity.mp4')
      },
    ],
  },
];
