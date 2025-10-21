"use client";
import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";
import React from "react";
import AuthLayout from "../layouts/auth-layout";
import { SignInView } from "../views/signInView";

export const AuthGaurd = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AuthLoading>
        <AuthLayout>
          <p>Loading</p>
        </AuthLayout>
      </AuthLoading>
      <Authenticated>
        <AuthLayout>{children}</AuthLayout>
      </Authenticated>
      <Unauthenticated>
        <AuthLayout>
          <SignInView />
        </AuthLayout>
      </Unauthenticated>
    </>
  );
};
