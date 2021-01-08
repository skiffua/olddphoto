export const figcaptionGenerator = (title: string, description?: string): string => {
  if (description) {
    return `<span style="color: white;font-size: 15px;"><b>${title}</b></span><p style="margin:10px 0 5px 0;font-size: 13px;text-align: left;color: white">${description}</p>`
  }

  return `<span>${title}</span>`
}
