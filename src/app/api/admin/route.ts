import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('inscricoes')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Erro Supabase:', error);
      return NextResponse.json(
        { error: 'Erro ao buscar inscrições' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        inscricoes: data || [],
        total: data?.length || 0
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erro ao buscar inscrições:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
