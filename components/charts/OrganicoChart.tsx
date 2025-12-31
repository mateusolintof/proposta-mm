"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, BarChart, Bar, ComposedChart } from "recharts";
import { organicoMensal } from "@/lib/data";

export function OrganicoAlcanceSeguimentosChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <ComposedChart data={organicoMensal} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="mes" tick={{ fontSize: 12 }} stroke="#6b7280" />
        <YAxis yAxisId="left" tick={{ fontSize: 12 }} stroke="#6b7280" />
        <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} stroke="#6b7280" />
        <Tooltip
          contentStyle={{ fontSize: 12, borderRadius: 8 }}
          formatter={(value) => [(Number(value) || 0).toLocaleString("pt-BR")]}
        />
        <Legend wrapperStyle={{ fontSize: 12 }} />
        <Bar yAxisId="left" dataKey="alcance" name="Alcance" fill="#7c3aed" radius={[4, 4, 0, 0]} />
        <Line yAxisId="right" type="monotone" dataKey="seguimentos" name="Seguimentos" stroke="#a855f7" strokeWidth={2} dot={{ fill: "#a855f7", r: 5 }} />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

export function OrganicoEngajamentoChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={organicoMensal} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="mes" tick={{ fontSize: 12 }} stroke="#6b7280" />
        <YAxis tick={{ fontSize: 12 }} stroke="#6b7280" />
        <Tooltip
          contentStyle={{ fontSize: 12, borderRadius: 8 }}
          formatter={(value) => [(Number(value) || 0).toLocaleString("pt-BR")]}
        />
        <Legend wrapperStyle={{ fontSize: 12 }} />
        <Bar dataKey="curtidas" name="Curtidas" fill="#7c3aed" radius={[4, 4, 0, 0]} />
        <Bar dataKey="comentarios" name="Comentarios" fill="#a855f7" radius={[4, 4, 0, 0]} />
        <Bar dataKey="salvamentos" name="Salvamentos" fill="#c4b5fd" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function OrganicoPostsVisualizacoesChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <ComposedChart data={organicoMensal} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="mes" tick={{ fontSize: 12 }} stroke="#6b7280" />
        <YAxis yAxisId="left" tick={{ fontSize: 12 }} stroke="#6b7280" />
        <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} stroke="#6b7280" />
        <Tooltip
          contentStyle={{ fontSize: 12, borderRadius: 8 }}
          formatter={(value) => [(Number(value) || 0).toLocaleString("pt-BR")]}
        />
        <Legend wrapperStyle={{ fontSize: 12 }} />
        <Bar yAxisId="left" dataKey="posts" name="Posts" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
        <Line yAxisId="right" type="monotone" dataKey="visualizacoes" name="Visualizacoes" stroke="#6d28d9" strokeWidth={2} dot={{ fill: "#6d28d9", r: 4 }} />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
