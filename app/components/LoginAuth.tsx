import React from "react";
import { signIn } from "@/auth";
import Image from "next/image";

const LoginAuth = async () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 pt-5 pb-4">
      <form
        className="w-96 h-12"
        action={async () => {
          "use server";
          await signIn("github");
        }}
      >
        <button
          type="submit"
          className="flex items-center justify-center gap-4 w-full h-full border-1 rounded-2xl border-white p-2 hover:bg-gray-800"
        >
          <Image
            src="/github/github-mark-white.svg"
            alt="Github"
            width={32}
            height={32}
          />
          <p>Github</p>
        </button>
      </form>

      <form
        className="w-96 h-12"
        action={async () => {
          "use server";
          await signIn("gitlab");
        }}
      >
        <button
          type="submit"
          className="flex items-center justify-center gap-4 w-full h-full border-1 rounded-2xl border-white p-2 hover:bg-gray-800"
        >
          <Image
            src="/gitlab/gitlab-mark-color.svg"
            alt="Github"
            width={32}
            height={32}
          />
          <p>Gitlab</p>
        </button>
      </form>

      <form
        className="w-96 h-12"
        action={async () => {
          "use server";
          await signIn("discord");
        }}
      >
        <div>
          <button
            type="submit"
            className="flex items-center justify-center gap-4 w-full h-full border-1 rounded-2xl border-white p-2 hover:bg-gray-800"
          >
            <Image
              src="/discord/discord-mark-color.svg"
              alt="Discord"
              width={32}
              height={32}
            />
            <p>Discord</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginAuth;
