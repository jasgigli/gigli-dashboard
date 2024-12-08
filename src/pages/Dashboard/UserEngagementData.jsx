import React, { useEffect, useState } from 'react'
import CardDataStats from '../../components/CardDataStats'
import { FiUsers } from 'react-icons/fi'

const UserEngagementData = () => {
  const [userEngagement, setUserEngagement] = useState('59.5')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUserEngagement = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin',
        ) // Replace with a real API
        if (!response.ok) {
          throw new Error('Failed to fetch user engagement data')
        }
        const data = await response.json()
        setUserEngagement(data.market_cap_change_24h || 0) // Example field
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    fetchUserEngagement()
  }, [])

  return (
    <CardDataStats
      title="User Engagement"
      total={loading ? 'Loading...' : `${userEngagement}%`}
      rate="3.45%"
      levelUp
    >
      <FiUsers className="text-primary dark:text-white" size={22} />
    </CardDataStats>
  )
}

export default UserEngagementData
