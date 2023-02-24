import client from '../client-config';
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}
