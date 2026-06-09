import type { ReactNode } from "react";

// Capas autorais a traço, no estilo da ilustração do hero: tinta preta sobre
// papel, com um único grifo de esferográfica azul por desenho (Regra da
// Caneta Única do DESIGN.md).
const INK = "#15151A";
const BALLPOINT = "#2742C7";

const stroke = {
  stroke: INK,
  strokeWidth: 4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none",
};

const thin = { ...stroke, strokeWidth: 2.5 };
const blue = { ...stroke, stroke: BALLPOINT, strokeWidth: 3.5 };

const sketches: Record<string, ReactNode> = {
  // Telefone inclinado com botão de pagar circulado de azul e moedas voando
  "app-pagamentos": (
    <g transform="rotate(-4 240 180)">
      <path d="M178 72 C 176 64, 182 58, 192 57 L 296 54 C 306 54, 312 60, 313 70 L 318 286 C 318 296, 312 302, 302 303 L 198 306 C 188 306, 182 300, 181 290 Z" {...stroke} />
      <path d="M222 74 C 240 72, 258 72, 272 73" {...thin} />
      <path d="M204 122 C 230 118, 262 118, 288 121" {...thin} />
      <path d="M204 146 C 224 143, 244 143, 258 145" {...thin} />
      <path d="M201 226 C 200 218, 206 213, 214 212 L 282 210 C 290 210, 296 215, 296 223 L 297 238 C 297 246, 291 251, 283 252 L 215 254 C 207 254, 201 249, 201 241 Z" {...stroke} />
      <path d="M222 232 C 238 229, 262 229, 276 231" {...thin} />
      <circle cx="96" cy="120" r="24" {...stroke} />
      <path d="M96 108 C 90 112, 88 118, 92 123 C 96 128, 102 126, 100 132" {...thin} />
      <circle cx="120" cy="196" r="16" {...stroke} />
      <path d="M134 116 C 146 114, 156 113, 166 113 M138 192 C 150 191, 158 190, 168 189" {...thin} strokeDasharray="2 10" />
      <path d="M186 318 C 220 324, 268 324, 306 316" {...thin} strokeDasharray="1 9" />
      <path d="M192 240 C 178 220, 196 198, 250 196 C 304 194, 322 214, 314 236 C 306 258, 250 266, 214 258" {...blue} />
    </g>
  ),
  // Folha de stickers de componentes com marcas de corte e medida azul
  "design-system": (
    <g>
      <path d="M58 76 L 58 56 M48 66 L 68 66 M422 78 L 422 58 M412 68 L 432 68 M58 304 L 58 284 M48 294 L 68 294 M422 302 L 422 282 M412 292 L 432 292" {...thin} />
      <path d="M96 110 C 96 98, 104 92, 116 91 L 186 90 C 198 90, 206 97, 206 109 L 206 116 C 206 128, 198 134, 186 135 L 116 136 C 104 136, 96 129, 96 117 Z" {...stroke} />
      <path d="M122 113 C 138 110, 164 110, 180 112" {...thin} />
      <path d="M252 92 C 250 86, 254 81, 261 80 L 378 78 C 385 78, 390 83, 390 90 L 392 164 C 392 171, 387 176, 380 176 L 263 178 C 256 178, 251 173, 251 166 Z" {...stroke} />
      <path d="M270 104 C 296 101, 332 101, 360 103 M270 126 C 292 123, 320 123, 344 125 M270 148 C 286 146, 302 146, 314 147" {...thin} />
      <path d="M98 196 C 98 186, 105 180, 115 180 L 145 179 C 155 179, 162 186, 162 196 C 162 206, 155 212, 145 212 L 115 213 C 105 213, 98 206, 98 196 Z" {...stroke} />
      <circle cx="142" cy="196" r="10" {...stroke} />
      <path d="M252 222 C 251 216, 255 212, 261 211 L 380 209 C 386 209, 390 213, 390 219 L 391 244 C 391 250, 387 254, 381 254 L 262 256 C 256 256, 252 252, 252 246 Z" {...stroke} />
      <path d="M268 222 L 268 244" {...thin} />
      <path d="M98 246 L 98 262 M162 244 L 162 260 M104 254 L 156 253 M104 254 L 112 249 M104 254 L 112 259 M156 253 L 148 248 M156 253 L 148 258" {...blue} strokeWidth={2.5} />
      <path d="M96 286 C 130 292, 180 292, 210 286" {...thin} strokeDasharray="1 9" />
    </g>
  ),
  // Caminho pontilhado do ponto de partida até a bandeira no morro
  onboarding: (
    <g>
      <circle cx="84" cy="282" r="12" fill={INK} />
      <path d="M100 278 C 150 260, 130 226, 184 214 C 244 200, 224 168, 282 156 C 336 145, 330 118, 376 104" {...stroke} strokeDasharray="2 16" strokeWidth={5} />
      <circle cx="190" cy="212" r="11" {...stroke} />
      <path d="M185 212 L 189 217 L 196 207" {...thin} />
      <circle cx="286" cy="154" r="11" {...stroke} />
      <path d="M281 154 L 285 159 L 292 149" {...thin} />
      <path d="M340 308 C 360 270, 384 248, 410 240 C 426 236, 438 240, 446 248" {...stroke} />
      <path d="M352 292 L 366 276 M362 296 L 376 280 M374 298 L 388 282" {...thin} />
      <path d="M408 240 L 404 130" {...stroke} />
      <path d="M404 132 C 420 126, 432 134, 446 128 C 444 142, 446 152, 448 162 C 434 168, 420 160, 406 166" {...stroke} />
      <path d="M362 84 L 370 100 L 388 102 L 375 114 L 379 132 L 363 122 L 347 131 L 352 113 L 339 100 L 357 99 Z" {...blue} strokeWidth={3} />
    </g>
  ),
};

export function ProjectSketch({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 480 360"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {sketches[slug] ?? (
        <path d="M120 180 C 180 140, 300 140, 360 180" {...stroke} />
      )}
    </svg>
  );
}
