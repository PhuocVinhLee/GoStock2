import { Button } from '@/components/ui/button'
import { CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { MailIcon } from 'lucide-react'
import React from 'react'

function ForgetPassword() {
  return (
    <form onClick={()=>{}}  >
              <CardContent className="space-y-4 pb-0">
                <div className="space-y-2">
                  <Label htmlFor="reset-email" className="text-sm font-medium text-gray-700">
                    Email
                  </Label>
                  <div className="relative">
                    <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      id="reset-email"
                      type="email"
                      placeholder="Enter your email"
                      className="pl-10 bg-gray-50 border-gray-200"
                     
                      
                    
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full">
                  Reset Password
                </Button>
              </CardContent>
            </form>
  )
}

export default ForgetPassword