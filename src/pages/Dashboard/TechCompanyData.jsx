import React, { useEffect, useState } from 'react'
import CardDataStats from '../../components/CardDataStats'
import { AiOutlineStock } from 'react-icons/ai'

const TechCompanyData = () => {
  const [companyData, setCompanyData] = useState('800K')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin',
        ) // Replace with a real API
        if (!response.ok) {
          throw new Error('Failed to fetch company data')
        }
        const data = await response.json()
        setCompanyData(data.market_cap || 0)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    fetchCompanyData()
  }, [])

  return (
    <CardDataStats
      title="Tech Company Data"
      total={loading ? 'Loading...' : `$${companyData}`}
      rate="2.45%"
      levelUp
    >
      <AiOutlineStock className="text-primary dark:text-white" size={22} />
    </CardDataStats>
  )
}

export default TechCompanyData
