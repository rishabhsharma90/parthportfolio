import { useEffect } from 'react'

const data = {
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    label: 'Parth Pandey',
    role: 'Solar Consultant',
    name: ['Parth', 'Pandey'],
    subtitle:
      'Client-facing solar consultant with a management background, strong sales communication, and an analytical approach to proposals, ROI, and decision-making.',
    badges: [
      'Residential solar consulting',
      'Client advisory',
      'Proposal strategy',
    ],
    highlights: [
      'Lucknow based',
      'MBA graduate',
      'Sales + analysis mindset',
    ],
    metrics: [
      { value: '2+', label: 'Years across consulting and sales-facing roles' },
      { value: 'MBA', label: 'Management education with practical business grounding' },
      { value: '4', label: 'Key tools used for analytics and reporting' },
      { value: 'Client', label: 'Communication style centered on clarity and trust' },
    ],
  },
  about: {
    paragraphs: [
      'Parth works at the intersection of solar advisory, client communication, and structured business thinking. His current role focuses on helping residential customers understand solar opportunities in a practical and financially clear way.',
      'He is comfortable translating technical recommendations into decision-ready proposals, while keeping the client journey steady from first interaction through conversion.',
      'Alongside this, his earlier finance and credit-sales exposure built discipline around evaluation, documentation, and commercial conversations.',
    ],
    stats: [
      { value: 'Solar', label: 'Primary domain focus in current professional work' },
      { value: 'Excel', label: 'Comfortable with reporting, analysis, and data support' },
      { value: 'MBA', label: 'Academic base in business administration' },
      { value: 'Growth', label: 'Career direction centered on leadership and quality work' },
    ],
    cards: [
      {
        icon: '01',
        title: 'Consultative selling',
        copy: 'Guides clients through energy decisions with a calm, informative, and conversion-aware communication style.',
      },
      {
        icon: '02',
        title: 'Proposal clarity',
        copy: 'Frames project scope, savings logic, and return on investment in a way clients can understand quickly.',
      },
      {
        icon: '03',
        title: 'Analytical discipline',
        copy: 'Uses business and reporting tools to support structured evaluation, documentation, and follow-through.',
      },
    ],
    quote:
      'Strong consulting is not just about giving the right answer. It is about helping the client feel certain about the decision.',
  },
  skillGroups: [
    {
      title: 'Technical Tools',
      tone: 'mint',
      items: ['Advanced Excel', 'Power BI', 'PostgreSQL', 'SPSS'],
    },
    {
      title: 'Business Strengths',
      tone: 'blue',
      items: ['Digital Marketing', 'Investment Analysis', 'Sales Communication'],
    },
    {
      title: 'Client Work',
      tone: 'pink',
      items: ['Residential Consulting', 'Site Assessment', 'Proposal Preparation', 'ROI Explanation'],
    },
    {
      title: 'Professional Skills',
      tone: 'orange',
      items: ['Team Leadership', 'Problem Solving', 'Decision Making', 'Analytical Thinking'],
    },
    {
      title: 'Software Proficiency',
      tone: 'violet',
      items: ['MS Word', 'PowerPoint', 'Reporting', 'Data Recording'],
    },
    {
      title: 'Personal Interests',
      tone: 'lime',
      items: ['Travelling', 'Trekking', 'Cooking', 'Outdoor Games'],
    },
  ],
  experience: [
    {
      period: 'March 2025 - Present',
      role: 'Solar Consultant',
      company: 'Solar Square Energy Pvt Ltd. | Lucknow, India',
      bullets: [
        'Develops residential solar solutions after reviewing site conditions and household energy consumption patterns.',
        'Prepares client proposals that explain system scope, financial benefits, and expected return on investment with clarity.',
        'Maintains strong communication throughout the sales cycle and contributes toward new client acquisition goals.',
        'Helps clients make energy decisions with a balance of technical understanding and business confidence.',
      ],
    },
    {
      period: 'March 2024 - March 2025',
      role: 'Credit Sales Intern',
      company: 'TVS Credit Finance | Lucknow, India',
      bullets: [
        'Assessed customer creditworthiness through indicators such as CIBIL score, repayment context, and interest-rate sensitivity.',
        'Supported credit sales processes by gathering, recording, and organizing customer information accurately.',
        'Built practical exposure to evaluation, documentation, and structured customer-facing financial communication.',
      ],
    },
  ],
  projects: [
    {
      number: '01',
      title: 'Digital Marketing Project',
      subtitle: 'Website content and advertisement work',
      tone: 'mint',
      bullets: [
        'Prepared online website content with focus on presentation quality and message clarity.',
        'Worked on advertisement-oriented communication and audience-facing content structure.',
        'Strengthened understanding of digital messaging from a business perspective.',
      ],
      stack: ['Content', 'Digital Marketing', 'Communication'],
    },
    {
      number: '02',
      title: 'Internship Reporting Project',
      subtitle: 'MS Word-based documentation and analysis',
      tone: 'orange',
      bullets: [
        'Prepared internship reports and related analysis in a structured professional format.',
        'Focused on clean documentation, summaries, and report presentation.',
        'Built confidence in business communication through formal written deliverables.',
      ],
      stack: ['MS Word', 'Reporting', 'Analysis'],
    },
    {
      number: '03',
      title: 'Personal Investment Portfolio Study',
      subtitle: 'Share-price and chart observation',
      tone: 'blue',
      bullets: [
        'Studies share-price behavior and chart movement to improve financial understanding.',
        'Applies curiosity around investing to develop personal portfolio discipline.',
        'Uses independent research to build stronger long-term decision-making habits.',
      ],
      stack: ['Investing', 'Charts', 'Analysis'],
    },
  ],
  contact: {
    email: 'parthpandey594@gmail.com',
    phone: '+91 8808647276',
    linkedin: 'https://www.linkedin.com/in/parth-pandey-214761252',
    location: 'Lucknow, Uttar Pradesh, India',
  },
  certifications: [
    'MBA - Chandigarh University',
    'B.Com - MGKVP',
    'Ongoing interest in investment analysis and family-business accounting',
  ],
}

function SectionHeader({ kicker, title, intro }) {
  return (
    <div className="section-header reveal">
      <div className="section-kicker">{kicker}</div>
      <div className="section-title-wrap">
        <h2 className="section-title">{title}</h2>
        <p className="section-intro">{intro}</p>
      </div>
    </div>
  )
}

function App() {
  useEffect(() => {
    const cursor = document.getElementById('cursor')
    const ring = document.getElementById('cursorRing')

    if (!cursor || !ring || window.innerWidth <= 768) return undefined

    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0
    let frame = 0

    const onMove = (event) => {
      mouseX = event.clientX
      mouseY = event.clientY
      cursor.style.left = `${mouseX - 5}px`
      cursor.style.top = `${mouseY - 5}px`
    }

    const loop = () => {
      ringX += (mouseX - ringX - 18) * 0.12
      ringY += (mouseY - ringY - 18) * 0.12
      ring.style.left = `${ringX}px`
      ring.style.top = `${ringY}px`
      frame = window.requestAnimationFrame(loop)
    }

    const targets = document.querySelectorAll('a, .skill-pill, .project-card, .glass-card')

    const onEnter = () => {
      cursor.style.transform = 'scale(2)'
      ring.style.transform = 'scale(1.35)'
      ring.style.borderColor = 'var(--gold)'
    }

    const onLeave = () => {
      cursor.style.transform = 'scale(1)'
      ring.style.transform = 'scale(1)'
      ring.style.borderColor = 'rgba(255,255,255,0.24)'
    }

    document.addEventListener('mousemove', onMove)
    targets.forEach((item) => {
      item.addEventListener('mouseenter', onEnter)
      item.addEventListener('mouseleave', onLeave)
    })
    loop()

    return () => {
      document.removeEventListener('mousemove', onMove)
      targets.forEach((item) => {
        item.removeEventListener('mouseenter', onEnter)
        item.removeEventListener('mouseleave', onLeave)
      })
      window.cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 },
    )

    const elements = document.querySelectorAll('.reveal, .timeline-card, .project-card')
    elements.forEach((element) => observer.observe(element))

    return () => {
      elements.forEach((element) => observer.unobserve(element))
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div className="cursor" id="cursor" />
      <div className="cursor-ring" id="cursorRing" />

      <nav className="topbar">
        <div className="nav-logo">
          <span className="nav-logo-mark">PP</span>
          <span className="nav-logo-text">Parth Pandey</span>
        </div>

        <ul className="nav-links">
          {data.nav.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        <div className="nav-status">
          <div className="status-dot" />
          Open to work
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-noise" />
          <div className="hero-orb hero-orb-a" />
          <div className="hero-orb hero-orb-b" />
          <div className="hero-gridlines" />

          <div className="hero-grid">
            <div className="hero-copy">
              <div className="hero-eyebrow reveal">
                <span>{data.hero.label}</span>
                <span className="eyebrow-line" />
                <span>Solar consulting and client advisory</span>
              </div>

              <div className="hero-tag reveal">{data.hero.role}</div>

              <h1 className="hero-name reveal">
                {data.hero.name[0]}
                <br />
                <span>{data.hero.name[1]}</span>
              </h1>

              <p className="hero-subtitle reveal">{data.hero.subtitle}</p>

              <div className="hero-badges reveal">
                {data.hero.badges.map((item) => (
                  <span className="hero-badge" key={item}>
                    {item}
                  </span>
                ))}
              </div>

              <div className="hero-cta reveal">
                <a href={`mailto:${data.contact.email}`} className="btn btn-primary">
                  Email Me
                </a>
                <a href="#projects" className="btn btn-secondary">
                  See the Work
                </a>
                <a href={data.contact.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">
                  LinkedIn
                </a>
              </div>

              <div className="hero-highlight-row reveal">
                {data.hero.highlights.map((item) => (
                  <span className="hero-highlight" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="hero-side reveal">
              <div className="hero-premium-card glass-card">
                <div className="premium-card-top">
                  <div>
                    <div className="premium-label">Profile</div>
                    <div className="premium-name">Parth Pandey</div>
                  </div>
                  <div className="premium-badge">PP</div>
                </div>

                <div className="premium-role">
                  Solar consultant focused on practical residential energy decisions.
                </div>

                <div className="premium-divider" />

                <div className="premium-meta">
                  <div>
                    <span>Base</span>
                    <strong>{data.contact.location}</strong>
                  </div>
                  <div>
                    <span>Focus</span>
                    <strong>Solar proposals, client communication, and ROI guidance</strong>
                  </div>
                </div>
              </div>

              <div className="hero-stack glass-card">
                <div className="stack-topline">
                  <span>Highlights</span>
                  <span>01</span>
                </div>
                <div className="stack-headline">Business-minded consulting with disciplined client communication</div>
                <div className="hero-mini-grid">
                  {data.hero.metrics.map((item) => (
                    <div className="mini-card" key={item.label}>
                      <strong>{item.value}</strong>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hero-links glass-card">
                <a href={data.contact.linkedin} target="_blank" rel="noreferrer" className="social-pill">
                  LinkedIn
                </a>
                <a href={`mailto:${data.contact.email}`} className="social-pill">
                  Email
                </a>
                <a href={`tel:${data.contact.phone.replace(/\s+/g, '')}`} className="social-pill">
                  Call
                </a>
                <div className="social-note">{data.contact.location}</div>
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <SectionHeader
            kicker="About"
            title="Professional communication, proposal clarity, and practical consulting discipline."
            intro="This version follows the same visual language as your reference while keeping Parth's own story and background."
          />

          <div className="about-layout">
            <div className="about-copy glass-card reveal">
              <div className="about-copy-top">
                <span>Profile narrative</span>
                <div className="about-copy-line" />
              </div>
              {data.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <blockquote className="about-quote">{data.about.quote}</blockquote>
            </div>

            <div className="about-side">
              <div className="stats-grid">
                {data.about.stats.map((item) => (
                  <div className="stat-card glass-card reveal" key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="focus-grid">
                {data.about.cards.map((item) => (
                  <div className="focus-card glass-card reveal" key={item.title}>
                    <div className="focus-icon">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section-tinted">
          <SectionHeader
            kicker="Stack"
            title="The tools, business abilities, and consulting strengths used in real work."
            intro="Organized in the same card-based skill system as the reference so the overall feel stays consistent."
          />

          <div className="skills-grid">
            {data.skillGroups.map((group) => (
              <div className={`skill-group glass-card tone-${group.tone} reveal`} key={group.title}>
                <div className="skill-group-title">{group.title}</div>
                <div className="skill-pills">
                  {group.items.map((item) => (
                    <div className="skill-pill" key={item}>
                      <span className="skill-pill-icon">{item.slice(0, 1)}</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience">
          <SectionHeader
            kicker="Experience"
            title="Career experience across solar consulting, client-facing sales, and structured evaluation."
            intro="The timeline layout follows the live reference closely, adapted for Parth's current and prior roles."
          />

          <div className="timeline">
            {data.experience.map((item) => (
              <article className="timeline-card glass-card" key={`${item.role}-${item.period}`}>
                <div className="timeline-top">
                  <div>
                    <div className="timeline-period">{item.period}</div>
                    <h3>{item.role}</h3>
                    <p>{item.company}</p>
                  </div>
                  <div className="timeline-badge">+</div>
                </div>
                <ul className="timeline-points">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-tinted">
          <SectionHeader
            kicker="Projects"
            title="Selected work and study areas that show initiative beyond day-to-day responsibilities."
            intro="These are adapted into the same premium project-card treatment used on the reference website."
          />

          <div className="projects-grid">
            {data.projects.map((project) => (
              <article className={`project-card glass-card tone-${project.tone}`} key={project.title}>
                <div className="project-top">
                  <div className="project-index">{project.number}</div>
                  <div className="project-copy">
                    <div className="project-subtitle">{project.subtitle}</div>
                    <h3>{project.title}</h3>
                  </div>
                </div>

                <ul className="project-points">
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                <div className="project-stack">
                  {project.stack.map((item) => (
                    <span className="project-chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact">
          <SectionHeader
            kicker="Contact"
            title="Available for growth-focused roles, client-facing teams, and meaningful new opportunities."
            intro="The closing section keeps the same two-column conversion-focused structure as the reference."
          />

          <div className="contact-layout">
            <div className="contact-card glass-card reveal">
              <div className="contact-heading">Open to professional conversations and strong next-step opportunities.</div>
              <p>
                If you are looking for someone who can communicate clearly, support business goals, and bring discipline to client-facing work, this is a good time to connect.
              </p>
              <div className="contact-actions">
                <a href={`mailto:${data.contact.email}`} className="btn btn-primary">
                  Email Me
                </a>
                <a href={data.contact.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="contact-side">
              <div className="contact-list glass-card reveal">
                <a href={`mailto:${data.contact.email}`} className="contact-row">
                  <span>{data.contact.email}</span>
                </a>
                <a href={`tel:${data.contact.phone.replace(/\s+/g, '')}`} className="contact-row">
                  <span>{data.contact.phone}</span>
                </a>
                <a href={data.contact.linkedin} target="_blank" rel="noreferrer" className="contact-row">
                  <span>linkedin.com/in/parth-pandey-214761252</span>
                </a>
                <div className="contact-row">
                  <span>{data.contact.location}</span>
                </div>
              </div>

              <div className="cert-box glass-card reveal">
                <div className="cert-title">Education and growth</div>
                <div className="cert-list">
                  {data.certifications.map((item) => (
                    <div className="cert-item" key={item}>
                      <span>+</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>Copyright 2026 Parth Pandey. Built with React.</span>
        <span className="footer-location">{data.contact.location}</span>
      </footer>
    </>
  )
}

export default App
