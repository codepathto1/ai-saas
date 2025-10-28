// "use client";

import { WidgetAuthScreen } from "@/modules/widgets/ui/screens/widget-auth-screen";

interface WidgetViewProps {
  organizationId: string;
}

export const WidgetView = ({ organizationId }: WidgetViewProps) => {
  return (
    <main className="min-h-screen min-w-screen flex h-full w-full flex-col overflow-hidden rounded-xl border bg-muted">
      {/* Added container to make sure the footer is at the bottom  and also footer in updated globals  */}

      <WidgetAuthScreen />
      <h1>Widget View :{organizationId}</h1>
    </main>
  );
};
