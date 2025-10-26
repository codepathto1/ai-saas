"use client";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@workspace/ui/components/sidebar";
import { CreditCard, InboxIcon, LayoutDashboardIcon, LibraryBigIcon, Mic, PaletteIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@workspace/ui/lib/utils";

const customerSupportItems = [
  { title: "Conversations", url: "/conversations", icon: InboxIcon },
  {
    title: "Knowlegebase",
    url: "/files",
    icon: LibraryBigIcon,
  },
];
const configurationItems = [
  { title: "widget customization", url: "/customization", icon: PaletteIcon },
  {
    title: "Integration",
    url: "/integration",
    icon: LayoutDashboardIcon,
  },
  {
    title: "Voice Assistant",
    url: "/plugins/vapi",
    icon: Mic,
  },
];
const billing = [{ title: "Billing and Plans", url: "/billing", icon: CreditCard }];
export const DashboardSidebar = () => {
  const pathName = usePathname();
  const isActive = (url: string) => {
    if (url === "/") {
      return pathName === "/";
    }
    return pathName.startsWith(url);
  };
  return (
    <Sidebar collapsible="icon" className="group">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild size="lg">
              <OrganizationSwitcher
                skipInvitationScreen
                hidePersonal
                appearance={{
                  elements: {
                    rootBox: "w-full! h-8",
                    avatarBox: "size-4 rounded-sm",
                    organizationSwitcherTrigger:
                      "w-full! justify-start group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2!",
                  },
                }}
              />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarGroup>
        {/* Customer Support  */}
        <SidebarGroupContent>
          <SidebarGroupLabel>Customer Support</SidebarGroupLabel>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarMenu>
          {customerSupportItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                tooltip={item.title}
                isActive={isActive(item.url)}
                className={cn(
                  isActive(item.url) &&
                    "bg-gradient-to-b from-sidebar-primary to-[#0b63f3]! text-sidebar-primary-foreground! hover:to-[#818cf8]!"
                )}>
                <Link href={item.url}>
                  <item.icon className="size-4" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroup>

      {/* Configuration  */}
      <SidebarGroup>
        <SidebarContent>
          <SidebarGroupLabel>Configuration</SidebarGroupLabel>
        </SidebarContent>
        <SidebarMenu>
          {configurationItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                tooltip={item.title}
                className={cn(
                  isActive(item.url) &&
                    "bg-gradient-to-b from-sidebar-primary to-[#0b63f3]! text-sidebar-primary-foreground! hover:to-[#818cf8]!"
                )}>
                <Link href={item.url}>
                  <item.icon className="size-4" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroup>

      {/* Billing  */}
      <SidebarGroup>
        <SidebarContent>
          <SidebarGroupLabel>Accounts</SidebarGroupLabel>
        </SidebarContent>
        <SidebarMenu>
          {billing.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                tooltip={item.title}
                className={cn(
                  isActive(item.url) &&
                    "bg-gradient-to-b from-sidebar-primary to-[#0b63f3]! text-sidebar-primary-foreground! hover:to-[#818cf8]!"
                )}>
                <Link href={item.url}>
                  <item.icon className="size-4" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroup>

      {/* Sidebar Footer  */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <UserButton
              showName
              appearance={{
                elements: {
                  rootBox: "w-full! h-8!",
                  userButtonTrigger:
                    "w-full! justify-end! p-2! hover:bg-sidebar-accent hover:text-sidebar-accent-foreground! group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2!",
                  userButtonBox:
                    "w-full! flex row-reverse items-center gap-2 group-data-[collapsible=icon]:justify-center! group-data-[collapsible=icon]:p-2!",
                  userButtonOuterIdentifier: "pl-0 group-data-[collapsible=icon]:hidden",
                  avatarBox: "size-4",
                },
              }}
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};
