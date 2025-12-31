"use client";

import { useState } from "react";
import { Tabs } from "@/components/ui/Tabs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ChartCard } from "@/components/ui/ChartCard";
import { InsightBlock } from "@/components/ui/InsightBlock";
import { Callout } from "@/components/ui/Callout";
import { KpiCard } from "@/components/ui/KpiCard";
import { AudienciaGastoVisitasChart, AudienciaCustoVisitaChart, AudienciaCTRCPCChart } from "@/components/charts/AudienciaChart";
import { MensagensGastoConversasChart, MensagensCustoConversaChart, MensagensCTRChart } from "@/components/charts/MensagensChart";
import { OrganicoAlcanceSeguimentosChart, OrganicoEngajamentoChart, OrganicoPostsVisualizacoesChart } from "@/components/charts/OrganicoChart";
import {
  audienciaTotal, audienciaMensal, audienciaComparativo,
  mensagensTotal, mensagensMensal, mensagensComparativo,
  organicoTotal, organicoMensal, organicoComparativo,
  insights, benchmarks, formatCurrency, formatNumber
} from "@/lib/data";
import { Eye, MessageCircle, Instagram, TrendingUp, TrendingDown } from "lucide-react";

const tabs = [
  { id: "audiencia", label: "Audiencia (Perfil)" },
  { id: "mensagens", label: "Mensagens (WhatsApp)" },
  { id: "organico", label: "Organico (Feed/Reels)" },
];

export default function PerformancePage() {
  const [activeTab, setActiveTab] = useState("audiencia");

  return (
    <div className="space-y-6 md:space-y-8">
      <SectionHeader
        title="Performance Detalhada"
        subtitle="Analise completa por canal e objetivo de campanha"
      />

      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Audiencia Tab */}
      {activeTab === "audiencia" && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            <KpiCard value={formatCurrency(audienciaTotal.gastoTotal)} label="Gasto Total" icon={Eye} />
            <KpiCard value={formatNumber(audienciaTotal.visitasPerfil)} label="Visitas ao Perfil" />
            <KpiCard value={formatCurrency(audienciaTotal.custoPorVisita)} label="Custo/Visita" />
            <KpiCard value={`${audienciaTotal.ctrLink}%`} label="CTR (link)" />
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <ChartCard title="Gasto vs Visitas ao Perfil" subtitle="Evolucao mensal">
              <AudienciaGastoVisitasChart />
            </ChartCard>
            <ChartCard title="Custo por Visita" subtitle="Evolucao mensal">
              <AudienciaCustoVisitaChart />
            </ChartCard>
          </div>

          <ChartCard title="CTR vs CPC" subtitle="Eficiencia de cliques">
            <AudienciaCTRCPCChart />
          </ChartCard>

          {/* Tabela Mensal */}
          <ChartCard title="Dados Mensais" subtitle="Jul-Dez/2025">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 px-2 font-medium text-gray-600">Mes</th>
                    <th className="text-right py-2 px-2 font-medium text-gray-600">Gasto</th>
                    <th className="text-right py-2 px-2 font-medium text-gray-600">Visitas</th>
                    <th className="text-right py-2 px-2 font-medium text-gray-600">Custo/Visita</th>
                    <th className="text-right py-2 px-2 font-medium text-gray-600">CTR</th>
                    <th className="text-right py-2 px-2 font-medium text-gray-600">CPC</th>
                  </tr>
                </thead>
                <tbody>
                  {audienciaMensal.map((row) => (
                    <tr key={row.mes} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-2 px-2 font-medium">{row.mes}</td>
                      <td className="py-2 px-2 text-right">{formatCurrency(row.gasto)}</td>
                      <td className="py-2 px-2 text-right">{formatNumber(row.visitasPerfil)}</td>
                      <td className="py-2 px-2 text-right">{formatCurrency(row.custoVisita)}</td>
                      <td className="py-2 px-2 text-right">{row.ctr}%</td>
                      <td className="py-2 px-2 text-right">{formatCurrency(row.cpc)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ChartCard>

          {/* Comparativo */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-xl p-4 md:p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Jul-Set/2025</h4>
              <div className="space-y-2 text-sm">
                <p>Visitas ao perfil: <span className="font-medium">{formatNumber(audienciaComparativo.julSet.visitasPerfil)}</span></p>
                <p>Custo/Visita: <span className="font-medium">{formatCurrency(audienciaComparativo.julSet.custoVisita)}</span></p>
                <p>CTR: <span className="font-medium">{audienciaComparativo.julSet.ctr}%</span></p>
              </div>
            </div>
            <div className="bg-amber-50 rounded-xl p-4 md:p-6 border border-amber-200">
              <h4 className="font-semibold text-amber-900 mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" /> Out-Dez/2025
              </h4>
              <div className="space-y-2 text-sm">
                <p>Visitas ao perfil: <span className="font-medium text-amber-700">{formatNumber(audienciaComparativo.outDez.visitasPerfil)} (+14,9%)</span></p>
                <p>Custo/Visita: <span className="font-medium text-amber-700">{formatCurrency(audienciaComparativo.outDez.custoVisita)} (-8,6%)</span></p>
                <p>CTR: <span className="font-medium">{audienciaComparativo.outDez.ctr}%</span></p>
              </div>
            </div>
          </div>

          {/* Insights */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900">Insights</h4>
            {insights.audiencia.map((insight, i) => (
              <InsightBlock key={i} text={insight} type="success" />
            ))}
          </div>

          <Callout text={`Benchmark de mercado (Fashion/Beauty): CTR ${benchmarks.ctr.min}-${benchmarks.ctr.max}% | CPC ${formatCurrency(benchmarks.cpc.min)}-${formatCurrency(benchmarks.cpc.max)}`} />
        </div>
      )}

      {/* Mensagens Tab */}
      {activeTab === "mensagens" && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            <KpiCard value={formatCurrency(mensagensTotal.gastoTotal)} label="Gasto Total" icon={MessageCircle} />
            <KpiCard value={formatNumber(mensagensTotal.conversasIniciadas)} label="Conversas Iniciadas" />
            <KpiCard value={formatCurrency(mensagensTotal.custoPorConversa)} label="Custo/Conversa" />
            <KpiCard value={`${mensagensTotal.ctrLink}%`} label="CTR (link)" />
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <ChartCard title="Gasto vs Conversas" subtitle="Evolucao mensal">
              <MensagensGastoConversasChart />
            </ChartCard>
            <ChartCard title="Custo por Conversa" subtitle="Evolucao mensal">
              <MensagensCustoConversaChart />
            </ChartCard>
          </div>

          <ChartCard title="CTR das Campanhas de Mensagem" subtitle="Evolucao mensal">
            <MensagensCTRChart />
          </ChartCard>

          {/* Tabela Mensal */}
          <ChartCard title="Dados Mensais" subtitle="Ago-Dez/2025">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 px-2 font-medium text-gray-600">Mes</th>
                    <th className="text-right py-2 px-2 font-medium text-gray-600">Gasto</th>
                    <th className="text-right py-2 px-2 font-medium text-gray-600">Conversas</th>
                    <th className="text-right py-2 px-2 font-medium text-gray-600">Custo/Conv.</th>
                    <th className="text-right py-2 px-2 font-medium text-gray-600">CTR</th>
                    <th className="text-right py-2 px-2 font-medium text-gray-600">CPC</th>
                  </tr>
                </thead>
                <tbody>
                  {mensagensMensal.map((row) => (
                    <tr key={row.mes} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-2 px-2 font-medium">{row.mes}</td>
                      <td className="py-2 px-2 text-right">{formatCurrency(row.gasto)}</td>
                      <td className="py-2 px-2 text-right">{row.conversas}</td>
                      <td className="py-2 px-2 text-right">{formatCurrency(row.custoConversa)}</td>
                      <td className="py-2 px-2 text-right">{row.ctr}%</td>
                      <td className="py-2 px-2 text-right">{formatCurrency(row.cpc)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ChartCard>

          {/* Comparativo */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-xl p-4 md:p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Ago-Out/2025</h4>
              <div className="space-y-2 text-sm">
                <p>Conversas: <span className="font-medium">{mensagensComparativo.agoOut.conversas}</span></p>
                <p>Custo/Conversa: <span className="font-medium">{formatCurrency(mensagensComparativo.agoOut.custoConversa)}</span></p>
                <p>CTR: <span className="font-medium">{mensagensComparativo.agoOut.ctr}%</span></p>
              </div>
            </div>
            <div className="bg-green-50 rounded-xl p-4 md:p-6 border border-green-200">
              <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" /> Nov-Dez/2025
              </h4>
              <div className="space-y-2 text-sm">
                <p>Conversas: <span className="font-medium">{mensagensComparativo.novDez.conversas}</span></p>
                <p>Custo/Conversa: <span className="font-medium text-green-700">{formatCurrency(mensagensComparativo.novDez.custoConversa)} (-47%)</span></p>
                <p>CTR: <span className="font-medium text-green-700">{mensagensComparativo.novDez.ctr}% (+90%)</span></p>
              </div>
            </div>
          </div>

          {/* Insights */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900">Insights</h4>
            {insights.mensagens.map((insight, i) => (
              <InsightBlock key={i} text={insight} type="success" />
            ))}
          </div>

          <Callout text={`Benchmark de mercado: Custo por conversa ${formatCurrency(benchmarks.custoConversa.min)}-${formatCurrency(benchmarks.custoConversa.max)}`} />
        </div>
      )}

      {/* Organico Tab */}
      {activeTab === "organico" && (
        <div className="space-y-6">
          <Callout text="Organico e indicador secundario - nao ha atribuicao direta de conversao, mas contribui para construcao de marca e engajamento." type="info" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            <KpiCard value={formatNumber(organicoTotal.posts)} label="Posts Publicados" icon={Instagram} secondary />
            <KpiCard value={formatNumber(organicoTotal.seguimentos)} label="Novos Seguidores" secondary />
            <KpiCard value={formatNumber(organicoTotal.alcance)} label="Alcance Total" secondary />
            <KpiCard value={formatNumber(organicoTotal.visualizacoes)} label="Visualizacoes" secondary />
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <ChartCard title="Alcance vs Seguimentos" subtitle="Evolucao mensal">
              <OrganicoAlcanceSeguimentosChart />
            </ChartCard>
            <ChartCard title="Engajamento" subtitle="Curtidas, comentarios e salvamentos">
              <OrganicoEngajamentoChart />
            </ChartCard>
          </div>

          <ChartCard title="Posts vs Visualizacoes" subtitle="Producao de conteudo">
            <OrganicoPostsVisualizacoesChart />
          </ChartCard>

          {/* Tabela Mensal */}
          <ChartCard title="Dados Mensais" subtitle="Jul-Dez/2025">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 px-2 font-medium text-gray-600">Mes</th>
                    <th className="text-right py-2 px-2 font-medium text-gray-600">Posts</th>
                    <th className="text-right py-2 px-2 font-medium text-gray-600">Alcance</th>
                    <th className="text-right py-2 px-2 font-medium text-gray-600">Curtidas</th>
                    <th className="text-right py-2 px-2 font-medium text-gray-600">Seguimentos</th>
                  </tr>
                </thead>
                <tbody>
                  {organicoMensal.map((row) => (
                    <tr key={row.mes} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-2 px-2 font-medium">{row.mes}</td>
                      <td className="py-2 px-2 text-right">{row.posts}</td>
                      <td className="py-2 px-2 text-right">{formatNumber(row.alcance)}</td>
                      <td className="py-2 px-2 text-right">{formatNumber(row.curtidas)}</td>
                      <td className="py-2 px-2 text-right">{row.seguimentos}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ChartCard>

          {/* Comparativo */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-xl p-4 md:p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Jul-Set/2025</h4>
              <div className="space-y-2 text-sm">
                <p>Posts: <span className="font-medium">{organicoComparativo.julSet.posts}</span></p>
                <p>Alcance: <span className="font-medium">{formatNumber(organicoComparativo.julSet.alcance)}</span></p>
                <p>Seguimentos: <span className="font-medium">{organicoComparativo.julSet.seguimentos}</span></p>
              </div>
            </div>
            <div className="bg-purple-50 rounded-xl p-4 md:p-6 border border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" /> Out-Dez/2025
              </h4>
              <div className="space-y-2 text-sm">
                <p>Posts: <span className="font-medium">{organicoComparativo.outDez.posts} (+50%)</span></p>
                <p>Alcance: <span className="font-medium text-purple-700">{formatNumber(organicoComparativo.outDez.alcance)} (+22%)</span></p>
                <p>Seguimentos: <span className="font-medium text-purple-700">{formatNumber(organicoComparativo.outDez.seguimentos)} (+266%)</span></p>
              </div>
            </div>
          </div>

          {/* Insights */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900">Insights</h4>
            {insights.organico.map((insight, i) => (
              <InsightBlock key={i} text={insight} type="info" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
