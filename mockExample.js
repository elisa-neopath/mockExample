const mockExample = {
    Autenticacao(login, password, list) {
        let i = 0;
        while ((i < list.length) && (login !== list[i].login)) {
            i++;
        }
        if (i < list.length) {
            if (password === list[i].password)
                return 'autenticado';
        }
        return 'falha';
    }
}

module.exports = mockExample;