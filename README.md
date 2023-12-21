## What is JavaScriptmas?🎄

![](https://raw.githubusercontent.com/boglarkasebestyen/javascriptmas2023/main/adventCalendar2023.jpg) 


JavaScriptmas is a 24-day long, daily coding challenge in JavaScript (with some HTML and CSS), organized by the Norwegian online coding school, [Scrimba](https://scrimba.com/), starting from December 1st until December 24th. 

In this repository I'm committing all of my solutions to this year's exercises. 2021's submissions can be viewed [here](https://github.com/boglarkasebestyen/javascriptmas2021) (I skipped 2022).

Scrimba's JS Advent Calendar, containing all of the exercises, can be found [here](https://scrimba.com/learn/javascriptmas). 


## Day 1 - Countdown to Christmas
- Get today's date (you only need the day)
- Calculate remaining days
- Display remaining days
- Stretch goals: 
	- display hours, minutes, seconds
	- add a countdown for another festival, your birthday, or Christmas 2024.

		![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGJmY2R2dGZjMDVwMHlpazFiNGFtcnNtdXVxeGRvNHZkaHplemc5cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fEu6umybhQkOnnq0lX/giphy.gif)

See / interact with my solution [here](https://scrimba.com/scrim/co41e49e392e1353f5c0e16aa
).

## Day 2 - Style a Colorful Button
- Gradient border
	- use provided colors or choose your own
	- gradient is 115 degrees 
- Hover state
	- gradient colors flip horizontally
	- button grows slightly in size
	- the text changes from gray to white
- Center button on page
- Hints and help: 
	- gradient border effect can be accomplished using a wrapping div OR with the border-image property
- What to research
	- the linear-gradient function
	- border-image and border-image-slice

		![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExazh4MnF4ZDF1dmYzazJhemZ5cmdyd3ZkcWx3M2Z1NW16NDVxMHJseSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/S2tICbn8T0CN7v62gi/giphy.gif)

See / interact with my solution [here](https://scrimba.com/scrim/co06c41d795843a861b61bbc4
).

## Day 3 - Divide Candy
- Challenge:
	- Some children have got some pieces of candy. 
	- They want to eat as much candy as they can but each child must eat exactly the same amount. 
	- Determine how many pieces of candy can be eaten altogether. 
	- A piece of candy can not be split.
 
 - Example:
 
	- Children: 3, Candies: 10
	- Each of the 3 children can eat 3 candies. 
	- Therefore, the total number of candies that can be eaten is 3*3 = 9, so the function calcTotalCandies should log out 9.

See / interact with my solution [here](https://scrimba.com/scrim/cof6248c8af1b868bfb651fee
).

## Day 4 - AI Christmas Joke Generator
 - 🎄 Challenge:
 	- When clicked, the doors should open to reveal a festive joke.
 - 🎁 Hints:
 	- Use an eventListener to listen for clicks
 	- The OpenAI API is the easiest API for this challenge but you can also try with HugginfFace.
 	- For OpenAI you will need to use the chat completions endpoint, which you can read about in the docs here: 
    https://platform.openai.com/docs/api-reference/chat/create
    - For HuggingFace, I would recommend using the "HuggingFaceH4/zephyr-7b-beta" model. Check out these docs to get you going: https://huggingface.co/docs/huggingface.js/inference/README, prompt design tips: https://huggingface.co/HuggingFaceH4/zephyr-7b-beta
    - The HTML and CSS have been done for you, but feel free to make changes if needed.
 
		![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjFqazdqdzQ5a2xjd2J4bGFsZmp4cjJzMHRmMjRlMjRvZnIwc2d4ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Wkv3t26B4bp6g7x0XD/giphy.gif)

See / interact with my solution [here](https://scrimba.com/scrim/cof47485b8279a7d97f137e48
).



## Day 5 - Jeopardy Card Flip
- Card has two sides, and flips from front to back on hover
- Match stules as closely as you can
- CSS only
- Don't worry about responsiveness
- Hints:
	- A card flip is essentially an element rotating 180 degrees in 3D space. Use .card class to create the flip effect, then show and hode the front and back content as the card flips
	- Use the transition property for a smooth flip
	- The CSS properties transform-style: preserve-3D and backface-visiblity will help you along the way

	
		![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeThzYjd4cDUyb3NlaG5wcnFsZWNxajVjbHprMnN3MWQ4ZjcwaTc2ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Hox3UNLT8Ru3ulgmVP/giphy.gif)

See / interact with my solution [here](https://scrimba.com/scrim/co74a41119a5ddda0ec437e9d
).
	

## Day 6 - Secret Santa
- Challenge:
	- Write a function to randomly assign each person in an array a "Secret Santa", who is someone else in the array
	- No one should be assigned themselves as their own Secret Santa

- Stretch goals:	
	- Create a UI with a button to trigger your Secret Santa function and display the results

		![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDM4YjNucng2NTF0Y3l2bWMzZjJ3emZ4NGxnZ240eTBqNXk5ZHVmbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/44l0FT8RGsqkc1Nf9Z/giphy.gif)

See / interact with my solution [here](https://scrimba.com/scrim/cod8b485ca21cd1bf73d21bf7).

## Day 7 - Xmas Present Wishlist
- Requirements:
	- Add items to the wishlist array
	- Iterate over the wishlist array
	- Display your wishlist on the page
	- Style the wishlist with CSS

- Stretch goals:
	- Provide a way ti add / remove wishlist items
	- Make each array item an object with the item's name, description, and a link to where it can be purchased

	
		![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExemE5bGp4bGRpZW04bm9yczNuNW00MDVnMjV2dWhmcWJ4dHR0djVlOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sPkkjjiFDey02IwbvX/giphy.gif)
		
		
See / interact with my solution [here](https://scrimba.com/scrim/cofd54f21b26385298179284c
).

## Day 8 - Animated Progress Bar
- Build a CSS animation of a progress bar filling to 100%. The animation should run continuously, with a small pause when the bar is filled 100%
- The progress begins red, turns blue at 50% full, and green when complete
- CSS only!

- Hints:
	- It may help to think of the progress bar as two elements, one on top of another: an outer progress bar and an inner progress bar. How can you use the width of the inner progress bar to create the effect of the outer progress bar filling?
	- Use the animation property and keyframes to complete this challenges. There's no way to pause an infinite animation between iterations, so to create the effect of a "pause" once the progress bar has filled to 100%, you may need an extra key frame

		![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmoxaGZ4cjA0M20yenR0amc4N2VlMzBtbm9jaXptaXc4cmxpbGg3eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LjrzS22JWBngNI1mip/giphy.gif)
		
		
See / interact with my solution [here](https://scrimba.com/scrim/co47d4ab3a11d576ca7561446
).

## Day 9 - 

## Day 10 - Rockin' Around
- Add code inside of the playSong(id) function to make the Youtube Player play the new Youtube song


	![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzl6dWJ1eGIydHB2ZmkzbXdpeXdnZHFwazVrdzJjZTR2MnNhNzdqbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jgFDnnPjxGAw3KIgLz/giphy.gif)
		
		
See / interact with my solution [here](https://scrimba.com/scrim/co9b842f29d866570cc4935b1
).

## Day 11 - Flag Challenge
- Flag challenge: Switzerland
- Aspect ratio: 1:1

	![](https://raw.githubusercontent.com/boglarkasebestyen/javascriptmas2023/main/day11.jpg)
		
		
See / interact with my solution [here](https://scrimba.com/scrim/co24b480c8b1eaca176aa10a0).

## Day 12 - Santa's Gift Sorter
- Help Santa by sorting the gifts array into alphabetical order and reverse alphabetical order

	![](https://raw.githubusercontent.com/boglarkasebestyen/javascriptmas2023/main/day12.jpg)
		
		
See / interact with my solution [here](https://scrimba.com/scrim/co45f4b6a8f2bce0e1ec7fa08).


## Day 13 - Christmas Dinner Picker
- Task:
	- Write the code to help a user choose the perfect Christmas dinner idea based on the number of people attending.
	- Include a checkbox for the user to specify the meal should be vegetarian-friendly.
	- Dinner suggestions (or choose your own!):
		- Vegetarian: Winter Squash Risotto
		- 4 people or less: Ham
		- 5+ people: Turkey

- Stretch goals:
	- Add more dietary options.
	- Show recipes when the meal has been selected.

	
		![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3g3bHY5bjBocWswcXF6Y2s0aXZvY3djYzc3NWIwdXdkampvazY2dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gA8G8CHtulaOWoY3Bj/giphy.gif)
		
		
See / interact with my solution [here](https://scrimba.com/scrim/cof0d48c489feb6b7189077ab).

## Day 14 - Lonely Elf
- Challenge:
    - Write a function to duplicate the elf when the button is clicked.
    - See index.css for optional styling challenges:
    	- limit the number of elves to 6 per row
    	- make sure that the elves stay in the elf hangout zone, no matter how many there are

		![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcW16cDZyMGpiMDM0dzM0d2tqZnE2ZzNjbDFreWR4dTVubmQycjFqcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2uPMFwxvyNFMHdN10E/giphy.gif
)
			
See / interact with my solution [here](https://scrimba.com/scrim/co5004fd991913fc6f2152f45).
    		
    		
## Day 15 - Archery Target
- Match the example
- Center on the page
- No need to make responsive

- Hint: these are four circles layered on top of one another, and each circle is centered within a larger


![](https://raw.githubusercontent.com/boglarkasebestyen/javascriptmas2023/main/day15.jpg
)
			
See / interact with my solution [here](https://scrimba.com/scrim/coa2b4c239e25f3b33449e8ef).


## Day 16 - Naughty list, nice list
- Challenge: 
  - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists, according to whether they have been good or not. Then display the names in the relevant place in the DOM.

- Stretch goals:
  - Add the option to add new names to the sorteesArr.
  - Make it possible to switch people to the other list.

	  ![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExczY0a3dsYnhhcG51aXd3MmZuaGdlN3E3eDVid2c2aDk5czNsZDRtbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/w6izoJwJUve7K2oVwX/giphy.gif
)
			
See / interact with my solution [here](https://scrimba.com/scrim/co343438aa6675887490d5df9).


## Day 17 - 

## Day 18 - 

## Day 19 - 

## Day 20 -

## Day 21 - 

## Day 22 - 

## Day 23 - 

## Day 24 - 
