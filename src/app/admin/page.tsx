"use client";

import { useState, useEffect } from 'react';
import { Download, Users } from 'lucide-react';

interface Inscricao {
  dataHora: string;
  nomeCompleto: string;
  ra: string;
  telefone: string;
  nivelPython: string;
  nivelEstatistica: string;
  nivelML: string;
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
      const response = await fetch('/api/admin/inscricoes');
      if (response.ok) {
        const data = await response.json();
        setInscricoes(data.inscriptions || []);
      }
    } catch (error) {
      console.error('Erro ao carregar inscrições:', error);
    } finally {
      setLoading(false);
    }
  };

  const baixarCSV = async () => {
    try {
      const response = await fetch('/api/admin/download-csv');
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `inscricoes_dswa_${new Date().toISOString().split('T')[0]}.csv`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } else {
        alert('Erro ao baixar CSV');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao baixar CSV');
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
            <button
              onClick={baixarCSV}
              className="flex items-center space-x-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors w-full justify-center"
            >
              <Download className="w-5 h-5" />
              <span>Baixar CSV</span>
            </button>
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
                        {inscricao.nomeCompleto}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {inscricao.ra}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {inscricao.telefone}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {inscricao.nivelPython}/5
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {inscricao.nivelML}/5
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {inscricao.dataHora?.split(' ')[0] || '-'}
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