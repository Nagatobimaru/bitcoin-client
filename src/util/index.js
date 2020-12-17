export const formatCurrency = (num) => {
  return `$${num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`
}

export const imageDataUrl = (url) =>
  fetch(url)
    .then((response) => response.blob())
    .then(
      (blob) =>
        new Promise((resolve, reject) => {          const reader = new FileReader()
          reader.onloadend = () => resolve(reader.result)
          reader.onerror = reject
          reader.readAsDataURL(blob)
        })
    )
