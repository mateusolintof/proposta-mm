"use client";

import { Eye, MessageCircle, MousePointerClick, Users } from "lucide-react";
import { AnimatedKPI } from "../animated/AnimatedKPI";
import { SlideContent, SlideHeader } from "./SlideContainer";
import { audienciaTotal, mensagensTotal, organicoTotal } from "@/lib/data";

export function SlideKPIs() {
  return (
    <SlideContent>
      <SlideHeader
        badge="Resumo Executivo"
        title="Principais Resultados"
        subtitle="Metricas consolidadas do periodo Jul-Dez/2025"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <AnimatedKPI
          value={audienciaTotal.custoPorVisita}
          label="Custo por Visita ao Perfil"
          sublabel={`${audienciaTotal.visitasPerfil.toLocaleString("pt-BR")} visitas totais`}
          type="currency"
          icon={Eye}
          change={{ value: "-8,6% vs 1o tri", positive: true }}
          delay={0}
        />

        <AnimatedKPI
          value={mensagensTotal.custoPorConversa}
          label="Custo por Conversa"
          sublabel={`${mensagensTotal.conversasIniciadas} conversas iniciadas`}
          type="currency"
          icon={MessageCircle}
          change={{ value: "-47% no 2o semestre", positive: true }}
          delay={1}
        />

        <AnimatedKPI
          value={audienciaTotal.ctrLink}
          label="CTR Audiencia"
          sublabel={`CPC: R$ ${audienciaTotal.cpcLink.toFixed(2)}`}
          type="percent"
          icon={MousePointerClick}
          change={{ value: "3x acima do mercado", positive: true }}
          delay={2}
        />

        <AnimatedKPI
          value={organicoTotal.seguimentos}
          label="Novos Seguidores"
          sublabel="Instagram organico"
          type="number"
          icon={Users}
          change={{ value: "+266% no 2o tri", positive: true }}
          secondary
          delay={3}
        />
      </div>
    </SlideContent>
  );
}
