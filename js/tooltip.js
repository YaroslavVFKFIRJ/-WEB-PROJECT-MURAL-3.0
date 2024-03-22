'use strict';
let SvgArr = document.querySelectorAll('.s0');
let ToolTip = document.getElementById('tooltip');
function VisToolTip(per) {
	let ToolTipText = per.getAttribute("data-svg");
	ToolTip.classList.toggle("appear")
	ToolTip.innerHTML = ToolTipText.substr(1);
};
function InVisToolTip() {
	// ToolTip.style.display = "none";
	ToolTip.classList.toggle("appear");
};
SvgArr.forEach(el => {
	el.addEventListener('mouseover', el = () => {
		VisToolTip(el);
	}
	)
	el.addEventListener('mouseout', el = () => {
		InVisToolTip();
	}
	)
}
)
function Moving(el) {
	ToolTip.style.left = (event.clientX + 20) + 'px';
	ToolTip.style.top = (event.clientY + 30) + 'px';
}
