// Projects page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Project filtering functionality
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      const filter = button.getAttribute('data-filter');
      
      // Show/hide projects based on filter
      projectCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Add translations for project-specific content
  const projectTranslations = {
    en: {
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
      "view-on-github": "View on GitHub"
    },
    zh: {
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
      "view-on-github": "在GitHub上查看"
    }
  };

  // Merge with existing translations
  Object.keys(projectTranslations).forEach(lang => {
    if (typeof translations !== 'undefined' && translations[lang]) {
      Object.assign(translations[lang], projectTranslations[lang]);
    }
  });
});