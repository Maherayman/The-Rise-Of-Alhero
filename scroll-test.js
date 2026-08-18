/* Temporary mobile scroll diagnostic — remove after testing. */
document.addEventListener("DOMContentLoaded", () => {
    const marker = document.createElement("div");
    marker.id = "scrollDiagnostic";
    marker.textContent = `SCROLL TEST: ${document.documentElement.scrollHeight > window.innerHeight ? "PAGE IS TALL ENOUGH" : "PAGE IS NOT TALL ENOUGH"}`;
    Object.assign(marker.style, {
        position: "fixed",
        left: "8px",
        bottom: "8px",
        zIndex: "99999",
        padding: "6px 8px",
        background: "#111",
        color: "#fff",
        font: "12px monospace",
        borderRadius: "6px",
        pointerEvents: "none"
    });
    document.body.appendChild(marker);
});
