import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  ClerkProvider,
} from "@clerk/clerk-react";

export const Auth = () => {
  return (
    <div className="signInContainer">
      <SignedOut>
        <SignUpButton mode="modal" />

        <SignInButton mode="modal" />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};
