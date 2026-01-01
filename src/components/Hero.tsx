import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 pt-32">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block"
            >
              <span className="px-4 py-2 bg-orange-500/10 text-orange-600 rounded-full border border-orange-500/20">
                ✨ Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl tracking-tight"
            >
              Sana Sikandar{' '}
              <span className="bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                DevOps Engineer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-muted-foreground max-w-xl"
            >
              Turning complex infrastructure into seamless, automated systems—so your software just works.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all hover:scale-105"
              >
                Get in touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full hover:bg-accent transition-all hover:scale-105"
              >
                View my work
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex gap-4 pt-4"
            >
              {/* GitHub */}
              <a
                href="https://github.com/sanasikandar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:bg-accent transition-all hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/sana-sikandar/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:bg-accent transition-all hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              {/* Email */}
              <a
                href="mailto:sanasikandar329@gmail.com"
                className="p-3 rounded-full border border-border hover:bg-accent transition-all hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>

              {/* Download Resume */}
              <a
                href="https://drive.google.com/file/d/1SNt9yAEO1W80DIwfSBuFz-LLq95DEmin/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-full border border-border hover:bg-accent transition-all hover:scale-110 text-sm font-medium"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative z-10"
            >
              <div className="relative overflow-hidden rounded-full border-8 border-white shadow-2xl aspect-square w-full max-w-md mx-auto">
                <img
                  src="/sana-p.jpg"
                  alt="Sana Sikandar"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Floating decorative elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-green-400 to-green-500 rounded-full opacity-70 blur-xl"
            />
            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full opacity-70 blur-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
