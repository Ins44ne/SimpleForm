const motoInfo = document.getElementById('motoInfo')
const otherMoto = document.getElementById('otherMoto')
const otherCar = document.getElementById('otherCar')
const carInfo = document.getElementById('carInfo')
const rateForm = document.getElementById('rateForm')
const haveCarYes = document.getElementById('carYes')
const haveCarNo = document.getElementById('carNo')
const havemotoYes = document.getElementById('motoYes')
const havemotoNo = document.getElementById('motoNo')

function renderScaleNumber() {
  let scaleNumber = document.getElementById('rangeNumber')
  scaleNumber.textContent = rateForm.value
}

function showAddInfo(value, bool) {
  if (value === 'car' && bool === true) {
    carInfo.style.display = 'flex'
  }
  if (value === 'carOther' && bool === true) {
    otherCar.style.display = 'flex'
  }
  if (value === 'car' && bool === false) {
    carInfo.style.display = 'none'
    otherCar.style.display = 'none'
    otherBrandCar.checked = false
  }

  if (value === 'moto' && bool === true) {
    motoInfo.style.display = 'flex'
  }
  if (value === 'motoOther' && bool === true) {
    otherMoto.style.display = 'flex'
  }
  if (value === 'moto' && bool === false) {
    motoInfo.style.display = 'none'
    otherMoto.style.display = 'none'
    otherBrandMoto.checked = false
  }
}

rateForm.addEventListener('click', renderScaleNumber)
rateForm.addEventListener('mousemove', renderScaleNumber)

haveCarYes.addEventListener('click', () => showAddInfo('car', true))
haveCarNo.addEventListener('click', () => showAddInfo('car', false))
otherBrandCar.addEventListener('click', () => showAddInfo('carOther', true))

havemotoYes.addEventListener('click', () => showAddInfo('moto', true))
havemotoNo.addEventListener('click', () => showAddInfo('moto', false))
otherBrandMoto.addEventListener('click', () => showAddInfo('motoOther', true))
