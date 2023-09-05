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
