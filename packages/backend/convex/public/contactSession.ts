import { v } from "convex/values";
import { mutation } from "../_generated/server";

//session in milliseconds
const SESSION_DURATION_MS = 24 * 60 * 60 * 1000;

export const create = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    organizationId: v.string(),
    expiresAt: v.number(),
    metadata: v.object({
      userAgent: v.string(),
      language: v.string(),
      languages: v.string(),
      screenResolution: v.optional(v.string()),
      timezone: v.string(),
      timezoneOffset: v.number(),
      platform: v.string(),
      vendorId: v.string(),
      cookiesEnabled: v.boolean(),
      referrer: v.string(),
      currentUrl: v.string(),
    }),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    const expiresAt = now + SESSION_DURATION_MS;
    const contactSessionId = await ctx.db.insert("contactSession", {
      name: args.name,
      email: args.email,
      expiresAt,
      organizationId: args.organizationId,
      metadata: args.metadata,
    });
    return contactSessionId;
  },
});
