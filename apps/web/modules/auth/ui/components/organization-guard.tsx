"use client";
import { useOrganization } from "@clerk/nextjs";
import { AuthGaurd } from "@/modules/auth/ui/components/auth-guard";
import { OrganizationSelectView } from "@/modules/auth/ui/views/org-select-view";
export const OrganizationGuard = ({ children }: { children: React.ReactNode }) => {
  const { organization } = useOrganization();
  if (!organization) {
    return (
      <AuthGaurd>
        <OrganizationSelectView />
      </AuthGaurd>
    );
  }
  return <div>{children}</div>;
};
