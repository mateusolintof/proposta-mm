"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { Calendar, Target, MessageCircle, Sparkles, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const roadmap = [
  {
    periodo: "30 dias",
    titulo: "Quick Wins e Otimizacao",
    cor: "amber",
    itens: [
      "Auditoria completa das campanhas atuais e identificacao de oportunidades",
      "Testes A/B de criativos: novos angulos de copy e formatos (carrossel vs video)",
      "Refinamento de publicos: exclusao de baixa performance, expansao de lookalikes",
      "Otimizacao de lances e orcamentos por horario de maior conversao",
      "Revisao de landing pages e fluxo de WhatsApp",
    ],
  },
  {
    periodo: "60 dias",
    titulo: "Escala e Remarketing",
    cor: "green",
    itens: [
      "Implementacao de estrutura de remarketing em camadas (7d, 14d, 30d)",
      "Escala gradual das campanhas vencedoras mantendo eficiencia",
      "Desenvolvimento de criativos sazonais (Dia das Maes, Namorados)",
      "Testes de novos objetivos de campanha (Advantage+)",
      "Integracao de UGC (conteudo gerado por clientes) nos anuncios",
    ],
  },
  {
    periodo: "90 dias",
    titulo: "Consolidacao e Previsibilidade",
    cor: "blue",
    itens: [
      "Estrutura de campanhas evergreen consolidada",
      "Playbook de criativos validado por tipo de produto",
      "Sistema de monitoramento e alertas de performance",
      "Projecao de resultados para proximos trimestres",
      "Relatorio executivo de aprendizados e proximos passos",
    ],
  },
];

const estrategias = [
  {
    titulo: "Criativos",
    icon: Sparkles,
    cor: "amber",
    itens: [
      "Testes semanais de 2-3 novos criativos",
      "Mix de formatos: estatico, carrossel e video curto",
      "Angulos de copy: escassez, social proof, beneficios",
      "Criativos especificos por colecao/produto",
    ],
  },
  {
    titulo: "Estrutura de Campanhas",
    icon: Target,
    cor: "green",
    itens: [
      "Prospecting: publicos frios e lookalikes",
      "Remarketing: visitantes, engajadores, carrinhos",
      "Retencao: clientes existentes para recompra",
      "Budget split: 60% prospecting, 40% remarketing",
    ],
  },
  {
    titulo: "WhatsApp",
    icon: MessageCircle,
    cor: "blue",
    itens: [
      "SLA de resposta: maximo 15 minutos em horario comercial",
      "Scripts de qualificacao e objecoes",
      "Automacao de mensagens de boas-vindas",
      "Follow-up estruturado para leads nao convertidos",
    ],
  },
  {
    titulo: "Sazonalidade",
    icon: Calendar,
    cor: "purple",
    itens: [
      "Calendario promocional anual definido",
      "Antecedencia de 30 dias para datas comemorativas",
      "Criativos e ofertas especificas por ocasiao",
      "Budget adicional em periodos de pico",
    ],
  },
];

const riscos = [
  {
    risco: "Aumento de CPM em datas sazonais",
    mitigacao: "Planejamento antecipado e budget reserva de 20%",
  },
  {
    risco: "Fadiga criativa e queda de CTR",
    mitigacao: "Rotacao semanal de criativos e testes constantes",
  },
  {
    risco: "Tempo de resposta no WhatsApp",
    mitigacao: "Treinamento de equipe e automacoes de primeiro contato",
  },
  {
    risco: "Mudancas no algoritmo do Meta",
    mitigacao: "Diversificacao de objetivos e acompanhamento de updates",
  },
];

export default function PlanoPage() {
  return (
    <div className="space-y-8 md:space-y-12">
      <SectionHeader
        title="Plano 30/60/90 Dias"
        subtitle="Estrategia de crescimento estruturado para o proximo trimestre"
      />

      {/* Roadmap */}
      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Roadmap de Execucao</h3>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {roadmap.map((fase) => (
            <div
              key={fase.periodo}
              className={`bg-white rounded-xl shadow-md border-t-4 p-4 md:p-6 ${
                fase.cor === "amber" ? "border-amber-500" :
                fase.cor === "green" ? "border-green-500" : "border-blue-500"
              }`}
            >
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-3 ${
                fase.cor === "amber" ? "bg-amber-100 text-amber-700" :
                fase.cor === "green" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
              }`}>
                <Calendar className="w-4 h-4" />
                {fase.periodo}
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">{fase.titulo}</h4>
              <ul className="space-y-2">
                {fase.itens.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                      fase.cor === "amber" ? "text-amber-500" :
                      fase.cor === "green" ? "text-green-500" : "text-blue-500"
                    }`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Estrategias por Alavanca */}
      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Estrategias por Alavanca</h3>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {estrategias.map((estrategia) => {
            const Icon = estrategia.icon;
            return (
              <div
                key={estrategia.titulo}
                className="bg-white rounded-xl shadow-md p-4 md:p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${
                    estrategia.cor === "amber" ? "bg-amber-100" :
                    estrategia.cor === "green" ? "bg-green-100" :
                    estrategia.cor === "blue" ? "bg-blue-100" : "bg-purple-100"
                  }`}>
                    <Icon className={`w-5 h-5 ${
                      estrategia.cor === "amber" ? "text-amber-600" :
                      estrategia.cor === "green" ? "text-green-600" :
                      estrategia.cor === "blue" ? "text-blue-600" : "text-purple-600"
                    }`} />
                  </div>
                  <h4 className="text-base font-semibold text-gray-900">{estrategia.titulo}</h4>
                </div>
                <ul className="space-y-2">
                  {estrategia.itens.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${
                        estrategia.cor === "amber" ? "bg-amber-400" :
                        estrategia.cor === "green" ? "bg-green-400" :
                        estrategia.cor === "blue" ? "bg-blue-400" : "bg-purple-400"
                      }`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Riscos e Mitigacao */}
      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Riscos e Mitigacao</h3>
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-500" />
                    Risco
                  </div>
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Mitigacao
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {riscos.map((item, i) => (
                <tr key={i} className="border-t border-gray-100">
                  <td className="py-3 px-4 text-sm text-gray-700">{item.risco}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{item.mitigacao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="flex justify-center pt-4">
        <Link
          href="/proposta"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
        >
          Ver Proposta e Valores
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
