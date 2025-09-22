import { NextRequest, NextResponse } from 'next/server';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

export async function GET() {
  try {
    const csvPath = join(process.cwd(), 'inscricoes.csv');
    
    if (!existsSync(csvPath)) {
      return NextResponse.json(
        { error: 'Arquivo de inscrições não encontrado' },
        { status: 404 }
      );
    }

    const csvContent = readFileSync(csvPath, 'utf8');
    
    return new NextResponse(csvContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="inscricoes_dswa_${new Date().toISOString().split('T')[0]}.csv"`,
      },
    });

  } catch (error) {
    console.error('Erro ao baixar CSV:', error);
    return NextResponse.json(
      { error: 'Erro ao baixar arquivo' },
      { status: 500 }
    );
  }
}
