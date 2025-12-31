"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, BarChart, Bar } from "recharts";
import { audienciaMensal } from "@/lib/data";

export function AudienciaGastoVisitasChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={audienciaMensal} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="mes" tick={{ fontSize: 12 }} stroke="#6b7280" />
        <YAxis yAxisId="left" tick={{ fontSize: 12 }} stroke="#6b7280" />
        <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} stroke="#6b7280" />
        <Tooltip
          contentStyle={{ fontSize: 12, borderRadius: 8 }}
          formatter={(value, name) => {
            const numValue = Number(value) || 0;
            if (name === "Gasto") return [`R$ ${numValue.toFixed(2)}`, name];
            return [numValue.toLocaleString("pt-BR"), name];
          }}
        />
        <Legend wrapperStyle={{ fontSize: 12 }} />
        <Bar yAxisId="left" dataKey="gasto" name="Gasto" fill="#b45309" radius={[4, 4, 0, 0]} />
        <Bar yAxisId="right" dataKey="visitasPerfil" name="Visitas ao Perfil" fill="#fbbf24" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function AudienciaCustoVisitaChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={audienciaMensal} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="mes" tick={{ fontSize: 12 }} stroke="#6b7280" />
        <YAxis tick={{ fontSize: 12 }} stroke="#6b7280" domain={[0, 0.5]} />
        <Tooltip
          contentStyle={{ fontSize: 12, borderRadius: 8 }}
          formatter={(value) => [`R$ ${(Number(value) || 0).toFixed(2)}`, "Custo/Visita"]}
        />
        <Line
          type="monotone"
          dataKey="custoVisita"
          name="Custo por Visita"
          stroke="#b45309"
          strokeWidth={2}
          dot={{ fill: "#b45309", r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export function AudienciaCTRCPCChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={audienciaMensal} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="mes" tick={{ fontSize: 12 }} stroke="#6b7280" />
        <YAxis yAxisId="left" tick={{ fontSize: 12 }} stroke="#6b7280" />
        <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} stroke="#6b7280" />
        <Tooltip
          contentStyle={{ fontSize: 12, borderRadius: 8 }}
          formatter={(value, name) => {
            const numValue = Number(value) || 0;
            if (name === "CTR") return [`${numValue.toFixed(2)}%`, name];
            return [`R$ ${numValue.toFixed(2)}`, name];
          }}
        />
        <Legend wrapperStyle={{ fontSize: 12 }} />
        <Line yAxisId="left" type="monotone" dataKey="ctr" name="CTR" stroke="#059669" strokeWidth={2} dot={{ fill: "#059669", r: 4 }} />
        <Line yAxisId="right" type="monotone" dataKey="cpc" name="CPC" stroke="#b45309" strokeWidth={2} dot={{ fill: "#b45309", r: 4 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}
