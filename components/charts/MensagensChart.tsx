"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Bar, ComposedChart } from "recharts";
import { mensagensMensal } from "@/lib/data";

export function MensagensGastoConversasChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <ComposedChart data={mensagensMensal} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="mes" tick={{ fontSize: 12 }} stroke="#6b7280" />
        <YAxis yAxisId="left" tick={{ fontSize: 12 }} stroke="#6b7280" />
        <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} stroke="#6b7280" />
        <Tooltip
          contentStyle={{ fontSize: 12, borderRadius: 8 }}
          formatter={(value, name) => {
            const numValue = Number(value) || 0;
            if (name === "Gasto") return [`R$ ${numValue.toFixed(2)}`, name];
            return [numValue, name];
          }}
        />
        <Legend wrapperStyle={{ fontSize: 12 }} />
        <Bar yAxisId="left" dataKey="gasto" name="Gasto" fill="#16a34a" radius={[4, 4, 0, 0]} />
        <Line yAxisId="right" type="monotone" dataKey="conversas" name="Conversas" stroke="#166534" strokeWidth={2} dot={{ fill: "#166534", r: 5 }} />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

export function MensagensCustoConversaChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={mensagensMensal} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="mes" tick={{ fontSize: 12 }} stroke="#6b7280" />
        <YAxis tick={{ fontSize: 12 }} stroke="#6b7280" domain={[0, 30]} />
        <Tooltip
          contentStyle={{ fontSize: 12, borderRadius: 8 }}
          formatter={(value) => [`R$ ${(Number(value) || 0).toFixed(2)}`, "Custo/Conversa"]}
        />
        <Line
          type="monotone"
          dataKey="custoConversa"
          name="Custo por Conversa"
          stroke="#16a34a"
          strokeWidth={2}
          dot={{ fill: "#16a34a", r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export function MensagensCTRChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={mensagensMensal} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="mes" tick={{ fontSize: 12 }} stroke="#6b7280" />
        <YAxis tick={{ fontSize: 12 }} stroke="#6b7280" domain={[0, 2]} />
        <Tooltip
          contentStyle={{ fontSize: 12, borderRadius: 8 }}
          formatter={(value) => [`${(Number(value) || 0).toFixed(2)}%`, "CTR"]}
        />
        <Line
          type="monotone"
          dataKey="ctr"
          name="CTR"
          stroke="#059669"
          strokeWidth={2}
          dot={{ fill: "#059669", r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
