"use client";

import { motion } from "framer-motion";
import { Instagram, Eye, Heart, Users, Bookmark } from "lucide-react";
import { SlideContent, SlideHeader } from "./SlideContainer";
import { organicoTotal } from "@/lib/data";
import { NumberTicker } from "../animated/NumberTicker";

interface MetricCardProps {
  icon: React.ElementType;
  value: number;
  label: string;
  delay: number;
}

function MetricCard({ icon: Icon, value, label, delay }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay }}
      className="card p-4 text-center"
    >
      <Icon className="w-6 h-6 mx-auto mb-2 text-purple-400" />
      <p className="text-xl md:text-2xl font-bold text-[var(--text-primary)]">
        <NumberTicker value={value} delay={delay * 1000} />
      </p>
      <p className="text-xs text-[var(--text-muted)] mt-1">{label}</p>
    </motion.div>
  );
}

export function SlideOrganico() {
  return (
    <SlideContent>
      <SlideHeader
        badge="Indicador Secundario"
        title="Instagram Organico"
        subtitle="Metricas de Feed e Reels (complementam o trabalho pago)"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex items-center justify-center gap-2 mb-8"
      >
        <Instagram className="w-6 h-6 text-purple-400" />
        <span className="text-[var(--text-secondary)]">@perfil_cliente</span>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <MetricCard
          icon={Eye}
          value={organicoTotal.alcance}
          label="Alcance total"
          delay={0.3}
        />
        <MetricCard
          icon={Heart}
          value={organicoTotal.curtidas}
          label="Curtidas"
          delay={0.4}
        />
        <MetricCard
          icon={Users}
          value={organicoTotal.seguimentos}
          label="Novos seguidores"
          delay={0.5}
        />
        <MetricCard
          icon={Bookmark}
          value={organicoTotal.salvamentos}
          label="Salvamentos"
          delay={0.6}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <div className="card p-4 text-center border-purple-500/20">
          <p className="text-3xl md:text-4xl font-bold text-purple-400">
            <NumberTicker value={organicoTotal.posts} delay={800} />
          </p>
          <p className="text-sm text-[var(--text-secondary)] mt-1">Posts publicados</p>
        </div>
        <div className="card p-4 text-center border-purple-500/20">
          <p className="text-3xl md:text-4xl font-bold text-purple-400">4.6M</p>
          <p className="text-sm text-[var(--text-secondary)] mt-1">Visualizacoes</p>
        </div>
        <div className="card p-4 text-center border-purple-500/20">
          <p className="text-3xl md:text-4xl font-bold text-purple-400">+266%</p>
          <p className="text-sm text-[var(--text-secondary)] mt-1">Crescimento seguidores</p>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center text-sm text-[var(--text-muted)] mt-6"
      >
        * Metricas organicas sao indicadores secundarios e nao representam atribuicao direta das campanhas pagas
      </motion.p>
    </SlideContent>
  );
}
