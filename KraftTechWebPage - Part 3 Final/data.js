/* ==========================================================================
  Musa Mnanzana 
  ST10500929
  WEDE POE Part 3
   ========================================================================== */

'use strict';

const siteData = {

  /* ---- Services (rendered dynamically on service.html) ---- */
  services: [
    {
      id: 'it-support',
      icon: 'IT',
      title: 'IT Support & Managed Services',
      summary: 'We act as your IT department, keeping systems running and problems from becoming crises.',
      features: ['Remote and on-site support', 'System monitoring', 'Preventative maintenance']
    },
    {
      id: 'cybersecurity',
      icon: '🔒',
      title: 'Cybersecurity',
      summary: 'Practical protection for your business data, email and network.',
      features: ['Security assessments', 'Email and endpoint protection', 'Staff awareness guidance']
    },
    {
      id: 'cloud',
      icon: '☁',
      title: 'Cloud Management',
      summary: 'Move to the cloud and stay there — with ongoing support and cost control.',
      features: ['Cloud migration', 'Backup and recovery', 'Ongoing cloud administration']
    },
    {
      id: 'consulting',
      icon: '💡',
      title: 'IT Consulting',
      summary: 'Clear, plain-language advice on technology decisions that affect your business.',
      features: ['Technology roadmaps', 'Vendor selection', 'Budget planning']
    },
    {
      id: 'web',
      icon: '🌐',
      title: 'Web Development',
      summary: 'Professional websites for businesses that need to be found online.',
      features: ['Business websites', 'Content management systems', 'Search visibility basics']
    },
    {
      id: 'home',
      icon: '🏠',
      title: 'Home & Industry Solutions',
      summary: 'Technology support for households and industrial environments.',
      features: ['Home network setup', 'Industrial system support', 'On-site troubleshooting']
    }
  ],

  /* ---- Map configuration (used on contact.html) ---- */
  map: {
    lat: -26.3333,
    lng: 28.1500,
    zoom: 13,
    popupHTML: '<strong>Kraft Technology Group</strong><br>Katlehong, East Rand'
  }
};