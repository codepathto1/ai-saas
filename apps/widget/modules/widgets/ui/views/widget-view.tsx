"use client";

import { WidgetFooter } from "../components/widget-footer";
import { WidgetHeader } from "../components/widget-header";

interface WidgetViewProps {
  organizationId: string;
}

export const WidgetView = ({ organizationId }: WidgetViewProps) => {
  return (
    <main className="min-h-screen min-w-screen flex h-full w-full flex-col overflow-hidden rounded-xl border bg-muted">
      {/* Added container to make sure the footer is at the bottom  and also footer in updated globals  */}
      <div className="container">
        <WidgetHeader>
          <div className="flex flex-col justify-between gap-y-2 py-2 font-semibold">
            <p className="text-3xl">Hi there!👋</p>
            <p className="text-xl">How can I help you?</p>
          </div>
        </WidgetHeader>
        <h1>Widget View :{organizationId}</h1>
        <WidgetFooter />
      </div>
    </main>
  );
};
