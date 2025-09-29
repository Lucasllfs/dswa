"use client";

import { useState, useEffect } from 'react';
import { Download, Users, ToggleLeft, ToggleRight, Trash2 } from 'lucide-react';
import { INSCRICOES_CONFIG } from '@/lib/config';

interface Inscricao {
  id: number;
  created_at: string;
  nome_completo: string;
  ra: string;
  telefone: string;
  nivel_python: number;
  nivel_estatistica: number;
  nivel_ml: number;
  motivacao: string;
}

export default function AdminPage() {
  const [inscricoes, setInscricoes] = useState<Inscricao[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInscricoes();
  }, []);

  const fetchInscricoes = async () => {
    try {
      const response = await fetch('/api/admin');
      if (response.ok) {
        const data = await response.json();
        setInscricoes(data.inscricoes || []);
      }
    } catch (error) {
      console.error('Erro ao carregar inscrições:', error);
    } finally {
      setLoading(false);
    }
  };

  const baixarCSV = () => {
    if (inscricoes.length === 0) {
      alert('Nenhuma inscrição para exportar');
      return;
    }

    // Criar CSV
    const header = 'Data/Hora,Nome Completo,RA,Telefone,Nível Python,Nível Estatística,Nível ML,Motivação\n';
    const csvContent = inscricoes.map(inscricao => 
      `"${new Date(inscricao.created_at).toLocaleString('pt-BR')}","${inscricao.nome_completo}","${inscricao.ra}","${inscricao.telefone}","${inscricao.nivel_python}","${inscricao.nivel_estatistica}","${inscricao.nivel_ml}","${inscricao.motivacao?.replace(/"/g, '""') || ''}"`
    ).join('\n');

    const csvData = header + csvContent;
    
    // Criar e baixar arquivo
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `inscricoes_dswa_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const limparInscricoes = async () => {
    if (!confirm('Tem certeza que deseja deletar TODAS as inscrições? Esta ação não pode ser desfeita.')) {
      return;
    }

    try {
      const response = await fetch('/api/admin/limpar', {
        method: 'DELETE'
      });

      if (response.ok) {
        setInscricoes([]);
        alert('Todas as inscrições foram removidas com sucesso!');
      } else {
        alert('Erro ao limpar inscrições');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao limpar inscrições');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">Admin - DSWA</h1>
          <p className="text-gray-600">Gerenciar inscrições</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-50 p-6 rounded-lg border">
            <div className="flex items-center">
              <Users className="w-8 h-8 text-black mr-3" />
              <div>
                <p className="text-sm text-gray-600">Total de Inscrições</p>
                <p className="text-2xl font-bold text-black">{inscricoes.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Status das Inscrições</p>
                <p className="text-lg font-bold text-black">
                  {INSCRICOES_CONFIG.ativas ? 'Abertas' : 'Fechadas'}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Edite src/lib/config.ts para alterar
                </p>
              </div>
              <div className="p-2">
                {INSCRICOES_CONFIG.ativas ? (
                  <ToggleRight className="w-8 h-8 text-green-600" />
                ) : (
                  <ToggleLeft className="w-8 h-8 text-gray-400" />
                )}
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border">
            <button
              onClick={baixarCSV}
              className="flex items-center space-x-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors w-full justify-center"
            >
              <Download className="w-5 h-5" />
              <span>Baixar CSV</span>
            </button>
          </div>
        </div>

        {/* Botão de limpar separado */}
        <div className="mb-8">
          <div className="bg-red-50 p-6 rounded-lg border border-red-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-red-800">Zona de Perigo</h3>
                <p className="text-sm text-red-600">Esta ação não pode ser desfeita</p>
              </div>
              <button
                onClick={limparInscricoes}
                className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
              >
                <Trash2 className="w-5 h-5" />
                <span>Limpar Todas as Inscrições</span>
              </button>
            </div>
          </div>
        </div>

        {/* Lista de Inscrições */}
        <div className="bg-white border rounded-lg overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b">
            <h2 className="text-lg font-semibold text-black">
              Inscrições ({inscricoes.length})
            </h2>
          </div>

          {inscricoes.length === 0 ? (
            <div className="p-8 text-center">
              <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Nenhuma inscrição encontrada</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                      Nome
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                      RA
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                      Telefone
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                      Python
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                      ML
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                      Data
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {inscricoes.map((inscricao, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {inscricao.nome_completo}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {inscricao.ra}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {inscricao.telefone}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {inscricao.nivel_python}/5
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {inscricao.nivel_ml}/5
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {new Date(inscricao.created_at).toLocaleDateString('pt-BR')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}