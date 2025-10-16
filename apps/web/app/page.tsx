"use client";
import { useMutation, useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);
  return (
    <div className="flex  flex-col gap-y-6 items-center justify-center my-10">
      <h1 className="text-2xl font-bold">apps/Web</h1>
      <div className="flex gap-y-6">
        <p className="flex flex-col gap-6">
          {users?.map((user) => (
            <p className="flex flex-col">{user.name}</p>
          ))}
        </p>
      </div>
      <Button
        onClick={() => {
          addUser();
        }}>
        Add
      </Button>
    </div>
  );
}
