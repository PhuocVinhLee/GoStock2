import { ChevronUpIcon, LockIcon, UserIcon } from 'lucide-react'
import React from 'react'

const Introduce = () => {
  return (
    <div className="w-full hidden bg-gray-100  dark:text-white  dark:bg-black/50 p-8 sm:flex flex-col justify-center">
    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800  dark:text-white">Join GoStock Today</h2>
    <p className="text-gray-600 mb-8 text-center  dark:text-white">
      Start your journey to smarter investing and portfolio management.
    </p>
    <div className="space-y-6">
      <div className="flex items-center">
        <div className="bg-green-100 p-3 rounded-full mr-4">
          <ChevronUpIcon className="h-6 w-6 text-green-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800  dark:text-white">Real-time Trading</h3>
          <p className="text-sm text-gray-600  dark:text-white">Access live market data and execute trades instantly</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="bg-blue-100 p-3 rounded-full mr-4">
          <UserIcon className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800  dark:text-white">Personalized Portfolio</h3>
          <p className="text-sm text-gray-600  dark:text-white">Tailor your investment strategy to your goals</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="bg-purple-100 p-3 rounded-full mr-4">
          <LockIcon className="h-6 w-6 text-purple-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800  dark:text-white">Secure Platform</h3>
          <p className="text-sm text-gray-600  dark:text-white">Your investments are protected with top-tier security</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Introduce