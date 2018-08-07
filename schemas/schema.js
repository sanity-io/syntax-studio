import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import {
  episode,
  host,
  sponsor,
  podcast
} from './podcast';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    episode,
    host,
    sponsor,
    podcast,
  ])
})
