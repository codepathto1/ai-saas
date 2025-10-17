"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);
  return (
    <div className="flex  flex-colitems-center justify-center my-10">
      <h1 className="text-2xl font-bold">apps/Web</h1>
      <h2>{users?.map((user) => user.name)}</h2>
      <div>
        <Button onClick={() => addUser()}>Add User</Button>
      </div>
    </div>
  );
}
