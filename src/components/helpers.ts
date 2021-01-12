export const figcaptionGenerator = (title: string, description?: string, source?: string): string => {
  if (description) {
    if (source) {
      return `<span style="color: white;font-size: 15px;">
                <b>${title}
                </b>
            </span>
            <div>
              <p style="margin:10px 0 5px 0;font-size: 13px;text-align: left;color: white">${description}</p>
              <p style="margin:10px 0 5px 0;font-size: 12px;text-align: left;color: white">Джерело: ${source}</p>
            </div>`
    }
    return `<span style="color: white;font-size: 15px;">
                <b>${title}
                </b>
            </span>
            <div>
              <p style="margin:10px 0 5px 0;font-size: 13px;text-align: left;color: white">${description}</p>
            </div>`
  }

  return `<span>${title}</span>`
}

export const linkSourceGenerator = (text: string, link: string): string => {
  return `<a href="${link}" target="_blank" style="margin:10px 0 5px 0;font-size: 13px;text-align: left;color: white;text-decoration: none"><i>${text}</i></a>`
}
