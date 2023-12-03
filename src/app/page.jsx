import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Home() {
  const users = await prisma.user.findMany({
    select: {
      name: true,
      posts: {
        select: {
          title: true,
        },
      },
    },
  });

  return (
    <>
      {users.map((user) => {
        <p className="text-red-500">{user.name} dasda</p>;
      })}
    </>
  );
}
