// Embed de página do Atelier (a workbench do Design System da Pump), servido de
// /public/prototypes/pump-ds. Ao contrário do PrototypeEmbed, que veste o conteúdo
// com a moldura de celular, aqui a superfície é desktop: uma janela de largura
// cheia com barra de título e rolagem interna, como um app embutido.
const ALTURA = 560;

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
        src={srcComIdioma}
        title={title}
        loading="lazy"
        style={{ width: '100%', height: ALTURA, border: 0, display: 'block' }}
      />
    </div>
  )
}
