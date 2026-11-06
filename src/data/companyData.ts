export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  heroTagline: string;
  commercialHook: string;
  description: string;
  longDescription: string[];
  image: string;
  badge: string;
  technicalSpecs: { label: string; value: string }[];
  applications: string[];
  benefits: { title: string; desc: string }[];
  commercialContrast: {
    withoutSanatel: string;
    withSanatel: string;
  };
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: string;
  serviceSlug: string;
  location: string;
  year: string;
  image: string;
  specs: string[];
  commercialImpact: string;
  description: string;
}

export const COMPANY_INFO = {
  name: "SANATEL COMUNICAÇÃO VISUAL",
  legalName: "Sanatel Comunicação Visual",
  director: "Michael Thiago Silva Cardoso",
  phone: "(61) 99224-1209",
  whatsappNumber: "5561992241209",
  whatsappDefaultMessage: "Olá! Vim pelo site da Sanatel e gostaria de solicitar um orçamento para valorizar a fachada da minha empresa em Brasília.",
  email: "sanatelcomunicacao@gmail.com",
  instagram: "@sanatelcomunicacaovisual",
  instagramUrl: "https://www.instagram.com/sanatelcomunicacaovisual",
  domain: "sanatelcomunicacaovisual.com.br",
  city: "Brasília - DF",
  regionServed: "Brasília, Plano Piloto, Taguatinga, Águas Claras, Samambaia, Ceilândia, Sudoeste, Noroeste, Lago Norte, Lago Sul e todo o DF e Entorno",
  businessHours: "Segunda a Sexta: 08:00 às 18:00",
  experienceYears: "Mais de 12 anos",
  flagshipSpecialty: "Engenharia de Fachadas em ACM & Letras Caixa de Alta Performance"
};

export const SERVICES: ServiceItem[] = [
  {
    id: "fachadas-acm",
    slug: "fachadas-em-acm-brasilia",
    title: "Fachadas em ACM em Brasília DF",
    shortTitle: "Fachadas em ACM",
    subtitle: "Engenharia Arquitetônica de Alto Impacto para Empresas",
    heroTagline: "Sua marca merece ser vista. Sua fachada precisa provar sua autoridade.",
    commercialHook: "Uma fachada apagada ou ondulada afasta clientes antes mesmo de entrarem. O ACM Sanatel transforma sua sede em um ponto de referência comercial inconfundível.",
    badge: "Flagship Sanatel",
    image: "/assets/fachada-pronto-sam.jpg",
    description: "Revestimentos arquitetônicos em ACM 4mm com fabricação própria de alta precisão. Acabamento plano sem ondulações, fixação oculta sem parafusos aparentes e resistência extrema ao sol do Planalto Central.",
    longDescription: [
      "A fachada é o ativo físico mais valioso da sua empresa: ela define o valor percebido do seu produto ou serviço em menos de 3 segundos. Quando um cliente passa pelo seu endereço em Brasília, o acabamento da sua fachada comunica imediatamente se sua empresa é líder de mercado ou amadora.",
      "Na Sanatel, não fazemos simples colagens de chapas. Projetamos cada fachada como uma obra de engenharia visual: dimensionamento estático contra cargas de vento, usinagem computadorizada de alta precisão com fresa a 90° e montagem em bandejas estruturadas com fita 3M VHB estrutural e silicone neutro de cura química.",
      "Seja para clínicas médicas, concessionárias, redes de varejo, postos ou sedes corporativas em Taguatinga, Águas Claras ou Plano Piloto, entregamos fachadas que valorizam o imóvel e atraem clientes de maior tíquete médio."
    ],
    technicalSpecs: [
      { label: "Espessura Estrutural", value: "ACM 4.0mm com lâmina de alumínio naval (0.21mm a 0.50mm)" },
      { label: "Pintura & Proteção UV", value: "PVDF Kynar 500 ou Poliéster Ultra-Resistente (não desbota no sol de BSB)" },
      { label: "Subestrutura Portante", value: "Tubos de aço carbono galvanizado a quente SAE 1020 com cálculo de vento" },
      { label: "Fixação & Acabamento", value: "Bandejas dobradas com precisão milimétrica, fita 3M VHB original e juntas perimetrais em silicone PU" },
      { label: "Garantia de Durabilidade", value: "Até 15 anos contra delaminação e perda de brilho" }
    ],
    applications: [
      "Clínicas médicas, odontológicas e hospitais no Distrito Federal",
      "Concessionárias de veículos, centros automotivos e revendas",
      "Lojas de rua, megalojas de confecção e supermercados",
      "Retrofit e modernização radical de prédios comerciais antigos",
      "Pórticos de entrada de condomínios fechados e sedes corporativas"
    ],
    benefits: [
      { title: "Valorização Imediata do Negócio", desc: "Aumenta instantaneamente a percepção de porte, solidez e autoridade da sua marca perante os concorrentes." },
      { title: "Plano Absoluto Sem Ondulação", desc: "A usinagem especializada e o travamento milimétrico eliminam o efeito de 'chapa empenada' comum em serviços terceirizados." },
      { title: "Isolamento Térmico e Redução de Custos", desc: "O núcleo composto dissipa a radiação solar, reduzindo o aquecimento interno e diminuindo a conta de energia com ar-condicionado." },
      { title: "Zero Parafusos Visíveis", desc: "Sistema de ancoragem oculta que garante uma estética limpa, moderna e puramente arquitetônica." }
    ],
    commercialContrast: {
      withoutSanatel: "Fachadas de lona rasgadas, chapas de ACM finas que empenam após 6 meses de sol e parafusos enferrujados que mancham a parede.",
      withSanatel: "ACM 4mm estruturado, bandejas usinadas a laser, alinhamento perfeito por mais de uma década e estética de multinacional."
    },
    faqs: [
      { question: "Quanto tempo dura uma fachada em ACM em Brasília?", answer: "Com as chapas de pintura PVDF Kynar 500 e montagem estruturada que utilizamos na Sanatel, a durabilidade supera facilmente 15 anos, resistindo à alta insolação e seca severa do DF." },
      { question: "Vocês desenvolvem o projeto visual antes da execução?", answer: "Sim! Antes de cortar qualquer chapa em fábrica, nossa equipe técnica elabora um mockup 3D fotorealista para você visualizar exatamente como ficará a fachada final com as cores e iluminação corretas." },
      { question: "A Sanatel atende em qualquer região do DF?", answer: "Sim, atendemos Plano Piloto, Taguatinga, Águas Claras, Samambaia, Ceilândia, Sudoeste, Noroeste e todo o Entorno com equipe própria e certificada com NR-35." }
    ],
    metaTitle: "Fachadas em ACM em Brasília DF | Alta Performance | Sanatel",
    metaDescription: "Fabricação e instalação de fachadas em ACM em Brasília e DF. Maquinário próprio, pintura PVDF Kynar e garantia estrutural. Solicite orçamento sem compromisso."
  },
  {
    id: "letras-caixa",
    slug: "letras-caixa-brasilia",
    title: "Letras Caixa em Brasília DF",
    shortTitle: "Letras Caixa",
    subtitle: "Tipografia Tridimensional com Iluminação LED Halo",
    heroTagline: "Destaque o nome da sua empresa com relevo tridimensional e acabamento nobre.",
    commercialHook: "Sua logomarca não pode ser apenas um adesivo plano na parede. Letras caixa em alto-relevo transmitem status, credibilidade executiva e sofisticação inquestionável.",
    badge: "Acabamento Nobre",
    image: "/assets/letra-caixa-outlet.png",
    description: "Letras monobloco em alto-relevo usinadas em aço inox polido ou escovado, acrílico virgem, chapa galvanizada e PVC expandido com corte computadorizado e módulos de LED IP67.",
    longDescription: [
      "A letra caixa é o ápice da elegância na comunicação visual. Ela confere peso, tridimensionalidade e textura à sua marca, seja na fachada principal ou na recepção do seu escritório em Brasília.",
      "Na Sanatel, aliamos o corte cirúrgico de precisão ao acabamento manual de calafetagem e pintura automotiva em estufa. Desenvolvemos iluminação frontal direta ou retroiluminação indireta (efeito halo), criando uma aura de luz homogênea que faz seu letreiro brilhar com requinte dia e noite.",
      "Trabalhamos com materiais nobres que nunca oxidam nem perdem o brilho, garantindo que a primeira impressão dos seus clientes e parceiros seja impecável."
    ],
    technicalSpecs: [
      { label: "Ligas e Matérias-Primas", value: "Aço Inox 304 (Escovado ou Espelhado), Acrílico Cast 100% Virgem, Latão e PVC Expandido" },
      { label: "Profundidade & Relevo", value: "Relevo tridimensional de 20mm até 200mm com encaixes soldados ou colados quimicamente" },
      { label: "Módulos de Iluminação", value: "LED SMD 2835 / 5050 IP67 blindados com lentes ópticas de difusão a 160°" },
      { label: "Fontes de Energia", value: "Fontes chaveadas blindadas 12V com proteção contra surtos elétricos" }
    ],
    applications: [
      "Recepções de escritórios de advocacia, consultórios e sedes corporativas",
      "Fachadas monumentais de igrejas, templos religiosos e centros de eventos",
      "Letreiros de grande porte no topo de edifícios em Brasília",
      "Lojas de shoppings centers e galerias comerciais de alto padrão"
    ],
    benefits: [
      { title: "Imponência e Autoridade", desc: "A presença 3D cria uma assinatura visual marcante que separa sua empresa dos concorrentes amadores." },
      { title: "Visibilidade Noturna Impressionante", desc: "Os LEDs integrados de alta densidade asseguram legibilidade perfeita a centenas de metros à noite." },
      { title: "Manutenção Praticamente Nula", desc: "Módulos LED blindados com vida útil projetada para mais de 50.000 horas de operação ininterrupta." }
    ],
    commercialContrast: {
      withoutSanatel: "Letras tortas, com cantos amassados, fiação exposta e lâmpadas que queimam em poucas semanas.",
      withSanatel: "Corte cirúrgico de precisão, acabamento espelhado ou escovado impecável, fiação 100% oculta e LEDs blindados IP67."
    },
    faqs: [
      { question: "Qual a diferença entre letra caixa em inox e em PVC?", answer: "O aço inox oferece máxima nobreza estética e resistência à corrosão externa, sendo ideal para fachadas requintadas. O PVC expandido com pintura automotiva oferece excelente custo-benefício e leveza, indicado para painéis internos ou externos protegidos." },
      { question: "O que é o efeito Halo (retroiluminação)?", answer: "É o sistema em que os LEDs são instalados no verso da letra e direcionados contra a parede ou painel de fundo, criando uma elegante aura luminosa ao redor do contorno de cada caractere." }
    ],
    metaTitle: "Letras Caixa em Brasília DF | Inox, Acrílico e PVC | Sanatel",
    metaDescription: "Fabricação de letras caixa em alto-relevo em Brasília: aço inox escovado, acrílico com iluminação LED e PVC expandido. Solicite orçamento expresso."
  },
  {
    id: "letreiros-luminosos",
    slug: "letreiros-e-luminosos",
    title: "Letreiros e Luminosos em Brasília DF",
    shortTitle: "Letreiros & Luminosos",
    subtitle: "Sinalização com Iluminação Backlight e Frontlight de Alto Brilho",
    heroTagline: "Sua empresa vendendo e atraindo olhares 24 horas por dia.",
    commercialHook: "Enquanto a concorrência fica invisível no escuro, seu letreiro luminoso Sanatel continua comunicando sua marca para milhares de pedestres e motoristas a cada noite.",
    badge: "Visibilidade 24h",
    image: "/assets/fachada-supergasbras.webp",
    description: "Painéis luminosos, caixas de luz estruturadas, totens verticais e painéis vazados em ACM com acrílico difusor e fitas LED de altíssimo fluxo luminoso.",
    longDescription: [
      "No comércio de Brasília, o período noturno responde por uma parcela massiva das decisões de consumo. Um letreiro luminoso apagado, com falhas de luz ou mal projetado não apenas prejudica suas vendas como passa uma imagem de decadência.",
      "A Sanatel projeta letreiros luminosos com engenharia elétrica rigorosa: acrílicos leitosos de dispersão balanceada que eliminam sombras pontuais, fontes de energia automotivas seladas e isolamento elétrico contra as tempestades de verão de Brasília.",
      "Garantimos luz intensa, homogênea e com consumo de energia até 80% inferior aos antigos sistemas de lâmpadas tubulares."
    ],
    technicalSpecs: [
      { label: "Tipologias Construtivas", value: "Backlight (iluminação interna), Frontlight (refletores dedicados) e Totens Verticais" },
      { label: "Faces Translúcidas", value: "Acrílico Cast leitoso difusor UV ou lona translúcida tensionada anti-fungo" },
      { label: "Eficiência Lumínica", value: "LEDs de alto fluxo com temperaturas de 3000K (quente), 4000K (neutro) ou 6500K (frio)" },
      { label: "Vedação & Proteção", value: "Grau de proteção IP67 à prova de chuvas torrenciais e poeira do DF" }
    ],
    applications: [
      "Farmácias, hospitais, clínicas e estabelecimentos com atendimento 24 horas",
      "Restaurantes, bares, cafeterias e centros gastronômicos no DF",
      "Postos de combustível, lojas de conveniência e centros automotivos",
      "Totens externos instalados em canteiros, avenidas e rodovias de Brasília"
    ],
    benefits: [
      { title: "Destaque Noturno Incomparável", desc: "Conquista a atenção instantânea de quem transita pela avenida, atraindo clientes por impulso." },
      { title: "Consumo de Energia Mínimo", desc: "A tecnologia LED reduz em até 80% a conta de luz quando comparada a luminárias fluorescentes antigas." },
      { title: "Iluminação Suave Sem Manchas", desc: "Difusão óptica calculada para criar uma superfície contínua e uniforme sem pontos escuros." }
    ],
    commercialContrast: {
      withoutSanatel: "Caixas de luz antigas que piscam, acumulam insetos mortos internamente e ficam cheias de manchas escuras.",
      withSanatel: "Caixas hermeticamente vedadas, difusores acrílicos imaculados e LEDs de padrão industrial com luz uniforme."
    },
    faqs: [
      { question: "O letreiro luminoso gasta muita energia elétrica?", answer: "Não. Todos os letreiros da Sanatel utilizam módulos LED de última geração com fontes chaveadas de alta eficiência, consumindo menos energia do que uma lâmpada doméstica tradicional." },
      { question: "O letreiro suporta as tempestades de Brasília?", answer: "Sim. Projetamos a carcaça com escoamento interno de condensação e utilizamos módulos elétricos selados com classificação IP67, totalmente resistentes à água e poeira." }
    ],
    metaTitle: "Letreiros e Luminosos em Brasília DF | LED e Caixas de Luz | Sanatel",
    metaDescription: "Fabricação de letreiros luminosos e caixas de luz em Brasília e DF. Alta visibilidade noturna, LEDs de baixo consumo e máxima durabilidade. Peça sua cotação."
  },
  {
    id: "pecas-acrilico",
    slug: "pecas-em-acrilico-brasilia",
    title: "Peças em Acrílico em Brasília DF",
    shortTitle: "Peças em Acrílico",
    subtitle: "Acabamento de Cristal Lapidado com Corte a Laser Cirúrgico",
    heroTagline: "A nobreza do acrílico virgem para valorizar ambientes executivos.",
    commercialHook: "O acrílico é o material definitivo quando o objetivo é sofisticação, pureza óptica e detalhes cirúrgicos para órgãos solenes, embaixadas e empresas de prestígio.",
    badge: "Precisão & Luxo",
    image: "/assets/totem-acrilico-direitos-humanos.jpg",
    description: "Displays corporativos, totens institucionais artísticos, placas de homenagem, púlpitos e peças tridimensionais sob medida em acrílico 100% virgem de alta densidade.",
    longDescription: [
      "O acrílico virgem (polimetilmetacrilato) possui propriedades ópticas incomparáveis: 92% de transmitância luminosa — superior à maioria dos vidros comerciais —, pesando metade e com resistência ao impacto 10 vezes maior.",
      "A Sanatel atende ministérios, embaixadas, tribunais, redes hoteleiras e corporações executivas no Distrito Federal que exigem corte a laser com bordas polidas no fogo e alinhamento milimétrico.",
      "Criamos peças personalizadas que transformam recepções e premiações em momentos de alto valor percebido."
    ],
    technicalSpecs: [
      { label: "Espessuras Disponíveis", value: "De 2mm, 3mm, 5mm, 8mm, 10mm, 15mm até 25mm de espessura maciça" },
      { label: "Pureza do Material", value: "Acrílico 100% Virgem Cast (não amarela com o passar dos anos)" },
      { label: "Usinagem & Acabamento", value: "Corte a laser óptico de alta definição e polimento diamantado/térmico de bordas" },
      { label: "Gravação & Cores", value: "Gravação a laser em baixo relevo, adesivação invertida e acrílicos espelhados" }
    ],
    applications: [
      "Totens institucionais solenes para órgãos públicos e embaixadas em Brasília",
      "Placas de homenagem executivas, troféus e certificados de gala",
      "Púlpitos contemporâneos para auditórios, convenções e templos",
      "Displays de mesa, identificadores de salas e porta-cardápios de luxo"
    ],
    benefits: [
      { title: "Transparência Cristalina", desc: "Clareza óptica absoluta sem distorções visuais ou tonalidades esverdeadas do vidro comum." },
      { title: "Bordas Polidas e Suaves", desc: "O acabamento térmico nas arestas confere toque acetinado e reflexo de diamante." },
      { title: "Durabilidade Sem Amarelamento", desc: "A composição 100% virgem preserva a pureza por décadas sem perder o brilho." }
    ],
    commercialContrast: {
      withoutSanatel: "Acrílicos reciclados quebradiços, que amarelam em meses e possuem rebarbas cortantes nas bordas.",
      withSanatel: "Acrílico virgem de alta densidade, corte a laser perfeito e lapidação diamantada com aspecto de joia."
    },
    faqs: [
      { question: "O acrílico arranha facilmente?", answer: "Utilizamos chapas de acrílico virgem de alta densidade superficial, mais resistentes a riscos que plásticos comuns. Para limpeza, recomendamos apenas pano macio de microfibra com água e sabão neutro." },
      { question: "Vocês produzem peças sob medida em pequena quantidade?", answer: "Sim! Nossa equipe modela e corta sob medida desde peças únicas para homenagens institucionais até lotes corporativos de grande escala." }
    ],
    metaTitle: "Peças em Acrílico em Brasília DF | Displays e Totens | Sanatel",
    metaDescription: "Fabricação sob medida de peças em acrílico virgem em Brasília: totens institucionais, placas de homenagem e púlpitos lapidados a laser. Solicite orçamento."
  },
  {
    id: "adesivos-comunicacao",
    slug: "adesivos-e-comunicacao-visual",
    title: "Adesivos e Envelopamento em Brasília DF",
    shortTitle: "Adesivos & Envelopamento",
    subtitle: "Impressão Digital 1440 DPI & Padronização de Frotas Comerciais",
    heroTagline: "Transforme sua frota e seu ponto de venda em máquinas de vendas em movimento.",
    commercialHook: "Cada veículo da sua empresa sem adesivação profissional é uma oportunidade diária de publicidade desperdiçada no trânsito de Brasília.",
    badge: "Alta Resolução",
    image: "/assets/envelopamento-frotas-comerciais.jpg",
    description: "Envelopamento parcial e total de veículos corporativos, frotas comerciais, vitrines decorativas em adesivo jateado, lonas tensionadas e impressão digital 1440 DPI com tintas solventes originais.",
    longDescription: [
      "No trânsito movimentado do Eixão, da EPTG e das avenidas comerciais de Taguatinga e Ceilândia, um veículo adesivado com excelência é visto por dezenas de milhares de potenciais clientes todos os dias com custo por mil impressões infinitamente menor que qualquer mídia tradicional.",
      "A Sanatel domina a aplicação técnica de vinis automotivos: películas calandradas e fundidas (cast) que moldam com precisão as curvaturas da lataria sem criar bolhas nem descolar com o calor.",
      "Também executamos adesivação de vitrines para proteção solar e privacidade executiva em salas de reunião com películas jateadas de corte computadorizado."
    ],
    technicalSpecs: [
      { label: "Resolução de Impressão", value: "Impressão de alta fidelidade em até 1440 DPI com gerenciamento de cor ICC" },
      { label: "Vinis Utilizados", value: "Vinil Polimérico Automotivo, Cast de Alta Conformabilidade e Perfurado Detran" },
      { label: "Proteção Adicional", value: "Laminação transparente com verniz ou filme anti-risco com bloqueio UV" }
    ],
    applications: [
      "Envelopamento de frotas de entrega, veículos utilitários e vans comerciais",
      "Vitrines de lojas de shopping e fachadas de vidro em comércio de rua",
      "Divisórias de vidro com vinil jateado em escritórios e clínicas no DF",
      "Banners gigantes, faixas promocionais e painéis em lona vinílica reforçada"
    ],
    benefits: [
      { title: "Publicidade Gratuita Contínua", desc: "Sua frota roda divulgando seu WhatsApp e serviços por todo o Distrito Federal 365 dias por ano." },
      { title: "Proteção da Lataria Original", desc: "A película vinílica protege a pintura original contra micro-batidas de pedras de asfalto e sol forte." },
      { title: "Remoção Limpa Sem Resíduos", desc: "Adesivos automotivos de marca líder que não danificam o verniz na hora de descaracterizar o carro." }
    ],
    commercialContrast: {
      withoutSanatel: "Adesivos desbotados, com bolhas de ar grotescas e pontas descolando na primeira lavagem a jato.",
      withSanatel: "Aplicação técnica com acabamento de fábrica, estiramento controlado, laminação UV e selamento de bordas."
    },
    faqs: [
      { question: "O envelopamento danifica a pintura do veículo?", answer: "Pelo contrário. Quando aplicado com vinil automotivo de qualidade profissional pela equipe da Sanatel, o adesivo atua como uma barreira física que protege a tinta original contra o desgaste do sol e arranhões." },
      { question: "O adesivo perfurado para vidro traseiro é permitido por lei?", answer: "Sim, utilizamos películas microperfuradas homologadas pelos órgãos de trânsito que mantêm a visibilidade do motorista pelo espelho retrovisor interno." }
    ],
    metaTitle: "Adesivos e Envelopamento de Frotas em Brasília DF | Sanatel",
    metaDescription: "Impressão digital de alta resolução e envelopamento profissional de veículos em Brasília. Vinil automotivo de alta aderência e vitrines. Orçamento rápido."
  },
  {
    id: "placas-sinalizacao",
    slug: "placas-de-sinalizacao-brasilia",
    title: "Placas de Sinalização em Brasília DF",
    shortTitle: "Placas de Sinalização",
    subtitle: "Wayfinding Corporativo, Sinalização Predial e Conformidade NBR 9050",
    heroTagline: "Direcione fluxos, organize ambientes e atenda às normas legais com precisão.",
    commercialHook: "Sinalização não é apenas obrigação de bombeiros: é a garantia de que visitantes, clientes e moradores se localizem com rapidez e segurança no seu prédio.",
    badge: "Norma ABNT & CBMDF",
    image: "/assets/sinalizacao-estacionamento.jpg",
    description: "Sistemas integrados de sinalização interna e externa para condomínios residenciais, prédios empresariais, garagens de shopping e indústrias no Distrito Federal.",
    longDescription: [
      "A sinalização arquitetônica (Wayfinding) define a sensação de organização de qualquer empreendimento imobiliário ou comercial. Ambientes com placas confusas ou inexistentes geram estresse, atrasos e sensação de abandono.",
      "Na Sanatel, desenvolvemos projetos completos de sinalização: demarcação de vagas e limites de altura em garagens com películas refletivas, numeração de andares e salas comerciais, placas de acessibilidade com Braille conforme a NBR 9050 e rotas de fuga homologadas pelo Corpo de Bombeiros Militar do DF (CBMDF).",
      "Trabalhamos com cortes precisos em ACM, alumínio escovado e acrílico com fixação antivandalismo."
    ],
    technicalSpecs: [
      { label: "Normas Técnicas", value: "Conformidade integral com NBR 9050 (Acessibilidade) e Instruções Técnicas CBMDF" },
      { label: "Materiais Estruturais", value: "ACM 3mm/4mm, Alumínio Anodizado, Acrílico e Aço Inox com afastadores de parede" },
      { label: "Películas Refletivas", value: "Grau Técnico Comercial Tipo I e Alta Intensidade Prismática Tipo III" }
    ],
    applications: [
      "Garagens subterrâneas, controle de altura e portarias condominiais no DF",
      "Centros empresariais, consultórios médicos e hospitais em Brasília",
      "Escolas, faculdades e complexos esportivos",
      "Galpões industriais, centros logísticos e rotas de emergência prediais"
    ],
    benefits: [
      { title: "Aprovação Rápida no Habite-se", desc: "Evita atrasos na emissão de alvarás de funcionamento ao seguir rigorosamente as diretrizes do CBMDF." },
      { title: "Organização e Fluidez de Tráfego", desc: "Diminui colisões em garagens e orienta visitantes com clareza instantânea." },
      { title: "Durabilidade em Áreas de Manobra", desc: "Materiais resistentes a impactos leves, intempéries e produtos químicos de limpeza pesada." }
    ],
    commercialContrast: {
      withoutSanatel: "Placas de papel coladas com fita crepe, sinalização fora de norma rejeitada na vistoria e garagens desorganizadas.",
      withSanatel: "Sistemas definitivos em ACM e acrílico, fixação em aço, tipografia legível e total conformidade com os Bombeiros."
    },
    faqs: [
      { question: "Vocês fornecem placas em conformidade com as normas dos Bombeiros (CBMDF)?", answer: "Sim, produzimos placas fotoluminescentes e rotas de fuga com a intensidade luminescente e dimensões exigidas pelas instruções normativas do Corpo de Bombeiros Militar do Distrito Federal." },
      { question: "Vocês atendem condomínios residenciais e comerciais em Brasília?", answer: "Sim, atendemos síndicos, administradoras de condomínios e construtoras com projetos completos de Wayfinding predial em todo o DF." }
    ],
    metaTitle: "Placas de Sinalização Predial em Brasília DF | Sanatel",
    metaDescription: "Sistemas completos de sinalização predial, empresarial e garagens em Brasília. Conformidade NBR 9050 e normas CBMDF em ACM e acrílico. Solicite proposta."
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "pronto-sam",
    title: "Fachada Arquitetônica Monumental em ACM de 3 Pavimentos",
    client: "Pronto Sam Clínica Médica e Exames",
    category: "Fachada em ACM",
    serviceSlug: "fachadas-em-acm-brasilia",
    location: "Samambaia / Brasília - DF",
    year: "2024",
    image: "/assets/fachada-pronto-sam.jpg",
    specs: ["ACM 4mm Azul Royal e Branco", "Brises Metálicos de Conforto Térmico", "Cruz Médica com LED Frontlight", "Subestrutura Aço Galvanizado"],
    commercialImpact: "Transformou a clínica médica no ponto de referência visual da região, aumentando o fluxo de pacientes particulares e a credibilidade institucional.",
    description: "Revestimento em ACM de grande porte em edifício de 3 pavimentos com integração de brises de ventilação e logotipo tridimensional retroiluminado com alta visibilidade na avenida principal."
  },
  {
    id: "supergasbras",
    title: "Fachada Angular Corporativa com Letras 3D em Alto-Relevo",
    client: "Supergasbras Distribuidora Oficial",
    category: "Fachada em ACM",
    serviceSlug: "fachadas-em-acm-brasilia",
    location: "Brasília - DF",
    year: "2024",
    image: "/assets/fachada-supergasbras.webp",
    specs: ["ACM Laranja Corporativo", "Letras Caixa em Relevo 3D", "Pintura Automotiva Resistente UV", "Spot LED Integrado"],
    commercialImpact: "Padronização visual de alto padrão com contraste dinâmico que garante reconhecimento instantâneo da marca pelos consumidores do DF.",
    description: "Revestimento angular com ACM de alto brilho e aplicação de letras monobloco com logotipo volumétrico de alta precisão usinado em maquinário especializado."
  },
  {
    id: "outlet-do-bras",
    title: "Fachada Comercial com Letras Caixa Gigantes",
    client: "Outlet do Brás (Megaloja)",
    category: "Fachada em ACM",
    serviceSlug: "fachadas-em-acm-brasilia",
    location: "Brasília - DF",
    year: "2024",
    image: "/assets/fachada-outlet-bras.png",
    specs: ["ACM Preto e Cinza Chumbo", "Letras Caixa Amarelas Iluminadas", "Painéis Actos de Fachada", "Totens Integrados"],
    commercialImpact: "Gerou impacto monumental para a megaloja de confecções, atraindo clientes do trânsito de Brasília e alavancando as vendas no ponto comercial.",
    description: "Fachada de escala monumental combinando painéis de ACM de alta espessura com letras tridimensionais gigantes de iluminação perimétrica."
  },
  {
    id: "outlet-letras-internas",
    title: "Letras Caixa Monobloco com LED Backlight em Recepção",
    client: "Outlet do Brás (Área de Caixas)",
    category: "Letras Caixa",
    serviceSlug: "letras-caixa-brasilia",
    location: "Brasília - DF",
    year: "2024",
    image: "/assets/letra-caixa-outlet.png",
    specs: ["Acrílico Translúcido Amarelo", "LED Backlight 6500K", "Corte de Precisão 0.05mm", "Fiação 100% Embutida"],
    commercialImpact: "Criou um ponto focal de sofisticação no checkout, enriquecendo a experiência de compra e fotos de clientes nas redes sociais.",
    description: "Letreiros tridimensionais usinados com difusão uniforme de luz sobre alvenaria cinza claro, compondo o visual da recepção da loja."
  },
  {
    id: "totem-direitos-humanos",
    title: "Totem Artístico Institucional em Acrílico Virgem e ACM",
    client: "Órgão Institucional / Direitos Humanos",
    category: "Peças em Acrílico",
    serviceSlug: "pecas-em-acrilico-brasilia",
    location: "Brasília - DF",
    year: "2024",
    image: "/assets/totem-acrilico-direitos-humanos.jpg",
    specs: ["Acrílico Cristal 15mm Lapidado", "Corte a Laser Figurativo", "Base em ACM Metálico", "Gravação Vetorial Personalizada"],
    commercialImpact: "Entregou uma obra de arte institucional com solidez cerimonial e acabamento de luxo para espaço solene no DF.",
    description: "Composição de sobreposição de planos com corte a laser em acrílico cristal virgem e estrutura autoportante em ACM."
  },
  {
    id: "sinalizacao-acesso",
    title: "Pórticos de Wayfinding para Entrada de Garagem",
    client: "Condomínio Residencial e Empresarial",
    category: "Placas de Sinalização",
    serviceSlug: "placas-de-sinalizacao-brasilia",
    location: "Águas Claras / Brasília - DF",
    year: "2024",
    image: "/assets/sinalizacao-estacionamento.jpg",
    specs: ["ACM Preto com Vinil Refletivo Grau Técnico", "Alerta de Altura 2.25m", "Limite de Velocidade", "Fixação Oculta Antivandalismo"],
    commercialImpact: "Eliminou colisões de veículos altos no portão e organizou o fluxo de milhares de veículos diários no condomínio.",
    description: "Sistemas de wayfinding veicular em conformidade com o código de trânsito e exigências de segurança predial."
  },
  {
    id: "letras-igreja-jesus",
    title: "Letras Caixa Douradas Monumentais com Efeito Halo",
    client: "Templo Cerimonial em Brasília",
    category: "Letras Caixa",
    serviceSlug: "letras-caixa-brasilia",
    location: "Brasília - DF",
    year: "2024",
    image: "/assets/letra-caixa-jesus.jpg",
    specs: ["Aço Galvanizado com Pintura Dourada Nobre", "Relevo de 80mm", "LEDs Efeito Halo Traseiro", "Montagem com Afastadores de Precisão"],
    commercialImpact: "Proporcionou atmosfera solene e imponente no altar, com destaque visual reverente para os membros da comunidade.",
    description: "Tipografia clássica com relevo monumental tridimensional e acabamento dourado com iluminação indireta."
  },
  {
    id: "cavalcante-gas-painel-acrilico",
    title: "Painel Corporativo Nobre de Recepção em Acrílico Cristal e Tipografia 3D",
    client: "Cavalcante Gás",
    category: "Peças em Acrílico",
    serviceSlug: "pecas-em-acrilico-brasilia",
    location: "Brasília - DF",
    year: "2024",
    image: "/assets/placa-acrilico-cavalcante-gas.jpg",
    specs: ["Acrílico Cristal 5mm com Fundo Jateado Fosco", "Logotipo em Acrílico Colorido em Relevo 3D", "Tipografia Black Piano Lapidada a Laser", "Fixação por 4 Prolongadores em Inox Escovado"],
    commercialImpact: "Cria impacto visual imediato logo na entrada da sede corporativa, transmitindo solidez e requinte a parceiros, clientes e fornecedores no DF.",
    description: "Composição nobre em acrílico virgem lapidado a laser: base cristal 5mm com acabamento acetinado jateado no verso, chama e anel em acrílico vermelho e amarelo em camadas volumétricas 3D e lettering institucional em acrílico Black Piano de alto brilho com botões prolongadores em aço inox."
  },
  {
    id: "supergasbras-gestao-frota",
    title: "Quadro Técnico de Gestão Visual de Frotas e Logística Industrial",
    client: "Supergasbras (Polo JK / Brasília - DF)",
    category: "Peças em Acrílico",
    serviceSlug: "pecas-em-acrilico-brasilia",
    location: "Brasília - DF",
    year: "2024",
    image: "/assets/quadro-frota-supergasbras.jpg",
    specs: ["Acrílico Branco Leitoso Virgem 5mm", "Impressão UV Direta 1440 DPI Resistente a Solventes", "Superfície Whiteboard para Marcador e Limpeza Diária", "Prolongadores em Aço Inox"],
    commercialImpact: "Centralizou o controle diário de tacógrafo, CIV, CIPP e volumetria das frotas da distribuidora, garantindo conformidade operacional e máxima transparência logística.",
    description: "Painel de gestão à vista corporativo sob medida para controle diário de frotas pesadas, com laminação protetora para escrita/apagamento contínuo, divisões milimétricas precisas e montagem nobre com afastadores em inox."
  },
  {
    id: "sede-sanatel",
    title: "Fachada da Unidade Fabril Sanatel Comunicação Visual",
    client: "Sanatel Comunicação Visual",
    category: "Fachada em ACM",
    serviceSlug: "fachadas-em-acm-brasilia",
    location: "Brasília - DF",
    year: "2024",
    image: "/assets/sede-sanatel.jpg",
    specs: ["ACM Laranja e Preto 4mm", "Letras Caixa Brancas em PVC", "Logotipo Oficial Sanatel em Relevo", "Expositores de Endereçamento Predial"],
    commercialImpact: "Nossa própria unidade fabril comprova a precisão das dobras, a qualidade dos materiais e a durabilidade sob o sol do DF.",
    description: "A unidade fabril da Sanatel sintetiza nossa capacidade técnica com maquinário próprio, modulações de ACM impecáveis e logotipo iluminado."
  },
  {
    id: "bellavia-fachada-esquina",
    title: "Mega Fachada Comercial em ACM de Esquina com Letreiros Tridimensionais",
    client: "Supermercados Bellavia (CNB 14 / Taguatinga)",
    category: "Fachada em ACM",
    serviceSlug: "fachadas-em-acm-brasilia",
    location: "Taguatinga / Brasília - DF",
    year: "2024",
    image: "/assets/fachada-acm-bellavia-esquina.webp",
    specs: ["ACM 4mm Vermelho Vivo e Branco Neve", "Letras Caixa 3D Monobloco com LED", "Envoltória de Esquina de Grande Porte", "Fixação Oculta sem Parafusos Aparentes"],
    commercialImpact: "Modernizou radicalmente o ponto de venda na esquina da comercial de Taguatinga, multiplicando a visibilidade no trânsito e reforçando a autoridade da rede.",
    description: "Revestimento integral de fachada predial em ACM de alta espessura com transição geométrica perfeita entre o vermelho institucional e o branco, com letreiros volumétricos de alto impacto em ambas as faces da esquina."
  },
  {
    id: "bellavia-fachada-detalhe",
    title: "Fachada Comercial em ACM e Letreiro em Bloco 3D Frontal",
    client: "Supermercados Bellavia",
    category: "Fachada em ACM",
    serviceSlug: "fachadas-em-acm-brasilia",
    location: "Taguatinga / Brasília - DF",
    year: "2024",
    image: "/assets/fachada-acm-bellavia-detalhe.webp",
    specs: ["Placas de ACM com Dobra Usinada a 90°", "Letras Bloco com Acrílico e Iluminação Interna", "Ancoragem com Fita 3M VHB Estrutural", "Vedação Perimetral em Silicone PU"],
    commercialImpact: "Acabamento rigorosamente plano sem ondulações, conferindo porte imponente e atratividade premium para o fluxo constante de clientes.",
    description: "Close frontal detalhando a precisão milimétrica de montagem das bandejas de ACM, acabamento sem ondulação sob insolação e tipografia tridimensional com iluminação uniforme."
  },
  {
    id: "vc-studios-noroeste",
    title: "Letras Caixa Pretas em Alto-Relevo e Sinalização Corporativa de Alto Padrão",
    client: "V&C Studios Noroeste",
    category: "Letras Caixa",
    serviceSlug: "letras-caixa-brasilia",
    location: "Setor Noroeste / Brasília - DF",
    year: "2024",
    image: "/assets/letra-caixa-vc-studios-noroeste.webp",
    specs: ["Letras Caixa Black usinadas com precisão 0.05mm", "Substrato Arquitetônico de Concreto Nobre", "Sinalização de Wayfinding / Entrada e Garagem", "Totens Indicativos com Relevo Amarelo Ouro"],
    commercialImpact: "Elevou a percepção de luxo e sofisticação do empreendimento corporativo e residencial no Setor Noroeste de Brasília.",
    description: "Conjunto completo de identificação predial e wayfinding para condomínio de alto luxo no Noroeste: letras bloco em aço usinado com pintura eletrostática preta acetinada, aplicadas sobre fachada de textura nobre, complementadas por pórticos e totens de acesso veicular."
  },
  {
    id: "cozinha-saborelle",
    title: "Fachada Comercial em ACM Vermelho Carmesim com Logotipo e Tipografia 3D",
    client: "Cozinha Saborelle Gastronomia",
    category: "Fachada em ACM",
    serviceSlug: "fachadas-em-acm-brasilia",
    location: "Brasília - DF",
    year: "2024",
    image: "/assets/fachada-cozinha-saborelle.webp",
    specs: ["ACM 4mm Vermelho Carmesim com Verniz Alto Brilho", "Letras Caixa Cursivas Amarelas Tridimensionais", "Logotipo Culinário em Relevo com Iluminação LED", "Montagem Estruturada sem Parafusos"],
    commercialImpact: "Destaque cromático irresistível na galeria comercial, convertendo pedestres e motoristas em clientes através de um visual apetitoso e profissional.",
    description: "Projeto de fachada comercial gastronômica com revestimento em ACM de alto brilho e lettering estilizado em alto-relevo tridimensional, unindo identidade visual acolhedora à durabilidade industrial."
  },
  {
    id: "eurobike-totem-monumental",
    title: "Totem Monumental Tridimensional Corporativo em Praça Externa",
    client: "Concessionária Eurobike Veículos Premium",
    category: "Placas de Sinalização",
    serviceSlug: "placas-de-sinalizacao-brasilia",
    location: "Brasília - DF",
    year: "2024",
    image: "/assets/totem-monumental-eurobike.jpg",
    specs: ["Estrutura Monobloco Branca Autoportante", "Módulos Volumétricos Laranja Corporativo", "Letras Monobloco 3D de Alta Resistência", "Base de Ancoragem para Resistência a Ventos"],
    commercialImpact: "Identificação monumental de impacto paisagístico para a concessionária de luxo em Brasília, transmitindo autoridade e dinamismo de longe.",
    description: "Totem volumétrico tridimensional instalado na área externa ajardinada da Eurobike Brasília: composição escultórica com blocos modulares em laranja vibrante e lettering branco 'Eurobike', integrando o paisagismo à engenharia visual automotiva de luxo."
  }
];

export const WHY_CHOOSE_US = [
  {
    number: "01",
    title: "Parque Fabril com Maquinário Próprio",
    description: "Sem terceirização e sem intermediários que encarecem sua obra. Nosso maquinário industrial usina chapas com tolerância de 0,05mm, garantindo dobras perfeitas e cumprimento rigoroso de prazos no DF."
  },
  {
    number: "02",
    title: "Engenharia Estrutural Calculada para o DF",
    description: "Não usamos gambiarras nem perfis frágeis. Nossas subestruturas metálicas em aço galvanizado são calculadas para suportar as rajadas de vento do Planalto Central com fixação por parabolts de alta tração."
  },
  {
    number: "03",
    title: "Chapas Certificadas & Fitas Estruturais 3M VHB",
    description: "Usamos ACM 4mm com pintura de alta performance PVDF Kynar 500 que não desbota no sol intenso de Brasília, ancorado com fita 3M VHB original e silicone neutro anti-fungo."
  },
  {
    number: "04",
    title: "Equipe Própria Certificada com NR-35",
    description: "Sua empresa protegida de riscos trabalhistas. Nossos instaladores possuem certificação oficial para trabalho em altura (NR-35) e utilizam equipamentos de segurança inspecionados."
  }
];

export const WORK_PROCESS_STEPS = [
  {
    step: "01",
    title: "Visita Técnica & Levantamento Métrico Grátis",
    desc: "Nossa equipe de engenharia vai até o local da sua obra em Brasília para medição a laser, avaliação da alvenaria e estudo de visibilidade urbana sem custo."
  },
  {
    step: "02",
    title: "Mockup 3D Realista para Aprovação",
    desc: "Desenvolvemos o projeto executivo e renderizamos uma maquete 3D realista com a tipografia, cores e iluminação exatas para você aprovar antes de cortar."
  },
  {
    step: "03",
    title: "Usinagem Especializada & Pré-Montagem",
    desc: "Fresamos as bandejas de ACM com alta precisão e fabricamos as letras caixa com calafetagem e pintura automotiva climatizada em nossa própria fábrica."
  },
  {
    step: "04",
    title: "Instalação Rápida & Testes Elétricos Finais",
    desc: "Montagem em campo com equipe própria, alinhamento a laser, fixação oculta, testes de carga dos LEDs IP67 e entrega com termo de garantia formal."
  }
];
