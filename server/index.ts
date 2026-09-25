export default {
  async fetch(request: Request, env: any, ctx: ExecutionContext): Promise<Response> {
    try {
      // O Cloudflare gerencia e serve os arquivos estáticos da pasta "dist/public" automaticamente
      return await env.ASSETS.fetch(request);
    } catch (e) {
      return new Response("Erro interno no Worker", { status: 500 });
    }
  },
} satisfies ExportedHandler<any>;