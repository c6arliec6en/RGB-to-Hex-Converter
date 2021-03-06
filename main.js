const red = document.querySelector('#red-code')
const green = document.querySelector('#green-code')
const black = document.querySelector('#black-code')
const submit = document.querySelector('.submit')
const hexShow = document.querySelector('.hex-show')
const hexColor = document.querySelector('.hex-color')
const alert = document.querySelector('#alert')
const colors = document.querySelectorAll('[name="color"]')

submit.addEventListener('click', event => {
	alert.innerHTML = ''
	let rgb = []

	colors.forEach(color => {
		if (color.value == '') {
			alert.innerHTML = "請勿留白"
			color.classList.add('danger')
			
		} else if (color.value < 0 || color.value > 255 || isNaN(color.value)) { 
			alert.innerHTML = "請輸入0~255之間的數字"
			color.classList.add('danger')
			
		} else {
			color.classList.remove('danger')
			rgb.push(color.value)
		}
	})
	rgbConvertHex (rgb)
	
})

function rgbConvertHex  (rgbArray) {
	let rgbCode = rgbArray
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

const colorBars = document.querySelectorAll('.bar')
const colorDisplay = document.querySelectorAll('.color-display')
const hexDisplay = document.querySelector('.hex-display')
const content = document.querySelector('body')
const hexBar = ['FF','FF','FF']


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




// 即時輸出現在的顏色
function showTheColor () {
	let background = '#' + hexBar[0] + hexBar[1] + hexBar[2]
	hexDisplay.innerHTML = background 
	content.style.backgroundColor = background
}

// 讓一開始顯示color bar的數字
(function () {
	colorDisplay.forEach(a => {
	a.innerHTML = a.previousElementSibling.value
	})
})()


function getTheValue () {
	let value = this.value

	this.nextElementSibling.innerHTML = value

	if (this.matches('#red-bar')) {
		hexBar[0] = rgbConvertHexBar(value)
		showTheColor () 
	}

	if (this.matches('#green-bar')) {
		hexBar[1] = rgbConvertHexBar(value)
		showTheColor () 
	}

	if (this.matches('#black-bar')) {
		hexBar[2] = rgbConvertHexBar(value)
		showTheColor () 
	}


}
colorBars.forEach(colorBar => colorBar.addEventListener('change',getTheValue))
colorBars.forEach(colorBar => colorBar.addEventListener('mousemove',getTheValue))


showTheColor () 

