export default function Notification({ children }) {
  return (
    <div className="component notification">
      <div className="wrap notification">
        <span className="message notification">
          { children }
        </span>
      </div>
    </div>
  );
}