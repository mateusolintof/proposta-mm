"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { Callout } from "@/components/ui/Callout";
import { proposta, formatCurrency } from "@/lib/data";
import { Check, X, MessageCircle, Mail, Star, Clock, Shield, TrendingUp } from "lucide-react";

const incluso = [
  "Gestao completa de campanhas Meta Ads (Facebook/Instagram)",
  "Criacao e otimizacao de publicos",
  "Testes A/B de criativos e copy",
  "Relatorios mensais de performance",
  "Reunioes quinzenais de alinhamento",
  "Suporte via WhatsApp em horario comercial",
  "Monitoramento diario de metricas",
  "Ajustes de lances e orcamentos",
];

const naoIncluso = [
  "Producao de fotos/videos (responsabilidade do cliente)",
  "Budget de midia (pago diretamente ao Meta)",
  "Gestao de outras plataformas (Google Ads, TikTok)",
  "Landing pages ou desenvolvimento web",
];

const planos = [
  {
    nome: "Mensal",
    valor: proposta.mensal,
    periodo: "/mes",
    destaque: false,
    descricao: "Pagamento mes a mes, sem compromisso de permanencia",
  },
  {
    nome: "Trimestral",
    valor: proposta.trimestral,
    valorMensal: proposta.trimestral / 3,
    periodo: "em 3x",
    destaque: true,
    economia: ((proposta.mensal * 3 - proposta.trimestral) / (proposta.mensal * 3) * 100).toFixed(0),
    descricao: "Melhor custo-beneficio com 13% de economia",
  },
  {
    nome: "Semestral",
    valor: proposta.semestral,
    valorMensal: proposta.semestral / 6,
    periodo: "em 6x",
    destaque: false,
    economia: ((proposta.mensal * 6 - proposta.semestral) / (proposta.mensal * 6) * 100).toFixed(0),
    descricao: "Maximo compromisso com 33% de economia",
  },
];

export default function PropostaPage() {
  const whatsappLink = `https://wa.me/5562998621000?text=${encodeURIComponent("Ola! Vi a proposta de renovacao e gostaria de conversar.")}`;
  const emailLink = `mailto:${proposta.contato.email}?subject=${encodeURIComponent("Proposta de Renovacao - Trafego Pago")}&body=${encodeURIComponent("Ola Mateus,\n\nVi a proposta de renovacao e gostaria de conversar sobre os detalhes.\n\nAguardo seu retorno.")}`;

  return (
    <div className="space-y-8 md:space-y-12">
      <SectionHeader
        title="Proposta de Renovacao"
        subtitle="Investimento e condicoes para continuidade do trabalho"
        centered
      />

      {/* Contexto */}
      <section className="max-w-2xl mx-auto">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 md:p-6">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-amber-900 mb-1">Historico da Parceria</h4>
              <p className="text-sm text-amber-800">
                A parceria iniciou em 2023 com valor de R$ 1.200/mes (fechamento inicial em R$ 2.200/trimestre).
                Apos quase 2 anos e meio de trabalho conjunto e resultados consistentes, esta e a primeira proposta de reajuste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Planos */}
      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Opcoes de Investimento</h3>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {planos.map((plano) => (
            <div
              key={plano.nome}
              className={`relative bg-white rounded-xl shadow-md p-5 md:p-6 ${
                plano.destaque ? "ring-2 ring-amber-500 scale-105" : "border border-gray-200"
              }`}
            >
              {plano.destaque && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-500 text-white text-xs font-medium rounded-full">
                    <Star className="w-3 h-3" /> Recomendado
                  </span>
                </div>
              )}
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-1">{plano.nome}</h4>
                <div className="mb-2">
                  <span className={`text-3xl md:text-4xl font-bold ${plano.destaque ? "text-amber-600" : "text-gray-900"}`}>
                    {formatCurrency(plano.valor)}
                  </span>
                  <span className="text-gray-500 text-sm ml-1">{plano.periodo}</span>
                </div>
                {plano.valorMensal && (
                  <p className="text-sm text-gray-500 mb-1">
                    Equivale a {formatCurrency(plano.valorMensal)}/mes
                  </p>
                )}
                {plano.economia && (
                  <p className="text-sm font-medium text-green-600">
                    Economia de {plano.economia}%
                  </p>
                )}
                <p className="text-xs text-gray-500 mt-3">{plano.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* O que esta incluso */}
      <section className="grid md:grid-cols-2 gap-6 md:gap-8">
        <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
          <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
            <Check className="w-5 h-5 text-green-500" />
            O que esta incluso
          </h4>
          <ul className="space-y-3">
            {incluso.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
          <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
            <X className="w-5 h-5 text-red-500" />
            Nao incluso
          </h4>
          <ul className="space-y-3">
            {naoIncluso.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Condicoes */}
      <section className="max-w-2xl mx-auto">
        <div className="bg-gray-50 rounded-xl p-4 md:p-6">
          <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
            <Shield className="w-5 h-5 text-gray-600" />
            Condicoes
          </h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Pagamento antecipado no inicio de cada periodo</li>
            <li>• Aviso previo de 30 dias para cancelamento</li>
            <li>• Budget de midia definido em conjunto (recomendado: R$ 3.000-5.000/mes)</li>
            <li>• Acesso a conta de anuncios e materiais necessarios</li>
            <li>• Comunicacao via WhatsApp e reunioes por video</li>
          </ul>
        </div>
      </section>

      {/* Garantias */}
      <section className="max-w-2xl mx-auto">
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 md:p-6">
          <div className="flex items-start gap-3">
            <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-green-900 mb-1">Compromisso com Resultados</h4>
              <p className="text-sm text-green-800">
                Continuaremos trabalhando com foco em eficiencia e previsibilidade.
                Os resultados dos ultimos 6 meses (CTR 3x acima do mercado, custo por conversa reduzido em 47%)
                sao a base para escalarmos com seguranca.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-4">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          Falar no WhatsApp
        </a>
        <a
          href={emailLink}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
        >
          <Mail className="w-5 h-5" />
          Enviar Email
        </a>
      </section>

      {/* Contato */}
      <section className="text-center text-sm text-gray-500 pt-4">
        <p>
          <strong>WhatsApp:</strong> {proposta.contato.whatsapp} |{" "}
          <strong>Email:</strong> {proposta.contato.email}
        </p>
      </section>
    </div>
  );
}
