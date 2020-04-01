const mockExample = require('./mockExample');

const mockList = [
    {login: 'abc', password: '123'},
    {login: 'def', password: '456'},
    {login: 'ghi', password: '789'}
];

test.each([
    ['abc', '123', 'autenticado'],
    ['def', '456', 'autenticado'],
    ['ghi', '789', 'autenticado'],
    ['ghi', '000', 'falha'],
    ['jkl', '000', 'falha']
])('testa login %s e senha %s e retorna a mensagem %s', (login, password, result) => {
    expect(mockExample.Autenticacao(login, password, mockList)).toBe(result);
});