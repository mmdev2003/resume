import { Section } from '../../shared/ui';
import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Workflow,
  Activity,
  Box,
    Boxes,
  Wrench,
  BookOpen,
  Palette,
  BrainCircuit
} from 'lucide-react';
import styles from './SkillsGrid.module.css';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: { name: string; level?: number }[];
}

export const SkillsGrid = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Языки программирования',
      icon: <Code2 size={20} />,
      skills: [
        { name: 'Golang', level: 100 },
        { name: 'Python', level: 90 },
        { name: 'Rust', level: 50 },
        { name: 'Solidity', level: 80 },
        { name: 'Lua', level: 70 },
        { name: 'JS/TS', level: 80 }
      ]
    },
    {
      title: 'Базы данных',
      icon: <Database size={20} />,
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'Redis', level: 90 },
        { name: 'Cassandra', level: 70 },
        { name: 'ValKey', level: 90 },
        { name: 'Loki', level: 90 },
        { name: 'Tempo', level: 90 },
        { name: 'Victoria Metrics', level: 80 }
      ]
    },
    {
      title: 'Брокеры сообщений',
      icon: <Workflow size={20} />,
      skills: [
        { name: 'Kafka', level: 90 },
        { name: 'RabbitMQ', level: 90 },
        { name: 'NATS', level: 80 },
        { name: 'Redis pub/sub', level: 85 }
      ]
    },
    {
      title: 'Мониторинг',
      icon: <Activity size={20} />,
      skills: [
        { name: 'Grafana', level: 90 },
        { name: 'OpenTelemetry', level: 100 },
        { name: 'Prometheus', level: 85 }
      ]
    },
    {
      title: 'Архитектура и паттерны',
      icon: <Box size={20} />,
      skills: [
        { name: 'Микросервисы', level: 95 },
        { name: 'DDD', level: 95 },
        { name: 'Event-driven', level: 90 },
        { name: 'CQRS', level: 80 },
        { name: 'Clean Architecture', level: 90 },
        { name: 'TDD', level: 60 },
        { name: 'TBD', level: 90 },
        { name: 'SOLID', level: 95 },
        { name: 'CI/CD', level: 85 },
        { name: 'GitOps', level: 75 }
      ]
    },
    {
      title: 'Продуктовые подходы',
      icon: <Boxes size={20} />,
      skills: [
        { name: 'AJTBD', level: 80 },
        { name: 'Карт гипотез', level: 100 },
        { name: 'Карта процесса-опыта', level: 80 },
        { name: 'Карта реализации историй', level: 80 },
        { name: 'Event Storming', level: 100 },
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: <Wrench size={20} />,
      skills: [
        { name: 'Docker', level: 100 },
        { name: 'Kubernetes', level: 70 },
        { name: 'Ansible', level: 80 },
        { name: 'Terraform', level: 65 },
        { name: 'Nginx', level: 90 },
        { name: 'Traefik', level: 75 },
        { name: 'ArgoCD', level: 75 },
        { name: 'FluxCD', level: 75 }
      ]
    },
    {
      title: 'Фундаментальные знания',
      icon: <BookOpen size={20} />,
      skills: [
        { name: 'Компьютерные сети', level: 80 },
        { name: 'Структуры данных', level: 90 },
        { name: 'Linux', level: 80 },
        { name: 'Линейная алгебра', level: 75 },
        { name: 'Мат. анализ', level: 75 },
        { name: 'Статистика', level: 75 }
      ]
    },
    {
      title: 'Frontend',
      icon: <Palette size={20} />,
      skills: [
        { name: 'React', level: 80 },
        { name: 'TypeScript', level: 80 },
        { name: 'FSD', level: 80 },
        { name: 'Vite', level: 80 },
        { name: 'HTML/CSS', level: 100 },
        { name: 'Zustand', level: 100 }
      ]
    },
    {
      title: 'ML/DL',
      icon: <BrainCircuit size={20} />,
      skills: [
        { name: 'PyTorch', level: 70 },
        { name: 'Scikit-learn', level: 70 },
        { name: 'NLP', level: 70 },
        { name: 'Computer Vision', level: 75 }
      ]
    }
  ];

  return (
    <Section title="Технические навыки">
      <div className={styles.skillsGrid}>
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className={styles.skillCategory}
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <div className={styles.categoryHeader}>
              <div className={styles.categoryIcon}>{category.icon}</div>
              <h4 className={styles.categoryTitle}>{category.title}</h4>
            </div>
            <div className={styles.skillsList}>
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  className={styles.skillItem}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 + skillIndex * 0.02 }}
                  whileHover={{ x: 4 }}
                >
                  <div className={styles.skillInfo}>
                    <span className={styles.skillName}>{skill.name}</span>
                    {skill.level && (
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    )}
                  </div>
                  {skill.level && (
                    <div className={styles.progressBar}>
                      <motion.div
                        className={styles.progressFill}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: index * 0.05 + skillIndex * 0.02 + 0.2,
                          ease: [0.22, 1, 0.36, 1]
                        }}
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
