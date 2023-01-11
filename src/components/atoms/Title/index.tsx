type Title = {
  type: String;
  text: string;
  className: string;
};

export default function Title({ type, text, className }: Title) {
  type === 'h1' && (
    <h1 className={className ? className : 'text-white first-letter:uppercase'}>
      {text}
    </h1>
  );
  type === 'h2' && (
    <h2 className={className ? className : 'text-white first-letter:uppercase'}>
      {text}
    </h2>
  );
  type === 'h3' && (
    <h3 className={className ? className : 'text-white first-letter:uppercase'}>
      {text}
    </h3>
  );
}
