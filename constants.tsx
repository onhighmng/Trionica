import React from 'react';
import { BookOpen, Activity, Droplets, Leaf, Pickaxe, Lightbulb, Users, ShieldCheck, HeartHandshake } from 'lucide-react';
import { ServiceSection, NewsItem, ValueItem } from './types';

// Company Info
export const COMPANY_NAME = "Triónica Moçambique";
export const COMPANY_PHONE_1 = "(+258) 846 974 444";
export const COMPANY_PHONE_2 = "(+258) 827 455 040";
export const COMPANY_PHONE_TECH = "(+258) 823 071 419";
export const COMPANY_EMAIL_GENERAL = "geral@trionicamz.com";
export const COMPANY_EMAIL_SUPPORT = "suporte@trionicamz.com";
export const COMPANY_ADDRESS = "Bairro da Costa de Sol, Av. 4.680, Major General Candido Mondlane, Rua nº 4549, Q. 69, Casa Nº 140, Maputo - Moçambique";

// Sections
export const INTRO_TEXT = "Somos uma empresa moçambicana, localizada na cidade de Maputo, focada no desenvolvimento de soluções e realizações de projectos, tendo como ponto primordial proporcionar aos nossos clientes produtos e serviços de alta qualidade com métodos e tecnologias mais recentes de acordo com as suas necessidades.";

export const ABOUT_TEXT_FULL = `Somos uma empresa moçambicana, localizada na cidade de Maputo, focada no desenvolvimento de soluções e realizações de projectos, tendo como ponto primordial proporcionar aos nossos clientes produtos e serviços de alta qualidade com métodos e tecnologias mais recentes de acordo com as suas necessidades. Fundada em 2010, a nossa empresa é dirigida por profissionais altamente qualificados e com vasta experiência no fornecimento de diversos Equipamentos de Laboratório para às áreas de: Ensino e Investigação, Saúde, Águas, Ambiente e Minas, onde transmitimos segurança e confiabilidade através dos equipamentos que fornecemos.

Em nosso portfólio, após 9 anos de experiência, contabiliza-se como grande factor de destaque, a qualidade na execução dos nossos trabalhos, a formação e a fiel manutenção dos equipamentos o que nos qualifica como uma empresa respeitada e sempre indicada por nossos clientes.`;

export const MISSION_TEXT = "Projectar e implementar soluções inovadoras e serviços que satisfaçam as necessidades e requisitos dos nossos clientes; Garantir um serviço de assistência após venda de elevada qualidade e eficiência; Apostar em vencer pela qualidade dos serviços prestados, procurando as melhores práticas, as soluções mais inovadoras e eficientes com procedimentos mais eficazes.";

export const VISION_TEXT = "Assumir cada vez mais um papel de empresa de referência em Moçambique no Fornecimento de Equipamentos Laboratoriais no mercado. Destacarmo-nos nas nossas áreas de negócio como empresa inovadora, diferenciada no produto e na globalidade do serviço; Consolidar a nossa posição como empresa de referência em todo o processo: fornecimento de equipamento, treinamento, instalação, reparação e manutenção; Valorizar a responsabilidade social e garantir viabilidade económica, satisfazendo trabalhadores e acionistas.";

export const VALUES: ValueItem[] = [
  {
    title: "Inovação",
    description: "Nas soluções concebidas.",
    icon: <Lightbulb className="w-6 h-6" />
  },
  {
    title: "Eficiência",
    description: "Nas respostas a qualquer solicitação.",
    icon: <Activity className="w-6 h-6" />
  },
  {
    title: "Eficácia",
    description: "Nos processos adoptados.",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: "Honestidade",
    description: "No relacionamento com Clientes, Fornecedores e Parceiros.",
    icon: <HeartHandshake className="w-6 h-6" />
  },
  {
    title: "Responsabilidade Social",
    description: "Compatibilizando a ética com a actividade desenvolvida.",
    icon: <Users className="w-6 h-6" />
  }
];

export const SERVICES: ServiceSection[] = [
  {
    id: 'ensino',
    title: "Ensino e Investigação",
    shortDescription: "Equipamentos didácticos, laboratoriais e de investigação para escolas e universidades.",
    fullDescription: "Nesta área possuímos uma vasta gama de equipamentos de Laboratórios para diversas Instituições, nomeadamente Ensino Superior e Laboratórios de Investigação, Ensino Técnico Profissional, Ensino Secundário e Ensino Primário.",
    details: [
      "Ciências Naturais (Biologia, Geologia)",
      "Física e Química",
      "Eletrotecnia e Electrónica",
      "Mecânica",
      "Construção Civil",
      "Agricultura",
      "Mobiliário e Desporto"
    ],
    image: "https://picsum.photos/id/20/800/600"
  },
  {
    id: 'saude',
    title: "Saúde",
    shortDescription: "Equipamentos hospitalares, laboratoriais, de investigação e reagentes.",
    fullDescription: "Com o objectivo de desenvolver o sistema da saúde no País, fornecemos equipamentos de qualidade e de alta tecnologia para a prevenção, o diagnóstico e combate aos problemas de saúde.",
    details: [
      "Equipamentos e Mobiliário Hospitalar",
      "Aparelhos de Rx, CT (Tomografia Computorizada), MRI (Ressonância Magnética)",
      "Equipamentos para Centros de Diagnósticos",
      "Tele-radiologia",
      "Soluções de detenção da tuberculose",
      "OneStopTB Clínicas",
      "Sistemas de Decisão Clínica Automático"
    ],
    image: "https://picsum.photos/id/48/800/600"
  },
  {
    id: 'aguas',
    title: "Águas",
    shortDescription: "Sistemas de monitorização da água, tratamento e instrumentação.",
    fullDescription: "Nesta área o nosso foco é proporcionar aos nossos clientes facilidade na aquisição de equipamentos para melhoramento da qualidade de água e a respectiva medição.",
    details: [
      "Caudalimetros para controlo de perdas",
      "Contadores pré-pagos e kits de corte",
      "Contadores mecânicos",
      "Data Loggers e Telemetria",
      "Instrumentação e Monitorização de Recursos Hídricos",
      "Sistemas de tratamento de águas e desinfeção",
      "Dessalinizadoras e ETARs"
    ],
    image: "https://picsum.photos/id/447/800/600"
  },
  {
    id: 'ambiente',
    title: "Ambiente",
    shortDescription: "Monitorização do ar, solo e oceanografia.",
    fullDescription: "O nosso grande propósito é disponibilizar nesta área soluções sustentáveis para o melhoramento do meio ambiente, fornecendo diversos equipamentos laboratoriais e de campo.",
    details: [
      "Clima (Estações Meteorológicas)",
      "Qualidade do Ar (Deteção do Ar)",
      "Ruido e Vibração (Vibrómetros e Sonómetros)",
      "Recursos Naturais (Data Loggers)",
      "Oceanografia (Sondas Oceanográficas)"
    ],
    image: "https://picsum.photos/id/28/800/600"
  },
  {
    id: 'minas',
    title: "Minas",
    shortDescription: "Equipamentos para geofísica, diagrafia e análise de rochas.",
    fullDescription: "De modo a contribuir para o desenvolvimento deste sector e tendo em conta a proteção ambiental para a defesa do património natural, dispomos de equipamentos para serviços de laboratório de alta tecnologia mineira e ambiental.",
    details: [
      "Equipamentos de Diagrafia para águas subterrâneas",
      "Espectrómetro de Absorção Atómica (AAS)",
      "Magnetómetro/gradiómetros",
      "Gravimetria, Resistividade, Sísmica",
      "Microscopia e Produção de lâminas de rochas",
      "Rochas e Agregados",
      "XRF, XRD e Análises"
    ],
    image: "https://picsum.photos/id/212/800/600"
  }
];

export const NEWS_ITEM: NewsItem = {
  id: "qualidade-agua",
  title: "Melhoria da Qualidade da Água no País",
  date: "April 2, 2019",
  summary: "Triónica Moçambique forma técnicos da Direcção Nacional de Gestão de Recursos Hídricos.",
  content: `Triónica Moçambique forma técnicos da Direcção Nacional de Gestão de Recursos Hídricos para manuseamento de Kits de Análise de Qualidade da Água. Decorreu nos dias 02 a 13 do passado mês de Abril, na sala Pemba do Hotel Tivoli, na Cidade de Maputo, a formação sobre uso dos Kits de Análise de Qualidade da Água, orientada pela Empresa Triónica Moçambique Lda., no âmbito do Contrato Público firmado entre ambas instituições.

A formação contou com a presença de 32 técnicos em representação das diversas Administrações Regionais de Águas do País e foi dirigida pelos formadores George Atongo, Flávio Canudo e Arlindo Nhavotso técnicos da Triónica Moçambique Lda.

Durante o período da formação, os formandos tiveram aulas teóricas e práticas sobre manuseamento de Kits de Análise da Qualidade da Água, essas últimas que decorreram nas Estações de Tratamento de Água do Rio Infulene, Pequenos Libombos e Mozal.`
};

export const REASONS_TO_CHOOSE = [
  { label: "Experiência", value: "9 Anos" },
  { label: "Atendimento", value: "24/7" },
  { label: "Técnicos Qualificados", value: "100%" },
  { label: "Rapidez e Flexibilidade", value: "100%" },
];