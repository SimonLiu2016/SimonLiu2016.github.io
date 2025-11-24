// Internationalization (i18n) support
const translations = {
  en: {
    // Navigation
    "home": "Home",
    "about": "About",
    "projects": "Projects",
    "pricing": "Pricing",
    "download": "Download",
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
    "dualvpn-project-desc": "Advanced VPN management tool with multi-connection support for MacOS",
    "password-project-desc": "Secure password management solution with encryption for MacOS",
    "dataviz-desc": "An open-source library for creating interactive charts and graphs in web applications.",
    "pm-desc": "A collaborative platform for teams to plan, track, and manage projects efficiently.",
    "view-details": "View Details",
    "open-source-projects": "Open Source Projects",
    "open-source-desc": "We believe in the power of open collaboration. Here are some of our contributions to the open source community.",
    "ui-lib-desc": "A collection of reusable UI components built with React and TypeScript.",
    "api-toolkit-desc": "Tools and utilities for rapid API development and testing.",
    "view-on-github": "View on GitHub",
    "view-on-github-link": "View on GitHub",
    "documentation": "Documentation",
    "download-now": "Download Now",
    "dualvpn-documentation": "DualVPN Documentation",
    
    // Pricing Page
    "pricing-title": "Pricing - V8Engine",
    "pricing-hero-title": "Our Pricing",
    "pricing-hero-desc": "Transparent pricing for all our software solutions and services",
    "basic-plan": "Basic",
    "professional-plan": "Professional",
    "enterprise-plan": "Enterprise",
    "price-basic": "$29",
    "price-professional": "$79",
    "price-enterprise": "Custom",
    "features-title": "Features included:",
    "basic-feature1": "Up to 5 projects",
    "basic-feature2": "Basic support",
    "basic-feature3": "1GB storage",
    "basic-feature4": "Standard templates",
    "professional-feature1": "Up to 20 projects",
    "professional-feature2": "Priority support",
    "professional-feature3": "10GB storage",
    "professional-feature4": "Advanced templates",
    "professional-feature5": "Custom integrations",
    "professional-feature6": "Analytics dashboard",
    "enterprise-feature1": "Unlimited projects",
    "enterprise-feature2": "24/7 dedicated support",
    "enterprise-feature3": "Unlimited storage",
    "enterprise-feature4": "Custom templates",
    "enterprise-feature5": "Full integrations",
    "enterprise-feature6": "Advanced analytics",
    "enterprise-feature7": "Dedicated account manager",
    "enterprise-feature8": "On-premise deployment",
    "get-started": "Get Started",
    "contact-sales": "Contact Sales",
    "one-time-title": "One-time Purchase Options",
    "starter-license": "Starter License",
    "starter-license-desc": "$199 - Perfect for individuals and small projects. Includes 1-year updates and basic support.",
    "professional-license": "Professional License",
    "professional-license-desc": "$499 - Ideal for businesses and teams. Includes 1-year updates, priority support, and advanced features.",
    "enterprise-license": "Enterprise License",
    "enterprise-license-desc": "$1,299 - For large organizations. Includes perpetual license, 2-year updates, and premium support.",
    "faq-title": "Frequently Asked Questions",
    "faq1-question": "Do you offer discounts for non-profits?",
    "faq1-answer": "Yes, we offer special pricing for non-profit organizations. Please contact our sales team for more information.",
    "faq2-question": "Can I change plans later?",
    "faq2-answer": "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.",
    "faq3-question": "What payment methods do you accept?",
    "faq3-answer": "We accept all major credit cards, PayPal, and bank transfers for annual plans.",
    
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
    "rights-reserved": "© 2025 V8Engine (Simon Liu). All rights reserved.",
    "legal": "Legal",
    "terms-and-conditions": "Terms & Conditions",
    "privacy-policy": "Privacy Policy",
    "refund-policy": "Refund Policy",
    
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
    "pricing": "定价",
    "download": "下载",
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
    "dualvpn-project-desc": "支持MacOS的多连接高级VPN管理工具",
    "password-project-desc": "支持MacOS的带加密功能的安全密码管理解决方案",
    "dataviz-desc": "用于在Web应用程序中创建交互式图表和图形的开源库。",
    "pm-desc": "团队协作平台，用于高效地规划、跟踪和管理项目。",
    "view-details": "查看详情",
    "open-source-projects": "开源项目",
    "open-source-desc": "我们相信开放协作的力量。以下是我们对开源社区的一些贡献。",
    "ui-lib-desc": "使用React和TypeScript构建的可重用UI组件集合。",
    "api-toolkit-desc": "用于快速API开发和测试的工具和实用程序。",
    "view-on-github": "在GitHub上查看",
    "view-on-github-link": "在GitHub上查看",
    "documentation": "文档",
    "download-now": "立即下载",
    "dualvpn-documentation": "DualVPN文档",
    
    // Pricing Page
    "pricing-title": "定价 - V8Engine",
    "pricing-hero-title": "我们的定价",
    "pricing-hero-desc": "所有软件解决方案和服务的透明定价",
    "basic-plan": "基础版",
    "professional-plan": "专业版",
    "enterprise-plan": "企业版",
    "price-basic": "￥199",
    "price-professional": "￥549",
    "price-enterprise": "定制",
    "features-title": "包含功能：",
    "basic-feature1": "最多5个项目",
    "basic-feature2": "基础支持",
    "basic-feature3": "1GB存储空间",
    "basic-feature4": "标准模板",
    "professional-feature1": "最多20个项目",
    "professional-feature2": "优先支持",
    "professional-feature3": "10GB存储空间",
    "professional-feature4": "高级模板",
    "professional-feature5": "自定义集成",
    "professional-feature6": "分析仪表板",
    "enterprise-feature1": "无限制项目",
    "enterprise-feature2": "24/7专属支持",
    "enterprise-feature3": "无限制存储空间",
    "enterprise-feature4": "自定义模板",
    "enterprise-feature5": "完整集成",
    "enterprise-feature6": "高级分析",
    "enterprise-feature7": "专属客户经理",
    "enterprise-feature8": "本地部署",
    "get-started": "开始使用",
    "contact-sales": "联系销售",
    "one-time-title": "一次性购买选项",
    "starter-license": "入门许可证",
    "starter-license-desc": "￥1,399 - 适合个人和小型项目。包含1年更新和基础支持。",
    "professional-license": "专业许可证",
    "professional-license-desc": "￥3,499 - 适合企业和团队。包含1年更新、优先支持和高级功能。",
    "enterprise-license": "企业许可证",
    "enterprise-license-desc": "￥9,099 - 适合大型组织。包含永久许可证、2年更新和高级支持。",
    "faq-title": "常见问题",
    "faq1-question": "您为非营利组织提供折扣吗？",
    "faq1-answer": "是的，我们为非营利组织提供特殊定价。请联系我们的销售团队了解更多信息。",
    "faq2-question": "我以后可以更改套餐吗？",
    "faq2-answer": "是的，您可以随时升级或降级您的套餐。更改会立即生效。",
    "faq3-question": "您接受哪些付款方式？",
    "faq3-answer": "我们接受所有主要信用卡、PayPal和年度计划的银行转账。",
    
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
    "rights-reserved": "© 2025 V8Engine (Simon Liu)。保留所有权利。",
    "legal": "法律",
    "terms-and-conditions": "条款和条件",
    "privacy-policy": "隐私政策",
    "refund-policy": "退款政策",
    
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