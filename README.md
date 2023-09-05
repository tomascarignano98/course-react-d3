# Course Section Recap

Let's review what we learned through this exercise.

So we took a declarative approach to building this bar chart using D3 and React,
where we use React for the structure and the styling of elements, including defining
their positions, their fill colors, their strokes and other attributes. And we only use D3
for the math that is defining the scales of the visualization so that we can map the range
of our data onto the pixel coordinates that we have available on the screen.

This approach gave us a number of advantages. It was easy to read and edit our code
because it's already written in the JSX React syntax that integrates well with the other
components in our application, and it's written in this declarative format where, as you can
see in the examples here, we get exactly what we specify, and we are just saying what we
want the end result to be. And we're not saying all the steps in between and each command
line by line. In order to get to that result, we just specify what we want to see at the end,
and that makes it a lot more readable for humans and is one of the reasons why React was
developed in the first place.

This also integrates really well with our React hooks and the overall structure of our
application. It's easy to conditionally render different components or to change different
aspects of the visualization depending on the state that we've saved in React. And that also
makes it easy to respond to user input. If we have dropdowns or sliders coded in React, we
can easily use those to affect different aspects of the visualization.

The main downsides that I see to this approach is that it is difficult and actually
impossible in many situations to use the smooth built-in transition functions that come with
D3. That's not to say you can't use third-party libraries, but that requires learning a new
library, adding that in that's going to add some size to your application and some additional
complexity. And you can't just use the regular built-in D3 transition because that would need
to occur in a useEffect hook. That would need to be a side effect in React in order for that
not to conflict with React's native render cycle.

And the other downside is it can be also difficult to use more advanced D3 modules,
which we haven't quite gone into in this course such as the force layout, zooming and
panning, and tiling functions that are provided in other D3 modules. So that's something you
might run into in the future if you're using those more advanced functions and it can be
difficult to integrate those into React because many of the examples you'll see online, much
of the usage is written in that kind of vanilla JS way. That assumes that D3 is controlling the
DOM instead of React.

So these are the pros and cons of this approach. In certain situations, this approach will
come in handy, and for other projects you might work on, it might not. In the next module,
we will see another approach that takes a different position on how to integrate React and D3,
and you can compare and contrast and see which works best for your projects and your working
style.
