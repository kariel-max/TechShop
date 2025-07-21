import mongoose from "mongoose";
import { string } from "yup";

export interface IProd {
    name?: string;
    preco?: number;
    estoque?: number;
    categoria?: string;
    descricao?: string;
    loja?: string | null;
    tipo?: string | null;
    rating?: string | null;
    disconunt?: string | null;
    image?: string | null;
    escificacoes?: string | null;
    precoOriginal?: string | null;
}

const produtoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    preco: { type: Number, required: true },
    loja: { type: String, required: false },
    tipo: { type: String, required: false },
    image: { type: String, required: false },
    rating: { type: String, required: false},
    estoque: { type: Number, required: true },
    descricao: { type: String, required: true },
    categoria: { type: String, required: true },
    disconunt: { type: String, required: false},
    escificacoes: { type: String, required: false },
    precoOriginal: { type: String, required: false },
}, {
    timestamps: true
})

export const IProduto = mongoose.model('IProd', produtoSchema);
