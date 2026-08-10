import { describe, it, expect } from 'vitest';
import { addMessage, getMessages } from '../src/chat.js';

describe('addMessage', () => {
    it('agrega un mensaje al array con sender y text correctos', () => {
        addMessage('user', 'Hola');
        const mensajes = getMessages();
        expect(mensajes[mensajes.length - 1]).toEqual({ sender: 'user', text: 'Hola' });
    });

    it('permite agregar múltiples mensajes en orden', () => {
        const antes = getMessages().length;
        addMessage('user', 'Primero');
        addMessage('character', 'Segundo');
        const mensajes = getMessages();
        expect(mensajes.length).toBe(antes + 2);
        expect(mensajes[mensajes.length - 2].text).toBe('Primero');
        expect(mensajes[mensajes.length - 1].text).toBe('Segundo');
    });
});