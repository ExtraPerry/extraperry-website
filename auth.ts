import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Gitlab from "next-auth/providers/gitlab";
import Discord from "@auth/core/providers/discord";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub, Gitlab, Discord],
});
