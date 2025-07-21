import { Button } from "@/components/ui/button";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProduct } from "@/http/create-products";
import { CampoFormulario } from "@/components/formCreateProducts";
import { Form } from "@/components/ui/form";

const productSchema = z.object({
  name: z.string().min(3, { message: "Preencha no mínimo três caracters" }),
  preco: z.string(),
  precoOriginal: z.string(),
  disconunt: z.string(),
  rating: z.string(),
  descricao: z.string(),
  categoria: z.string(),
  estoque: z.string(),
  image: z.string(),
  escificacoes: z.string(),
  loja: z.string().min(3, { message: "Preencha no mínimo três caracters" }),
  tipo: z.string(),
});

type productData = z.infer<typeof productSchema>;

export function AddProduct() {
  const { mutateAsync: createProductMutate } = createProduct();
  const addProduct = useForm<productData>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      preco: '',
      precoOriginal: '',
      descricao: "",
      categoria: "",
      estoque: '',
      image: "",
      escificacoes: "",
      loja: "",
      tipo: "",
    },
  });

  async function handleProduct({
    name,
    preco,
    precoOriginal,
    descricao,
    categoria,
    estoque,
    image,
    escificacoes,
    loja,
    tipo,
  }: productData) {
    await createProductMutate({
      name,
      preco,
      precoOriginal,
      descricao,
      categoria,
      estoque,
      escificacoes,
      image,
      loja,
      tipo,
    });
    addProduct.reset();
  }
  return (
    <div className="px-100 py-20">
      <div>
        <h1 className="text-4xl text-black mb-5">Informações do produto</h1>
        <Form {...addProduct}>
          <form className="space-y-5" onSubmit={addProduct.handleSubmit(handleProduct)}>

            <CampoFormulario
                name= 'name'
                label="Nome do produto"
                placeholder="Digite o nome do produto"
                type="text"
            />
            <CampoFormulario
                name= 'preco'
                label="Preço"
                placeholder="Digite o preço do produto"
                type="text"
            />
            <CampoFormulario
                name= 'precoOriginal'
                label="Preço com desconto"
                placeholder="Digite o Preço com desconto"
                type="text"
            />
            <CampoFormulario
                name= 'estoque'
                label="Estoque"
                placeholder="Estoque de itens"
                type="text"
            />
            <CampoFormulario
                name= 'categoria'
                label="Categoria"
                placeholder="Categoria"
                type="text"
            />
            <CampoFormulario
                name= 'descricao'
                label="Descricao"
                placeholder="Descricao"
                type="area"
            />
            <CampoFormulario
                name= 'escificacoes'
                label="Escificacoes"
                placeholder="Escificacoes de itens"
                type="text"
            />
            <CampoFormulario
                name= 'loja'
                label="Loja"
                placeholder="Nome da loja"
                type="text"
            />
            <CampoFormulario
                name= 'tipo'
                label="Tipo"
                placeholder="tipo de itens"
                type="text"
            />
            <CampoFormulario
                name= 'image'
                label="image"
                placeholder="url da imagem"
                type="text"
            />
            <div className="w-full flex justify-center mt-5">
                <Button className="py-6 px-10 text-lg" type="submit">Criar</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
