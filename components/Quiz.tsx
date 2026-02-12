import React, { useState } from 'react';
import { Layout } from './Layout';
import { QUESTIONS } from '../constants';
import { UserAnswers, Option } from '../types';
import { Button } from './ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Lightbulb } from 'lucide-react';

interface QuizProps {
    onComplete: (answers: UserAnswers) => void;
}

export const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<UserAnswers>({});

    const question = QUESTIONS[currentQuestionIndex];
    const progress = ((currentQuestionIndex) / QUESTIONS.length) * 100;

    const handleOptionSelect = (option: Option) => {
        const newAnswers = { ...answers, [question.id]: option };
        setAnswers(newAnswers);

        // Auto advance after short delay for better UX
        setTimeout(() => {
            if (currentQuestionIndex < QUESTIONS.length - 1) {
                setCurrentQuestionIndex(prev => prev + 1);
            } else {
                onComplete(newAnswers);
            }
        }, 250);
    };

    const handleBack = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
        }
    };

    return (
        <Layout simpleHeader>
            <div className="max-w-3xl mx-auto px-4 py-8 md:py-16">
                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                        <span>Vraag {currentQuestionIndex + 1} van {QUESTIONS.length}</span>
                        <span>{Math.round(progress)}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-primary-yellow"
                            initial={{ width: 0 }}
                            animate={{ width: `${((currentQuestionIndex + 1) / QUESTIONS.length) * 100}%` }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={question.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-[2.5rem] shadow-xl border border-neutral-gray p-8 md:p-14"
                    >
                        <h2 className="text-2xl md:text-4xl font-bold font-title text-black mb-8 italic uppercase tracking-tighter">
                            {question.text}
                        </h2>
                        {question.subText && (
                            <p className="text-gray-500 mb-8 italic text-lg">{question.subText}</p>
                        )}

                        <div className="space-y-4">
                            {question.options.map((option) => (
                                <button
                                    key={option.id}
                                    onClick={() => handleOptionSelect(option)}
                                    className={`w-full text-left p-6 md:p-8 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between group
                                ${answers[question.id]?.id === option.id
                                            ? 'border-primary-yellow bg-primary-yellow/10 shadow-lg'
                                            : 'border-neutral-gray bg-white hover:border-primary-yellow hover:bg-primary-yellow/5'
                                        }
                            `}
                                >
                                    <span className={`font-medium text-xl ${answers[question.id]?.id === option.id ? 'text-black font-extrabold italic' : 'text-neutral-darkGray'}`}>
                                        {option.text}
                                    </span>
                                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors
                                ${answers[question.id]?.id === option.id
                                            ? 'border-primary-yellow bg-primary-yellow'
                                            : 'border-gray-300 group-hover:border-primary-yellow'
                                        }`
                                    }>
                                        {answers[question.id]?.id === option.id && (
                                            <div className="w-3 h-3 rounded-full bg-white shadow-sm" />
                                        )}
                                    </div>
                                </button>
                            ))}
                        </div>

                        {question.tip && (
                            <div className="mt-8 flex gap-3 bg-yellow-50 text-yellow-800 p-4 rounded-lg border border-yellow-100">
                                <Lightbulb className="w-5 h-5 flex-shrink-0" />
                                <p className="text-sm font-medium italic">{question.tip}</p>
                            </div>
                        )}

                    </motion.div>
                </AnimatePresence>

                <div className="mt-6 flex justify-between">
                    <button
                        onClick={handleBack}
                        disabled={currentQuestionIndex === 0}
                        className={`flex items-center gap-2 text-gray-500 hover:text-primary-dark font-medium transition-colors ${currentQuestionIndex === 0 ? 'opacity-0 pointer-events-none' : ''}`}
                    >
                        <ArrowLeft className="w-4 h-4" /> Vorige vraag
                    </button>
                </div>
            </div>
        </Layout>
    );
};