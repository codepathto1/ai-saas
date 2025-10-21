import { AuthGaurd } from "@/modules/auth/ui/components/auth-guard";
import { OrganizationGuard } from "@/modules/auth/ui/components/organization-guard";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthGaurd>
      <OrganizationGuard>{children}</OrganizationGuard>
    </AuthGaurd>
  );
};

export default layout;
