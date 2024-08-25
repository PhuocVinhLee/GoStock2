"use client"

import { ChevronUpIcon, LockIcon, MailIcon, TrendingUpIcon, BarChartIcon, DollarSignIcon } from "lucide-react"



const Introduce = () => {
  return (
    <div className="w-1/2 bg-gray-100 p-8 flex flex-col justify-center">
    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Welcome to GoStock</h2>
    <p className="text-gray-600 mb-8 text-center">
      Your all-in-one platform for smart stock trading and portfolio management.
    </p>
    <div className="space-y-6">
      <div className="flex items-center">
        <div className="bg-green-100 p-3 rounded-full mr-4">
          <TrendingUpIcon className="h-6 w-6 text-green-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">Real-time Trading</h3>
          <p className="text-sm text-gray-600">Stay updated with live market data</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="bg-blue-100 p-3 rounded-full mr-4">
          <BarChartIcon className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">Advanced Analytics</h3>
          <p className="text-sm text-gray-600">Make informed decisions with our tools</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="bg-purple-100 p-3 rounded-full mr-4">
          <DollarSignIcon className="h-6 w-6 text-purple-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">Portfolio Management</h3>
          <p className="text-sm text-gray-600">Track and optimize your investments</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Introduce