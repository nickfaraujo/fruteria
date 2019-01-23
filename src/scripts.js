let body = document.querySelector("body"),
	modal = document.querySelector("#gallery-modal"),
	modalImg = modal.querySelector("img"),
	modalCap = modal.querySelector("p"),
	modalBtn = modal.querySelector("button");

const toggleModal = () => {
	body.classList.toggle("overflow-hidden");
	modal.classList.toggle("d-none");
	if(!modal.classList.contains("d-none")){
		modalImg.removeAttribute("src");
		modalCap.innerHTML = "";
	}
};

const gallery = (gid) => {
	let g = document.querySelector(`#${gid}`),
		thumbnails = g.querySelectorAll(".gallery-thumbnail");

	const closeImg = () => {
		toggleModal();
	};

	const openImg = (thumb, index) => {
		toggleModal();
		modalImg.src = thumb.src.replace(/-thumbnail/, "");
		modalImg.setAttribute("data-index", index);
		modalCap.innerHTML = thumb.getAttribute("alt");
	};

	const nextImg = () => {
		let index = Number(modalImg.getAttribute("data-index"));

		if(index < (thumbnails.length-1))
			index++;
		else if(index === (thumbnails.length-1))
			index = 0;

		modalImg.src = thumbnails[index].src.replace(/-thumbnail/, "");
		modalImg.setAttribute("data-index", index);
		modalCap.innerHTML = thumbnails[index].getAttribute("alt");
	};


	for(let i = 0; i < thumbnails.length; i++){
		thumbnails[i].addEventListener("click", e => { openImg(thumbnails[i], i) });
	}
};

let fruitsGallery = gallery("gallery-fruits"),
	bikesGallery = gallery("gallery-bikes");

modalBtn.addEventListener("click", toggleModal);