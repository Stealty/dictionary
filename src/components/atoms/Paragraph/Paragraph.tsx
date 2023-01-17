type Paragraph = {
  className?: string;
  text: string;
  link?: boolean;
};

import styles from './Paragraph.module.scss';

export default function Paragraph({ className, text, link }: Paragraph) {
  return <p className={styles.paragraph}>{text}</p>;
}
