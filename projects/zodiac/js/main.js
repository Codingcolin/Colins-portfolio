var zodiac = [
		{
			sign:"aries",
			positivetTaits: "Adevnturous, Courageous, Versitile, Lively, Positive, Passionate.",
			negativeTraits: "Arrogant, Stubborn, Impulsive, Indiscipline, Confrontational.",
			image: "images/aries.jpeg"
		},
		{
			sign:"taurus",
			positivetTaits: "Generous, Dependable, Down to earth, Patient, Independant, Persistent.",
			negativeTraits: "Stubborn, Self-indulgent, Lazy, Materialistic, Possessive.",
			image: "images/taurus.jpeg"
		},
		{
			sign: "gemini",
			positivetTaits: "Ajustable and flexible, Versitile, Enthusiastic, Soft-spoken, Witty and very humorous.",
			negativeTraits: " Lack of Consistency, Superficial, Poor Decision Making Ability, Lack of direction, Anxious.",
			image: "images/gemini.jpeg"

		},
		{
			sign: "cancer",
			positivetTaits: "Creative, Spontaneous, Faithful, Loving and protective, Emotional.",
			negativeTraits: "Moody, Pessimistic, Clingy, Overemotional, Suspicious.",
			image: "images/cancer.jpeg"
		},
		{
			sign: "leo",
			positivetTaits: "Kind and helpful, Energetic, Optimisitic, Straightforward, Loyal.",
			negativeTraits: "Headstrong, Egoistic, Possessive, Dominating, Impatient, Arrogant.",
			image: "images/leo.jpeg"
		},
		{
			sign: "virgo",
			positivetTaits: "Watchful, Intellignet, Practical, Analytical, Reliable and trustworthy, Modest perfectionist.",
			negativeTraits: "Overcritical, Fussy, Fastidious, Harsh, Conservative, Judgemental.",
			imgae: "images/virgo.jpeg"
		},
		{
			sign: "libra",
			positivetTaits: "Tactful, Romantic, Charming, Just, Diplomatic.",
			negativeTraits: "Superficial, Detached, Unreliable, Lazy, Indecisive.",
			image: "images/libra.jpeg"
		},
		{
			sign: "scorpio",
			positivetTaits: "Focused, Brave, Balanced, Faithful, Ambitious, Intuitive.",
			negativeTraits: "Jealous, Secretive, Resentful, Manipulative.",
			image: "images/scorpio.jpeg"			
		},
		{
			sign: "sagittarius",
			positivetTaits: "Straightforward, Intellectual, Philosophical, Large-hearted.",
			negativeTraits: "Careless, Tactless, Impatient, Inconsistent, Over Confident.",
			image: "images/sagittarius.jpeg"	
		},
		{
			sign: "capricorn",
			positivetTaits: "Practical, Ambitious, Wise, Disciplined, Patient,Cautious.",
			negativeTraits: "Pessimistic, Stubborn, Shy.",
			image: "images/capricorn.jpeg"
		},
		{
			sign: "aquarius",
			positivetTaits: "Friendly, Humanitarian, Intelligent, Creative, Independant, Loyal.",
			negativeTraits: " Unpredictable, Inconsistent, Detached, Stubborn, Aloof, Extremist.",
			image: "images/aquarius.jpeg"
		},
		{
			sign: "pisces",
			positivetTaits: "Imaginative, Kind, Compassionate, Intuitive, Sensitive, Selfless.",
			negativeTraits: "Escapist, Idealisitic, Over-senstive, Pessimistic, Lazy.",
			image: "images/pisces.jpeg"
		}
]

function horoscope() {
	var sign = document.getElementById("sign").value

	for(i = 0; i < zodiac.length; i++) {
		console.log(sign)
		if(sign === zodiac[i].sign) {
				document.getElementById("yourSign").innerHTML = zodiac[i].sign
				document.getElementById("icon").src = zodiac[i].image 
				document.getElementById("yourHoroscope").innerHTML = "You're best attributes are: " + zodiac[i].positivetTaits
				document.getElementById("yourHoroscopeN").innerHTML = "You're worse attributes are: " + zodiac[i].negativeTraits
		break
		} else {
			document.getElementById("yourSign").innerHTML = "Sorry, that's not one of the signs."
			document.getElementById("yourHoroscope").innerHTML = ""
			document.getElementById("icon").src = ""

		}
	}
}	