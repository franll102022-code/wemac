"use client";

import { useEffect, useMemo, useState } from "react";

const videoPrimary =
  "https://cdn.coverr.co/videos/coverr-working-in-a-warehouse-9714/1080p.mp4";

const videoSecondary =
  "https://cdn.coverr.co/videos/coverr-forklift-in-warehouse-1572/1080p.mp4";

function makeSvg({ accent = "#111111", label = "WEMAC", shape = "roll" }) {
  const art = {
    roll: `
      <ellipse cx="210" cy="230" rx="118" ry="22" fill="#ececec"/>
      <rect x="88" y="92" width="244" height="122" rx="61" fill="${accent}"/>
      <circle cx="210" cy="153" r="39" fill="#f8f8f8"/>
      <circle cx="210" cy="153" r="16" fill="#d9d9d9"/>
      <rect x="122" y="117" width="176" height="14" rx="7" fill="#ffffff22"/>
    `,
    towel: `
      <ellipse cx="210" cy="232" rx="120" ry="20" fill="#ececec"/>
      <rect x="110" y="92" width="200" height="128" rx="18" fill="#ffffff" stroke="#d9d9d9" stroke-width="6"/>
      <rect x="132" y="122" width="156" height="74" rx="10" fill="${accent}"/>
      <path d="M166 160 C194 124, 225 124, 252 160" stroke="#ffffff" stroke-width="10" fill="none" stroke-linecap="round"/>
    `,
    soap: `
      <ellipse cx="210" cy="234" rx="90" ry="18" fill="#ececec"/>
      <rect x="145" y="84" width="130" height="142" rx="24" fill="${accent}"/>
      <rect x="172" y="58" width="76" height="36" rx="14" fill="#2c2c2c"/>
      <rect x="196" y="38" width="28" height="28" rx="8" fill="#3a3a3a"/>
      <rect x="171" y="114" width="78" height="40" rx="10" fill="#ffffff" opacity="0.92"/>
    `,
    dispenser: `
      <ellipse cx="210" cy="234" rx="88" ry="18" fill="#ececec"/>
      <rect x="140" y="70" width="140" height="160" rx="26" fill="#ffffff" stroke="#d7d7d7" stroke-width="6"/>
      <rect x="162" y="102" width="96" height="70" rx="12" fill="${accent}"/>
      <rect x="188" y="190" width="44" height="10" rx="5" fill="#bdbdbd"/>
    `,
    bottle: `
      <ellipse cx="210" cy="234" rx="92" ry="18" fill="#ececec"/>
      <rect x="154" y="72" width="112" height="154" rx="24" fill="${accent}"/>
      <rect x="182" y="46" width="56" height="34" rx="9" fill="#202020"/>
      <rect x="171" y="113" width="78" height="42" rx="12" fill="#ffffff" opacity="0.94"/>
    `,
    wipes: `
      <ellipse cx="210" cy="234" rx="108" ry="18" fill="#ececec"/>
      <rect x="102" y="110" width="216" height="100" rx="22" fill="${accent}"/>
      <path d="M210 92 C226 108, 240 120, 240 142 C240 156, 229 168, 210 168 C191 168, 180 156, 180 142 C180 120, 194 108, 210 92Z" fill="#3d7fff" opacity="0.92"/>
      <rect x="132" y="136" width="156" height="18" rx="9" fill="#ffffff22"/>
    `,
  };

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 320">
      <rect width="420" height="320" rx="28" fill="#ffffff"/>
      <rect x="18" y="18" width="384" height="284" rx="22" fill="#fafafa" stroke="#eeeeee"/>
      ${art[shape]}
      <text x="210" y="286" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="22" fill="#1a1a1a" letter-spacing="2">${label}</text>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export default function HomePage() {
  const [view, setView] = useState("home");
  const [transitionTarget, setTransitionTarget] = useState(null);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (view === "home") {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
    } else {
      html.style.overflow = "auto";
      body.style.overflow = "auto";
    }

    return () => {
      html.style.overflow = "auto";
      body.style.overflow = "auto";
    };
  }, [view]);

  const products = useMemo(
    () => [
      {
        name: "Papel higiénico",
        description:
          "Línea institucional de papel higiénico para baños de alto tránsito y reposición eficiente.",
        image: makeSvg({ accent: "#202020", label: "PAPEL HIGIÉNICO", shape: "roll" }),
      },
      {
        name: "Toalla de papel intercalada",
        description:
          "Toallas intercaladas para baños, oficinas, locales y espacios profesionales.",
        image: makeSvg({ accent: "#111111", label: "TOALLA INTERCALADA", shape: "towel" }),
      },
      {
        name: "Jabón líquido para manos",
        description:
          "Presentaciones para higiene diaria en baños, tocadores y áreas de uso continuo.",
        image: makeSvg({ accent: "#2f2f2f", label: "JABÓN LÍQUIDO", shape: "soap" }),
      },
    ],
    []
  );

  const openView = (target) => {
    setTransitionTarget(target);
    setTimeout(() => setView(target), 420);
    setTimeout(() => setTransitionTarget(null), 900);
  };

  const goHome = () => {
    setTransitionTarget("home");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
      setView("home");
    }, 420);
    setTimeout(() => setTransitionTarget(null), 900);
  };

  return (
    <div>
      {transitionTarget && (
        <div style={{ position: "fixed", inset: 0, background: "#fff", zIndex: 999, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div>{transitionTarget}</div>
        </div>
      )}

      {view === "home" && (
        <main style={{ height: "100vh", position: "relative", overflow: "hidden", background: "#000" }}>
          <video autoPlay loop muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1) brightness(0.45)" }}>
            <source src={videoPrimary} type="video/mp4" />
            <source src={videoSecondary} type="video/mp4" />
          </video>

          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#fff" }}>
            <img src="/logo-wemac.png" alt="WEMAC" style={{ width: "320px", maxWidth: "80vw" }} />
            <p style={{ marginTop: 24 }}>productos de higiene · dispensadores · abastecimiento profesional</p>
            <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
              <button onClick={() => openView("productos")}>VER PRODUCTOS</button>
              <button onClick={() => openView("contacto")}>CONTACTO</button>
            </div>
          </div>
        </main>
      )}

      {view === "productos" && (
        <main style={{ minHeight: "100vh", padding: 40 }}>
          <button onClick={goHome}>Volver</button>
          <h1>Productos</h1>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 24 }}>
            {products.map((product) => (
              <article key={product.name} style={{ border: "1px solid #ddd", borderRadius: 20, padding: 16 }}>
                <img src={product.image} alt={product.name} style={{ width: "100%", borderRadius: 16 }} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </article>
            ))}
          </div>
        </main>
      )}

      {view === "contacto" && (
        <main style={{ minHeight: "100vh", padding: 40, background: "#000", color: "#fff" }}>
          <button onClick={goHome}>Volver</button>
          <h1>Hablemos</h1>
          <a href="mailto:ventas@wemac.com.ar" style={{ color: "#fff" }}>
            ventas@wemac.com.ar
          </a>
        </main>
      )}
    </div>
  );
}
