import { Button } from "@/components/ui/button";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProduct } from "@/http/create-products";
import { CampoFormulario } from "@/components/formCreateProducts";
import { Form } from "@/components/ui/form";

const productSchema = z.object({
  name: z.string().min(3, { message: "Preencha no mínimo três caracters" }),
  preco: z.coerce.number().min(0, "Informe um número válido"),
  descricao: z.string(),
  categoria: z.string(),
  estoque:  z.coerce.number().min(0, "Informe um número válido"),
  image: z.string(),
  loja: z.string().min(3, { message: "Preencha no mínimo três caracters" }),
  tipo: z.string(),
});

type productData = z.infer<typeof productSchema>;

export function AddProduct() {
  const { mutateAsync: createProductMutate } = createProduct();
  const addProduct = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      preco: 0,
      descricao: "",
      categoria: "",
      estoque: 0,
      image: "",
      loja: "",
      tipo: "",
    },
  });

  async function handleProduct({name, preco,descricao,categoria, estoque,image,loja,tipo}: productData) {
    await createProductMutate({name, preco,descricao,categoria, estoque,image,loja,tipo});
    addProduct.reset();
  }
  return (
    <div className="px-50 py-20">
      <div>
        <h1 className="text-4xl text-black mb-5">Informações do produto</h1>
        <Form {...addProduct}>
          <form className="space-y-5" onSubmit={addProduct.handleSubmit(handleProduct)}>

            <CampoFormulario
            control={addProduct.control}
                name= 'name'
                label="Nome do produto"
                placeholder="Digite o nome do produto"
                type="text"
                required
            />
            <CampoFormulario
                control={addProduct.control}
                name= 'preco'
                label="Preço"
                placeholder="Digite o preço do produto"
                type="number"
                required
            />
            <CampoFormulario
                control={addProduct.control}
                name= 'estoque'
                label="Estoque"
                placeholder="Estoque de itens"
                type="number"
                required
            />
            <CampoFormulario
                control={addProduct.control}
                name= 'categoria'
                label="Categoria"
                placeholder="Categoria"
                type="text"
                required
            />
            <CampoFormulario
                control={addProduct.control}
                name= 'descricao'
                label="Descricao"
                placeholder="Descricao"
                type="text"
                required = {false}
            />
            <CampoFormulario
                control={addProduct.control}
                name= 'loja'
                label="Loja"
                placeholder="Nome da loja"
                type="text"
                required
            />
            <CampoFormulario
                control={addProduct.control}
                name= 'tipo'
                label="Tipo"
                placeholder="tipo de itens"
                type="text"
                required
            />
            <CampoFormulario
                control={addProduct.control}
                name= 'image'
                label="image"
                placeholder="url da imagem"
                type="text"
                required
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
