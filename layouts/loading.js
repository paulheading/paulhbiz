import { Head } from 'layouts';
import { print } from "scripts/helpers";

export default function LoadingLayout() {
  return (
    <div className="component load-route">
      <Head title={ print.seo("Loading route") } />
      <div className="container feed-content">
        <div className="wrap feed-content">
          { print.placeholders(5) }
        </div>
      </div>
    </div>
  );
};