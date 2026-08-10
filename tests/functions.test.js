import { describe, it, expect } from 'vitest';
import { formatMessagesForGemini } from '../api/functions.js';

describe('formatMessagesForGemini', () => {
    it('convierte sender "user" al role "user"', () => {
        const resultado = formatMessagesForGemini([{ sender: 'user', text: 'Hola' }]);
        expect(resultado[0]).toEqual({ role: 'user', parts: [{ text: 'Hola' }] });
    });

    it('convierte sender "character" al role "model"', () => {
        const resultado = formatMessagesForGemini([{ sender: 'character', text: 'Hola, amigo' }]);
        expect(resultado[0]).toEqual({ role: 'model', parts: [{ text: 'Hola, amigo' }] });
    });
});