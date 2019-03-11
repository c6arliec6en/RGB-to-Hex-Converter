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


//Color Bar


function rgbConvertHexBar  (color) {
	let hex = ''
	let Interger = Math.floor(color/16)
	let remainder = color%16
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

	return hex
}



const colorBars = document.querySelectorAll('.bar')
const colorDisplay = document.querySelector('.color-display')
const hexDisplay = document.querySelector('.hex-display')
const content = document.querySelector('body')
const hexBar = ['FF','FF','FF']

function showTheColor () {
	let background = '#' + hexBar[0] + hexBar[1] + hexBar[2]
	hexDisplay.innerHTML = background 
	content.style.backgroundColor = background
}




function getTheValue () {
	let value = this.value
	

	// console.log(this)
	this.nextElementSibling.innerHTML = value

	if (this.matches('#red-bar')) {
		hexBar[0] = rgbConvertHexBar(value)
		console.log(hexBar)
		console.log('cool')
		showTheColor () 
	}

	if (this.matches('#green-bar')) {
		console.log('good')
	}

	if (this.matches('#black-bar')) {
		console.log('333')
	}


}
colorBars.forEach(colorBar => colorBar.addEventListener('change',getTheValue))
colorBars.forEach(colorBar => colorBar.addEventListener('mousemove',getTheValue))


