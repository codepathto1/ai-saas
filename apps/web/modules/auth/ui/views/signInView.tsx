import { SignIn } from "@clerk/nextjs";

// If there is an error change the default export to named export
// No error but no suggestions from my experience so changed to named export
export const SignInView = () => {
  return (
    <div>
      <SignIn />
    </div>
  );
};
