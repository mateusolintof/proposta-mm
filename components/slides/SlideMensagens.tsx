"use client";

import { motion } from "framer-motion";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { SlideContent, SlideHeader } from "./SlideContainer";
import { mensagensMensal } from "@/lib/data";

const chartData = mensagensMensal.map((item) => ({
  mes: item.mes,
  gasto: item.gasto,
  conversas: item.conversas,
  custoConversa: item.custoConversa,
}));

export function SlideMensagens() {
  return (
    <SlideContent>
      <SlideHeader
        badge="Performance"
        title="Campanhas de Mensagens"
        subtitle="Conversas iniciadas no WhatsApp"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="card p-4 md:p-6"
        >
          <h3 className="text-lg font-semibold mb-4 text-[var(--text-primary)]">
            Gasto vs Conversas
          </h3>
          <div className="h-[250px] md:h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="mes" tick={{ fill: "#A3A3A3", fontSize: 12 }} stroke="transparent" />
                <YAxis yAxisId="left" tick={{ fill: "#A3A3A3", fontSize: 12 }} stroke="transparent" />
                <YAxis yAxisId="right" orientation="right" tick={{ fill: "#A3A3A3", fontSize: 12 }} stroke="transparent" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#141414",
                    border: "1px solid rgba(212, 175, 55, 0.2)",
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                  formatter={(value, name) => {
                    const numValue = Number(value) || 0;
                    if (name === "Gasto") return [`R$ ${numValue.toFixed(2)}`, name];
                    return [numValue.toLocaleString("pt-BR"), name];
                  }}
                />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Bar yAxisId="left" dataKey="gasto" name="Gasto" fill="#8B7500" radius={[4, 4, 0, 0]} />
                <Line yAxisId="right" type="monotone" dataKey="conversas" name="Conversas" stroke="#D4AF37" strokeWidth={3} dot={{ fill: "#D4AF37", r: 5 }} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="card p-4 md:p-6"
        >
          <h3 className="text-lg font-semibold mb-4 text-[var(--text-primary)]">
            Custo por Conversa (Tendencia)
          </h3>
          <div className="h-[250px] md:h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="mes" tick={{ fill: "#A3A3A3", fontSize: 12 }} stroke="transparent" />
                <YAxis tick={{ fill: "#A3A3A3", fontSize: 12 }} stroke="transparent" domain={[0, 30]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#141414",
                    border: "1px solid rgba(212, 175, 55, 0.2)",
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                  formatter={(value) => [`R$ ${(Number(value) || 0).toFixed(2)}`, "Custo/Conversa"]}
                />
                <Line type="monotone" dataKey="custoConversa" name="Custo/Conversa" stroke="#22C55E" strokeWidth={3} dot={{ fill: "#22C55E", r: 6 }} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-4 p-3 rounded-lg bg-[var(--success-muted)] border border-[var(--success)]/30"
          >
            <p className="text-sm text-[var(--success)]">
              <strong>Reducao de 47%</strong> no custo por conversa (R$ 24,42 → R$ 12,99)
            </p>
          </motion.div>
        </motion.div>
      </div>
    </SlideContent>
  );
}
