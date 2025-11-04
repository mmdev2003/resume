import { Section } from '../../shared/ui';
import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Workflow,
  Activity,
  Box,
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
        { name: 'Golang', level: 95 },
        { name: 'Python', level: 90 },
        { name: 'Solidity', level: 75 },
        { name: 'Lua', level: 70 },
        { name: 'JS/TS', level: 80 }
      ]
    },
    {
      title: 'Базы данных',
      icon: <Database size={20} />,
      skills: [
        { name: 'PostgreSQL', level: 95 },
        { name: 'Redis', level: 90 },
        { name: 'Cassandra', level: 75 },
        { name: 'ValKey' },
        { name: 'Loki' },
        { name: 'Tempo' },
        { name: 'Victoria Metrics' }
      ]
    },
    {
      title: 'Брокеры сообщений',
      icon: <Workflow size={20} />,
      skills: [
        { name: 'Kafka', level: 85 },
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
        { name: 'OpenTelemetry', level: 85 },
        { name: 'Jaeger', level: 80 },
        { name: 'Prometheus', level: 85 }
      ]
    },
    {
      title: 'Архитектура',
      icon: <Box size={20} />,
      skills: [
        { name: 'Микросервисы', level: 95 },
        { name: 'DDD', level: 90 },
        { name: 'Event-driven', level: 90 },
        { name: 'CQRS', level: 80 },
        { name: 'Clean Architecture', level: 95 },
        { name: 'TDD/TBD' },
        { name: 'SOLID' },
        { name: 'CI/CD' },
        { name: 'GitOps' }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: <Wrench size={20} />,
      skills: [
        { name: 'Docker', level: 95 },
        { name: 'Kubernetes', level: 85 },
        { name: 'Ansible', level: 80 },
        { name: 'Terraform', level: 75 },
        { name: 'Nginx' },
        { name: 'Traefik' },
        { name: 'ArgoCD' },
        { name: 'FluxCD' }
      ]
    },
    {
      title: 'Фундаментальные знания',
      icon: <BookOpen size={20} />,
      skills: [
        { name: 'Компьютерные сети' },
        { name: 'Структуры данных' },
        { name: 'Linux' },
        { name: 'Линейная алгебра' },
        { name: 'Мат. анализ' },
        { name: 'Статистика' }
      ]
    },
    {
      title: 'Frontend',
      icon: <Palette size={20} />,
      skills: [
        { name: 'React', level: 80 },
        { name: 'TypeScript', level: 85 },
        { name: 'HTML/CSS', level: 85 },
        { name: 'Zustand' }
      ]
    },
    {
      title: 'ML/DL',
      icon: <BrainCircuit size={20} />,
      skills: [
        { name: 'PyTorch', level: 75 },
        { name: 'Scikit-learn', level: 70 },
        { name: 'NLP', level: 70 },
        { name: 'Computer Vision', level: 70 }
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
