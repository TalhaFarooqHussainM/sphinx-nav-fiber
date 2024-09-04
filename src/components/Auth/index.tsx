import { PropsWithChildren, useCallback, useEffect, useState } from 'react'
import * as sphinx from 'sphinx-bridge'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { isDevelopment, isE2E } from '~/constants'
import { getIsAdmin } from '~/network/auth'
import { useFeatureFlagStore } from '~/stores/useFeatureFlagStore'
import { useUserStore } from '~/stores/useUserStore'
import { sphinxBridge } from '~/testSphinxBridge'
import { updateBudget } from '~/utils'
import { isAndroid, isWebView } from '~/utils/isWebView'

export const AuthGuard = ({ children }: PropsWithChildren) => {
  const [unAuthorized, setUnauthorized] = useState(false)
  const { setBudget, setIsAdmin, setPubKey, setIsAuthenticated } = useUserStore((s) => s)

  const [
    setTrendingTopicsFeatureFlag,
    setQueuedSourcesFeatureFlag,
    setCustomSchemaFeatureFlag,
    setRealtimeGraphFeatureFlag,
    setChatInterfaceFeatureFlag,
  ] = useFeatureFlagStore((s) => [
    s.setTrendingTopicsFeatureFlag,
    s.setQueuedSourcesFeatureFlag,
    s.setCustomSchemaFeatureFlag,
    s.setRealtimeGraphFeatureFlag,
    s.setChatInterfaceFeatureFlag,
  ])

  const handleAuth = useCallback(async () => {
    localStorage.removeItem('admin')
    localStorage.removeItem('signature')

    let sphinxEnable

    try {
      if (!isE2E) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        sphinxEnable = await sphinx.enable()
      } else {
        sphinxEnable = await sphinxBridge.enable()
      }

      sessionStorage.setItem('isSphinx', sphinxEnable ? 'true' : 'false')

      setPubKey(sphinxEnable?.pubkey)
    } catch (error) {
      setPubKey('')
    }

    await updateBudget(setBudget)

    if (isE2E || isDevelopment) {
      setIsAuthenticated(true)
    }
  }, [setBudget, setPubKey, setIsAuthenticated])

  const handleIsAdmin = useCallback(async () => {
    try {
      const res = await getIsAdmin()

      if (!res.data.isPublic && !res.data.isAdmin && !res.data.isMember) {
        setUnauthorized(true)

        return
      }

      if (res.data) {
        localStorage.setItem('admin', JSON.stringify({ isAdmin: res.data.isAdmin }))
        setIsAdmin(!!res.data.isAdmin)

        setTrendingTopicsFeatureFlag(res.data.trendingTopics)
        setQueuedSourcesFeatureFlag(res.data.queuedSources)
        setCustomSchemaFeatureFlag(res.data.customSchema)
        setRealtimeGraphFeatureFlag(res.data.realtimeGraph || false)
        setChatInterfaceFeatureFlag(res.data.chatInterface || false)
      }

      setIsAuthenticated(true)
    } catch (error) {
      /* not an admin */
    }
  }, [
    setIsAuthenticated,
    setIsAdmin,
    setTrendingTopicsFeatureFlag,
    setQueuedSourcesFeatureFlag,
    setCustomSchemaFeatureFlag,
    setRealtimeGraphFeatureFlag,
    setChatInterfaceFeatureFlag,
  ])

  // auth checker
  useEffect(() => {
    const init = async () => {
      if (isWebView() || isE2E || isAndroid()) {
        try {
          if (isAndroid()) {
            // eslint-disable-next-line no-promise-executor-return
            await new Promise((r) => setTimeout(r, 5000))
          }

          await handleAuth()
        } catch (error) {
          console.log(error)
        }
      }

      await handleIsAdmin()
    }

    init()
  }, [handleAuth, handleIsAdmin])

  const message = 'This is a private Graph, Contact Admin'

  if (unAuthorized) {
    return (
      <StyledFlex>
        <StyledText>{message}</StyledText>
      </StyledFlex>
    )
  }

  return <>{children}</>
}

const StyledText = styled(Text)`
  font-size: 5rem;
  font-weight: 600;
  font-family: 'Barlow';
  text-align: center;
`

const StyledFlex = styled(Flex)`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`
