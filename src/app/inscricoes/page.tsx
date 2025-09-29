"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Check, Star } from 'lucide-react';
import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";
import { INSCRICOES_CONFIG } from '@/lib/config';

interface FormData {
  nomeCompleto: string;
  ra: string;
  telefone: string;
  pythonLevel: number;
  estatisticaLevel: number;
  mlLevel: number;
  motivacao: string;
}

const InscricoesPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    nomeCompleto: '',
    ra: '',
    telefone: '',
    pythonLevel: 0,
    estatisticaLevel: 0,
    mlLevel: 0,
    motivacao: ''
  });

  // Verificar se as inscrições estão ativas diretamente do config
  if (!INSCRICOES_CONFIG.ativas) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4">
          <Header />
          <div className="flex items-center justify-center min-h-[70vh]">
            <div className="text-center space-y-6 max-w-2xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Inscrições Fechadas
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                {INSCRICOES_CONFIG.mensagemFechadas}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-black text-white rounded-full font-semibold text-lg shadow-lg hover:bg-gray-800 transition-all duration-300"
                onClick={() => window.location.href = '/'}
              >
                Voltar ao Início
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const questions = [
    {
      id: 'nomeCompleto' as keyof FormData,
      title: 'Vamos começar! 👋',
      subtitle: 'Qual é o seu nome completo?',
      type: 'text',
      placeholder: 'Digite seu nome completo...'
    },
    {
      id: 'ra' as keyof FormData,
      title: 'Perfeito! 📚',
      subtitle: 'Qual é o seu RA?',
      type: 'text',
      placeholder: 'Digite seu RA...'
    },
    {
      id: 'telefone' as keyof FormData,
      title: 'Ótimo! 📱',
      subtitle: 'Qual é o seu telefone?',
      type: 'tel',
      placeholder: '(11) 99999-9999'
    },
    {
      id: 'pythonLevel' as keyof FormData,
      title: 'Sobre Python 🐍',
      subtitle: 'Qual é o seu nível de conhecimento em programação Python?',
      type: 'rating',
      scale: '0 (Nunca programei) - 5 (Expert)'
    },
    {
      id: 'estatisticaLevel' as keyof FormData,
      title: 'Estatística 📊',
      subtitle: 'Qual é o seu nível de conhecimento em estatística e probabilidade?',
      type: 'rating',
      scale: '0 (Nenhum conhecimento) - 5 (Expert)'
    },
    {
      id: 'mlLevel' as keyof FormData,
      title: 'Machine Learning 🤖',
      subtitle: 'Você possui algum conhecimento em aprendizado de máquina?',
      type: 'rating',
      scale: '0 (Nunca ouvi falar) - 5 (Expert)'
    },
    {
      id: 'motivacao' as keyof FormData,
      title: 'Quase lá! 🚀',
      subtitle: 'Qual é a sua motivação para participar do DSWA?',
      type: 'textarea',
      placeholder: 'Conte-nos o que te motiva a fazer parte da nossa comunidade...'
    }
  ];

  const handleInputChange = (field: keyof FormData, value: string | number) => {
    if (field === 'telefone' && typeof value === 'string') {
      const numbers = value.replace(/\D/g, '');
      let formatted = numbers;
      if (numbers.length >= 11) {
        formatted = `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
      } else if (numbers.length >= 7) {
        formatted = `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
      } else if (numbers.length >= 2) {
        formatted = `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
      }
      
      setFormData(prev => ({
        ...prev,
        [field]: formatted
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handleNext = async () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsSubmitting(true);
      try {
        const response = await fetch('/api/inscricoes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        if (response.ok) {
          const result = await response.json();
          console.log('Inscrição salva:', result);
        } else {
          console.error('Erro ao salvar inscrição');
        }
        
        setTimeout(() => {
          setIsCompleted(true);
          setIsSubmitting(false);
        }, 1000);
      } catch (error) {
        console.error('Erro:', error);
        setTimeout(() => {
          setIsCompleted(true);
          setIsSubmitting(false);
        }, 1000);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isCurrentStepValid = () => {
    const question = questions[currentStep];
    const value = formData[question.id];
    
    if (question.type === 'rating') {
      return (value as number) >= 0;
    }
    return value && value.toString().trim() !== '';
  };

  const RatingInput = ({ value, onChange, scale }: { value: number; onChange: (val: number) => void; scale: string }) => (
    <div className="space-y-8">
      <div className="flex justify-center space-x-4">
        {[0, 1, 2, 3, 4, 5].map((rating) => (
          <motion.button
            key={rating}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`w-16 h-16 rounded-full border-2 flex items-center justify-center text-xl font-bold transition-all duration-300 ${
              value === rating
                ? 'bg-black border-black text-white shadow-lg transform scale-110'
                : 'border-gray-300 text-gray-700 hover:border-gray-600 hover:text-black hover:bg-gray-100'
            }`}
            onClick={() => onChange(rating)}
          >
            {rating}
          </motion.button>
        ))}
      </div>
      <p className="text-sm text-gray-600 text-center">{scale}</p>
      {value > 0 && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-1 text-gray-600">
            {[...Array(value)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Star className="w-6 h-6 fill-current" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center space-y-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
            className="w-24 h-24 mx-auto bg-black rounded-full flex items-center justify-center"
          >
            <Check className="w-12 h-12 text-white" />
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">
              Inscrição Concluída! 🎉
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Obrigado por se inscrever no Data Science Warriors Academy!
            </p>
            <p className="text-lg text-gray-600">
              Em breve entraremos em contato com mais informações.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-black text-white rounded-full font-semibold text-lg shadow-lg hover:bg-gray-800 transition-all duration-300"
              onClick={() => window.location.href = '/'}
            >
              Voltar ao Início
            </motion.button>
          </motion.div>

          {/* Partículas animadas mais sutis */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gray-400 rounded-full opacity-30"
                initial={{ 
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                  y: typeof window !== 'undefined' ? window.innerHeight + 100 : 1000,
                  scale: 0
                }}
                animate={{ 
                  y: -100,
                  scale: [0, 1, 0],
                  rotate: 360
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  delay: Math.random() * 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  const currentQuestion = questions[currentStep];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4">
        <Header />
        
        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">
                Pergunta {currentStep + 1} de {questions.length}
              </span>
              <span className="text-sm text-gray-600">
                {Math.round(((currentStep + 1) / questions.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className="bg-black h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200"
            >
              <div className="text-center mb-8">
                <motion.h1
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-3xl md:text-4xl font-bold text-black mb-4"
                >
                  {currentQuestion.title}
                </motion.h1>
                <motion.p
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-xl text-gray-600"
                >
                  {currentQuestion.subtitle}
                </motion.p>
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mb-8"
              >
                {currentQuestion.type === 'text' || currentQuestion.type === 'tel' ? (
                  <input
                    type={currentQuestion.type}
                    value={formData[currentQuestion.id] as string}
                    onChange={(e) => handleInputChange(currentQuestion.id, e.target.value)}
                    placeholder={currentQuestion.placeholder}
                    className="w-full p-4 text-lg bg-white border-2 border-gray-300 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:border-black transition-all duration-300"
                    autoFocus
                  />
                ) : currentQuestion.type === 'textarea' ? (
                  <textarea
                    value={formData[currentQuestion.id] as string}
                    onChange={(e) => handleInputChange(currentQuestion.id, e.target.value)}
                    placeholder={currentQuestion.placeholder}
                    rows={4}
                    className="w-full p-4 text-lg bg-white border-2 border-gray-300 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:border-black transition-all duration-300 resize-none"
                    autoFocus
                  />
                ) : (
                  <RatingInput
                    value={formData[currentQuestion.id] as number}
                    onChange={(value) => handleInputChange(currentQuestion.id, value)}
                    scale={currentQuestion.scale || ''}
                  />
                )}
              </motion.div>

              <div className="flex justify-between items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    currentStep === 0
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-white text-black hover:bg-gray-100 border-2 border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span>Voltar</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: isCurrentStepValid() && !isSubmitting ? 1.05 : 1 }}
                  whileTap={{ scale: isCurrentStepValid() && !isSubmitting ? 0.95 : 1 }}
                  onClick={handleNext}
                  disabled={!isCurrentStepValid() || isSubmitting}
                  className={`flex items-center space-x-2 px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    isCurrentStepValid() && !isSubmitting
                      ? 'bg-black text-white shadow-lg hover:bg-gray-800'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <span>
                    {isSubmitting 
                      ? 'Enviando...' 
                      : currentStep === questions.length - 1 
                        ? 'Finalizar' 
                        : 'Próximo'
                    }
                  </span>
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <ChevronRight className="w-5 h-5" />
                  )}
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
    </div>
  );
};

export default InscricoesPage;
