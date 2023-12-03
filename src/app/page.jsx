import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Home() {
  let users = await prisma.user.findMany();

  return (
    <>
      Users:
      {users.map((user) => {
        return <>{user.name}</>;
      })}
    </>
  );
}
