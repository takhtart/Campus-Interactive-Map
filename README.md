# Campus-Interactive-Map


DELTAHACKS IX

<strong>Inspiration</strong><br>

During first year, our schedules were given to us using building acronyms. Being new to McMaster we had no idea where those buildings were, or how to get to them. The only options we had was to cross referencing the buildings on the campus website with the buildings on google maps. This was very time consuming, and often times frustrating. We wanted to create a solution for this issue.

<strong>What it does</strong><br>

Our interactive maps shows every major location, including fields, buildings, food locations, libraries, parking lots, and residences. It has a search bar to find each of these locations (which can be searched for using their acronyms if preferred). It also has a navigation feature, where the user can place two markers on the map (start and end location) and find the fastest route between them.

<strong>How we built it</strong><br>

We started by creating a map of campus using the leaflet javascript library. We were able to display the map in satellite view using googlemapapi and openstreetmaps. Then we created markers for each location on campus and labelled them accordingly. We used LayerGroups to seperate each type of building. Then we used leaflet to implement our search function, and used openstreetmap to get our navigation. We edited each of these sections accordingly, to create our desired outcome.

<strong>Accomplishments that we're proud of</strong><br>

We are very proud of the challenges that we were able to overcome as a team. With limited javascript experience, we collaborated and created a working website that will make students' lives easier in the future.

<strong>What we learned</strong><br>

We learned how to use leaflet, openstreetmap, in combination with googleapi and javascript to create a working interactive map. After this project, our overall coding knowledge and understanding has increased.

<strong>What's next for Campus Interactive Map</strong><br>

In the future we plan to implement new functions allowing the user to simply type in the two locations they wish to travel to and from (rather than clicking them on the map). We would also like to make the UI more user-friendly by adding a street view option, allowing students to see exactly where they are going.
