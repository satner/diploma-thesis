import { gql } from 'apollo-server-express'

export default gql`
    type Query {
        _: String
    }
    type Mutation {
        _: String
    }
    type Subscription {
        _: String
    }
#    TODO: ta match details na ftiaxw
    type SummonerData {
        summonerInfo: Summoner
        summonerLeagueInfo: League
        summonerMatchDetails: Match
    }
`