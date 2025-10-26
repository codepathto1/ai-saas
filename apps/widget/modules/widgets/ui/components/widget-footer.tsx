import { Button } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";
import { HomeIcon, InboxIcon } from "lucide-react";

export const WidgetFooter = () => {
  const screen = "selection";
  return (
    <footer className=" flex items-center justify-between border-t bg-background">
      <Button className=" h-14  flex-1  rounded-none" size="icon" variant="ghost" onClick={() => {}}>
        <HomeIcon className={cn("size-4", screen === "selection" && "text-primary")} />
      </Button>
      <Button className="h-14 rounded-none flex-1 " size="icon" variant="ghost">
        <InboxIcon className={cn("size-4")} />
      </Button>
    </footer>
  );
};
