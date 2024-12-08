import React, { useEffect, useState } from 'react'
import CardDataStats from '../../components/CardDataStats'
import { AiOutlineDollar } from 'react-icons/ai'

const TotalSalesData = () => {
  const [totalSales, setTotalSales] = useState('128K')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTotalSales = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin',
        ) // Replace with a real API
        if (!response.ok) {
          throw new Error('Failed to fetch total sales data')
        }
        const data = await response.json()
        setTotalSales(data.total_supply || 0) // Example field
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    fetchTotalSales()
  }, [])

  return (
    <CardDataStats
      title="Total Sales"
      total={loading ? 'Loading...' : `$${totalSales}`}
      rate="5.67%"
      levelUp
    >
      <AiOutlineDollar className="text-primary dark:text-white" size={22} />
    </CardDataStats>
  )
}

export default TotalSalesData
