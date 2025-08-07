import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProduct } from "@/http/products/create-products";
import { Form } from "@/components/ui/form";
import { productSchema, type productData } from "@/schemas/products/create-product";
import { InputField } from "@/components/form/inputField";
import { BadgeQuestionMark, BaggageClaim, DollarSign, Image, ShoppingBagIcon, User } from "lucide-react";
import { SelectField } from "@/components/form/selectField";

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
  
const categorias = [
  { label: "Eletrônicos", value: "eletronicos" },
  { label: "Informática", value: "informatica" },
  { label: "Acessórios", value: "acessorios" },
  { label: "Moda", value: "moda" },
  { label: "Livros", value: "livros" },
];
  const tipos = [
    { label: "Novo", value: "novo" },
    { label: "Usado", value: "usado" },
    { label: "Recondicionado", value: "recondicionado" },
  ];
  return (
    <div className="px-50 py-20">
      <div>
        <h1 className="text-4xl text-black mb-5">Informações do produto</h1>
        <Form {...addProduct}>
          <form className="space-y-5" onSubmit={addProduct.handleSubmit(handleProduct)}>
            <InputField
              name="name"
              label="Nome do Produto"
              control={addProduct.control}
              placeholder="Nome do Produto"
              type="text"
              icon={<User className="w-5 h-5" />}
              />
            <InputField
              name="preco"
              label="Preço"
              control={addProduct.control}
              placeholder="Preço do Produto"
              type="number"
              icon={<DollarSign className="w-5 h-5" />}
              />
               <InputField
              name="estoque"
              label="Estoque"
              control={addProduct.control}
              placeholder="Estoque do Produto"
              type="number"
              icon={<BaggageClaim className="w-5 h-5" />}
              />
            <InputField
              name="descricao"
              label="Descrição"
              control={addProduct.control}
              placeholder="Descrição do Produto"
              type="text"
              icon={<BadgeQuestionMark className="w-5 h-5" />}
              />
            <SelectField
              name="categoria"
              control={addProduct.control}
              label="Categoria"
              options={categorias}
            />
            <SelectField 
              name="tipo"
              control={addProduct.control}
              label="Tipo"
              options={tipos}
            />
            <InputField
              name="loja"
              label="Loja"
              control={addProduct.control}
              placeholder="Loja do Produto"
              type="text"
              icon={<ShoppingBagIcon className="w-5 h-5" />}
              />
              <InputField
              name="image"
              label="Imagem"
              control={addProduct.control}
              placeholder="Imagem do Produto"
              type="text"
              icon={<Image className="w-5 h-5" />}
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
