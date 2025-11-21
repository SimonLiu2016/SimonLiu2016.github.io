// Internationalization (i18n) support
const translations = {
  en: {
    // Navigation
    "home": "Home",
    "about": "About",
    "projects": "Projects",
    "contact": "Contact",
    
    // Index Page
    "welcome": "Welcome to V8Engine",
    "hero-desc": "We build innovative software solutions for modern businesses",
    "view-projects": "View Our Projects",
    "contact-us": "Contact Us",
    "our-services": "Our Services",
    "web-development": "Web Development",
    "web-dev-desc": "Building responsive and modern web applications using cutting-edge technologies",
    "mobile-apps": "Mobile Applications",
    "mobile-desc": "Creating intuitive mobile experiences for iOS and Android platforms",
    "cloud-solutions": "Cloud Solutions",
    "cloud-desc": "Scalable cloud infrastructure and deployment solutions",
    
    // About Page
    "about-title": "About Us - V8Engine",
    "our-story": "Our Story",
    "about-desc": "V8Engine was founded with a vision to revolutionize the software industry by creating innovative solutions that empower businesses worldwide.",
    "meet-team": "Meet Our Team",
    "ceo": "CEO & Founder",
    "cto": "CTO",
    "lead-dev": "Lead Developer",
    "alex-bio": "With over 15 years of experience in software development, Alex leads our team with vision and expertise.",
    "sarah-bio": "Sarah brings innovation to our technical solutions with her deep knowledge of emerging technologies.",
    "michael-bio": "Michael ensures our products meet the highest quality standards through his meticulous approach.",
    "our-values": "Our Values",
    "innovation": "Innovation",
    "innovation-desc": "We constantly explore new ideas and technologies to stay ahead of the curve.",
    "quality": "Quality",
    "quality-desc": "We are committed to delivering exceptional products that exceed expectations.",
    "integrity": "Integrity",
    "integrity-desc": "We conduct business with honesty and transparency in all our dealings.",
    "collaboration": "Collaboration",
    "collaboration-desc": "We believe in the power of teamwork to achieve extraordinary results",
    
    // Projects Page
    "projects-title": "Our Projects - V8Engine",
    "our-projects": "Our Projects",
    "projects-desc": "Discover our portfolio of innovative software solutions that drive business success.",
    "all": "All",
    "web": "Web",
    "mobile": "Mobile",
    "desktop": "Desktop",
    "open-source": "Open Source",
    "ecommerce-desc": "A full-featured online shopping platform with inventory management and payment processing.",
    "fitness-desc": "A comprehensive fitness application with workout plans and progress tracking.",
    "dualvpn-project-desc": "Advanced VPN management tool with dual connection support for MacOS",
    "password-project-desc": "Secure password management solution with encryption for MacOS",
    "dataviz-desc": "An open-source library for creating interactive charts and graphs in web applications.",
    "pm-desc": "A collaborative platform for teams to plan, track, and manage projects efficiently.",
    "view-details": "View Details",
    "open-source-projects": "Open Source Projects",
    "open-source-desc": "We believe in the power of open collaboration. Here are some of our contributions to the open source community.",
    "ui-lib-desc": "A collection of reusable UI components built with React and TypeScript.",
    "api-toolkit-desc": "Tools and utilities for rapid API development and testing.",
    "view-on-github": "View on GitHub",
    
    // Contact Page
    "contact-title": "Contact Us - V8Engine",
    "get-in-touch": "Get In Touch",
    "contact-desc": "Have a project in mind or want to learn more about our services? Reach out to us!",
    "contact-info-title": "Contact Information",
    "address": "Address",
    "email": "Email",
    "phone": "Phone",
    "business-hours": "Business Hours",
    "hours": "Monday - Friday: 9AM - 6PM",
    "follow-us": "Follow Us",
    "send-message": "Send Us a Message",
    "name": "Name",
    "subject": "Subject",
    "message": "Message",
    "submit": "Submit",
    "our-location": "Our Location",
    "map-placeholder": "Map showing our location",
    
    // Footer
    "company-desc": "V8 指尖世界 - A modern software company dedicated to creating innovative solutions",
    "quick-links": "Quick Links",
    "contact-info": "Contact Info",
    "rights-reserved": "© 2025 V8Engine. All rights reserved.",
    
    // 404 Page
    "page-not-found": "Page Not Found - V8Engine",
    "oops": "Oops! Page Not Found",
    "not-found-desc": "The page you're looking for doesn't exist or has been moved.",
    "back-home": "Back to Home"
  },
  zh: {
    // Navigation
    "home": "首页",
    "about": "关于我们",
    "projects": "项目",
    "contact": "联系我们",
    
    // Index Page
    "welcome": "欢迎来到V8Engine",
    "hero-desc": "我们为现代企业构建创新的软件解决方案",
    "view-projects": "查看我们的项目",
    "contact-us": "联系我们",
    "our-services": "我们的服务",
    "web-development": "网页开发",
    "web-dev-desc": "使用尖端技术构建响应式和现代化的网络应用",
    "mobile-apps": "移动应用",
    "mobile-desc": "为iOS和Android平台创建直观的移动体验",
    "cloud-solutions": "云解决方案",
    "cloud-desc": "可扩展的云基础设施和部署解决方案",
    
    // About Page
    "about-title": "关于我们 - V8Engine",
    "our-story": "我们的故事",
    "about-desc": "V8Engine成立的愿景是通过创造创新解决方案来彻底改变软件行业，赋能全球企业。",
    "meet-team": "认识我们的团队",
    "ceo": "首席执行官兼创始人",
    "cto": "首席技术官",
    "lead-dev": "首席开发人员",
    "alex-bio": "Alex拥有超过15年的软件开发经验，他以远见和专业知识领导我们的团队。",
    "sarah-bio": "Sarah凭借她对新兴技术的深入了解，为我们的技术解决方案带来创新。",
    "michael-bio": "Michael通过他一丝不苟的方法确保我们的产品达到最高质量标准。",
    "our-values": "我们的价值观",
    "innovation": "创新",
    "innovation-desc": "我们不断探索新的想法和技术，以保持领先地位。",
    "quality": "质量",
    "quality-desc": "我们致力于交付超越期望的卓越产品。",
    "integrity": "诚信",
    "integrity-desc": "我们在所有业务往来中都秉持诚实和透明的原则。",
    "collaboration": "协作",
    "collaboration-desc": "我们相信团队合作的力量能够取得非凡的成果。",
    
    // Projects Page
    "projects-title": "我们的项目 - V8Engine",
    "our-projects": "我们的项目",
    "projects-desc": "探索我们推动业务成功的创新软件解决方案组合。",
    "all": "全部",
    "web": "网页",
    "mobile": "移动",
    "desktop": "桌面",
    "open-source": "开源",
    "ecommerce-desc": "功能齐全的在线购物平台，具有库存管理和支付处理功能。",
    "fitness-desc": "全面的健身应用程序，提供锻炼计划和进度跟踪。",
    "dualvpn-project-desc": "支持MacOS的双连接高级VPN管理工具",
    "password-project-desc": "支持MacOS的带加密功能的安全密码管理解决方案",
    "dataviz-desc": "用于在Web应用程序中创建交互式图表和图形的开源库。",
    "pm-desc": "团队协作平台，用于高效地规划、跟踪和管理项目。",
    "view-details": "查看详情",
    "open-source-projects": "开源项目",
    "open-source-desc": "我们相信开放协作的力量。以下是我们对开源社区的一些贡献。",
    "ui-lib-desc": "使用React和TypeScript构建的可重用UI组件集合。",
    "api-toolkit-desc": "用于快速API开发和测试的工具和实用程序。",
    "view-on-github": "在GitHub上查看",
    
    // Contact Page
    "contact-title": "联系我们 - V8Engine",
    "get-in-touch": "联系我们",
    "contact-desc": "有项目在想或者想了解更多服务信息？联系我们！",
    "contact-info-title": "联系信息",
    "address": "地址",
    "email": "邮箱",
    "phone": "电话",
    "business-hours": "工作时间",
    "hours": "周一至周五：上午9点至下午6点",
    "follow-us": "关注我们",
    "send-message": "发送消息",
    "name": "姓名",
    "subject": "主题",
    "message": "消息",
    "submit": "提交",
    "our-location": "我们的位置",
    "map-placeholder": "显示我们位置的地图",
    
    // Footer
    "company-desc": "V8 指尖世界 - 一家致力于创造创新解决方案的现代软件公司",
    "quick-links": "快速链接",
    "contact-info": "联系信息",
    "rights-reserved": "© 2025 V8Engine。保留所有权利。",
    
    // 404 Page
    "page-not-found": "页面未找到 - V8Engine",
    "oops": "哎呀！页面未找到",
    "not-found-desc": "您要查找的页面不存在或已被移动。",
    "back-home": "返回首页"
  }
};

// Get user's preferred language or default to English
let currentLang = localStorage.getItem('language') || 'en';

// Function to translate elements
function translatePage(lang) {
  currentLang = lang;
  localStorage.setItem('language', lang);
  
  // Update active language button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.getElementById(`lang-${lang}`).classList.add('active');
  
  // Translate all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translations[lang][key];
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });
}

// Set up language switcher event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Set initial language
  translatePage(currentLang);
  
  // Add event listeners to language buttons
  document.getElementById('lang-en')?.addEventListener('click', () => {
    translatePage('en');
  });
  
  document.getElementById('lang-zh')?.addEventListener('click', () => {
    translatePage('zh');
  });
});