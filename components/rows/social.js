export default function SocialRow({ url, title }) {
  return (
    <div className="wrap social">
      <a className="link social" href={ url }>{ title }</a>
    </div>
  );
}