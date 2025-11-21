// Download page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Add translations for download-specific content
  const downloadTranslations = {
    en: {
      "download-title": "Download Software - V8Engine",
      "download": "Download",
      "download-software": "Download Software",
      "download-desc": "Get our latest software releases and installation guides",
      "dualvpn-desc": "Advanced VPN management tool with dual connection support for MacOS",
      "password-desc": "Secure password management solution with encryption for MacOS",
      "version": "Version:",
      "release-date": "Release Date:",
      "platform": "Platform:",
      "view-github": "View on GitHub",
      "download-now": "Download Now",
      "installation-guide": "Installation Guide",
      "step1-title": "Download",
      "step1-desc": "Download the latest version of the software from the links above",
      "step2-title": "Extract",
      "step2-desc": "Extract the downloaded archive to a folder of your choice",
      "step3-title": "Run",
      "step3-desc": "Execute the installer and follow the on-screen instructions",
      "step4-title": "Configure",
      "step4-desc": "Launch the application and configure your settings"
    },
    zh: {
      "download-title": "下载软件 - V8Engine",
      "download": "下载",
      "download-software": "下载软件",
      "download-desc": "获取我们最新的软件版本和安装指南",
      "dualvpn-desc": "支持MacOS的双连接高级VPN管理工具",
      "password-desc": "支持MacOS的带加密功能的安全密码管理解决方案",
      "version": "版本:",
      "release-date": "发布日期:",
      "platform": "平台:",
      "view-github": "在GitHub上查看",
      "download-now": "立即下载",
      "installation-guide": "安装指南",
      "step1-title": "下载",
      "step1-desc": "从上面的链接下载最新版本的软件",
      "step2-title": "解压",
      "step2-desc": "将下载的压缩包解压到您选择的文件夹",
      "step3-title": "运行",
      "step3-desc": "执行安装程序并按照屏幕上的指示操作",
      "step4-title": "配置",
      "step4-desc": "启动应用程序并配置您的设置"
    }
  };

  // Merge with existing translations
  Object.keys(downloadTranslations).forEach(lang => {
    if (typeof translations !== 'undefined' && translations[lang]) {
      Object.assign(translations[lang], downloadTranslations[lang]);
    }
  });
});