// Contact page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Form submission handling
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // In a real application, you would send this data to a server
      // For now, we'll just show an alert
      alert(`Thank you ${name}! Your message has been received. We'll get back to you soon.`);
      
      // Reset form
      contactForm.reset();
    });
  }

  // Add translations for contact-specific content
  const contactTranslations = {
    en: {
      "contact-title": "Contact Us - SoftTech",
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
      "map-placeholder": "Map showing our location"
    },
    zh: {
      "contact-title": "联系我们 - SoftTech",
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
      "map-placeholder": "显示我们位置的地图"
    }
  };

  // Merge with existing translations
  Object.keys(contactTranslations).forEach(lang => {
    if (typeof translations !== 'undefined' && translations[lang]) {
      Object.assign(translations[lang], contactTranslations[lang]);
    }
  });
});