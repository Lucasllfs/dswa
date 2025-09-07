import { NextRequest, NextResponse } from 'next/server';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

export async function GET() {
  try {
    const csvPath = join(process.cwd(), 'inscricoes.csv');
    
    if (!existsSync(csvPath)) {
      return NextResponse.json(
        { inscriptions: [], message: 'Nenhuma inscrição encontrada' },
        { status: 200 }
      );
    }

    const csvContent = readFileSync(csvPath, 'utf8');
    const lines = csvContent.trim().split('\n');
    
    if (lines.length <= 1) {
      return NextResponse.json(
        { inscriptions: [], message: 'Arquivo CSV vazio' },
        { status: 200 }
      );
    }

    // Pular o cabeçalho e processar as linhas
    const inscriptions = lines.slice(1).map(line => {
      // Parse CSV considerando aspas
      const matches = line.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);
      if (!matches || matches.length < 8) return null;
      
      return {
        dataHora: matches[0]?.replace(/"/g, '') || '',
        nomeCompleto: matches[1]?.replace(/"/g, '') || '',
        ra: matches[2]?.replace(/"/g, '') || '',
        telefone: matches[3]?.replace(/"/g, '') || '',
        nivelPython: matches[4]?.replace(/"/g, '') || '0',
        nivelEstatistica: matches[5]?.replace(/"/g, '') || '0',
        nivelML: matches[6]?.replace(/"/g, '') || '0',
        motivacao: matches[7]?.replace(/"/g, '').replace(/""/g, '"') || ''
      };
    }).filter(Boolean);

    return NextResponse.json(
      { 
        inscriptions: inscriptions.reverse(), // Mais recentes primeiro
        total: inscriptions.length 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erro ao ler CSV:', error);
    return NextResponse.json(
      { error: 'Erro ao carregar inscrições' },
      { status: 500 }
    );
  }
}
