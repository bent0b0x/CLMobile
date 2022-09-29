import { Text } from 'react-native'
import { useLastMatches } from '../hooks/useLastMatches'
import styled from 'styled-components/native'

const Wrapper = styled.View`
  flex-direction: row;
`

const WLMarker = styled.View`
  background-color: ${({ win }: { win: boolean }) => (win ? 'green' : 'red')};
  width: 10px;
  height: 100%;
`

const HeaderRow = styled.View`
  flex-direction: row;
`

interface Props {
  name: string
  userId: number
}

export const LastMatches = ({ name, userId }: Props) => {
  const { data } = useLastMatches({ userId })

  if (!data) {
    return null
  }

  return (
    <>
      {data.map((match) => {
        const isV =
          match.vplayer1.toLowerCase().split(' ').join('') ===
          name.toLowerCase().split(' ').join('')

        return (
          <Wrapper>
            <WLMarker win={isV ? match.Winner === 'V' : match.Winner !== 'V'} />
            <HeaderRow>
              <Text>{new Date(match.MatchDate).toDateString()}</Text>
              <Text>vs. {isV ? match.hplayer1 : match.vplayer1}</Text>
            </HeaderRow>
          </Wrapper>
        )
      })}
    </>
  )
}
