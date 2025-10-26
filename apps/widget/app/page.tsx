"use client";

import { use } from "react";
import { WidgetView } from "@/modules/widgets/ui/views/widget-view";

interface Props {
  searchParams: Promise<{
    organizationId: string;
  }>;
}
export default function Page({ searchParams }: Props) {
  const { organizationId } = use(searchParams);

  return (
    <div>
      <WidgetView organizationId={organizationId} />
    </div>
  );
}
