import { PhoneFrame } from "./kypcar/PhoneFrame";

// Embed de protótipo navegável exportado do Claude Design, servido de
// /public/prototypes. Vai dentro da mesma moldura de celular desenhada à mão
// usada no demo da Kypcar, em modo `bare` — o protótipo já traz a própria
// status bar, então o chrome de iOS da moldura ficaria duplicado.
//
// A tela interna da PhoneFrame mede `width * 0.924` (o corpo tem inset de
// 3,8% por lado), então um phone de 390×670 abre uma tela de ~360×640 — a
// medida exata em que o protótipo foi desenhado.
const PHONE_W = 390;
const PHONE_H = 670;

// Tamanho de design (phone + respiro), escalado proporcionalmente via
// container-query (cqw) para caber em qualquer largura sem cortar no mobile.
const DESIGN_W = 420;
const DESIGN_H = 700;

export function PrototypeEmbed({
  src,
  title,
  lang,
}: {
  src: string;
  title: string;
  lang?: string;
}) {
  // O protótipo lê ?lang= para traduzir a própria interface, acompanhando o
  // idioma do case. Nomes de loja, pratos e preços seguem em português.
  const srcComIdioma = lang ? `${src}?lang=${lang}` : src;
  return (
    <div
      className="mt-6"
      style={{
        width: "100%",
        maxWidth: DESIGN_W,
        margin: "0 auto",
        aspectRatio: `${DESIGN_W} / ${DESIGN_H}`,
        containerType: "inline-size",
      }}
    >
      <div
        style={{
          width: DESIGN_W,
          height: DESIGN_H,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transformOrigin: "top left",
          transform: `scale(calc(100cqw / ${DESIGN_W}px))`,
        }}
      >
        <PhoneFrame width={PHONE_W} height={PHONE_H} bare>
          <iframe
            src={srcComIdioma}
            title={title}
            loading="lazy"
            style={{ width: "100%", height: "100%", border: 0, display: "block" }}
          />
        </PhoneFrame>
      </div>
    </div>
  );
}
