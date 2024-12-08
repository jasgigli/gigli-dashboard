import React, { useEffect, useState } from 'react'
import { FiUsers } from 'react-icons/fi'
import CardDataStats from '../../components/CardDataStats'

// Helper function to format numbers with K, M, or B
const formatNumber = (num) => {
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(1) + 'B'
  } else if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1) + 'M'
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(1) + 'K'
  } else {
    return num
  }
}

const CryptoDailyUsers = () => {
  const [dailyUsers, setDailyUsers] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Fetch data from CoinGecko API
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin',
        )
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        const data = await response.json()
        // Assume the trading volume represents daily active users
        setDailyUsers(data[0]?.total_volume || 0)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    fetchCryptoData()
  }, [])

  return (
    <CardDataStats
      title="Crypto Daily Users"
      total={loading ? 'Loading...' : formatNumber(dailyUsers)}
      rate="0%"
      levelUp
    >
      <FiUsers className="text-primary dark:text-white" size={22} />
    </CardDataStats>
  )
}

export default CryptoDailyUsers
