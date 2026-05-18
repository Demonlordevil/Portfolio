export function Container({ className = "", ...props }) {
  return (
    <div
      className={["mx-auto w-full max-w-6xl px-6 lg:px-8", className].join(
        " ",
      )}
      {...props}
    />
  );
}
