type Paragraph = {
  className?: string;
  text: string;
  link?: boolean;
};

export default function Paragraph({ className, text, link }: Paragraph) {
  return (
    <p
      className={
        className
          ? className
          : `text-primary-color first-letter:uppercase ${
              link && 'hover:text-opacity-90'
            }`
      }
    >
      {text}
    </p>
  );
}
