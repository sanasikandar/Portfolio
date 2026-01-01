import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Layers } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Djaminn Platform - DevOps',
    description:
      'Handled GCP & AWS deployments, Kubernetes orchestration, distributed databases, and ensured high scalability for a social-music collaboration platform with 1.5M+ users.',
    icon: Layers,
    tags: ['AWS', 'GCP', 'Kubernetes', 'Distributed DBs', 'CI/CD'],
    color: 'from-green-500 to-cyan-500',
    url: 'https://djaminn.com',
  },
  {
    id: 2,
    title: 'Brelli - DevOps',
    description:
      'Implemented GCP and AWS EC2 deployments, WebDeploy pipelines, and managed AWS S3 blob containers for a paperless automotive ecosystem platform.',
    icon: Layers,
    tags: ['AWS', 'GCP', 'CI/CD', 'WebDeploy', 'S3'],
    color: 'from-purple-500 to-pink-500',
    url: 'https://brelli.nl',
  },
  {
    id: 3,
    title: 'Ringo - DevOps',
    description:
      'Handled AWS and Kubernetes deployments, CI/CD pipelines, and backend stability for an AI-powered music sync licensing platform.',
    icon: Layers,
    tags: ['AWS', 'Kubernetes', 'CI/CD', 'Postgres', 'Python/Django'],
    color: 'from-orange-500 to-red-500',
    url: 'https://thisisringo.com',
  },
  {
    id: 4,
    title: 'NVM - DevOps',
    description:
      'Managed AWS & Kubernetes deployments with CI/CD pipelines, ensuring high availability for a smart property decision platform.',
    icon: Layers,
    tags: ['AWS', 'Kubernetes', 'CI/CD', 'MongoDB', 'NodeJS'],
    color: 'from-yellow-500 to-orange-500',
    url: 'https://nvm.nl',
  },
  {
    id: 5,
    title: 'KashafAI - DevOps',
    description:
      'Responsible for AWS and Kubernetes deployments, CI/CD pipelines, and backend reliability for an AI medical assistant platform.',
    icon: Layers,
    tags: ['AWS', 'Kubernetes', 'CI/CD', 'MongoDB', 'NodeJS'],
    color: 'from-teal-500 to-cyan-500',
    url: 'https://kashaf.ai',
  },
  {
    id: 6,
    title: 'SymphonAI - DevOps',
    description:
      'Implemented AWS and Kubernetes deployments, CI/CD pipelines, and backend infrastructure for an AI prompt engineering platform.',
    icon: Layers,
    tags: ['AWS', 'Kubernetes', 'CI/CD', 'MongoDB', 'NodeJS'],
    color: 'from-pink-500 to-purple-500',
    url: 'https://symphonai.nl',
  },
  {
    id: 7,
    title: 'ReadAskChat - DevOps',
    description:
      'Handled AWS & Kubernetes deployments, CI/CD pipelines, and backend support for an early-learning interactive reading platform.',
    icon: Layers,
    tags: ['AWS', 'Kubernetes', 'CI/CD', 'MongoDB', 'NodeJS'],
    color: 'from-indigo-500 to-blue-500',
    url: 'https://readaskchat.net',
  },
  {
    id: 8,
    title: 'OnlineResults - DevOps',
    description:
      'Managed GCP and AWS EC2 deployments, Bitbucket Pipelines CI/CD, and ensured uptime for a recruitment marketing platform processing 800k+ applications per year.',
    icon: Layers,
    tags: ['AWS', 'GCP', 'CI/CD', 'Bitbucket Pipelines', 'WebDeploy'],
    color: 'from-blue-500 to-indigo-500',
    url: 'https://falcon.onlineresults.nl',
  },
];

export function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="work" className="py-20 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-green-500/10 text-green-600 rounded-full border border-green-500/20 mb-4">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl mb-6">
            Featured{' '}
            <span className="bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent">
              DevOps Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of DevOps-focused projects showcasing cloud deployments, CI/CD, Kubernetes orchestration, and backend infrastructure management.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="relative p-6 rounded-3xl border border-border bg-card hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <project.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {project.description}
                </p>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-accent text-accent-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <motion.a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-border hover:bg-accent transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3 border border-border rounded-full hover:bg-accent transition-all hover:scale-105"
          >
            View all projects
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
