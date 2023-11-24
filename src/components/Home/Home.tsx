import { signIn, signOut } from "next-auth/react";
import { useFetchSession } from "~/hooks/useSession";
import React from "react";
import Button from "../common/Button";

export default function HomeComponent() {
  const { session } = useFetchSession();

  return (
    <div>
      {session ? (
        <Button
          onClick={() => signOut()}
          btnClass="btn-secondary"
          title="Sign Out"
        />
      ) : (
        <Button
          onClick={() => signIn()}
          btnClass="btn-primary"
          title="Sign In"
        />
      )}
    </div>
  );
}
