const currentTemp = document.getElementById("currentTemp")
const apiKey = "9e03365ef1ed5c19afd446fb2160c284"

function submitCity() {
  let city = document.getElementById("city").value
  currentTempFunc(city)
  forecastFunc(city)
}

const currentTempFunc = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  const objecturl = await fetch(url)
  const object = await objecturl.json()

  if (object.message != undefined) {
    document.getElementById("cityName").innerHTML = `
         <div class="text-center text-2xl font-extrabold text-gray-600">
           ${object.message}
         </div>
  `
  } else {
    currentTemp.innerHTML = `
    <div class="">
      <div class="bg-gray-200 rounded-xl w-60 mx-auto p-1 opacity-50">
        <h1 class="text-blue-800 text-3xl text-bold text-center mt-3">${object.main.temp}°C</h1>
           <br>
       
        <p class="text-center text-blue-500 dark:text-gray-400">${object.weather[0].main}</p>
      </div>
    </div>
  `
    document.getElementById("cityName").innerHTML = `${object.name}`
  }
}

const forecastFunc = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
  const objecturl = await fetch(url)
  const object = await objecturl.json()
  console.log(object)

  let data = []
  forecast.innerHTML = ""
  let list = object.list
  for (let num = 0; num < list.length; num++) {
    const element = list[num]
    let variable = new Date(element.dt_txt).getHours()
    if (variable === 12) {
      data.push(element)
    }
  }

  
}