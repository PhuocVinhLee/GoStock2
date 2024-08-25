"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import SignUpForm from "./_components/sign-up-form";
import Introduce from "./_components/introduce";

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl bg-white shadow-lg flex overflow-hidden">
        <SignUpForm></SignUpForm>
        <Introduce></Introduce>
      </Card>
    </div>
  );
}
