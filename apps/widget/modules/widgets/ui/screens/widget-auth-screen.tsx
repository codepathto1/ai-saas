"use client";
import { Form, FormControl, FormField, FormMessage, FormItem } from "@workspace/ui/components/form";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { WidgetHeader } from "@/modules/widgets/ui/components/widget-header";
import { useMutation } from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { Languages } from "lucide-react";
import { Doc } from "@workspace/backend/_generated/dataModel";

const formSchema = z.object({
  name: z.string().min(5, "Name is required"),
  email: z.string().email("Email is reauired"),
});

export const WidgetAuthScreen = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const organizationId = "123";
  const metadata: Doc<"contactSession">["metadata"] = {
    userAgent: navigator.userAgent,
    language: navigator.language,
    languages: navigator.languages?.join(","),
    platform: navigator.platform,
    screenResolution: `${screen.width}x${screen.width}`,
    vendorId: navigator.vendor,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    timezoneOffset: new Date().getTimezoneOffset(),
    cookiesEnabled: navigator.cookieEnabled,
    currentUrl: window.location.href,
    referrer: document.referrer || "direct",
  };
  const createContactSession = useMutation(api.public.contactSession.create);
  const expiresAt = new Date().getTime() + 24 * 60 * 60 * 1000;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!organizationId) return;
    const contactSessionId = await createContactSession({ ...values, organizationId, expiresAt, metadata });
    console.log(contactSessionId);
  };
  return (
    <>
      <WidgetHeader>
        <div className="flex flex-col justify-between gap-y-2 py-2 px-2 font-semibold">
          <p className="text-3xl">Hi there!👋</p>
          <p className="text-xl">Let&apos;s get you started! </p>
        </div>
      </WidgetHeader>
      <Form {...form}>
        <form className="flex flex-col flex-1  gap-y-4 p-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input className="h-11 bg-background" {...field} type="text" placeholder="e.g Jon Doe"></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}></FormField>
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    className="h-10 bg-background"
                    placeholder="e.g.johndoe@email.com"
                    required
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}></FormField>
          <Button disabled={form.formState.isSubmitting} type="submit" size="lg">
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
};
