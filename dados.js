// =====================================================================
//  CONFIGURAÇÃO DO SITE - edite só aqui
// =====================================================================
window.CONFIG = {
  time: "10 e Pouco",
  subtitulo: "Futebol & Cerveja",
  logo: "img/logo-escudo.png",

  // Links (deixe "" para esconder o botão)
  links: {
    whatsappGrupo: "https://chat.whatsapp.com/F50hDg8oRfgKTq5RyHYTc2",
    youtube: "https://www.youtube.com/channel/UCzB-F8KTnCKCKwcBjAdcQ-Q/",
    instagram: "https://www.instagram.com/10epoucofc/"
  },

  // Pix
  pixChave: "10epoucofc@gmail.com",
  pixNome: "André Luan Zanetti",    // até 25 letras
  pixBanco: "Caixa Econômica Federal",
  pixCidade: "SAO PAULO",           // até 15 letras (exigido pelo Pix copia e cola)

  // Planilha "Contabilidade 10 e Pouco F.C." (precisa estar "qualquer pessoa com o link pode ver")
  // Cada aba VISÍVEL vira um jogador. Ocultou a aba na planilha = some do site.
  planilhaId: "1mp4lEslqRAn-5F989zbePUuxutMx8D5qI76pqaat8ms",
  abasIgnoradas: ["CAIXA"],         // abas visíveis que NÃO são jogadores

  // Regras da mensalidade
  inicioMensalidade: "Agosto/2026", // deste mês em diante = mensalidade; antes = débito antigo
  valorMensalidade: 20,             // usado quando "Valor devido" estiver vazio; "-" = isento
  diaVencimento: 10,
  rotuloDebitoAntigo: "Débito antigo (até jul/2026)"
};

// =====================================================================
//  FOTOS (opcional) - nome igual ao da aba: "caminho da imagem"
// =====================================================================
window.FOTOS = {
  // "Baiak": "img/baiak.jpg",
};
