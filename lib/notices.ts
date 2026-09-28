export type Notice = {
  id: string;
  title: string;
  author: string;
  content: string;
  createdAt: string;
};

const notices: Notice[] = [
  {
    id: "1",
    title: "웹서버보안 프로그래밍",
    author: "김용현",
    content: "열심히 공부합시다.",
    createdAt: "2026-09-22",
  },
  {
    id: "2",
    title: "웹서버보안 프로그래밍",
    author: "김용현",
    content: "과제 제출할 시간입니다.",
    createdAt: "2026-09-22",
  },
];
let nextId = 3;

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getNotices(): Promise<Notice[]> {
  await delay(600);
  return [...notices].sort((a, b) => (a.id < b.id ? 1 : -1));
}

export async function getNotice(id: string): Promise<Notice | undefined> {
  await delay(400);
  return notices.find((n) => n.id === id);
}

export async function createNotice(input: {
  title: string;
  author: string;
  content: string;
}): Promise<Notice> {
  await delay(300);
  const notice: Notice = {
    id: String(nextId++),
    title: input.title,
    author: input.author,
    content: input.content,
    createdAt: new Date().toISOString().slice(0, 10),
  };
  notices.push(notice); // 메모리 배열에 추가
  return notice;
}
