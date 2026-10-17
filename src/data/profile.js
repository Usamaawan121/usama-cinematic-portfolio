export const profile = {
 name: 'Muhammad Usama', shortName: 'Usama', title: 'Full-Stack Software Engineer',
 email: 'executive.onyx@gmail.com', phone: '+92 317 1323146', phoneHref: '+923171323146',
 location: 'Karachi, Pakistan', github: 'https://github.com/Usamaawan121',
 linkedin: 'https://www.linkedin.com/in/muhammad-usama-20a885342',
 resume: '/documents/Muhammad_Usama_CV.pdf', coverLetter: '/documents/Muhammad_Usama_Cover_Letter.pdf',
 availability: 'Open to remote opportunities worldwide and on-site roles in Karachi.',
 bio: [
  'I’m Muhammad Usama, a full-stack software engineer in Karachi. I care about the connection between how a product feels and how it works.',
  'I work across React interfaces, Node.js and ASP.NET Core APIs, databases and authentication. My experience includes remote work with 5Sum Ltd. in London and building Tummly’s restaurant SaaS workflows.',
  'I’m currently extending that foundation through distributed video streaming and AI application projects. I value clear communication, careful debugging and understanding the business problem before writing the solution.'
 ],
 skills: ['React.js','Next.js','JavaScript (ES6+)','Angular.js','HTML5','CSS3','Tailwind CSS','Bootstrap','Vite','Node.js','Express.js','REST APIs','C# / ASP.NET Core','PHP','Laravel','MongoDB','SQL Server','MySQL','Flutter / Dart','JWT','bcrypt','OTP Verification','RBAC','Azure','Vercel','AI APIs'],
 tools: ['Git','GitHub','Postman','Docker','Docker Compose','MongoDB Compass','SSMS','npm','Nodemon','CLI','Agile / Scrum','Figma-to-Code','UI/UX Design','Adobe Photoshop','Adobe Illustrator','Canva','WordPress'],
 learning: ['Redis','Apache Kafka','FFmpeg / HLS','Prometheus','Grafana','Groq'],
 experience: [
  {company:'5Sum Ltd.',role:'Full-Stack Developer · Remote',period:'Mar — Jun 2026',location:'London, UK',description:'Worked with a London-based team on React interfaces, ASP.NET Core REST APIs, JWT authentication and role-based workflows. Supported testing, production fixes and deployment cycles.'},
  {company:'Tummly',role:'Full-Stack SaaS Engineering',period:'Client project',location:'UK restaurant SaaS',description:'Built restaurant onboarding, email verification, admin review and multi-location workflows with React, ASP.NET Core and SQL Server. Connected QR-driven guest feedback with operational dashboards.'},
  {company:'Systems & applied AI',role:'Self-directed development',period:'Current focus',location:'Karachi, Pakistan',description:'Building deeper hands-on experience with Docker, Kafka, Redis and FFmpeg through StreamScale, alongside a Groq-powered conversational application.'}
 ],
 education: ['Advanced Diploma in Software Engineering — Aptech Learning, Pakistan','Matriculation — Computer Science'],
 languages: ['English — Professional proficiency','Urdu — Native'],
 services: [
  {title:'Interfaces that feel right.',description:'Responsive React experiences, thoughtful interaction design and careful Figma-to-code implementation.',tags:'React / Next.js / JavaScript'},
  {title:'Systems that fit the business.',description:'Structured APIs, role-based access, onboarding workflows and relational or document database design.',tags:'Node.js / .NET / SQL / MongoDB'},
  {title:'Ideas worth exploring.',description:'AI integrations, streaming workflows and distributed-system experiments—with clear boundaries and honest progress.',tags:'Groq / Docker / Kafka / Redis'}
 ],
 process: [['Understand','Requirements and the underlying business problem.'],['Architect','Application structure, API design and database schema.'],['Build','Frontend, backend and third-party integrations.'],['Validate','Testing, debugging and edge-case handling.'],['Deploy','Cloud deployment and environment configuration.'],['Improve','Performance, maintainability and scalability.']]
};
export const socialLinks = [{label:'GitHub',href:profile.github},{label:'LinkedIn',href:profile.linkedin},{label:'Email',href:`mailto:${profile.email}`},{label:'Phone',href:`tel:${profile.phoneHref}`}];
