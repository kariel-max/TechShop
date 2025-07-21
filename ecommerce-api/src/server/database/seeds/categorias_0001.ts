export interface ICategorias {
    id: number
    name: string;
    especificacoes: string[];
}


export const categorias: ICategorias[] = [
    {
        id: 1,
        name: "Casa e Cosinha",
        especificacoes: ["capacidade", "material", "cor", "marca", "tamanho", "peso", "voltagem", "potência", "tipo de energia", "tipo de instalação", "tipo de uso", "tipo de produto"],
    },
    {
        id: 2,
        name: "Eletrônicos",
        especificacoes: ["marca", "modelo", "tamanho da tela", "resolução", "tipo de tela", "conectividade", "armazenamento", "processador", "memória RAM", "sistema operacional", "bateria", "câmera", "áudio"],
    },
    {
        id: 3,
        name: "Roupas",
        especificacoes: ["tamanho", "cor", "material", "marca", "estilo", "tipo de roupa", "instruções de lavagem"]
    },
    {
        id: 4,
        name: "Calçados",
        especificacoes: ["tamanho", "cor", "material", "marca", "estilo", "tipo de calçado", "instruções de lavagem"]
    },
    {
        id: 5,
        name: "Acessórios",
        especificacoes: ["tipo", "material", "marca", "cor", "tamanho", "peso"]
    },
    {
        id: 6,
        name: "Esportes",
        especificacoes: ["tipo", "material", "marca", "tamanho", "peso", "nivel de habilidade", "tipo de esporte"]
    },
    {
        id: 7,
        name: "Móveis",
        especificacoes: ["tipo", "material", "marca", "cor", "tamanho", "peso", "instruções de montagem"]
    },
    {
        id: 8,
        name: "Jardinagem",
        especificacoes: ["tipo", "material", "marca", "cor", "tamanho", "peso", "instruções de uso"]
    },
    {
        id: 9,
        name: "Ferramentas",
        especificacoes: ["tipo", "material", "marca", "cor", "tamanho", "peso", "instruções de uso"]
    },
    {
        id: 10,
        name: "Brinquedos",
        especificacoes: ["tipo", "material", "marca", "cor", "tamanho", "peso", "faixa etária"]
    },
    {
        id: 11,
        name: "Games",
        especificacoes: ["tipo", "plataforma", "idade recomendada", "número de jogadores", "desenvolvedor", "editor"]
    },
    {
        id: 12,
        name: "Livros",
        especificacoes: ["autor", "editora", "número de páginas", "idioma", "ISBN", "gênero literário"]
    },
    {
        id: 13,
        name: "Saúde e Beleza",
        especificacoes: ["tipo", "marca", "tamanho", "peso", "ingredientes", "instruções de uso", "tipo de pele"]
    },
    {
        id: 14,
        name: "Alimentos e Bebidas",
        especificacoes: ["tipo", "marca", "tamanho", "peso", "ingredientes", "data de validade"]
    },
    {
        id: 15,
        name: "Automotivo",
        especificacoes: ["tipo", "marca", "modelo", "ano", "quilometragem", "cor", "preço"]
    },
    {
        id: 16,
        name: "Outros",
        especificacoes: ["tipo", "marca", "modelo", "ano", "cor", "preço"]
    }
]