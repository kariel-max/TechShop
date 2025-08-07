// import { useQuery } from "@tanstack/react-query";
// import type { IProduct } from "../../types/products/products";

// export const AllProducts = () => {
//   return useQuery<IProduct[], Error>({
//     queryKey: ["produtos"],
//     queryFn: async () => {
//       const response = await fetch(`http://localhost:3750/api/products`);
//       const result = await response.json();
//       return "errors" in result ? [] : result;
//     },
//   });
// };