import { NextRequest, NextResponse } from 'next/server';
import { writeFileSync, existsSync, readFileSync } from 'fs';
import { join } from 'path';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    console.log('Nova inscrição recebida:', formData);
    
    // Validar dados básicos
    if (!formData.nomeCompleto || !formData.ra || !formData.telefone) {
      return NextResponse.json(
        { error: 'Campos obrigatórios não preenchidos' },
        { status: 400 }
      );
    }

    // Caminho para o arquivo CSV
    const csvPath = join(process.cwd(), 'inscricoes.csv');
    
    // Cabeçalho do CSV
    const header = 'Data/Hora,Nome Completo,RA,Telefone,Nível Python,Nível Estatística,Nível ML,Motivação\n';
    
    // Dados da nova inscrição
    const currentDate = new Date().toLocaleString('pt-BR');
    const csvLine = `"${currentDate}","${formData.nomeCompleto}","${formData.ra}","${formData.telefone}","${formData.pythonLevel}","${formData.estatisticaLevel}","${formData.mlLevel}","${formData.motivacao.replace(/"/g, '""')}"\n`;
    
    // Verificar se o arquivo existe
    if (!existsSync(csvPath)) {
      // Criar arquivo com cabeçalho
      writeFileSync(csvPath, header + csvLine, 'utf8');
    } else {
      // Adicionar linha ao arquivo existente
      const existingContent = readFileSync(csvPath, 'utf8');
      writeFileSync(csvPath, existingContent + csvLine, 'utf8');
    }
    
    console.log(`Inscrição salva no arquivo: ${csvPath}`);
    
    return NextResponse.json(
      { 
        message: 'Inscrição realizada com sucesso!',
        success: true,
        data: formData,
        savedTo: 'inscricoes.csv'
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
