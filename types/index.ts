import { Post } from "@prisma/client";

export type PostData = Pick<Post, 'id' | 'userId' | 'body'> & { date: string; createdAt: string, updatedAt: string };
