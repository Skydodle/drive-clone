/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/non-nullable-type-assertion-style */
import { signIn, signOut } from "next-auth/react";
import { useFetchSession } from "~/hooks/useSession";
import React from "react";
import Button from "../common/Button";
import styles from "./Home.module.scss";

export default function HomeComponent() {
  const { session } = useFetchSession();
  console.log(session?.user.image);
  return (
    <div className={styles.authBtn}>
      {session ? (
        // <Button
        //   onClick={() => signOut()}
        //   btnClass="btn-secondary"
        //   title="Sign Out"
        // />
        <img
          className={styles.profileImg}
          src={session?.user.image as string}
          alt="profile image"
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
