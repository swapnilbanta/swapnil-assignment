export default function RoundButton({
  children,
  active = false,
  label,
  onClick,
  className = "",
}) {
  const classes = [
    "round-button",
    active ? "active" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  );
}