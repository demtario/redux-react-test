import React from 'react'

import Collapse from '../Collapse'

const Episode = ({episode, open, onOpenChange}) => {

  console.log(episode);

  return (
    <Collapse
      title={episode.name}
      open={open}
      onChange={onOpenChange}
    >
      <ul>
        <li><strong>ID:</strong> {episode.id}</li>
        <li><strong>Air date:</strong> {episode.air_date}</li>
        <li><strong>Episode:</strong> {episode.episode}</li>
      </ul>
    </Collapse>
  )
}

export default Episode
