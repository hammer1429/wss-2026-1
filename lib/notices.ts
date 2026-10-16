import { connectDB } from "./mongodb";
import { Notice as NoticeModel } from "@/models/Notice";

export type Notice = {
  id: string;
  title: string;
  author: string;
  content: string;
  createdAt: string;
};

type NoticeDocLike = {
  _id: unknown;
  title: string;
  author: string;
  content: string;
  createdAt?: Date;
};

function toNotice(doc: NoticeDocLike): Notice {
  return {
    id: String(doc._id),
    title: doc.title,
    author: doc.author,
    content: doc.content,
    createdAt: (doc.createdAt ?? new Date()).toISOString().slice(0, 10),
  };
}

async function seedIfEmpty() {
  const count = await NoticeModel.countDocuments();
  if (count > 0) return;

  await NoticeModel.insertMany([
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
  ]);
}

export async function getNotices(): Promise<Notice[]> {
  await connectDB();
  await seedIfEmpty();
  const docs = await NoticeModel.find().sort({ createdAt: -1 }).lean();
  return docs.map((doc) => toNotice(doc as NoticeDocLike));
}

export async function getNotice(id: string): Promise<Notice | undefined> {
  await connectDB();
  try {
    const doc = await NoticeModel.findById(id).lean();
    return doc ? toNotice(doc as NoticeDocLike) : undefined;
  } catch {
    return undefined;
  }
}

export async function createNotice(input: {
  title: string;
  author: string;
  content: string;
}): Promise<Notice> {
  await connectDB();
  const doc = await NoticeModel.create(input);
  return toNotice(doc);
}
