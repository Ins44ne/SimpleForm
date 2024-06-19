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
    const carInfo = document.getElementById('carInfo')
    carInfo.style.display = 'flex'
  }
  if (value === 'carOther' && bool === true) {
    const otherCar = document.getElementById('otherCar')
    otherCar.style.display = 'flex'
  }
  if (value === 'car' && bool === false) {
    const carInfo = document.getElementById('carInfo')
    carInfo.style.display = 'none'
  }

  if (value === 'moto' && bool === true) {
    const motoInfo = document.getElementById('motoInfo')
    motoInfo.style.display = 'flex'
  }
  if (value === 'motoOther' && bool === true) {
    const otherMoto = document.getElementById('otherMoto')
    otherMoto.style.display = 'flex'
  }
  if (value === 'moto' && bool === false) {
    const motoInfo = document.getElementById('motoInfo')
    motoInfo.style.display = 'none'
  }
}

rateForm.addEventListener('mousemove', renderScaleNumber)

haveCarYes.addEventListener('click', () => showAddInfo('car', true))
haveCarNo.addEventListener('click', () => showAddInfo('car', false))
otherBrandCar.addEventListener('click', () => showAddInfo('carOther', true))

havemotoYes.addEventListener('click', () => showAddInfo('moto', true))
havemotoNo.addEventListener('click', () => showAddInfo('moto', false))
otherBrandMoto.addEventListener('click', () => showAddInfo('motoOther', true))
