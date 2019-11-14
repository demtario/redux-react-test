export const getIdFromLink = (link) => {
  const splitted = link.split('/')
  return splitted[splitted.length-1]
}