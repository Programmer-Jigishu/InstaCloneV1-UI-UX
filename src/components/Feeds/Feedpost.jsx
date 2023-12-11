import { Image } from '@chakra-ui/react'
import React from 'react'
import FeedFooter from './FeedFooter'
import FeedHeader from './FeedHeader'

function Feedpost({img,username,avatar}) {
  return (
    
    <div>
        <FeedHeader username={username} avatar={avatar}/>
        <Image src={img}/>
        <FeedFooter username={username}/>
    </div>
  )
}

export default Feedpost