import { mutation, query } from "./_generated/server";

export const getMany = query({
  args: {},
  handler: async (ctx) => {
    const users = await ctx.db.query("users").collect();
    return users;
  },
});

export const add = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Not autheniticated");
    }
    const orgId = identity?.orgId as string;
    if (!orgId) {
      throw new Error("No Organization");
    }
    throw new Error("Testing error handling in sentry");
    const userId = ctx.db.insert("users", { name: "jason" });
    return userId;
  },
});
