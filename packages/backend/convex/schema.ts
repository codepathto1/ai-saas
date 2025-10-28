import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  contactSession: defineTable({
    name: v.string(),
    email: v.string(),
    organizationId: v.string(),
    expiresAt: v.number(),
    metadata: v.optional(
      v.object({
        userAgent: v.string(),
        language: v.string(),
        languages: v.string(),
        timezone: v.string(),
        timezoneOffset: v.number(),
        screenResolution: v.optional(v.string()),
        platform: v.string(),
        vendorId: v.string(),
        cookiesEnabled: v.boolean(),
        referrer: v.string(),
        currentUrl: v.string(),
      })
    ),
  })
    .index("organizationId", ["organizationId"])
    .index("by_expires_at", ["expiresAt"]),
  users: defineTable({
    name: v.string(),
  }),
});
