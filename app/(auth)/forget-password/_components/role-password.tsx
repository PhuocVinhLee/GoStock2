import { ChevronUpIcon, KeyIcon, LockIcon } from 'lucide-react'
import React from 'react'

const RolePassword = () => {
  return (
    <div className="w-1/2 bg-gray-100 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Password Reset</h2>
          <p className="text-gray-600 mb-8 text-center">
            Create a strong, unique password to keep your GoStock account secure.
          </p>
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="bg-yellow-100 p-3 rounded-full mr-4">
                <LockIcon className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Strong Password</h3>
                <p className="text-sm text-gray-600">Use a mix of letters, numbers, and symbols</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <KeyIcon className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Unique Password</h3>
                <p className="text-sm text-gray-600">Don't reuse passwords from other accounts</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <ChevronUpIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Secure Access</h3>
                <p className="text-sm text-gray-600">Protect your investments and trading data</p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default RolePassword