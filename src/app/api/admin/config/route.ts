import { NextRequest, NextResponse } from 'next/server';

// Variável simples para controlar o status - começar como false (fechado)
let inscricoesAtivas = false;

export async function POST(request: NextRequest) {
  try {
    const { action, ativas } = await request.json();
    
    if (action === 'toggle') {
      inscricoesAtivas = ativas;
      
      return NextResponse.json({ 
        success: true, 
        message: `Inscrições ${ativas ? 'ativadas' : 'desativadas'} com sucesso!` 
      });
    }
    
    return NextResponse.json({ error: 'Ação inválida' }, { status: 400 });
  } catch (error) {
    console.error('Erro ao atualizar configuração:', error);
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ ativas: inscricoesAtivas });
}