export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#recentprojects" },
  { name: "Work", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I design, optimize, and scale it for real-world applications. My passion lies in creating technology that works smarter, not harder.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/dp-pf.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm a global citizen focused on betterment of the world.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a therapy AI agent for people in love.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Industry-Specific Layoff Tracker",
    des: "Designed an automated data scraping pipeline that processed over 208,584 records from Reddit and 4chan, leveraging MongoDB for storage, Faktory workers for concurrency, and Flask APIs for real-time insights. Implemented toxicity detection with 98% accuracy, sentiment analysis using NLTK, and interactive visualizations with Matplotlib and Plotly. Enabled actionable insights into unemployment trends, achieving 30% efficiency gains through python data crawlers and historical data integration",
    img: "/ind.png",
    iconLists: ["/pyth.svg", "/flask.svg", "/mongo.svg"],
    link: "https://github.com/ron103/industry-specific-layoff-tracker",
  },
  {
    id: 2,
    title: "Clockin - A Time Tracking Tool",
    des: "Developed Clockin – a cross-platform time tracking solution for iOS and watchOS using SwiftUI and WatchKit. Engineered a robust clock-in/clock-out system with real-time visual analytics that tracks work time, break time, and earnings based on a configurable hourly rate (default $15/hr) and daily goal (6 hours). Leveraging an MVVM architecture with shared code across platforms.",
    img: "/clk.png",
    iconLists: ["/swift.svg", "/tail.svg", "/ts.svg"],
    link: "https://github.com/ron103/clockin",
  },
  {
    id: 3,
    title: "Detection of Tuberculosis using Transfer Learning",
    des: "Led a team to evaluate InceptionV3, EfficientNetB3, DenseNet201, and ResNet50 for TB detection via chest X-rays, achieving 90.95% accuracy on the TBX11K dataset, aiding 2.4M+ diagnoses nationwide.",
    img: "/tb.png",
    iconLists: ["/tf.svg", "/pyth.svg"],
    link: "https://github.com/ron103/Detection-of-Tuberculosis-using-Transfer-Learning/",
  },
  {
    id: 4,
    title: "Wallet-io",
    des: "Designed a TypeScript/React financial dashboard featuring 9+ Recharts/Material UI for Profit, Revenue, and Loss, indicating 4% growth and coded backend with Node.js, Express.js, and MongoDB, using machine learning to predict 12% growth.",
    img: "/wall.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/mongo.svg"],
    link: "https://wallet-io.vercel.app",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Backend Engineer Intern",
    position: "Flow - July 2024 to August 2024",
    desc: "Optimized Django backend applications by implementing efficient query handling and code refactoring, significantly reducing API response times. Designed a robust data pipeline to integrate Crunchbase, PitchBook, and LinkedIn feeds into PostgreSQL, ensuring data consistency through rigorous schema validation. Additionally, streamlined development workflows by applying object-oriented principles to refactor legacy code and deploying Docker-containerized applications, enhancing scalability and maintainability within a SCRUM environment.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Engineer (Part-Time)",
    position: "Binghamton Tech Collective - August 2024 to Present",
    desc: "Developed the official club website in React.js with real-time updates in Firebase, improving user engagement by 15% based on user surveys and increasing member interactions. Optimized a Node.js mock e-commerce platform by implementing caching strategies, reducing server response bottlenecks and enhancing load times. Increased accessibility by porting key web features into a Swift-based iOS app, ensuring seamless cross-platform availability. Additionally, contributed to Agile/SCRUM ceremonies and utilized GitHub for version control, ensuring on-time project milestones and efficient team collaboration.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Research Assitant",
    position: "Prof. Nancy Guo (Binghamton University) - Jan 2025 to Present",
    desc: "Developing deep learning models using CNNs and transfer learning for medical image analysis, optimizing medicine applications.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Research Assistant",
    position: "Dr. Rajesh Prasad (MIT ADT University) - Aug 2022 to May 2023",
    desc: "Performed and published a comparative study of detection of tuberculosis using machine learning and deep learning.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/ron103", // Replace with your actual GitHub link
  },
  {
    id: 2,
    img: "/inst.svg",
    link: "https://instagram.com/rohannwaghmare", // Replace with your actual Twitter link
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://linkedin.com/in/rohanwaghmare", // Replace with your actual LinkedIn link
  },
];
