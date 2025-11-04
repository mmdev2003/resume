import { Section, Card } from '../../shared/ui';
import styles from './Education.module.css';

export const Education = () => {
  return (
    <Section title="Образование">
      <Card>
        <h3 className={styles.title}>Самообучение</h3>
        <p className={styles.duration}>2018 - настоящее время</p>
        <div className={styles.description}>
          Все что я знаю, я изучаю самостоятельно.
          Проходил много курсов бесплатных/платных.
          Прочитал немало книг.
          Смотрю постоянно выступления с конференций (в особенности HighLoad++).
          Общаюсь в чатах по сложным вопросам.
          Читаю статьи на Хабр.
          Нейросети тоже очень сильно помогают мне.
          Ну и конечно же постоянная практика.
        </div>
      </Card>
    </Section>
  );
};
