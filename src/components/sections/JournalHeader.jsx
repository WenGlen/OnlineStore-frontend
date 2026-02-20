export default function JournalHeader({ title = "Journal", subtitle = null }) {
  return (
    <header className="journal-header">
      <div className="journal-header-content">
        <h1 className="journal-title">{title}</h1>
        {subtitle && (
          <p className="journal-subtitle">{subtitle}</p>
        )}
      </div>
    </header>
  );
}

