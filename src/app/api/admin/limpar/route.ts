import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function DELETE() {
  try {
    // Limpar todas as inscrições
    const { error } = await supabase
      .from('inscricoes')
      .delete()
      .neq('id', 0); // Deletar todos os registros
    
    if (error) {
      console.error('Erro ao limpar inscrições:', error);
      return NextResponse.json({ error: 'Erro ao limpar inscrições' }, { status: 500 });
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Todas as inscrições foram removidas com sucesso!' 
    });
  } catch (error) {
    console.error('Erro ao limpar inscrições:', error);
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
  }
}