import {createContext, useContext, useEffect, useState} from 'react'

const WatchLaterContext = createContext()

export const WatchLaterProvider = ({children}) => {
  const [watchLater, setWatchLater] = useState(() => {
    try {
      const data = localStorage.getItem('nxtflix_watch_later')
      return data ? JSON.parse(data) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(
      'nxtflix_watch_later',
      JSON.stringify(watchLater),
    )
  }, [watchLater])

  const isInWatchLater = id =>
    watchLater.some(movie => movie.id === id)

  const toggleWatchLater = movie => {
    if (isInWatchLater(movie.id)) {
      setWatchLater(prev =>
        prev.filter(each => each.id !== movie.id),
      )
    } else {
      setWatchLater(prev => [...prev, movie])
    }
  }

  return (
    <WatchLaterContext.Provider
      value={{
        watchLater,
        isInWatchLater,
        toggleWatchLater,
      }}
    >
      {children}
    </WatchLaterContext.Provider>
  )
}

export const useWatchLater = () =>
  useContext(WatchLaterContext)