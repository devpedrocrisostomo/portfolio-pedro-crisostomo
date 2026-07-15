export const contact = {
  email: 'devpedrocrisostomo@gmail.com',
  emailHref: 'mailto:devpedrocrisostomo@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/pedro-cris%C3%B3stomo-190191326',
  gitHub: 'https://github.com/devpedrocrisostomo',
};

export const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Tecnologias', href: '#tecnologias' },
  { label: 'Contato', href: '#contato' },
];

export const projects = [
  {
    title: 'CognifyRAG',
    description:
      'Plataforma com IA para upload de PDFs, busca semântica, RAG e respostas com fontes para bases de conhecimento.',
    technologies: ['React', 'FastAPI', 'LanceDB', 'RAG'],
    href: '#contato',
    accent: 'from-cyan-300 to-violet-500',
  },
  {
    title: 'Mult Private Finance',
    description:
      'Portal patrimonial em Streamlit com login demo, indicadores financeiros, relatórios e alertas de relacionamento.',
    technologies: ['Python', 'Streamlit', 'Pandas', 'Relatórios'],
    href: '#contato',
    accent: 'from-emerald-300 to-cyan-500',
  },
  {
    title: 'Site Plother',
    description:
      'Site institucional com hero visual, carousel responsivo, tratamento de imagens e layout comercial moderno.',
    technologies: ['Next.js', 'React', 'CSS', 'UX'],
    href: '#contato',
    accent: 'from-sky-400 to-indigo-500',
  },
  {
    title: 'Analytics Dashboard',
    description:
      'Mini-app analítico com dados sintéticos, gráficos, exportação CSV/XLSX e visualização de métricas operacionais.',
    technologies: ['Python', 'Streamlit', 'NumPy', 'OpenPyXL'],
    href: '#contato',
    accent: 'from-lime-300 to-blue-500',
  },
  {
    title: 'HelpDesk Pro',
    description:
      'Sistema de atendimento para organizar chamados, clientes, status e fluxos internos com visão operacional clara.',
    technologies: ['Java 21', 'Jakarta EE', 'PostgreSQL', 'Docker'],
    href: '#contato',
    accent: 'from-cyan-400 to-blue-500',
  },
  {
    title: 'SocialFlow',
    description:
      'Plataforma para automações de conteúdo, gestão de rotinas digitais e integrações com canais sociais.',
    technologies: ['React', 'TypeScript', 'N8N', 'Automação'],
    href: '#contato',
    accent: 'from-violet-400 to-cyan-400',
  },
  {
    title: 'JurisFlow',
    description:
      'Solução para fluxos jurídicos, organização de processos, cadastros e automações de comunicação.',
    technologies: ['Node.js', 'PostgreSQL', 'Prisma', 'APIs'],
    href: '#contato',
    accent: 'from-blue-400 to-emerald-300',
  },
  {
    title: 'Plataforma de Vídeos Motion',
    description:
      'Ferramenta para geração e renderização de vídeos dinâmicos com templates, automações e interface web.',
    technologies: ['Next.js', 'Remotion', 'IA', 'SaaS'],
    href: '#contato',
    accent: 'from-fuchsia-400 to-sky-400',
  },
];

export const technologies = [
  {
    title: 'Frontend',
    description: 'Interfaces responsivas, performáticas e prontas para produção.',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'TailwindCSS'],
    accent: 'from-cyan-300 to-blue-500',
  },
  {
    title: 'Backend e APIs',
    description: 'Serviços, integrações e regras de negócio com estrutura limpa.',
    skills: ['Node.js', 'FastAPI', 'Java 21', 'Jakarta EE', 'REST APIs', 'Prisma'],
    accent: 'from-emerald-300 to-cyan-500',
  },
  {
    title: 'Dados e IA',
    description: 'Produtos com busca semântica, RAG, dashboards e automações inteligentes.',
    skills: ['Python', 'Pandas', 'LanceDB', 'RAG', 'OpenAI API', 'Analytics'],
    accent: 'from-violet-400 to-fuchsia-500',
  },
  {
    title: 'Banco e DevOps',
    description: 'Persistência, deploy e ambientes organizados para operação real.',
    skills: ['PostgreSQL', 'Docker', 'Git', 'Vite', 'Streamlit', 'Deploy'],
    accent: 'from-lime-300 to-sky-500',
  },
  {
    title: 'Automações',
    description: 'Fluxos para reduzir trabalho manual e conectar ferramentas do negócio.',
    skills: ['N8N', 'Webhooks', 'Integrações', 'Relatórios', 'CSV/XLSX', 'SaaS'],
    accent: 'from-amber-300 to-cyan-500',
  },
  {
    title: 'Design de interface',
    description: 'Interfaces com hierarquia clara, responsividade e aparência profissional.',
    skills: ['UI Design', 'UX', 'Design System', 'Responsividade', 'Acessibilidade', 'Layout profissional'],
    accent: 'from-slate-300 to-sky-500',
  },
];
