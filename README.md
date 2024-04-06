**MY INSPIRATION: (😁)**

During my junior year of high school, in my precalculus class, we learned how to add the equations of two vectors to get that of a resultant vector. During that unit, I remember wondering, "What if I just wrote my own program that could do all this for me?" I didn't end up doing it during that unit, but the following summer, the summer of my senior year, I hadn't forgotten about the idea, and I decided to start working on it to challenge my programming skills. I probably spent more time on it than I should have heheh, but I gotta say I was pretty happy with the result. 😊

**THE PROGRAM WORKS AS FOLLOWS:**

The equation that the functionality of this program is based on for calculating a resultant vector is V = ||F1||(cos(a)i + sin(a)j) + ||F2||(cos(b)i + sin(b)j) where ||F1|| and ||F2|| are the magnitudes (forces) of the two vectors, and a and b are the corresponding angles of projection for each vector as would be written on a xy-coordinate plane. i and j are simply markers for the x and y components of the vectors, the cosine term being the x and the sine term being the y.

When the four values mentioned above are inputted into the program, they are immediately put into an altered version of the equation above that can be arrived at by distributing the magnitudes through and grouping the i terms together and the j terms together: V = (||F1||cos(a) + ||F2||cos(b))i + (||F1||sin(a) + ||F2||sin(b))j. Notice i and j are factored out as well so that it takes on the look of the equation for a single vector.

The magnitude of the resultant is found using the equation M = √(i^2 + j^2). So you simply take the square root of the i component squared plus the j component squared.

Finally, the angle of the resultant vector is calculated using the equation A = arctan(i/j). So it is the inverse tangent of the i component divided by the j component.

Also, note that adjustments are made in the program so that the functions are always working with angle values on the interval 0<=x<2π, and angles are multiplied by 180/π when in degree mode.

**This program was written as a web application using HTML, CSS, and JavaScript.**
