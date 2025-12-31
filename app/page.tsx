"use client";

import Link from "next/link";
import { Eye, MessageCircle, MousePointer, Users, ArrowRight, TrendingUp, Target } from "lucide-react";
import { KpiCard } from "@/components/ui/KpiCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ChartCard } from "@/components/ui/ChartCard";
import { InsightBlock } from "@/components/ui/InsightBlock";
import { AudienciaGastoVisitasChart, AudienciaCustoVisitaChart } from "@/components/charts/AudienciaChart";
import { MensagensGastoConversasChart, MensagensCustoConversaChart } from "@/components/charts/MensagensChart";
import { audienciaTotal, mensagensTotal, organicoTotal, formatCurrency, formatNumber, insights } from "@/lib/data";

export default function Home() {
  return (
    <div className="space-y-8 md:space-y-12">
      {/* Hero */}
      <section className="text-center py-6 md:py-10">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
          Eficiencia e previsibilidade para escalar demanda via Meta Ads
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Ultimos 6 meses: foco em visitas ao perfil, conversas no WhatsApp e construcao de marca.
        </p>
      </section>

      {/* KPIs */}
      <section>
        <SectionHeader title="Resultados do Periodo" subtitle="Jul-Dez/2025 (6 meses)" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          <KpiCard
            value={formatCurrency(audienciaTotal.custoPorVisita)}
            label="Custo por Visita ao Perfil"
            sublabel={`${formatNumber(audienciaTotal.visitasPerfil)} visitas totais`}
            icon={Eye}
            change={{ value: "8,6% vs 1o tri", positive: true }}
          />
          <KpiCard
            value={formatCurrency(mensagensTotal.custoPorConversa)}
            label="Custo por Conversa"
            sublabel={`${formatNumber(mensagensTotal.conversasIniciadas)} conversas totais`}
            icon={MessageCircle}
            change={{ value: "47% de reducao", positive: true }}
          />
          <KpiCard
            value={`${audienciaTotal.ctrLink}%`}
            label="CTR Audiencia"
            sublabel={`CPC: ${formatCurrency(audienciaTotal.cpcLink)}`}
            icon={MousePointer}
          />
          <KpiCard
            value={`+${formatNumber(organicoTotal.seguimentos)}`}
            label="Novos Seguidores"
            sublabel="Instagram organico"
            icon={Users}
            secondary
          />
        </div>
      </section>

      {/* Graficos de Tendencia */}
      <section>
        <SectionHeader title="Tendencia de 6 Meses" subtitle="Evolucao mensal das principais metricas" />
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <ChartCard title="Audiencia: Gasto vs Visitas ao Perfil" subtitle="Campanhas de trafego">
            <AudienciaGastoVisitasChart />
          </ChartCard>
          <ChartCard title="Mensagens: Gasto vs Conversas" subtitle="Campanhas de WhatsApp">
            <MensagensGastoConversasChart />
          </ChartCard>
        </div>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6">
          <ChartCard title="Custo por Visita ao Perfil" subtitle="Evolucao mensal">
            <AudienciaCustoVisitaChart />
          </ChartCard>
          <ChartCard title="Custo por Conversa" subtitle="Evolucao mensal">
            <MensagensCustoConversaChart />
          </ChartCard>
        </div>
      </section>

      {/* O que melhorou */}
      <section>
        <SectionHeader title="O que Melhorou" subtitle="Principais conquistas do periodo" />
        <div className="grid md:grid-cols-2 gap-3 md:gap-4">
          <InsightBlock text="CTR de 3,33% - muito acima do benchmark de 0,7%-1,2% do setor de joias" type="success" />
          <InsightBlock text="CPC de R$ 0,34 - significativamente abaixo do benchmark de R$ 2,17-6,51" type="success" />
          <InsightBlock text="Custo por conversa caiu 47% no 2o semestre (de R$ 24,42 para R$ 12,99)" type="success" />
          <InsightBlock text="Dezembro teve o melhor custo por conversa: apenas R$ 8,22" type="success" />
          <InsightBlock text="Seguimentos organicos cresceram 266% no 2o trimestre" type="info" />
          <InsightBlock text="494 conversas no WhatsApp em 5 meses de campanha ativa" type="info" />
        </div>
      </section>

      {/* CTAs */}
      <section className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-4">
        <Link
          href="/performance"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors"
        >
          <Target className="w-5 h-5" />
          Ver Performance Detalhada
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/proposta"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
        >
          <TrendingUp className="w-5 h-5" />
          Ver Proposta
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
