const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', (e) => {
	currentActive++

	if (currentActive > circles.length) currentActive = circles.length

	update()
})

prev.addEventListener('click', (e) => {
	currentActive--

	if (currentActive < 1) currentActive = currentActive = 1

	update()
})

function update() {
	if (currentActive >= circles.length) next.disabled = true
	if (currentActive < circles.length) next.disabled = false

	if (currentActive === 1) prev.disabled = true
	if (currentActive > 1) prev.disabled = false

	circles.forEach((circle, index) => {
		if (index < currentActive) {
			circle.classList.add('active')
		} else {
			circle.classList.remove('active')
		}
	})

	const actives = document.querySelectorAll('.active')
	progress.style.width =
		((actives.length - 1) / (circles.length - 0.9)) * 100 + '%'
}
