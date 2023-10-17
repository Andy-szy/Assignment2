let participation_times_1 = document.getElementById("participation_times_1")
let participation_times_2 = document.getElementById("participation_times_2")
let host_city = document.getElementById("host_city")
let medal_distribution = document.getElementById("medal_distribution")
let weight = document.getElementById("weight")

participation_times_1.innerHTML = "From the graph, we can see that the relationship between Gold and " +
  "medal tally is a positive correlation relationship. When a country has more medal tally, by the increase" +
  "of number of Gold they can get. When we move the minimum <span style=\"color: gold;\">gold</span> quantity " +
  "selector, we can see it is similar to a linear algebra relation."

participation_times_2.innerHTML = "In addition, we can see that most of teams have attended the olympic game many" +
  "times. The most of those teams which got the most medals have attended more than " +
  "<span class='under_line' \">25</span> games like " +
  "<span style=\"color: #e41a1c;\">the United States</span> which attended " +
  "<span class='under_line' \">28</span> games and " +
  "<span style=\"color: #ff7f00;\">the United Kingdom</span> which attended " +
  "<span class='under_line' \">29</span> games"

host_city.innerHTML = "From this map, we can see most of counties does not host any olympic games. The reason is" +
  "to host a olympics game needing a lot of expense not only money but also human resources and " +
  "transportation. We can see that some cities like <span style=\"color: #e41a1c;\">" +
  "Los Angeles, London and Paris </span> have hosted <span class='under_line' \"> 3 times </span>" +
  "of Olympics summer games. With the economics difficulty, the rich countries would have more change to hold" +
  "the olympic games"

medal_distribution.innerHTML = "With the increase the attendance with more countries, more and more countries are more" +
  "likely to have medals instead of only big countries have changes. In 1976, Russia(Team Soviet Union) have" +
  "the most models <span class=\'under_line\' style=\"color: #e41a1c;\">285</span> and China does not attend that game. " +
  "the United States have <span class=\'under_line\' style=\"color: #ec815c;\">155</span> medals and Australia have " +
  "<span class=\'under_line\' style=\"color: #f1af90;\">24</span> medals. With time goes on, China have more chance" +
  " to have medals and in 2008, they have <span class=\'under_line\' style=\"color: #EA7651;\">184</span> medals in totol"

weight.innerHTML = "From the picture, we can see that people in the " +
  "<span class='under_line'>50-100kg</span> range have won the most MEDALS, " +
  "of which <span class='under_line'>70kg</span> people have won more than " +
  "<span class='under_line'>300</span> MEDALS. In the middle, the distribution of gold, silver and bronze " +
  "MEDALS is more evenly distributed, indicating that there is a certain weight requirement in a specific sport, " +
  "such as weightlifting or gymnastics."