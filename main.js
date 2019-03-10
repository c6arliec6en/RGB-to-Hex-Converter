const red = document.querySelector('#red-code')
const green = document.querySelector('#green-code')
const black = document.querySelector('#black-code')
const submit = document.querySelector('.submit')
const hexShow = document.querySelector('.hex-show')
const hexColor = document.querySelector('.hex-color')
const alert = document.querySelector('#alert')


submit.addEventListener('click', event => {
	alert.innerHTML = ''
	let redCode = Number(red.value)
	let greenCode = Number(green.value)
	let blackCode = Number(black.value)

	if (redCode == '' || greenCode == '' || blackCode == '') {
		alert.innerHTML += "請勿留白"
	} else if (redCode < 0 || greenCode < 0 || blackCode < 0 || redCode > 255 || greenCode > 255 || blackCode > 255) {
		alert.innerHTML += "請輸入0~255之間的數字"
	} else  {
		rgbConvertHex (redCode, greenCode , blackCode)
	}
})

function rgbConvertHex  (r, g, b) {
	let rgbCode = [r,g,b]
	let hex = '#'

	rgbCode.forEach(code => {
		let Interger = Math.floor(code/16)
		let remainder = code%16
		let colorCode = [Interger, remainder]

		colorCode.forEach(num => {
			if (num > 9) {
				switch (num) {
					case 10:
						hex += 'A'
						break;
					case 11:
						hex += 'B'
						break;
					case 12:
						hex += 'C'
						break;
					case 13:
						hex += 'D'
						break;
					case 14:
						hex += 'E'
						break;
					case 15:
						hex += 'F'
						break;					
					default:
						break;
					}
				} else if (num === 0){
						hex += '0'
				} else {
					hex += num
				}
		})
	
	})

	hexShow.value = ''
	hexShow.value = hex
	hexColor.style.backgroundColor = hex

}

