			let data = [
				{
					title: "Item 1",
					date: "January 1st, 2019",
					content:
						"Lorem ipsum dolor amet four dollar toast swag health goth VHS hashtag, fingerstache meggings lyft ramps affogato mustache gochujang. Tumblr art party +1 literally ramps four loko poutine cold-pressed cray pop-up forage actually."
				},
				{
					title: "Item 2",
					date: "January 2nd, 2019",
					content:
						"Green juice ennui bicycle rights woke live-edge austin heirloom art party VHS mumblecore humblebrag. Cred sartorial venmo, yr shoreditch selfies unicorn truffaut."
				}
			];

			// Creates a new item and adds it to the timeline.
			function newItem(title, date, content) {
				let timeline = document.getElementById("timeline");
				let timelineItem = document.createElement("li");
				timelineItem.classList = "timeline-item";
				timelineItem.innerHTML = `
					<div class="timeline-icon"></div>
					<div class="timeline-body">
						<div class="timeline-lead">
							<h3 class="timeline-title">${title}</h3>
							<span class="timeline-date">${date}</span>
						</div>
						<p class="timeline-content">${content}</p>
					</div>`;
				timeline.appendChild(timelineItem);
			}

			// Pulls data from the data array and adds each item to the list.
			function populateTimeline(items) {
				items.forEach(item => {
					newItem(item.title, item.date, item.content);
				});
			}

			populateTimeline(data);

			// Adding a new item after the initial population.
			newItem('Item 3', 'January 3rd, 2019', 'Banjo 8-bit brunch, gentrify direct trade salvia echo park brooklyn VHS. Palo santo kombucha helvetica, ramps kinfolk banjo swag twee hashtag echo park.');
