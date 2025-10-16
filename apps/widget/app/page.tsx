"use client";

import { useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";
export default function Page() {
  const users = useQuery(api.users.getMany);
  return (
    <div className="flex items-center justify-center my-10">
      <h1 className="text-2xl font-bold">apps/Web</h1>
      <p>{users?.map((user) => user.name)}</p>
    </div>
  );
}
