export default function Banner() {
  return (
    <div
      style={{
        marginBottom: "24px",
        padding: "16px",
        background: "var(--colors-bg2)",
        border: "1px solid var(--colors-border)",
        borderRadius: "4px",
        fontFamily: "monospace",
        fontSize: "10px",
        lineHeight: "1.2",
        color: "var(--colors-blue)",
        whiteSpace: "pre",
        overflow: "hidden",
      }}
    >
      {`┌─┐┬─┐┌─┐┬ ┬   ┌─┐┬┌─┌─┐┌┬┐┌─┐┬ ┬┬ ┬   ┌┐ ┌─┐┬─┐
│ ┬├┬┘├─┤└┬┘───└─┐├┴┐├┤  │ │  ├─┤└┬┘───├┴┐├─┤├┬┘
└─┘┴└─┴ ┴ ┴    └─┘┴ ┴└─┘ ┴ └─┘┴ ┴ ┴    └─┘┴ ┴┴└─`}
    </div>
  );
}
