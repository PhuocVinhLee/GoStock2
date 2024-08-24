import { Card } from '@/components/ui/card'
import React from 'react'
import { LuArrowUp } from 'react-icons/lu'

const TotalInvestment = () => {
  return (
    <Card className=' bg-black text-white p-3 flex items-center rounded-xl justify-between'>
        <div className='flex-col flex items-centen justify-start'>
            <p className='text-sm'>Total Investment</p>
            <p className='text-xl'>$5380.90</p>
        </div>
        <div >
            <p className='  text-sm flex items-center justify-between text-green-500  font-medium'>+18.10% <LuArrowUp/> </p>
        </div>
    </Card>
  )
}

export default TotalInvestment