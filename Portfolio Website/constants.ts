import { Project, Skill, ContactLink } from './types';

// --- PERSONALIZATION ---
// Replace these with your actual details.
export const YOUR_NAME = "Snehil"; 
export const YOUR_HEADLINE = "Android App Developer | Passionate Developer | Creative Thinker | Problem Solver";
export const YOUR_BIO = `Hello! I'm ${YOUR_NAME}, an Android App Developer based in [Your Location]. I graduated from Bharati Vidyapeeth College of Engineering Deemed University, Pune, and I specialize in building dynamic and user-friendly mobile applications. I'm passionate about creating intuitive experiences and continuously learning new technologies. In my free time, I enjoy Guitar and Singing and Cooking.`;
export const YOUR_EMAIL = "snehil09087@gmail.com"; 

// Path relative to index.html for your profile picture
export const YOUR_PROFILE_PICTURE_URL = "src/assets/snehil-profile.jpg"; 


// --- NAVIGATION ---
export const NAV_LINKS = [
  { id: 'about', title: 'About', href: '#about' },
  { id: 'skills', title: 'Skills', href: '#skills' },
  { id: 'projects', title: 'Projects', href: '#projects' },
  { id: 'contact', title: 'Contact', href: '#contact' },
];

// --- PROJECTS ---
// Add your projects here.
export const PROJECTS_DATA: Project[] = [
  {
    id: 'project-quickbuy',
    title: 'QuickBuy - Android Shopping App',
    description: `🛍️ Android Shopping App with Jetpack Compose & Firebase.\n\nThis is a modern, feature-rich e-commerce application for Android, built with the latest technologies to demonstrate a complete development lifecycle from user authentication to payment processing. It's a perfect showcase of clean architecture and modern UI development.\n\n✨ Key Features:\n- Sleek User Interface: Built entirely with Jetpack Compose for a dynamic, declarative, and responsive UI. Includes a smooth splash screen and intuitive navigation.\n- Firebase Integration: Utilizes Firebase for authentication (Email/Password, Google Sign-In), Firestore for real-time database, and Firebase Storage for product images.\n- MVVM Architecture: Follows MVVM (Model-View-ViewModel) for a clean, scalable, and testable codebase.\n- Feature Rich: Includes product listings, search, cart management, order history, and user profiles.`,
    imageUrl: undefined, // Ensuring imageUrl is explicitly undefined or omitted
    tags: ['Kotlin', 'Jetpack Compose', 'Firebase Auth', 'Firestore', 'MVVM', 'Retrofit', 'Android SDK'],
    liveUrl: 'https://drive.google.com/drive/folders/1Ty3Itj-l4Oq_MXkY-Cunl6g25dRC__0O',
    sourceUrl: 'https://github.com/Snehil208001/QuickBuy', 
  },
  { 
    id: 'project-CollegeApp-Admin-User',
    title: 'CollegeApp-Admin-User', 
    description: `CollegeApp: A Comprehensive College Management Android App\n\nCollegeApp is a modern Android application built with Kotlin and Jetpack Compose to streamline communication and administration within a college ecosystem. The app provides two distinct experiences: a powerful Admin Panel for staff and a user-friendly interface for students, all powered by a robust Firebase backend.\n\nKey Features\n🔐 Admin Panel\nThe admin interface offers full control over the app's content, enabling staff to:\n\n- Manage Banners: Upload and delete promotional images for the home screen.\n- Broadcast Notices: Instantly share updates, news, and circulars with images and links.\n- Organize Gallery: Curate image galleries for events, campus life, and facilities.\n- Update Faculty Directory: Add and manage faculty profiles, categorized by department.\n- Edit College Information: Keep essential details like address, contact, and description current.\n\n👨‍🎓 User Panel\nThe user-facing side of the app provides students with easy access to important information:\n\n- Dynamic Home Screen: View scrolling banners, quick-access college info, and the latest notices.\n- Faculty Directory: Easily find and view profiles of faculty members.\n- Image Gallery: Explore categorized photo galleries of college events and infrastructure.\n- Detailed About Us: Access comprehensive information about the college.\n- Quick Navigation: A navigation drawer provides one-tap access to the college website, notices, and contact details.\n\nTechnologies & Tools Used 🛠️\n- Core: Kotlin\n- UI: Jetpack Compose\n- Backend & Database: Firebase (Firestore, Storage)\n- Image Loading: Coil\n- Navigation: Jetpack Navigation for Compose\n- UI Components: Accompanist Pager for the banner slider\n- Build System: Gradle Kotlin DSL\n\nThis project demonstrates a strong understanding of modern Android development practices, including MVVM architecture, clean UI/UX design, and seamless backend integration. It serves as a practical solution for educational institutions looking to modernize their administrative processes and enhance student engagement.`,
    imageUrl: undefined,
    tags: ['Kotlin', 'Jetpack Compose', 'Firebase Auth', 'Firestore', 'MVVM', 'Coil', 'Android SDK'], 
    liveUrl: 'https://drive.google.com/drive/u/1/folders/140a2_bBSuqccb8sLNzdF8l_deb1Tzxh1', 
    sourceUrl: 'https://github.com/Snehil208001/CollegeApp-Admin-User-?tab=readme-ov-file', 
  },
  {
    id: 'project-portfolio',
    title: 'Personal Portfolio Website',
    description: `📄 My personal portfolio website (this one!).\n\nBuilt with React and Tailwind CSS to showcase my skills, projects, and provide a way to get in touch. It's designed to be responsive and easily updatable.\n\nKey Aspects:\n- Component-Based: Developed using React for a modular and maintainable structure.\n- Styled with Tailwind: Utilizes Tailwind CSS for rapid UI development and a clean, modern aesthetic.\n- Dynamic Content: Data like project details and skills are managed in a central constants file for easy updates.`,
    imageUrl: undefined,
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'HTML'], 
    sourceUrl: '#', 
  },
  // Add more projects here
];

// --- SKILLS ---
// Add your skills here.
export const SKILLS_DATA: Skill[] = [
  // Languages
  { id: 'kotlin', name: 'Kotlin', level: 90, category: 'Languages' },
  { id: 'java', name: 'Java', level: 75, category: 'Languages' },
  { id: 'python', name: 'Python', level: 60, category: 'Languages' },
  
  // Frontend (Android Specific)
  { id: 'jetpack-compose', name: 'Jetpack Compose', level: 90, category: 'Frontend' },
  { id: 'android-xml', name: 'Android XML Layouts', level: 80, category: 'Frontend' },
  { id: 'android-sdk', name: 'Android SDK', level: 85, category: 'Frontend' },
  
  // Backend & APIs
  { id: 'firebase', name: 'Firebase (Auth, Firestore, Storage)', level: 85, category: 'Backend' },
  { id: 'retrofit', name: 'Retrofit', level: 80, category: 'Backend' },
  { id: 'ktor-client', name: 'Ktor (Client)', level: 70, category: 'Backend' },
  { id: 'rest-apis', name: 'REST APIs / API Calling', level: 85, category: 'Backend' },
  
  // Tools
  { id: 'android-studio', name: 'Android Studio', level: 90, category: 'Tools' },
  { id: 'git', name: 'Git & GitHub', level: 85, category: 'Tools' },
  
  // Other
  { id: 'mvvm', name: 'MVVM Architecture', level: 90, category: 'Other' },
  { id: 'clean-arch', name: 'Clean Architecture', level: 80, category: 'Other' },
  { id: 'agile', name: 'Agile Methodologies', level: 75, category: 'Other' },
];


// --- CONTACT & SOCIAL LINKS ---
// Add your contact links here.
export const CONTACT_LINKS_DATA: ContactLink[] = [
  { 
    id: 'email', 
    name: 'Email', 
    url: `mailto:${YOUR_EMAIL}`, 
    // icon: <MailIconComponent /> // Example: you'd use an actual icon component here
  },
  { 
    id: 'github', 
    name: 'GitHub', 
    url: 'https://github.com/Snehil208001',
    // icon: <GitHubIconComponent /> 
  },
  { 
    id: 'linkedin', 
    name: 'LinkedIn', 
    url: '#', // Replace with your LinkedIn URL
    // icon: <LinkedInIconComponent />
  },
  // Add other social media links here (e.g., Twitter, dev.to)
];

// --- FOOTER ---
export const COPYRIGHT_TEXT = `© ${new Date().getFullYear()} ${YOUR_NAME}. All rights reserved.`;