const BASE_URL = "https://zipapi.fly.dev"

export async function getZip(zipcode, country = "US") {
    let columns = [
      "street1",
      "street2",
      "city",
      "state",
    ]
    let filteredData = {}
    let data = await fetch(`${BASE_URL}/?country=${country}&zip=${zipcode}`)
    .then(response => response.json())
    for (let key of columns) {
      if(data[key]){
        filteredData[key] = data[key]
      }
    }
    return filteredData
}
