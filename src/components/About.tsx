import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Cloud, GitBranch, Server, ShieldCheck } from 'lucide-react';

const skills = [
  {
    icon: Cloud,
    title: 'Cloud Architecture',
    description:
      'Designing scalable, secure, and highly available cloud infrastructures on AWS.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: GitBranch,
    title: 'CI/CD Automation',
    description:
      'Building reliable CI/CD pipelines using GitHub, Bitbucket, Jenkins, and GitOps workflows.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Server,
    title: 'Containers & Kubernetes',
    description:
      'Deploying and managing containerized applications using Docker, ECS, and Kubernetes.',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    icon: ShieldCheck,
    title: 'Security & Monitoring',
    description:
      'Implementing IAM, monitoring, logging, backups, and cost-optimized cloud security.',
    color: 'from-green-500 to-emerald-500',
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-purple-500/10 text-purple-600 rounded-full border border-purple-500/20 mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl mb-6">
            Passionate About{' '}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
               DevOps Engineer
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I specialize in building, automating, and optimizing cloud
            infrastructure using AWS, Kubernetes, CI/CD pipelines, and
            Infrastructure as Code.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="relative p-6 rounded-3xl border border-border bg-card hover:shadow-xl transition-all duration-300">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <skill.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="mb-2">{skill.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 md:p-12 rounded-[3rem] bg-gradient-to-br from-orange-500/10 via-purple-500/10 to-pink-500/10 border border-orange-500/20"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-4xl md:text-5xl mb-2 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent"
              >
                50+
              </motion.div>
              <p className="text-muted-foreground">Cloud Deployments</p>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-4xl md:text-5xl mb-2 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
              >
                30+
              </motion.div>
              <p className="text-muted-foreground">CI/CD Pipelines</p>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-4xl md:text-5xl mb-2 bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent"
              >
                5+
              </motion.div>
              <p className="text-muted-foreground">Years in DevOps</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
