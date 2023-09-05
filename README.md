# Course Section Recap

So if you recall from the introduction, we have this render cycle for React where
we're going to implement the D3 code at the end of the render cycle.

So we're going to attach the circles on our chart using this method. And basically
the way it's going to work under the hood is first React is going to compare the
existing document object model to the HTML that's generated from our JSX code.

From that, it's going to diff that and determine which elements need to be added. So
it's going to add some empty circle elements that we specify in there. Then the
browser will paint the screen so those circle elements will appear, but we're
going to just fill them with white and we're not going to set the coordinates yet.
So they're not really going to appear in the chart, but those elements will be
there and be ready for D3 to add additional styles on top of those.

So finally, D3 is going to run inside of our Useeffect hook. Remember that Useeffect
runs after React renders a component, so Useeffect is going to run every time its
dependencies change after React renders the component, and that is what is going to
attach the color, the size, and the other attributes that go into making our
scatterplot the amazing scatterplot that it is.

---

In this module, we saw another approach to integrating React and D3 together to
build data visualizations.

We use the hybrid approach for coding with D3 and React where we use React for the
basic structure and for getting user input into the application. And we use D3 to
style all the attributes to set their color and their X and Y position and other
SVG attributes and to smoothly transition those attributes from one state to the
next.

When the user changed some input and when we updated the data in our application,
D3 took care of that transition for us.

So the main pros and cons of this approach, which is the main approach that I
highly recommend to using React and D3 together, is that we took advantage of the
respective strengths of both React and D3. Namely, we allowed state management to
be controlled through React, and that allowed us to smoothly respond to user input
to handle those clicks on the button and to update that and to save that into a
state variable that allows us to easily propagate that input throughout our
application and to make sure there's a single source of truth in the application.

And at the same time, we were allowed to use D3's built-in transition function
because when we triggered a state update, we could trigger that useEffect and run
some side effects and update the state and also take advantage of the D3
transition for nice smooth animations.

The key downsides to this approach or just things to be cautious of and be aware of
is you need to keep track of when side effects are occurring, when other things
are affecting the document object model other than React, making sure that the
useEffect hook has the correct dependencies and that will help avoid errors and
make sure that React is aware of all the transitions and that things are
transitioning in and out at the same time.

We also need to be careful about which attributes we are updating to avoid
appending unneeded elements. For example, in our D3 code, we don't want to be
creating new elements. We want to create the elements in React first and then in
the D3 code, we will append the attributes and the styling onto those elements.
That way we're not creating and adding new elements on top of each other in layers.
Every time some input changes. We just want to update that and we want to provide
a key property to make sure that the correct elements are going in and out and
transitioning as needed.

So again, I think this is a really great approach for using React and D3 in
combination and a really powerful way to build compelling data visualizations with
a lot of interactivity and smooth transitions.
