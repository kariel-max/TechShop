import mongoose from "mongoose";

export interface IProduto {
    name?: string;
    preco?: number;
    loja?: string;
    tipo?: string;
    estoque?: number;
    categoria?: string;
    descricao?: string;
    urlImagens?: string;
    escificacoes?: string;
}

const produtoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    preco: { type: Number, required: true },
    descricao: { type: String, required: true },
    categoria: { type: String, required: true },
    estoque: { type: Number, required: true },
    urlImagens: { type: String, required: false },
    escificacoes: { type: String, required: false },
    loja: { type: String, required: false },
    tipo: { type: String, required: false }
}, {
    timestamps: true
})

export const IProduto = mongoose.model('IProduto', produtoSchema);
export default IProduto;
