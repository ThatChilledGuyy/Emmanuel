document.addEventListener('DOMContentLoaded', () => {

  // Experience
  const expGrid = document.getElementById('experience-grid');
  experienceData.forEach(exp => {
    const card = document.createElement('div');
    card.className = `exp-card ${exp.isBlue ? 'blue' : ''}`;
    card.innerHTML = `
      <div class="exp-header">
        <div>
          <div class="exp-company">${exp.company}</div>
          <div class="exp-role">${exp.role}</div>
        </div>
        <span class="exp-date">${exp.date}</span>
      </div>
      <ul class="exp-bullets">
        ${exp.bullets.map(b => `<li>${b}</li>`).join('')}
      </ul>
    `;
    expGrid.appendChild(card);
  });

  // Proof of Work
  const powGrid = document.getElementById('pow-grid');
  powData.forEach(pow => {
    const card = document.createElement('div');
    card.className = 'pow-card';
    card.innerHTML = `
      <div class="pow-icon ${pow.color}">${pow.icon}</div>
      <h3>${pow.title}</h3>
      <p>${pow.desc}</p>
      <span class="pow-tag ${pow.tagColor || ''}">${pow.tag}</span>
    `;
    powGrid.appendChild(card);
  });

  // Skills
  const skillsGrid = document.getElementById('skills-grid');
  skillsData.forEach(skill => {
    const block = document.createElement('div');
    block.className = 'skill-block';
    block.innerHTML = `
      <h4>${skill.title}</h4>
      <ul>
        ${skill.items.map(item => `<li>${item}</li>`).join('')}
      </ul>
    `;
    skillsGrid.appendChild(block);
  });

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Scroll Animation
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.exp-card, .pow-card, .skill-block').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
  });
});
