"use client";
import { Authenticated, Unauthenticated, useMutation, useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
import { SignInButton, UserButton } from "@clerk/nextjs";
export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);
  if (!users) {
    return <div>Loading....</div>;
  }
  return (
    <>
      <Unauthenticated>
        <div className="flex flex-col gap-y-4 mx-4">
          <h1 className="flex">Please Login!</h1>
          <Button className="flex max-w-sm">
            <SignInButton />
          </Button>
        </div>
      </Unauthenticated>
      <Authenticated>
        <div className="flex  flex-col gap-y-6 items-center justify-center my-10">
          <h1 className="text-2xl font-bold">apps/Web</h1>
          <div className="flex gap-y-6">
            <div className="flex flex-col gap-6">
              {users.map((user) => (
                <p className="flex flex-col" key={users._id}>
                  {user.name}
                </p>
              ))}
            </div>
          </div>
          <Button
            onClick={() => {
              addUser();
            }}>
            Add
          </Button>
        </div>
        <UserButton />
      </Authenticated>
    </>
  );
}
