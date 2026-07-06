import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Redireciona a raiz para o locale padrão. As demais rotas já vivem em /[lang].
export function proxy(request: NextRequest) {
  return NextResponse.redirect(new URL('/pt', request.url))
}

export const config = {
  matcher: '/',
}
