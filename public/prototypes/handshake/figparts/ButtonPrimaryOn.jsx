// figma node: 902:409 Button / primary / on
export function ButtonPrimaryOn(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 328,
      height: 52,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 328,
        height: 52,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 328,
          height: 52,
          borderRadius: 4,
          backgroundColor: "rgb(234,29,44)",
        }} />
        <span style={{
          position: "absolute",
          left: 16,
          top: 16,
          width: 296,
          height: 20,
          fontFamily: "\"Sul Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          letterSpacing: "0.100px",
          color: "rgb(255,255,255)",
        }}>{props.text1 ?? "Ok, entendi"}</span>
      </div>
    </div>
  );
}
export default ButtonPrimaryOn;
