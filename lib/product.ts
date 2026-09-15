export type Product = {
  id: string;
  name: string;
  description: string;
  likes: number;
};

const products: Product[] = [
  { id: "1", name: "머그컵", description: "나의 최애 머그컵", likes: 3 },
  { id: "2", name: "시계", description: "갤럭시 워치", likes: 3 },
  { id: "3", name: "휴대폰", description: "갤럭시", likes: 3 },
  { id: "4", name: "노트북", description: "게이밍 노트북", likes: 3 },
  { id: "5", name: "게임기", description: "닌텐도 스위치", likes: 3 },
];

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getProducts(): Promise<Product[]> {
  await delay(700);
  return products;
}

export async function getProduct(id: string): Promise<Product | undefined> {
  await delay(400);
  return products.find((p) => p.id === id);
}
