
"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"


import ForgetPasswordForm from './_components/forget-password-form'
import Introduce from "../_components/introduce"
import RolePassword from "./_components/role-password"

export default function ForgetPasswordPage() {


  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl bg-white shadow-lg flex overflow-hidden">
      <ForgetPasswordForm></ForgetPasswordForm>
      <RolePassword></RolePassword>
      </Card>
    </div>
  )
}