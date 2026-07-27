'use client'

import { useEffect, useRef } from 'react'

// Embed de página do Atelier (a workbench do Design System da Pump), servido de
// /public/prototypes/pump-ds. Ao contrário do PrototypeEmbed, que veste o conteúdo
// com a moldura de celular, aqui a superfície é desktop: uma janela de largura
// cheia com barra de título e rolagem interna, como um app embutido.
const ALTURA = 560;

// A página de cor publica no mount, e os embeds carregam lazy: o botão pode ainda
// não existir quando a primeira mensagem passa. Guardamos a última para reenviar
// a cada iframe que termina de carregar.
let ultimaMarca: unknown = null;

export function DesignSystemEmbed({
  src,
  title,
  label,
  lang,
}: {
  src: string;
  title: string;
  label: string;
  lang?: string;
}) {
  // o protótipo lê ?lang= e troca sua própria cópia — mesmo contrato do PrototypeEmbed
  const srcComIdioma = lang ? `${src}?lang=${lang}` : src;
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Os embeds do Atelier são iframes irmãos e não se falam direto. A página de cor
  // publica a escala que derivou da marca; aqui o pai repassa para os outros embeds,
  // então o botão reflete a cor primária do cliente em vez de uma cópia congelada.
  useEffect(() => {
    function aoReceber(e: MessageEvent) {
      if (e.origin !== window.location.origin) return;
      if (e.data?.type !== 'pump-ds:brand') return;
      ultimaMarca = e.data;
      if (e.source === iframeRef.current?.contentWindow) return;
      iframeRef.current?.contentWindow?.postMessage(e.data, window.location.origin);
    }
    window.addEventListener('message', aoReceber);
    return () => window.removeEventListener('message', aoReceber);
  }, []);

  function aoCarregar() {
    if (!ultimaMarca) return;
    iframeRef.current?.contentWindow?.postMessage(ultimaMarca, window.location.origin);
  }

  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-line">
      {/* barra de título — situa o conteúdo como uma tela de produto, não uma imagem */}
      <div className="flex items-center gap-2 border-b border-line bg-card px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
        </span>
        <span className="ml-1 font-mono text-[11px] tracking-wide text-muted">{label}</span>
      </div>
      <iframe
        ref={iframeRef}
        src={srcComIdioma}
        title={title}
        loading="lazy"
        onLoad={aoCarregar}
        style={{ width: '100%', height: ALTURA, border: 0, display: 'block' }}
      />
    </div>
  )
}
