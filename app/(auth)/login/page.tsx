
"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import Introduce from './_components/introduce'
import LoginForm from './_components/login-form'

export default function Component() {


  return (
    <div className="min-h-screen bg-gray-50  dark:bg-black/85 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl bg-white  dark:bg-customDark  shadow-lg flex overflow-hidden ">
      <LoginForm></LoginForm>
      <Introduce></Introduce>
      </Card>
    </div>
  )
}