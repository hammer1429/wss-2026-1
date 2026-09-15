import { getProducts } from "@/lib/product";
import Link from "next/link";

export default async function productspage() {
  const products = await getProducts();
  console.log(products);

  return (
    <div className="mx-auto max-w-2xl flex-1 px-8 py-16">
      <h1 className="mb-8 text-2xl font-semibold text-amber-50">상품목록</h1>
      <ul className="flex flex-col gap-4">
        {products.map((p) => (
          <li key={p.id}>
            <Link
              href={"/products/${p.id}"}
              className="block rounded-lg border border-amber/[.08] px-5 py-4 transition-colors hover:bg-amber/[.03], white:border-black/[.145] white:hover:bg-black/[.05]"
            >
              <p className="font-medium text-black dark:text-zinc-50">
                {p.name}
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {p.description} · 좋아요 {p.likes}
              </p>
            </Link>
          </li>
        ))}
        x
      </ul>
      <Link
        href="/"
        className="mt-8 block text-sm font-medium text-amber-50 underline underline-offset-4"
      >
        ← 홈으로 돌아가기
      </Link>
    </div>
  );
}
