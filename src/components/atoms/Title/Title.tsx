type Title = {
  type: String;
  text: string;
  className: string;
};

export default function Title({ type, text, className }: Title) {
  type === 'h1' && <h1>{text}</h1>;
  type === 'h2' && <h2>{text}</h2>;
  type === 'h3' && <h3>{text}</h3>;
}
