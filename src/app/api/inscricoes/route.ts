import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { INSCRICOES_CONFIG } from '@/lib/config';

export async function POST(request: NextRequest) {
  try {
    // Verificar se as inscrições estão ativas diretamente do config
    if (!INSCRICOES_CONFIG.ativas) {
      return NextResponse.json(
        { error: INSCRICOES_CONFIG.mensagemFechadas },
        { status: 403 }
      );
    }

    const formData = await request.json();
    
    console.log('Nova inscrição recebida:', formData);
    
    // Validar dados básicos
    if (!formData.nomeCompleto || !formData.ra || !formData.telefone) {
      return NextResponse.json(
        { error: 'Campos obrigatórios não preenchidos' },
        { status: 400 }
      );
    }

    // Salvar no Supabase
    const { data, error } = await supabase
      .from('inscricoes')
      .insert([
        {
          nome_completo: formData.nomeCompleto,
          ra: formData.ra,
          telefone: formData.telefone,
          nivel_python: formData.pythonLevel,
          nivel_estatistica: formData.estatisticaLevel,
          nivel_ml: formData.mlLevel,
          motivacao: formData.motivacao,
          created_at: new Date().toISOString()
        }
      ])
      .select();

    if (error) {
      console.error('Erro Supabase:', error);
      return NextResponse.json(
        { error: 'Erro ao salvar inscrição' },
        { status: 500 }
      );
    }
    
    console.log(`Inscrição salva: ${formData.nomeCompleto}`);
    
    return NextResponse.json(
      { 
        message: 'Inscrição realizada com sucesso!',
        success: true,
        data: data[0]
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Erro ao processar inscrição:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
