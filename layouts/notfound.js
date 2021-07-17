import seo from 'scripts/seo';
import { Head } from 'layouts';

export default function NotFoundLayout() {
  return (
    <div className="component not-found">
      <Head { ...seo.not_found } />
      <div className="container feed-content">
        <div className="wrap feed-content">
          <h1 className="title feed-content">Page Not Found 🤬</h1>
          <h4 className="subtitle feed-content">uh oh! where da page gone?</h4>
        </div>
      </div>
    </div>
  );
}
