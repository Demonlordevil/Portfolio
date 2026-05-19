export function Container({ className = "", ...props }) {
  return (
    <div
      className={[
        "mx-auto w-full max-w-[95rem] px-5 sm:px-8 lg:px-10 2xl:px-12",
        className,
      ].join(" ")}
      {...props}
    />
  );
}
