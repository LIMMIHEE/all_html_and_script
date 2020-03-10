class Blog {
	constructor() {
		this.setInitVariables();
		this.registerEvents();
		this.likedSet = new Set();
	}

	setInitVariables() {
		this.blogList = document.querySelector(".blogList > ul");
	}

	registerEvents() {
		const startBtn = document.querySelector(".start");
		const dataURL = "/data/data.json";

		startBtn.addEventListener("click", () => {
			this.setInitData(dataURL);
		});

		this.blogList.addEventListener("click", ({target}) => {
			const targetClassName = target.className; 
			if(targetClassName !== "like" && targetClassName !=="unlike") return;

			const postTitle = target.previousElementSibling.textContent;

			if(targetClassName === "unlike") {
				target.className = "like";
				target.innerText = "찜하기익";
				this.likedSet.delete(postTitle);
			} else {
				target.className = "unlike";
				target.innerText = "찜취소하기익";
				this.likedSet.add(postTitle);
			}

			// 찜  추가.
			this.updateLikedList();
		});

	}

	updateLikedList() {
		const ul = document.querySelector(".like-list > ul");
		let likedSum = "";
		this.likedSet.forEach ( (v) => {
			likedSum += `<li> ${v} </li>`;
		})

		ul.innerHTML = likedSum;
	}

	setInitData(dataURL) {
		this.getData(dataURL, this.insertPosts.bind(this));
	}

	getData(dataURL, fn) {
		const dReq = new XMLHttpRequest();
		dReq.addEventListener("load", () => {
			const list = JSON.parse(dReq.responseText).body;
			fn(list);
		});
		dReq.open('GET', dataURL);
		dReq.send();
	}

	insertPosts(list) {
		list.forEach((v) => {
			this.blogList.innerHTML += ` <li><a href=${v.link}> ${v.title} </a><div class="like">찜하기이익</div></li>`;
		})
	}
}

export default Blog;