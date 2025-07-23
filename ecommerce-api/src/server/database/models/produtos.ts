import mongoose, {Document, Model, Schema} from "mongoose";

export interface IProd {
    name?: string;
    preco?: number;
    estoque?: number;
    categoria?: string;
    descricao?: string;
    loja?: string | null;
    tipo?: string | null;
    image?: string | null;
    precoOriginal?: string | null;
}

export interface IProdDocument extends IProd, Document {}

const produtoSchema: Schema<IProdDocument> = new mongoose.Schema({
    name: { type: String, required: true },
    preco: { type: Number, required: true },
    loja: { type: String, required: false },
    tipo: { type: String, required: false },
    image: { type: String, required: false },
    estoque: { type: Number, required: true },
    descricao: { type: String, required: true },
    categoria: { type: String, required: true },
    precoOriginal: { type: String, required: false },
}, {
    timestamps: true
})

export const IProduto: Model<IProdDocument
> = mongoose.model<IProdDocument>('IProduto', produtoSchema);
