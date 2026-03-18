An Introduction  
0:00  
What's up? In case you didn't know by now, I build design systems for a living. And about a year ago, I started  
0:05  
with this build a design system series where I actually built a design system across six or seven episodes. It was a  
0:10  
real simple design system, not like the tutorials in our academy, but people loved it. So, I actually went ahead and  
0:16  
refilmed the entire multi-eries tutorial and I included it in this one video. So,  
0:21  
by the end of this video, you're going to have a full set of design tokens, a real simple starter design system, and you're going to know how to publish  
0:27  
design systems and much more. Let's get started. And if you're looking for a new design system or you're looking to  
0:32  
uplift your existing design system, I'll put a link below where you can come work with myself and also the team. And if  
0:37  
you're a fan about what we're doing with UI Collective, consider checking out UI Collective Academy. I'll put a link for that below with premium courses, premium  
0:43  
downloads, a lot more right now and a ton more on the way. Be sure to check that out because every purchase helps us  
0:48  
do more of this. So, welcome to the new series on building a design system. And I know like throughout 2020, what year  
Design Token Setup \- Intro  
0:54  
is it? We're 2025\. throughout 2024 where I was like releasing videos and just building the core components. We're  
1:00  
still getting a lot of questions. So, I'm going to film actually refilm this series all in one clip, you know, how to  
1:06  
build every design system component. Now, uh one thing I would like to call out is what we're touching upon today is  
1:11  
building the framework for the components. We're building the initial components and their variants. If you really want to master this concept,  
1:17  
okay, we do have a course on building a more advanced design system on our academy. But again, we're going to build  
1:23  
out every component that you might possibly need as we did across like seven or eight different episodes in  
1:28  
2024, all within this video. Okay, so one thing I want to get started with right away, design token setup  
1:35  
structure. Okay. Now, UI Collective has evolved to the point where I see a lot  
1:41  
of other creators taking the things that I teach and like releasing it on their own channel using their own like ideas  
1:49  
and methods. Okay? And there's nothing wrong with that. Like to each their own. Like I I put this content publicly so  
1:55  
everyone can learn, right? Not just so that I can benefit by any means. But as  
2:00  
part of that, a lot of a lot of these creators because they don't live and breathe design systems like I do is like  
2:06  
they're adding spins to some of these concepts, but the spins aren't necessarily right. Okay? They they  
2:13  
aren't thinking about specific use cases, especially when it comes to design tokens. Now, the design token  
2:19  
setup that we're going to build today is relatively simple. It's going to get your feet wet in design systems, okay?  
2:26  
And if you're building a design system, this is probably a great place for you to start. And you can get into some more  
2:31  
complex like theming and approaches in other ways in some of our other videos. We're just going to walk you through the  
2:36  
full process here. Okay. So, when it comes to your design tokens are also like your Figma variables. Okay. There's  
2:43  
a couple different approaches and I know these slides here I stole from one of my other videos earlier on. Um, but people  
2:50  
just said they loved the slides and made sense so I'm reusing them here. Okay. So, when it comes to setting up your  
2:56  
design tokens for your design system, there's a three- tiered approach to design token architecture and also a  
3:03  
two-tiered approach to design token architecture. We at UI Collective  
3:09  
use the three tier. Okay, we were using the three- tiered approach long before Figma variables became a thing. We're  
3:15  
using the the three- tier approach when, you know, we were still using Token Studio, like the Figma plugin to apply  
3:21  
our design tokens. We've been doing this for like 5 years and we use the three- tiered approach where we use a brand  
3:27  
collection, an alias collection, and the maps collection now. There are a lot of Figma kits out  
3:33  
there that use the two-tiered approach. So, that's your primitive collection and also your semantic collection. Okay?  
3:39  
Whereas the primitive is more like alias and the semantic is more the map. It's almost like they skip over the brand  
3:45  
collection or sort of merge like the brand and alias collection together. Again, we're going to look at what these are. Okay. Now, a lot of popular design  
3:52  
systems use the Tuti approach. It's not wrong, and if you're using it, it's not wrong. So, don't think that you  
3:58  
need to rebuild your design system from scratch by any means, okay? But there are some limitations to using that  
4:03  
two-tiered approach, okay? Especially when you're dealing with multiple brands, and we're going to look at multibrands probably the latter part of  
4:11  
this video. Um, but we're going to be proceeding with the three- tiered approach to our design token  
4:16  
architecture. So, because we're three- tiered approach guys, okay, I don't want  
Brand Collection  
4:21  
to say like we coined the term, but we've been like teaching people this for like three years. Um, so this is like  
4:28  
our thing, you know. Um, so let's look at our brand collection to start. Okay, so your brand collection is really just  
4:34  
everything in its purest form. But again, I know these I have some of these slides in another video. People just love the slides, so I'm using them here  
4:41  
too. Okay, sue me. Um, so in your brand collection, it's just  
4:46  
everything in its purest form. In terms of your colors, it's just like a hex code, hex code, hex code, hex code. You  
4:52  
like you haven't even really named it yet. Like you haven't named it like air this or like default this, right? It's  
4:58  
just super simple. So in terms of naming though is we tend to use what's called like the 100 scale. So if it's a red  
5:04  
scale, it's red 100 all the way up to 700 with the higher the number, the darker it gets. What this does is allows  
5:11  
us to be a little bit flexible, okay? Is if later down the line when we're testing our components for accessibility  
5:17  
and we see that we need a lighter shade than a red 100, okay, to offer like some  
5:24  
contrast in order to pass wika standards, what I can do is I can add a red 50, which is lighter than a red 100\.  
5:31  
Let's say I need a color that's in between a 200 and 300\. I can add a 250\. Okay, so it allows us to scale up our  
5:40  
design tokens. Now, also too inside your brand collection, font weights, font  
5:45  
styles. Okay, this changes a little less frequently um  
5:52  
just because like you know if you if your brand when on earth would you ever change like your parent fonts? That's  
5:58  
not going to happen. So we tend to store this inside uh of our brand collection.  
6:03  
But if we were multibrand, we'd bring that into our alias collection. Don't worry, we're going to look at what that means a little bit later on. Okay. So,  
6:09  
just as like um like type variables, string variables, sorry, uh is what  
6:16  
inside our thing with variables is where we would have those font weights and also those font styles. So, like enter, enter inter light, regular, medium,  
6:23  
bold, so on and so forth. And we're also going to have one super large number scale. What this is going to do is going  
6:29  
to help us maintain consistency. Our text size, our spacing, and so much more. And one thing that's important to  
6:34  
note is you are not yet assigning a color, a role inside your brand collection. Okay, what we do is we  
6:40  
actually apply that inside of our alias collection itself. Okay, so I've used  
6:45  
this example before which is like think of your brand collection as the roots of  
6:50  
a tree where your alias and map collection would represent other parts of the tree which we're going to look at  
6:55  
later. Okay? Because without strong roots, your design system is not going  
7:00  
to have the foundation to grow. Okay? So, your brand collection really is just everything in its purest form that  
7:06  
serves as the foundation for everything else that's going to come later. You know, just a value of 25 in a scale, a  
7:13  
hex code of 797929, a uh hex code of 000000\.  
7:20  
Enter. Semi- bold. Okay. Just everything in its purest form. Raw. Nothing has a  
7:25  
specific specific role. Nothing has a specific anything yet. Okay? It's just  
7:31  
I've said it eight times. Everything in its purest form. Let's now go ahead and start to build out a small brand  
7:38  
collection that we're going to use to apply to our components a little bit later. Okay. So, what I have here are  
Color Scales for our Design System  
7:43  
just some sample scales. Okay. Just some really common color scales here. And honestly, I might even just get rid of  
7:49  
the pink just because it's not a use case that we're going to really need. And we might also want to get rid of  
7:54  
that yellow as well, just because it's not going to be a color that we're really going to need for really anything. Okay, at the end of the day,  
8:00  
whenever you're building a design system, okay, and what this is, this is sort of like bare bones. Okay, this design system is going to give you a  
8:07  
great great foundation for you to scale up. Okay, so whether you use our some of the tutorials on building an advanced  
8:12  
design system in our academy, if you watch some of our other videos, we actually build out some more complex libraries, you can do that. But this is  
8:18  
a great like tutorial for anyone getting started building a design system. Maybe you need a refresher. Build-in components. And again, this is like just  
8:27  
almost a repeat of a lot of our other build a design system series tutorials. Okay. So, one thing I would like to call  
8:33  
out here is if you think about UI Collective as a brand, okay, we're this purple. If you're on our website and  
8:40  
there's something wrong with the form, you're going to hit an error. If something's successful, you might see a  
8:45  
green. Text of course is going to be gray. You might see an orange for warning. And you might see a blue for  
8:52  
information. What other kinds of colors would you would you need?  
8:58  
Any ideas? Not really. Like you in the grand scheme  
9:05  
of things, these are really the only core scales that you need. Okay? At least if you're getting started. Your core brand color. Again, maybe you might  
9:11  
have a couple brand colors. Uh you might have a red for error, green for success, so on and so forth. So, you're just  
9:18  
getting started. Don't over complicate your scale. When I The thing that I see devel like designers do when they're  
9:23  
just getting started is they build like 400 different color scales with 900 colors each. Okay? That's not going to  
9:30  
help anyone, right? That's way too complex. We don't we don't need to do that. If you're getting started building  
9:37  
your design system, just start with your base colors and a certain number of  
9:42  
colors in your scales and then you can always scale up later. Okay, so before  
9:48  
we get into building the brand collection, I want to show you how I actually built out some of these scales. So, sorry, I just made some tweaks to  
Building a Color Scale  
9:54  
this, but um I just added additional scale element. Anyways, uh I'm going to show you how I'm going to uh build out  
10:02  
these scales. Now, there are tools that can help you do this. I'm kind of a nerd when it comes to my scales and that I  
10:08  
like total control. Okay? I sometimes I don't always trust like these color pallet generators that are out there.  
10:15  
Like for all of my design system clients, I really just do it myself. I build all the scales myself. Okay? So,  
10:22  
what I do is like in the case of UI collective, let's say like this here is our core brand color. What I do to  
10:27  
generate the lighter and darker scales is I first I make sure the page is set to like a white background and then I just play around with the opacity. So I  
10:34  
set this to like 80, this to like 60, this to like 40,  
10:42  
this to like 20, and then this to like 10\.  
10:48  
And notice how the colors like match, but we don't want colors with opacity inside our scale, like our actual design  
10:54  
system scale. So, we really just color match what that color is. So, by doing that, we get rid of the actual like  
10:59  
opacity. Um, and we like create a nice clean consistent scale. Okay. The same  
11:05  
thing going up, but instead of on a white background, what you can do just set it to black  
11:10  
and then just uh bring it to the front just like that. And then still just adjust the opacity. But it's still going  
11:17  
to get darker because instead of whiter because it's on the opacity is dealing with a black background. Okay. So,  
11:25  
that's how I build out these color scales. Again, there are tools that are that are out there that can help you do  
11:30  
that. I just personally just don't like using them. Um, so if you do want to build out your own scales, that's the  
11:36  
way that you can do it. Okay, so let's go into our variables here and let's like build out our brand collection here. Okay, so when I say like variables  
Building the Brand Collection  
11:44  
in their purest form, like you're really going to see what I mean. Okay, so color variable. Sorry, I don't know why  
11:50  
I thought about doing that. Um, there we go. Let me extend this out. give us ourselves some space here. So this is  
11:55  
going to be our purple. Okay. So although it's like a UI collective like primary colors, it's just going to be our purple because it's in the brand  
12:01  
collection. But one thing I didn't do is I did not rename this collection to brand. Okay. Then what we're going to do is we're going to set this uh if we  
12:08  
think about like the opacity. So these all followed like 20% intervals.  
12:14  
So this here was like our let's see how many we have. 1 2 3 4 5 6 7 8 nine  
12:20  
colors. Okay. So, we're going to have purple dash 100\. Okay, we're just going to duplicate this nine times. Eight and  
12:27  
then nine. And then just rename them. Okay. Uh 300, 300,  
12:33  
500, 600, 700, 800,  
12:40  
700, 800, and then 900\. But what's an issue with this  
12:47  
is that all of the scales followed a 20% opacity  
12:52  
interval except one which is the last one. So could that be a nice crisp clean, you  
13:00  
know, 100 value if it didn't follow the specific 20% interval? Okay, this is just how I do things, okay? is if it  
13:07  
follows the interval that I start with, whether that's a 10% interval or a 20% interval, is I assign it a 100 value. If  
13:15  
it doesn't follow that, if it breaks that logic where it starts to follow a 10% interval, it can't be a nice 100  
13:22  
value. Okay. So, what we're going to do then is we're now going to shift is if  
13:28  
this is our lightest and this was only actually built using a 10% interval.  
13:34  
Okay. What I mean by that, okay, again, is if I take if I close this, and this  
13:39  
is where things can kind of get confusing, is if I take this, which is our core color, and then I set this to  
13:44  
simply 10%. And then this to 20%. Notice how these initial colors follow  
13:51  
that nice crisp, clean interval, but this last color doesn't follow that  
13:56  
pattern. So these here would be the 100 values, but this one would have to be a  
14:03  
50 because it went down half of 20 to 10\. So here we had 20%, here we had 10%.  
14:10  
If you have any questions on that, leave a comment below. Okay, so instead of having a 900 value, all of a sudden,  
14:19  
what we're going to do, we can delete that, but just at the end here is we're going to have Oops, sorry. I don't know  
14:26  
why I did that. is we're going to have a 50 and that 50 is going to represent the one that had just a 10% opacity  
14:33  
decrease. Okay, that's something that's important to call out. Let's look at a quick example of that again. So, say we  
14:40  
want to add one in between our 40% and our 20% opacity where we just take it down 30\. Okay? Then what we would do is  
14:48  
if we have we have our 50, we have our 100, then in between our 100 and our  
14:54  
200, we would include a 150 because it went down just 10%. Okay, that's how I  
14:59  
like to keep things nice and organized. Okay, I do know that can be a confusing topic. So if you're confused, drop a  
15:05  
comment below, ask on our community forum, and I'll get back to you. Okay, so now that we have that out of the way, let's go through and keep building out  
15:11  
the brand collection. So then what we can do is we can just simply just use our color matching tool and just color  
15:16  
match. Now, the reason why um or even just select the color codes here, that might be a little bit easier. And I know  
15:22  
this is a little bit tedious and but I want to make sure that although this is a simple design system, it's not going  
15:28  
to be the best looking design system in the world. If you want to build better components like our build an advanced  
15:33  
design system series on our academy does cover that a little bit better. Um but  
15:39  
it's going to be a design system that's going to get you started. Okay. But we're going to talk about a lot of the edge cases, how to build like some of  
15:44  
these basic more like skeleton components, um, and things like that. So, um, oops, I broke something there.  
15:51  
Um, again, I'm doing I'm doing this individually, building out each of these scales, copying the hex code, so you can  
15:57  
slow down the video and follow along with us. Okay, so there's our purple out  
16:02  
of the way. Now, let's just simply, we can just duplicate this group. Just call this our red.  
16:08  
And then we can simply just uh color match. Okay, maybe work from the top down.  
16:16  
There we go. So again, slow down the video if you want to.  
16:26  
There we go. And I hope I didn't make any mistakes here along the way. And if I did, feel free to call me out.  
16:39  
There we go. Now, let's duplicate this. Let's go with a green.  
16:45  
Same thing. We'll work from the bottom up.  
16:51  
And big shout out to everyone who's like purchased our academy. Oops, there's a I noticed a mistake here. Um,  
16:58  
sorry. When I was building out these scales in preparation for this video, I made a couple mistakes. There we go. So,  
17:04  
forgive me there. There's probably a couple more mistakes somewhere here, which there are. So, we're just going to  
17:10  
corre correct these. Sorry. I try my best sometimes, but sometimes my best isn't good enough. It  
17:16  
looks like the labels are are right, though. So, we're just going to copy uh the labels here.  
17:22  
There we go. Yeah, big shout out to everyone who's purchased our academy. Um, really goes a  
17:28  
long way, honestly. Sorry, I know it's kind of cheesy, but uh it is. There we  
17:33  
go. So, there we have our green. And then what we're going to do is we're going to duplicate this. And we're just  
17:39  
going to call this like our gray. Does gray have an A or an E? I don't know.  
17:45  
Sorry. Grammar. Grammar was never my strong suit.  
17:57  
There we go. We're rocking and we are rolling, my  
18:02  
friends.  
18:14  
Perfect. There we go. So, there we have our gray. Let's duplicate this. And this here is going to be our orange.  
18:22  
And we'll go from the top down this time. Oops. Sorry. I don't know why I did that. Let me just copy this in  
18:28  
again. Slow down the video if you'd like to. And uh looks like a little dark  
18:33  
honestly, but it's okay. We're going to pretend everything's fine.  
18:46  
Slow down the video if you want to copy the hex code. Sorry, I know I've said that a million times.  
18:52  
And let's just duplicate this. And this here is just going to be our bloop.  
18:57  
Oh, sorry. I don't know why I did that again. There we go. Copy in.  
19:04  
Copy in. Copy in. Copy in.  
19:11  
Copy in. Copy in. Copy in.  
19:18  
And copy this in. And there we go. Okay, we're rocking and we're rolling. So, we  
19:23  
start we start to have like our brand collection all set up now. Uh, but we're still missing a couple things from our  
19:29  
brand collection. At least we have our colors, but we're still missing like our scale and also our font weight and like our font uh type as well, our font  
19:36  
style, I guess, uh, you could say. So, we're still missing that. So, let's look at that next. So, now what we're going to do is we're going to use like um or  
Font Variables  
19:43  
start to build out sort of our fonts in here. Okay. So, what we can do is we just group these into um,  
19:51  
sorry, what's going on here? Actually, no. Sorry, I'm not going to do that. Let's just go to our all variables and let's just create a string variable.  
19:57  
Okay, that we're going to call our font weight. Uh, okay. And then enter. Okay. Now, when it comes to uh what's going on  
20:05  
here, sorry, let move that out of the way. Is when it comes to fonts. Okay. So, I already have enter selected. So,  
20:11  
let me just zoom this in. Let me center this just so we can see it. Okay. When it comes to your font weight, the name  
20:17  
of your font is going to be the value of the font. So I'm going to go ahead apply a variable here that's going to be  
20:23  
enter. Okay, that's that easy. Okay, so now I can see there's a connect between the font and Figma. Okay, so it's  
20:32  
telling me that enter is applied. It recognizes enter as a font. Uh what I'm going to do is I can also uh do  
20:38  
something like popins. And this is where you can get into like more specifics. So maybe like enter is for you know your  
20:44  
headings uh and poppins is for uh your text. Okay. And still because there's  
20:50  
it's not crossed off here, you can see that there's a there's a connection between them. Okay, if I was to call  
20:56  
this enter one in 1R, you can see how there's no  
21:03  
longer a connection there because there's no font that's called this. But when I change this back to enter,  
21:11  
all of a sudden there's a connection again. Okay. So then we can set this to body. You can also get into things like  
21:16  
caption and stuff here as well, but like we're not going to worry about that now. We're just going to worry about getting you a starting design system and  
21:22  
teaching you concepts along the way so that you can scale up. Okay, but maybe for now we have headings and body. What we're going to do, we can just duplicate  
21:28  
this and maybe just go our font. Um, we're sorry, let me uh confirm something here. Sorry, this is font family, not  
21:35  
font weight. Sorry, hands up. That's on me. This here is font weight. Okay. And  
21:40  
then for font weight, if I was to detach this, okay, your font weight would need to match what's here. Okay, you can't  
21:48  
have like just SB for semi- bold uh as the value. It need to match the weight of the font. So, uh here we can have you  
21:56  
know like regular, medium, medium, and then bold. And it would need to match  
22:01  
the naming here. Okay, so this here would be regular. This right here would be medium.  
22:08  
And then this here would be bold. Really that simple. And you can also even add maybe just like a semi  
22:14  
sorry we don't have we have a medium but we also have a semi bold. So let's also maybe go with a semi-bold as well. Okay  
22:20  
semi- bold and then semi uh bold. Okay that simple. So there we have the  
22:25  
specific values. And if I was also to go ahead again and apply you know uh enter for our body because this is maybe 12  
22:31  
pixels tall. And if we were to apply a variable here as well we could apply the medium. I can see it because it's not  
22:37  
crossed off that Figma sees the connection between them. Okay. So, when it comes to setting up your font family,  
22:42  
font weight within your brand. There you have it. So, now that we have that out of the way, let's look at like our scale. Okay. So, what your scale is, and  
Building a Scale  
22:49  
this is a little bit more of an advanced topic. Um, so what your scale is just  
22:55  
one large number scale that's really just called scale and let's set a first value of like zero. So anytime you have  
23:02  
a number variable later on is you're going to pull from this one scale. Okay, for things like  
23:08  
your width, your radius, spacing, padding, gap, all that fun stuff. Okay,  
23:14  
generally always comes from this scale. Okay, this is an advanced concept and only really advanced design systems end  
23:21  
up like maintaining consistency in their scale. Well, absolutely everything with a number is a like comes from that  
23:27  
scale. Okay, I don't think we're going to do that for this video. It's going to take too long. It's a little bit tedious. Um, but if you do want to go  
23:34  
that route, anytime you use a number, whe once we get into the responsive collection, um,  
23:42  
all those numbers should pull from one parent scale. And in your brand collection is where we house that scale.  
23:47  
Okay. So, the way I like to do a scale is I still of course like to follow that  
23:52  
100 that 100 approach. Okay. Um, so this is our 100 scale value. Very similar to  
23:58  
what we did with colors. But the only difference is is that whereas with our colors, those each each of those clean  
24:04  
like 100 values had to do with an opacity, our 100s now are going to deal with a multiple of four. Okay? So 100,  
24:12  
our 200 is going to be eight. Our 300 is going to be 12\. Our 400 is  
24:20  
going to be 16\. Our 500 is going to be 20\. And I'm I'll answer your questions  
24:25  
in just a sec. I have I'm about to pause this and walk you through some use cases. Our 600 is going to be 24\. Our uh  
24:33  
700 is going to be 28\. I hope I didn't mess up here. If you did, feel free to call me out. And then our 800 is going  
24:42  
to be 32\. Okay.  
24:48  
Now, right away, you're probably wondering, Kirk,  
24:54  
where's like a one, like a one P point border radius is pretty common, right?  
25:00  
Absolutely. So, if that's the case, what we can do, we can apply a 25 that has the value of one. And even like a two  
25:07  
pixel border width for something like a focus, we can apply the value of 50\. And that would be a two. There we go. We've  
25:14  
covered some common use cases here. Now, a lot of other creators who watch some of my other videos, they start saying  
25:21  
that it's so it's no problem if you just add just like a three in here, okay? It's just weird if you do, okay? Because  
25:28  
everything should be this nice, crisp, clean, even number. It's very rare for you to sort of mix odd numbers with even  
25:34  
numbers. So, I wouldn't suggest it at all. Okay? Now, one thing you can do as well is you can start to get kind of  
25:43  
fancy because let's say like you have widths that go up to like 256\. 256 / 4\. If I bust out my handydandy  
25:51  
calculator, 256 / 4 is equal to 64\. That means we have need to have 64 values in  
25:58  
our scale. No need for that. Okay? You're not going to use all those colors. So once you get to a certain  
26:03  
point, not going to use all those like scale numbers. Sorry. So once you get to a certain point, you can kind of just like increase your number but still  
26:10  
stick to that 100 value. So maybe from a 32 we want to go to 40\. That can be a 900\. As long as it still follows that  
26:17  
four pixel scale, you're fine. A,000, you know, maybe we go with a 48\. Okay?  
26:22  
You know, an 1100 maybe right now because we don't want to have anything in like the 50s. Maybe this you just  
26:28  
jump right to a 64\. Okay? So we might come back and adjust the scale a little  
26:33  
bit later, but that's a real like starting let's like a scale in a nutshell. So now we can apply things  
26:38  
like our border widths, our border radiuses once we get into a responsive collection as well. Well, you know, some of our font styles and stuff might be  
26:44  
here too. So now I want to look at the alias collection. And your alias collection is where you're breaking out colors into into categories. Okay, again  
Alias Collection Intro  
26:51  
I know these slides are from another video, but anyways, people loved them. So here they are again. Okay. So where we have like red 100, 200, 300 in your  
26:59  
alias collection, you're assigning those scales to specific role. So things like error, like primary, you know, success,  
27:06  
warning. Okay, these variables aren't yet applied to our components, but we're  
27:11  
starting to really start to theme them out. Okay, so we do this ultimately to  
27:16  
maintain consistency. So as this example, as we have this error alert right here. Okay, this error alert  
27:24  
should pull from the error scale, not the primary scale. Because if everything that's red pulls from an error scale,  
27:30  
it's going to confuse our developers because everything's going to be in an error state. Okay. And that's the case of just we have two colors like our  
27:36  
primary and our error both share are both red. Okay. Uh alias is also where we define all our  
27:43  
other miscellaneous variables like our border radius and our border width. And it's also where we define another brand.  
27:48  
Okay. And we're going to look at that as well. Hey, what's going on? Thanks. so much for watching and making it this far in the video. Look at this. I got the  
27:53  
sunshining on me here. Uh if if you're grateful for what we're doing at UI Collective and want to support myself  
27:58  
and the team, be sure to check out our UI Collective Academy. I'll put a link for that uh down below. So, back to a  
28:05  
tree example is, you know, your alias collection is where you start to get into like um  
28:12  
like like the trunk of a tree where whereas our mapped collection that we're going to look at is more like the like  
28:19  
the leaves of a tree that branches out all these like great awesome visuals that everyone can see from far and wide.  
28:25  
we need to be able to connect our brand collections. So the foundations to those specific variables and that's the  
28:33  
purpose of like our alias collection is it's more of a tree trunk than anything else in helping us sort of get to that  
28:38  
beautiful final state. I know this is confusing but bear with us. Promise you it's going to make sense. Okay. So now  
28:43  
let's look at uh building out our alias collection. Okay. So when it comes to  
28:50  
your alias collection is what we're going to do is we're going to start applying roles to some of our scales.  
28:56  
Okay, let's look at what I mean by that. So let's start off with our primary. If we go into our brand, in the case of UI  
29:03  
collective, this purple is our primary color. So in our alias, we are going to apply that the role of primary.  
29:10  
So what we can do now is just duplicate the exact same scale that we had before. So, we had a 100, 200, 300, 400, 500,  
29:22  
600, 700, and then 800\.  
29:28  
Then what we're going to do is we're just going to create the alias and connect back to our primary color like  
29:36  
our and our purple color inside of our brand collection. Sorry. So, uh, create the alias. This is going to be our 300\.  
Building the Alias Collection  
29:44  
Sorry. This is going to be our 200\. This here is going to be our uh 300\. This  
29:51  
here is going to be our 400\. This here is going to be uh our 500\.  
29:59  
This here is going to be our 600\. This here is going to be our 700\. And  
30:05  
then this here is going to be our 800\. Okay. So when it comes to your alias is  
30:11  
that is really all we're doing is we're just taking the scales that are inside of our brand collection and really just  
30:18  
at the end of the day just assigning them a role. Okay, let's keep looking at some more examples. So if I was to  
30:23  
duplicate this now think about the case of like um our error. Okay, same thing.  
30:31  
Just adjust it to the red. Red 200, red 300, sorry, red 100, red 200, red 300,  
30:41  
red 400, red 500, 600,  
30:48  
700, uh, and then our red 800\. Okay, let's  
30:54  
duplicate this again. What was the next color that we looked at? It was our green. Okay, our green is going to be  
30:59  
our success. So here what we're going to do is we're going to apply a green.  
31:04  
We're going to apply a green and apply the green all the way down. Really that easy at the end of the day. Nice and  
31:11  
easy, right? Perfect. 500 600  
31:16  
700\. And then we have uh our green 800\. Then  
31:21  
if we were to duplicate this, what's the next one that we had, which is our gray. Now our gray because it like the role  
31:28  
can vary as to what that gray is for. It could be for icons. It could be for text. It could be for headings. So the  
31:33  
way we classify that is actually a neutral. So this is a 50\. This here is a  
31:39  
100\. This here is a 200\. This here is a oops a 300\. This here is a 400\. This  
31:47  
here is a 500\. This here is a 600\. This here is a 700\. And then this here is an  
31:54  
800\. Okay? Really that simple. Then let's go into our brand. The next one is  
31:59  
our orange. So if we were to duplicate this, this here is where we would have a warning. Okay. So our warning is our 50  
32:07  
warning 100, warning 200, warning 300,  
32:12  
warning 400, warning 500, warning 600,  
32:20  
warning 700, and then our warning 800\. This connects back to that orange. If I made any  
32:26  
mistakes here, call me out. And then let's go with our blue. So our blue is generally our information. So if I  
32:31  
duplicate this, call this our information. Okay. So this here is our 50\. This here  
32:38  
is our 100\. This here is our 200\. This here is our 300\. This here is our 400\.  
32:46  
Oops, sorry. This here is our 400\. This here is our 500\. This here is our 600\.  
32:53  
This here is our 700\. And let me move my video bar out of the way. And then we're going to have our  
32:58  
blue 800\. Okay, so just like that at the end of the day. Okay, beautiful. Um, so  
33:06  
now let's go into uh our border widths and also our border radiuses. So now  
Border With & Radius Variables  
33:12  
let's look at our border widths and our border radiuses. So we're going to add a number variable. Border widths um border  
33:18  
widths. Sorry, let me check my cheat sheet here so I don't uh lead you astray. Our border width and near one  
33:23  
here is going to be none. Okay. So, when it comes to the none value, what this is going to do, it's just going to be  
33:29  
connecting back to that scale. Okay. Now, for our border widths is like there's really no purpose for like a 100  
33:34  
scale because we only have a couple of them. So, that's where we can start to get into something things like small,  
33:39  
medium, and also large. Okay? But to each their own. So, that small would be a 25, which would be one. You know, that  
33:47  
medium might be two like two pixels. Maybe you have like a larger component where there is a little bit of a larger  
33:53  
border width, which would be that 100\. Okay. So, let's duplicate this and let's do the same thing for our border radius.  
33:59  
Okay. So, a border radius maybe you might have a button that has that nice crisp clean right angle. That would be a  
34:06  
zero. You might have, it's very rare actually to have like a one pixel border radius. Usually, you always just have a  
34:11  
two. So, what we're going to do, we're actually just going to delete this. This here is then be going going to become our small. This here might become our  
34:18  
medium. And then we might have a large um with like an eight border radius or  
34:23  
something like a larger card or table component. Okay. So there we have our  
34:29  
border width and also our border radius. So I want to cover multibrand design systems. Okay. Because your alias  
Multi-Brand Design System Setup  
34:36  
collection is is where those multibrands are housed. So there's a couple different approaches to multibrands and  
34:41  
it really depends on like your company, your use case as to what approach that you should follow. It's a question I get  
34:47  
all the time. So I want to look at what's called a branded house approach first. Okay. Sorry, these are from two  
34:54  
images uh merged into one. So your branded house approach,  
35:00  
branded house approach, I set this to like 64\. There we go.  
35:05  
Sorry. Is where within one house you have brands that  
35:11  
are like kind of the same. Okay. So, what I mean by that is if you look at  
35:16  
Coke, Coke Zero, and Diet Coke, those colors are all going to be relatively similar, except there's just a primary  
35:24  
color that's a little bit different. Okay? So, they're going to share the the same scales at a high level, but  
35:30  
everything else like their fonts, like their fonts, their uh border widths, border radiuses, like their success  
35:36  
colors, those are all going to be the same. The only thing that's different is that there's just a different primary  
35:42  
color. Okay? That is what's called a branded house approach. Now there's also  
35:49  
the idea of a house of brands. Okay. So this is where if you think about the  
35:54  
CocaCola company, they have all these different types of brands. So you have the three that we saw before that are  
36:01  
similar, but Sprite has a completely different color scheme than Coke.  
36:07  
Vitamin Water, uh, Monster, Powerade, Dani, Dr. pepper. They all have  
36:13  
completely separate color schemes than Coke. Okay? So, their primary color, their secondary color, if they have it,  
36:19  
their text, radiuses, all their components, everything is going to be completely different. This is what's  
36:26  
called a house of brands. If you have a house of brands approach, my suggestion  
36:31  
to you, have a separate design system. Okay? One for each brand. The  
36:38  
alternative to that is is what you can do is say you only have two completely  
36:43  
separate brands. You would rename this to like brand Coke, okay? And then you can simply duplicate this entire one and  
36:51  
create a new collection called brand sprite. Okay? So, it's  
36:58  
still within one design system, but you're just going to need to change the collections that are applied. Okay?  
37:04  
That's my suggestion. It's the House of Brands. Okay. So, if I was just to go ahead and just uh delete uh this  
37:11  
collection now, but this is far more complex. Okay. And if you're dealing with a house of brands, like get in  
37:17  
touch with me, like you know, we have some links where you can book me for some time if you do need that level of  
37:22  
consulting. Okay? We work with house of brands all the time. But the more common use case that I work with like that I  
37:28  
see a lot of designers asking about is this branded house because everything is really just the same. So if you do have  
37:34  
this house of brand approach inside your alias collection is where you're going to house that that brand. So you're  
37:39  
going to have brand one, add another mode that's brand two. Now everything else is going to stay the same. Okay,  
37:47  
but the only thing that's going to change is just the primary color. So maybe for the second brand, this primary  
37:52  
color is going to be our red. We could then go ahead and simply just swap out  
37:59  
the primary color. It's that easy when dealing with a multibrand design system. Okay. Now, we do have a full other video  
38:06  
that goes a little bit more in depth on multibrand design systems. I'm not going to do that here. Okay. But it's a it's a  
38:12  
question that I get all the time. It's just dealing with multibrand design systems, the different types of  
38:18  
multibrand design systems that are out there. Okay? So, if you're dealing with a house of brands, just inside your  
38:23  
alias collection, just add another mode and swap that primary color or a secondary color if you need to. Right?  
38:29  
But if you're dealing with a house of brands, oh, sorry, I think I deleted my image. Um, is, you know, get in contact  
38:35  
with me because there's probably a lot of other use cases and edge cases that you're not thinking about in regards to  
38:40  
that. Okay, my suggestion to you. Anyways, let's keep moving forward. So,  
Adding White & Black  
38:46  
one thing I always do as well is just with inside of our neutral collection is your black and white's never really  
38:51  
going to change. But one thing you can do, sorry if I just remove the coke here now,  
38:56  
is inside your gray, what you can do is really just include like a white and just like a black if you want to. Or you  
39:03  
can just like what I do sometimes is just like in your all variables just like create a new variable. You just  
39:09  
call foundation is where you just sort of have like um foundation white. Sorry, there we go.  
39:16  
Foundation white, black. It doesn't really matter what you do here with some of these things. But then inside your  
39:21  
alias, inside that neutral is where you can also just have sort of like a white and then also just like a black.  
39:28  
Okay, it's it's really that simple at the end of the day where we search for foundation.  
39:33  
And again, you can also just put this inside of like an alias foundations group, but like just for the sake of  
39:38  
everything, just if you just put it in neutral, like it makes life a little bit easier. Okay, so foundation black. Foundation black. Okay, there we go. So  
39:46  
really we have all the variables that we need inside of our alias collection though. So now I have like slides for  
Mapped Collection Intro  
39:52  
maps but like I think it's best if you just like if I go through it with you and we build it together. But your  
39:58  
mapped collection is really like the leaves of a tree. It's what everyone sees. Okay. So these are your icon  
40:03  
variables. These are your text variables, your surface variables and your border variables in a nutshell.  
40:08  
Okay. So these are the things that are actually applied to a lot of your components. Now, one thing I would like  
40:14  
to call out is not every single one of the colors that you had in your alias collection needs a purpose in your  
40:20  
mapped collection. What you're doing is you're selecting the specific variables that you're going to want to use for  
40:25  
your components, even if it's just like two colors from a particular scale, okay? And applying them or giving them a  
40:32  
specific role um inside the maps collection that's going to be applied to a lot of these components. Okay? So, now  
40:38  
let's start off building out our maps collection. Now, one thing I would like to call out here, this token structure is very simple. Okay, as I mentioned  
40:44  
earlier, this series or this long video, we're not building the best looking components in the world and we're not  
40:50  
covering every specific use case. Okay, I do have more videos where we get into more complex tokenography. Okay, but  
40:57  
again, this is just getting your feet wet and it's the same that was in the series last year. Okay,  
41:03  
so our maps collection, it's going to be very basic, but this can get super complex and I will leave links on those  
41:11  
some of those more complex videos below. Okay, but I want to call that out specifically is that this is a starter  
41:16  
video. It's not meant for you to build the most robust design system in the world. Also too, one thing I would like  
41:23  
to call out is that the naming conventions that will go into your maps collection,  
41:28  
they can vary. And I've covered a bunch of different approaches before. I'm using a a different approach to Star. If  
41:34  
you look at our collective kit that's inside of our academy, um the token structure follows a little bit of a  
41:41  
different approach, but it's more complex. Okay, I want to call that out right away just so there's no confusion. So, with that preamble out of the way,  
41:47  
let's look at our mapped collection now. Now, let's go ahead. Let's create another collection that's going to be uh our mapped collection. Okay, so we're  
Text Variables  
41:53  
going to start off uh with our text variables. So, starting off with our text headings. Okay. So, with our text  
41:59  
headings, we're going to go into our neutral collection and maybe just apply like an 800\. Okay. And then we're also  
42:05  
going to have a body and maybe we apply that a 700\. So, now we're starting to have some of those different variables  
42:10  
for like our different like, you know, styles and things that are actually going to go onto or different colors that are actually going to go onto our  
42:15  
like components and onto our text. Okay. Again, as I said before, there are more complex versions of this text where we  
42:21  
get into things like on color, on color, subtle. Those are in another video in our like our academy series. But again,  
42:28  
just getting your feet wet. This is the approach that I would follow. Okay, we're also going to have an action and a  
42:35  
um text action color. Think of it like a link color. So, if there's a link in like your your body, the paragraphs, and  
42:42  
what I usually do for that is, let me just make sure confirm something here, which is our 500\. Now, one thing I  
42:48  
always like to do as well is whenever I'm working within my scales uh in our alias and like in our brand, whatever  
42:54  
like that default color is instead of a 500, you can call it a default. So, you already know like what your core color  
43:00  
is that the scale was based off of. Again, it's just something I do. Um you  
43:06  
don't really need to do it too if you don't want to. So, this is our default. And then this here is also our default, whatever those 500s are, just so I know.  
43:12  
Okay. Anyways, so you have your text action and because our primary like UI  
43:17  
collective color is purple, maybe I want that link to be like a default. Okay, so  
43:23  
sorry, not a purple default. This should be our primary default. Thanks for calling me out behind the scenes. Always  
43:28  
be sure to um go al collection to collection. Never skip over collections.  
43:33  
Uh then what we're going to do is we're going to go with our action hover. So if this action element was actually  
43:39  
hovered. So think like an like legitimately like a link. The link is  
43:45  
the color the action color is if that there's that link is not hovered. And then when that that link is hovered  
43:51  
what's the hover color? Okay. And when we build out these components you're going to see uh what I mean. And we're  
43:57  
also going to need a text disabled. Okay. So if that link maybe is disabled  
44:02  
in the grand scheme of things we can apply like a neutral 400\. We're also going to need an information. So if like  
44:09  
you have text that's in an information state, that can be our information defaults. You can have a warning. So  
44:15  
again, a warning defaults. Warning. So sorry, where's our warning?  
44:21  
Our warning defaults. Uh you can have our success, which is our success  
44:26  
defaults. And then you can go uh with an error, which is our uh error default. And then  
44:34  
we're also going to need uh an onaction. So basically what this is, again,  
44:39  
there's a bunch of different ways that you can break this up. I have more complex ways um in some of our other  
44:44  
videos, but a great great way if you're just getting started is think about an on action is if it's on color, right? So  
44:50  
if you have text that's on a colored background, um you might just want to set it to neutral  
44:57  
that neutral white. Okay. Um, and I think we're pretty good when it  
45:03  
comes to uh our text. So, these are all some of their starting text colors that we might need for our design system. And  
45:08  
it's great because this can always scale up. So, now that we have this out of the way, let's move on to our surface, our  
45:14  
icon, and our border. So, now let's look at our icons. Okay. Now, the be best thing about this, if I was to duplicate  
Icon Variables  
45:20  
this group, our text group for icons, basically all these variables can really stay the same because we want some  
45:27  
consistency if our text is next to an icon. Like if we have warning text next to a warning icon, we want those colors  
45:32  
to be consistent. Okay? We don't want them to be completely different because that's where we get into some different experiences. But where some things  
45:39  
differ is we're not going to have an icon headings or an icon body. Okay? What I'm going to do, delete one of them  
45:44  
and actually just call this our icon defaults or our icon um primary is also  
45:50  
a term that you can use, but I find that if you're using the action action hover approach and you're applying a primary,  
45:55  
I think default is just a little bit easier to understand. Or what this is is if you just have an icon resting on its  
46:01  
own, um what's the color for that icon that you want to apply? So, I'm going to  
46:06  
apply just a neutral 700 for now. But everything else is really going to stay  
46:12  
the exact same because you want the text and icons to share the same variables. So, the easiest way to deal with your  
46:18  
icons, just duplicate the text group. So, now I want to go into my surface variables here. Um, or create surface  
Surface Variables  
46:24  
variables, excuse me. And what we're going to start off with is actually a color for a page. Okay. Now, with this,  
46:30  
we can connect back to our neutral white because maybe we want our pages to be white. Okay. Then what we can do is also  
46:36  
have what's called like a surface primary or you might also know it as a surface defaults. But what this is is  
46:42  
really what are the colors for like key cards on the page. Okay. So in the case of what I mean by that is say we have  
46:49  
like this dashboard here and then which is white. Say we might have all these  
46:54  
cards on top of it, right? But maybe you want the cards to have some type of like subtle differentiation. So this is super  
47:01  
lightly. It's like let me just go like 2%. Sorry. Just so you can see the difference. And that's way too dark.  
47:06  
Like 5%. Something like that. Whereas like a very subtle difference in like  
47:13  
contrast from the background. Okay, that's the purpose of what is like that  
47:18  
surface default. So it can be white if you want. It can be gray. It doesn't really matter in the grand scheme of  
47:24  
things. Okay. So what we're also going to need is a surface action. So what the  
47:30  
surface action is is think about a button. Okay. That's an action element. That is our surface action. So in that  
47:37  
case, if we think back to our uh our UI collective, our buttons are purple. So we're going to apply that default. And  
47:44  
then we're going to apply the action hover. And in this case, what we might want to do is again just apply a little  
47:49  
bit darker color. So when that button is hovered, it switches to a darker color. Now, what we're going to do now is now  
47:55  
get into like more specifics like success, like warning, like uh oops, I don't want to open that.  
48:02  
um warning information. Okay. Um error.  
48:07  
Okay. With these, if you think about like an alert as an example, and again, there's a ton of different use cases for  
48:13  
these. Sometimes you might want multiple success colors. If it's lighter, if it's darker, depending on if you have success  
48:19  
success buttons, warnings, warning buttons, so on and so forth. Okay? And  
48:25  
you might want different like groupings for these, but for the purposes of this video, let's just look at it from the  
48:30  
point of view of alerts. Maybe we want these colors, these background colors to be a little bit lighter. Okay, so  
48:36  
warning 50\. Unless we get into alert components, you might see what I mean. Uh, our information 50 and then our  
48:42  
error 50\. Okay, really, really, really that simple. Perfect. So, there is our  
48:49  
uh surface colors. I hope I didn't mess up anywhere here, and if I did, we'll come back and fix it. Again, just our starting surface colors uh for now. But  
48:56  
we might come back and add some more as we go through and build out some components. But let's look at our border colors next. So now let's create a new  
Border Variables  
49:03  
grouping for our border. Okay. So with our border, we're going to start off with like our border like a default or  
49:08  
like maybe like a primary if you want to call it that. Doesn't really matter. But what this default is if we think back to  
49:13  
the example where let me see if I still have it here uh on our frame is if we have sort of these cards, right? What's  
49:20  
sort of a standard border that's applied to a lot of elements. Okay, this can even be things like fields too. So I'm  
49:25  
going to create this uh and set this to like a neutral 50 as an example. Okay. So it just offers like some very subtle  
49:32  
differentiation um between a lot of these things. So then what we can do we can go with our like border success  
49:38  
information information uh warning uh error um disabled is  
49:47  
another big one. Actually did I even have a surface disabled? I didn't add a surface disabled so forgive me on that. is we're also going to need a surface  
49:53  
disabled which is might be like a neutral like I don't know 100 and we're  
49:58  
building a design system not the best looking design system in the world. Okay. Um so for these our border if our  
50:06  
um background for some of these elements might be a little bit lighter maybe we want our border to be a little bit darker. So this will be our our success  
50:12  
maybe like 200 information 200 uh warning 200 uh and air 200\. Okay. Um,  
50:20  
what else? For our borders, we're also going to need an action. And our action for our buttons, I kind of like to have  
50:26  
like that the same as I did for the surface. So, if our action is a surface  
50:31  
actions, the primary default action hover is primary 600\. I'm going to do the same like action hover primary 600\.  
50:39  
Um, we're also going to need a disabled. Sorry, I skipped over the disabled before, too. So, maybe they're neutral.  
50:45  
Maybe like a 300\. And then we're also going to need a focus. So our focus element will go around our focus  
50:51  
components. Uh and this is always the same as whatever that action value is. Okay. Sorry, our default. Okay, perfect.  
50:59  
So we have a lot of our variables that we can actually starting variables that we can use to start to build a lot of  
51:04  
these components now. And again, this can get way more complex and I've done videos where this does get way more  
51:09  
complex, but in the purposes of building out components, getting you started because at the end of the day, most people just want to see how we're  
51:16  
building components. Okay, we build components the best way here at UI Collective. A lot of other content  
51:21  
creators take influence in how we do this. So, um, yeah, want to cover it again. Perfect. So, now that we have  
51:28  
this out of the way, before we get into our responsive collection, let's look at what light mode and dark mode. So, now  
Building Dark Mode  
51:34  
light mode, dark mode. Everyone says like, "Oh, Kirk, like dark mode's impossible."  
51:39  
Not really. Dark mode is probably the easiest thing that you're going to do, okay? Because all you're doing for light  
51:45  
mode, dark mode is you're just inversing the colors. It's that simple. So this here would be our neutral 50\. This here  
51:52  
would be our 100\. This here might be our 400\. But also too with dark mode,  
51:58  
sometimes you do want some of those colors to stay the same. Okay? And if your brand is like that, what you can do  
52:04  
inside of your alias collection, also your brand collection, is just put like a dashed fix. So that um  
52:12  
this is more like relevant for uh like primary colors, secondary colors, those  
52:18  
core brand colors, things like error success is a little bit more fluid is you can put like a default fixed to let  
52:23  
any designer know that that color needs to be cannot change okay across dark mode. So maybe  
52:31  
sorry coughing for the purposes of this exercise we're just going to set that to default fixed. Okay, but everything else  
52:37  
we can kind of inverse. So, we're neutral 400, neutral 700\. Again, you can kind of be like sloppy with this, right?  
52:43  
Like, it doesn't need to be super perfect because we're going to go through and test this for accessibility a little bit later on. Uh, neutral  
52:50  
white, uh, our black, our icon. Sorry, feel free to skip ahead here if you  
52:56  
really want to, but um, we're just going to have some fun with it. It doesn't need to be perfect. For some things, you  
53:01  
can just sort of select another value and just see how it looks. And whenever I build dark mode to start, this is  
53:07  
exactly what I do. Like I'm not even kidding either. Like I just Sorry, our defaults should probably be at 300, but  
53:14  
um I just go this fast and then like work our way back and start to test a lot of these components first to see how  
53:20  
things are looking. So our success 50 800 800 uh 800  
53:28  
800 neutral 700 almost there. Um, these ones  
53:35  
are easy. Success 200, 600\. And again,  
53:40  
just guess at the end of the day is really what you're doing.  
53:45  
Try to get it as close to as possible, of course, but you're always going to need to go through and test for accessibility again anyway.  
53:52  
Default fix, default fix, 600, 700, doesn't really matter. Okay,  
53:57  
so there you have your starting point for dark mode. Okay, so we have all of  
54:04  
our color variables out of the way. And again, this isn't the most perfect design system. It's not the best looking design system, but it's enough where you  
54:10  
can take the learnings and apply it to your own and really like upscale it in a way. Okay, so we have our brand  
54:17  
collection. We have our alias collection. We talked about multiple brands. We have our maps collection that looks at light mode and also looks at  
54:23  
dark mode as well. But what about like our fonts and stuff? So that's where we bring in the responsive collection. So  
Building a Type Scale  
54:29  
our responsive collection, it basically just like houses all the variables that  
54:35  
might change across device sizes if that makes sense. So things like our font size, you know, and our spacing,  
54:41  
padding, gap, things like that. Okay. So in let's start off with like our text sizes. So in order to actually go ahead  
54:49  
and what's the word that I'm looking for? Um build out or type scales. Sorry, that  
54:54  
was so tough. It's 8:17 and I'm tired. um is I use this tool called type scale.  
55:00  
It's going to help us build out this type scale. Okay. So, what I always do is I set our font size, basic font size  
55:06  
to 16\. And what that's going to do is whatever our basic paragraph size, it's always going to be 16\. Anything lower  
55:11  
than 16, you need to be careful from an accessibility standpoint depending on the font that you have. 16 and above,  
55:17  
you're always fine from accessibility standpoint, unless your font is like one pixel thin. Okay? But I've never seen a  
55:22  
font that's like that. Anyways, so then we have all these different scales to choose from. I'm going to select major  
55:28  
third to start and then also toggle this to pixels because Figma works in pixels, not rims. Okay, now what? Let's dissect  
55:35  
this for a sec. So, we have paragraph size of 16, which is what we want. We  
55:41  
have an H6 of 20\. Then we have an H5 of 25 and H4 of 31.25.  
55:46  
But we really don't want decimals inside of Figma, do we? We want nice, crisp, clean, you know, numbers. So what we're  
55:53  
going to do for this is we're actually going to using the four pixel grid that  
55:59  
we had in scale. Okay, apply that same concept here where  
56:04  
16 to 20 goes by four pixels. That's perfect. But then we go to five. What's the closest multiple of four? 24\.  
56:12  
Then 31.25. What's the closest multiple of four? 32\.  
56:18  
40\. 48\. Um, oh god, 60\. Right, these are  
56:23  
where we get into all like how we start to build actually build out the scale. It's just like round the number to the  
56:30  
closest multiple of four just for consistency purposes. Okay, now um let's  
56:36  
go ahead and just like screenshot this. And one thing I'm also going to do as well is everyone asks about mobile. When  
56:42  
it comes to mobile, what you can do is simply just select a smaller scale and notice how everything shifts. Okay. So,  
56:49  
I'm going to take a screenshot of this as well. Okay. There's our mobile scale. Um, and now we're using can apply that  
56:56  
same logic where things just like adjust as as needed. Sorry, things don't adjust just adjust as needed. We just have to  
57:03  
keep applying that four pixel um logic. So, closest multiple of four to 47.78 is  
57:11  
48\. So, our H1 is going to be 48\. Okay, that's how we get our type scales in a  
57:16  
nutshell. But where things can get complex are things like line heights and um paragraph spacing. We're going to  
57:22  
look at that too. Okay. So with the screenshots that we have, let's go into a responsive collection and start to build this out. So here I just have the  
Responsive Collection  
57:28  
screenshots I took from Typescale for like our desktop and mobile. Um let's go ahead. I just created this responsive  
57:33  
collection here. And let's just go ahead and start with our number variables, not our string variables because I've done  
57:39  
this before with string variables and I have to rebuild it with number variables. So don't do that. Okay. So we're going to start off with H1 and  
57:44  
then font size. Okay. This is a way that you can approach it. There's a bunch of different ways you can do this. So like  
57:49  
line height and then also like paragraph spacing. Um and what we're going to do is just duplicate this for um our H2,  
57:57  
H2, our H3,  
58:04  
H4, our H5, and then our H6  
58:11  
H6. And then what we're going to do is we're going to for our um paragraph  
58:18  
x small paragraph small  
58:24  
paragraph medium and our paragraph large. Okay. So just  
58:30  
like that. And now let's go ahead and add some adjustments here. So for H1 um  
58:36  
maybe we'll do our mobile after. So let's focus on our desktop for now. Make sure we get that that down pat. So, um,  
58:42  
what we're going to do here is is going to be we're start our closest multiple is, uh, 60 for this. I really hope I  
58:49  
didn't mess that up. Two is going to be our 48\. Our H3 is going to be our 40\.  
58:56  
H3 is going to be our 40\. H3 is going to be our 40\. Our H4 is going to be our 32\.  
59:02  
Our H5 is going to be our 24\. 24\. And then our H6 is going to be our  
59:08  
20\. And then this is where we're getting into something some tricky things here. Maybe if I go oops largest to smallest.  
59:14  
Keep things consistent. A large, medium, small, extra small. There we go. We're cooking. Awesome. So, our paragraph  
59:21  
large in this case is going to be 20\. And I know what you're saying is, Kirk, like our Oops, I didn't properly H6. I  
59:27  
know what you're saying is like our font size for H6 and our paragraph large are the same. Yes. Usually with your headings, it might be a little bit more  
59:33  
bold to offer that level of differentiation. Um, but anyways, I continue on. Our paragraph medium is  
59:39  
going to be that 16\. And there's different terminologies here for what you can call these things. Okay? And I've called them different things in the  
59:45  
past. Our paragraph small, we're going to break the four pixel rule and actually just go with the 14 parag  
59:50  
paragraph spacing is kind of weird that way. And then something that is absolutely not accessible, but I still have it as an option for things like  
59:56  
captions or if I really really need to like terms and conditions, you know, is like that that font size of 12\. Okay. So  
1:00:05  
now let's look at line height. Now when it comes to line height is we might like adjust this a little bit later on is  
1:00:13  
what you do is you kind of take the font size and you multiply it by a multiple.  
1:00:20  
Okay 1.4 1.6 1.2 until you get the look and feel that you're going for okay so  
1:00:28  
what I mean by that is like 60 60 \* 1.2 2 is 72\. So in this case, our  
1:00:36  
line height for H6. So if we set this to hello world, hello world. If we set this  
1:00:42  
to like a 60\. Okay. Oops. We set this like a 60\. Um, and we set our line  
1:00:47  
height to something like 72\. That's what that would look like. And it's not that half bad. Again, what did I what was  
1:00:53  
this? 60\* 1.4. If we go 60 times 1.2, maybe we want might want things a little  
1:00:58  
bit tighter. Or sorry, it was You know what? That's fine. before I get ahead of myself here. Okay, you can also even go  
1:01:04  
a little bit tighter like 60 times 0.8 and have to set this to 48\. But this  
1:01:10  
like a little bit too tight I find sometimes, but it's totally up to you. Okay, so this is where you kind of need to have an idea as to like how you want  
1:01:16  
to structure your type before you go ahead and do this. We're just going to keep things simple. Go by 1.2 for now.  
1:01:22  
Okay, so lock height 48 \* 1.2 um 57.6.  
1:01:29  
We're still going to apply that four pixel rule here. So, which it would be  
1:01:34  
56\. Yes, 56\. I believe I got that right. Please don't sue me if I got that wrong.  
1:01:40  
Uh, time 1.2 48\. Perfect. 32 \* 1.2 38.4  
1:01:47  
closest to 40\. Uh, 24 \* 1.2 uh 28 28  
1:01:55  
20 \* 1.2 24\. Perfect. Uh 20 24\. Same as  
1:02:02  
before. 16 \* 1.2 uh 20 uh 14 \* 1.2 16 and then 12 \*  
1:02:13  
1.2 14 16\. Okay. So there we have our line  
1:02:20  
height. Okay. So let's go ahead and do the same thing uh for mobile. Now before we look at our paragraph spacing. So  
1:02:26  
this here is desktop. This here is mobile. Okay, just like that. Um, one  
1:02:33  
thing also that we can do inside this responsive collection is just create another variable here that we're just going to call like device size. So this  
1:02:40  
is where we can specify like what these are like 1440 maybe this is like a 440\. Okay, for mobile you could have tablet  
1:02:46  
here as well. Okay, so then for uh our mobile. Okay, so  
1:02:52  
we're have 48 um 48 1.2 do  
1:02:58  
50\. This would be 56\. Oops. 56\. 56\. Uh,  
1:03:05  
this here is going to be our 40\. 40 \* 1.2. I believe we already did that actually, which we did. Sorry. Let me  
1:03:12  
extend this in so we can see side by side. So, 40 \* 1.2 is 48\. And then we're  
1:03:17  
going to go with a 32 for our H3. So, this is our 32\. And that  
1:03:25  
would be a 40\. It's kind of nice when the numbers work like this. Uh H4 is going to be a 28\. So I think we already  
1:03:34  
uh I don't think we did a 28 yet. 20 16 28 24 28s. No, I don't think we  
1:03:40  
did. I hope I didn't mess up anywhere in here, but forgive me if I did. Uh 28 \*  
1:03:46  
1.2. So this is going to be our 32\. There we go. Oh yeah, I messed up here. I'm  
1:03:52  
trying to go quick, so forgive me. Our H5 is our 24\.  
1:03:57  
24 time 1.2. So these actually stay the exact same. Our H5,  
1:04:02  
which is nice. Okay. And then let's go with our H6. So 20\. And then this also stays the same. And then everything else  
1:04:08  
can stay the same. Now, a great rule of thumb is all your paragraph sizes should stay the exact same on mobile as they  
1:04:14  
are on desktop. You should not change your paragraph sizes at all. Okay. So  
1:04:20  
there we have our desktop and also our mobile. One thing too when it comes to paragraph spacing, there's no like true  
1:04:26  
rule behind it. Okay, it's it's totally up to you how you want to structure these things. So like set this something  
1:04:33  
like4, you know, maybe for your headings, you may maybe want it something like 64 as paragraph spacing.  
1:04:39  
So maybe be 64 and this might be like 64\. Maybe going  
1:04:46  
down, maybe you want to go with like a 48 and also like a 48\. There's no like true rule of thumb when it comes to  
1:04:52  
paragraph spacing, okay? You kind of just got to like see how much spacing you like to have between some of your  
1:04:57  
paragraph sizes. So maybe this one's 32\. Maybe this is 32\. Um paragraph spacing  
1:05:03  
here. Maybe this is 20 and this is 20\. And maybe this is, you know, uh 20 and  
1:05:09  
also 20\. So just do what you think looks good for your brand at the end of the day. Paragraph spacing. Maybe we'll set  
1:05:15  
this like 24 or 20\. We'll just keep it at 20 for now. I don't All right, we might come back change it a little bit later. 20 20 20 20 20  
1:05:27  
and then our 20 and then also uh our 20\. There we go. Okay. So then there we have  
1:05:32  
our responsive collection. But we're not done just yet. Is there's still this concept of like responsive variables or  
1:05:40  
what I call like jumper variables. We we filmed a video on it last year and this is also included in like our original build a design system series, but it's  
1:05:46  
something I still want to cover uh again. So, let's take a look at that next. So, sorry I changed my mind. I  
Building Text Styles  
1:05:52  
think it actually might make sense for us to start to build out those jumper variables once we actually get into um  
1:05:58  
like building out our components. It might make a little bit more sense and it's a really advanced topic. Like even when I'm working with clients, it's  
1:06:04  
something they rarely like they really struggle to understand is how your jumper variables are supposed to work. Um, so maybe we'll loop back to that a  
1:06:10  
little bit later on. But one thing, uh, I might want to do here now, let's get rid of those things here, is let's start  
1:06:17  
building out the actual text styles. They're going to go into our components here. Okay, this is going to be super  
1:06:23  
tedious. I know it's going to be annoying, but it is what it is. Okay, so let's start with our H1, our H2, uh, our  
1:06:30  
H3. Actually, we'll start with that for now. I think I might have a little bit of a hack here for us where we're going  
1:06:36  
to apply the variable for our H1 uh which is going to be our 60 and our line  
1:06:44  
height. Line height is going to be uh 72\. We can have par add paragraph  
1:06:49  
spacing here if we want to, but I'm just not going to do that. And then this here is going to be our headings. And then  
1:06:55  
this here is going to be um what do we want to do here? Let's apply the variable. Uh let's maybe go with our  
1:07:02  
font weight. Maybe we'll go with like a semi-bold. Okay. So then we're gonna do is we're going to go ahead create the  
1:07:09  
style of this. That's going to be our H1. Really that simple. Uh at the end of the day, um  
1:07:18  
actually maybe I'm just trying to think here. Uh I think maybe what we can do is to maybe sort of spruce things up a bit.  
1:07:25  
is no. I think maybe we'll leave it like this for now. Again, just cuz this is  
1:07:30  
like supposed to be like a simple video cuz what you can also do is you can also have like H1  
1:07:37  
semi-bold H1 bold, H1 medium, but I think that might be a little bit too complex for now. Uh so what we're going  
1:07:42  
to do then is let's detach this. Let's set this to our H2. Uh and let's set this to our H2 font size and our H2 uh  
1:07:50  
line height. Oops, sorry. I don't think I did that right. H2 font size H2 uh  
1:07:56  
line height. And let's go ahead and let's create the style of that. Let's call that our H2.  
1:08:02  
Okay. Then let's detach this. Uh set this to our H3 font size. H3 uh line  
1:08:08  
height. And let's create the style of this that we're going to call H3.  
1:08:14  
And we'll call this H3. There we go. Let's call this our H4. Let's detach.  
1:08:19  
Set this to our H4. Font size. Uh god, sorry. I gotta keep remembering to like  
1:08:25  
actually select. Um this is going to be our font size and our line height.  
1:08:32  
There we go. And let's call this our H4. Uh let's then duplicate this. Detach.  
1:08:39  
Call this our uh oops. Sorry, God. I'm all over the  
1:08:44  
place. This is going to be our H5 font size. H5 line height. Uh, and let's call  
1:08:50  
this our H5. But we need to call this our H5. There  
1:08:55  
we go. Now, let's call this our H6. Select, detach.  
1:09:00  
There we go. Did it right this time. Uh, our line height. There we go. And now,  
1:09:06  
here is our H6. There we go. So, now that we have that  
1:09:12  
out of the way, uh, let's now look at like our our paragraph. And again with our paragraph, this can be really where  
1:09:18  
we like break things out into a bunch of different styles, right? So what I mean by that is uh let's see how we want to  
1:09:24  
handle things here. Um you know what I think maybe for our body is we might actually we'll we'll do  
1:09:31  
something a little bit more exciting. So we might have like our small um small link  
1:09:39  
small link um and then also our small semi-bold sorry small semib bold  
1:09:47  
semi bold for now we're going to look at like our paragraph sizing. So with this there should also be an extra small  
1:09:53  
actually. So what we're going to do here sorry let me bring this all down. So actually get rid of these and work our  
1:09:59  
way up this time. Okay. So, this here we're going to apply our body. And for this maybe just want to apply  
1:10:05  
like that that regular. Okay. And what we're going to do here is we're going to set our body  
1:10:13  
paragraph sorry paragraph sizing. Uh where's our extra small font size  
1:10:20  
line height. There we go.  
1:10:26  
Let's uh go ahead and create the sizing of this. This is going to be our body uh  
1:10:32  
body uh small. Okay, let's duplicate this. Let's  
1:10:39  
detach. And what we can do here is we can actually just add an underline if we want to. And this is going to be our body.  
1:10:45  
Sorry, this should be our body extra small. Sorry about that. Thanks for calling me out behind the scenes. X small uh link. Okay. And let me just  
1:10:53  
rename this to X small. And we can actually just duplicate this  
1:11:00  
uh and set this to our uh semi bold by changing some of the items that are  
1:11:05  
actually in here. So this is probably an easy easier way for us to do it actually. But uh font weight semi-bold.  
1:11:12  
There we go. But it's kind of nice for us to see how everything comes about. So we have our extra small semi-bold and  
1:11:18  
then we have our uh extra small which is sort of like our regular. That's one way to approach it. So we have our small  
1:11:26  
uh link our let make sure to do this right. Extra small link extra small semibold and our extra small sort of  
1:11:32  
regular. Okay. So let's now group these together. Let's um detach detach and  
1:11:39  
detach. And for each of these what we can do is just set this to um small 14 and also  
1:11:47  
that line height uh of that small. So now what we can do, let's try to just  
1:11:53  
say x small. Sorry, I'm all over the place here. Forgive me. It is late in the day. Uh so what we can do now is  
1:11:59  
this will become our body uh small uh  
1:12:05  
link. This is going to become our body small body small  
1:12:12  
uh semibold. And this is going to become our body small  
1:12:17  
body small. There we go. Uh, we're in some good shape. So, let's select each  
1:12:23  
of these. Um, there we go. Let's detach. Detach and then detach and  
1:12:31  
select all these. Select that next size up, which is that font size medium and that line height um of medium. There we  
1:12:38  
go. Let's call this our medium. Medium and then medium. And let's go ahead and  
1:12:44  
start creating some of the styles here. This is our body uh medium body medium semibold.  
1:12:53  
There we go. Body medium uh link. And then lastly,  
1:13:01  
sort of our large size. Okay. Let's make sure we did this right. There we go. Perfect. And this here is going to be  
1:13:07  
our large large and our large. So let's just  
1:13:14  
sorry let's not do that. Let's detach detach and let's detach.  
1:13:21  
So this here is going to be our our large paragraph size font size large and  
1:13:27  
then our line height. Okay, perfect. So now let's go ahead and create the style.  
1:13:33  
Come on. Body uh large link uh body large  
1:13:43  
event body large semi-bold. Let's just check  
1:13:49  
out the styles. Things look okay. If I made any mistakes here, feel free to call me out. Medium, medium, semi-bold,  
1:13:56  
medium link. They want to put the link at actually at the  
1:14:03  
Let's try to think about how we want to rearrange this. Put our extra smalls first, then our semi-bold, then our link. Our small semi-bold, then our  
1:14:10  
link, medium, semi-bold, then link. Uh large, semi bold, and then link. Just a way we can structure it a little bit.  
1:14:16  
Okay. And one thing we can also do is just put these inside of a group as well. Um that we're just going to call  
1:14:22  
our headings. So now we have the variables applied inside of our actual styles themselves. Okay. So again, if I  
1:14:29  
made any mistakes there, I apologize. But now we have everything that we need to actually start going ahead and building out our components. Uh I'm  
Material 3 Icon Library  
1:14:35  
actually using the material icon library. Okay, it has all these great icons that just come in as local components. Um so I'm just using  
1:14:42  
material for my icons, but you can really use any icon library that you would like. And I just put the icons inside of my design system file. So  
Scoping Your Figma Variables  
1:14:49  
we're going to start with our button. But one thing we might want to do is we might just want to color scope uh our variables. Okay. So basically what this  
1:14:55  
is doing is it's hiding certain variables that like we might not necessarily need. Right? So within primary I'm not going to want any of  
1:15:02  
these. So I can choose to edit these variables and I can choose to show these or not when I'm actually applying  
1:15:08  
components. Okay. So now like these variables here won't be shown um when  
1:15:14  
I'm applying certain components when I'm applying the colors to components. Sorry. And even with brand as well, what  
1:15:20  
we can do is just go into our all variables here and just hide all the ones that aren't necessarily going to be  
1:15:26  
used, which all of these really. Um, yeah, even even the scale, too.  
1:15:31  
Actually, you know what? We'll leave the scale in. Um, and I'll say why in just a sec. So, we'll take out our purple.  
1:15:38  
These we're not going to need, and we'll leave in our scale. Okay. So, let's edit these variables. Just choose not to show  
1:15:44  
these. There we go. Um, and also too, one thing we can do is we can go back  
1:15:49  
into alias. Um, let's go ahead. Let's edit these variables.  
1:15:54  
What is this? This is a border width. Uh, so one thing we can do is just toggle this on and choose to only show  
1:16:00  
this uh in that stroke. Okay. So, you can even we'll do the same with border  
1:16:05  
radius as well. It just helps us to scope our colors pretty well. Um, so now  
1:16:11  
when I go and apply these variables, I don't have to scroll through all the variables that I had before. I can it's just like let me show you what I mean  
1:16:18  
honestly. Um so let's go ahead and just add in that radius. So now when I select  
1:16:25  
radius not how notice how border radius is always there. Okay sure we have our scale and the reason why I'm leaving in  
1:16:30  
the scale is because if you want to get specific around applying variables for padding and gap and things like that.  
1:16:36  
The scale is always nice to have. Um, but yeah, not really recommended to to  
1:16:42  
not really mandatory, sorry, to have your scale showing at all times. But notice how with border radius now, I don't need to scroll through all the all  
1:16:48  
the variables. It's right there. Okay, perfect. Awesome. So, with that out of the way, now we'll start with our  
Building a Button Component  
1:16:53  
button. Okay, so with our button, what we're going to do just put in something like join UI collective, just some basic  
1:16:59  
text here. Okay, what I'm going to do is I'm going to press shift A. Okay, and that's going to add that auto layout frame. One thing I want to make sure.  
1:17:05  
Okay, so perfect. This is set to our body medium, which is that 16 size frame. Okay, or 16 size text. Uh let's  
1:17:12  
go ahead and add in some variables now. So, uh let's go ahead add in just a  
1:17:18  
surface uh action. And we're going to set our text to our text on action because again  
1:17:23  
our on action sort of say signifying that it's on that background. There are more complex ways to handle this. I've  
1:17:28  
covered it in the past, but that's what we're rolling with for now. And we're going to use our text on action probably quite a lot. So, I'm actually just going  
1:17:34  
to go into our mapped, move our text on action way up here. There we go. So,  
1:17:40  
let's also go ahead add in a stroke. Now, often times what I see a lot of designers do is even if their stroke is  
1:17:46  
the same color as their surface, they just choose not to add a stroke, but it kind of puts you in a box then because  
1:17:53  
if you do decide you need to add a stroke, what you have to do is you have to go back and add it to all your components u a little bit later. So,  
1:18:00  
just even if it's the same, just add it. Doesn't hurt anyone. Okay. So, let's also go into our assets panel and let's  
1:18:06  
search for like our info icon. There we go. So, we can pull that in  
1:18:13  
here. Um, we shrink this to like 20 by 20\. There we go. And let's also set to  
1:18:20  
12\. Sorry, our horizontal padding to 12 and 8\. Keep things nice and snug. There  
1:18:25  
we go. Okay. Sorry. And let's set this to our icon on action. And I'm going to  
1:18:31  
do the same uh for our icon actually as well. Move our own action up. Okay. Um  
1:18:36  
so now our icon and our text are have the exact same color. Okay. So let's go ahead. Let's add in also a radius too.  
1:18:43  
Like maybe a radius of uh a radius of two. Sorry. We're going to call this our button. Let's go ahead maybe adjust the  
1:18:50  
gap something like eight. Let's create the component of this. Uh and let's get started from here. Okay. So before we go  
1:18:56  
ahead and add in our variants, let's go ahead and add in some properties here. So, if we look at this button, we're not  
1:19:02  
going to need an icon left and an icon right at every time. We might just want an icon left. We just might want an icon  
1:19:07  
right. We might not want an icon at all. So, what we're going to do uh to start is we're going to add a layer property  
1:19:13  
here that we're going to call uh icon left. Okay. So, let me just copy that as  
1:19:18  
well. Um, and now what we want to do, so if I bring this not this instance out.  
1:19:24  
Okay, now I can hide that icon left. But I also want the option to swap that  
1:19:29  
icon because I'm not always going to need an info icon. So with that, I'm going to add an instance swap here in  
1:19:34  
the top right. Also call it icon left. But what I like to do is add a little  
1:19:40  
emoji. And to do this, I did edit emo emojis and symbols. I'm on a Mac. I know there's a hotkey for it, but sorry, I'm  
1:19:47  
old school. And I like to add this sort of downward downward arrow. Okay. So,  
1:19:52  
let's create that property. And now I can sw easily swap out that icon for  
1:19:57  
another type of icon. You know, there's just an example. Perfect. So, we're also going to want to  
1:20:02  
do the same for icon right. So, let's add in a layer property for icon rights. So, icon right. There we go. Uh, let's  
1:20:11  
also create a instance swap for that icon right. And again, we add the downward facing arrow because we can't  
1:20:17  
have two properties with the same name. It kind of shows like one is like nested within the other using that arrow. Um,  
1:20:23  
you'll see what I mean here. Sort of like icon left, icon left, right? Anyways, I digress. Uh, and then lastly  
1:20:29  
is we're going to need a text property for the label to easily change that. So, let's just call that label. So, now we  
1:20:35  
can easily swap this out uh as well. So there we have uh our initial button  
1:20:41  
component. Let's go ahead and also start adding some variants. Now uh  
1:20:48  
uh so let's go ahead and let's start off with our so this is going to be our status. So this here is going to be our  
1:20:53  
default button and then this here is going to be our hover button. So, let's go with the surface action and then  
1:21:00  
surface action hover, our border action, border action hover. And we're going to keep our text uh icon on action and text  
1:21:07  
on action the same. You can have on action properties for that. I have tutorials in our academy where I go  
1:21:12  
through that level of complexity. Uh we're going to leave it like that for now and maybe only just change um our  
1:21:19  
just our surface and background. I just getting started at this early stage. Sometimes it can be a little bit  
1:21:25  
confusing if you do have um onaction hovers. Okay, again we can introduce  
1:21:30  
that if we want to, but we're not going to do that here just for simplicity sake. Okay. Uh and this here is then  
1:21:36  
also going to be uh our hover. Um moving along now is we're going to need a focus  
1:21:41  
element. Is what our focus element is for is if you've ever actually used like  
1:21:48  
um like navigated a website via like like a tab key. Okay. So, basically what  
1:21:53  
this does is allows those who are more visually impaired to sort of see what's selected if they're navigating a website just via a tab key. Okay. It's what's  
1:22:00  
called a focus. You don't need to have these in Figma, but I build them in  
1:22:06  
Figma just so my developers can see. Okay. So, when it comes to my focus, what I do is I set the width to two  
1:22:12  
pixels because I want it to be nice and noticeable. Okay. And again, I just copied my default because the default  
1:22:18  
and the focus should all as just as best practice purposes should always have roughly similar variables. Okay, I'm  
1:22:23  
going to set this to our border focus. So, this is why we have that border focus. And what I'm going to do is I'm  
1:22:29  
just going to simply copy and paste it inside. And I know what you're saying, Kirk, like that's not right. Like what?  
1:22:36  
Now, what I'm going to do actually is actually bring this around  
1:22:42  
two pixels on either side.  
1:22:48  
Okay, let's set the radius of this to four.  
1:22:53  
Radius of eight. Maybe let's actually go radius of two.  
1:22:59  
Radius of two is fine. Maybe even radius of four. I still think it looks a little bit too square, but it's okay. Again, we're not building the best looking  
1:23:05  
design system in the world. We're just building a design system. Okay. So, now we have that focus property all the way  
1:23:11  
around. But if I was to change this label, learn more, what do we notice is that the focus  
1:23:17  
doesn't adjust with it. And so what we need to do is actually set our constraints here with the focus selected  
1:23:22  
to left and right and top and bottom. And now with those constraints set, notice how whenever I adjust this to  
1:23:28  
maybe just something like hello, notice how that focus property always like  
1:23:34  
follows with it. Okay, beautiful. So there we have uh our  
1:23:40  
focus. Uh I just need to take a quick drink of water, but then we're going to look at our disabled and start looking at some other variants as well. Okay, so  
Adding Button Variants  
1:23:46  
I'm back. Uh let's go ahead and let's uh build our disabled now. So for our disabled, we're just applying our  
1:23:52  
disabled properties. There's a bunch of different ways that I've handled this in the past as I'm sure you might you might know, but really what we're doing just  
1:23:57  
applying our disabled. Um and again, it's not the best looking disabled button in the world. Um you know what?  
1:24:04  
just for my own sake. What we're going to do is we're actually going to set our uh surface disabled to something just a  
1:24:10  
little bit lighter. There we go. And maybe even our border disabled, too. Oops.  
1:24:21  
There we go. It just looks less harsh. And maybe we actually might even want to put our text disabled also a little bit darker. Maybe just like that default  
1:24:28  
color. And also our icons to match. Sorry, this is me just getting picky now. I didn't  
1:24:34  
really didn't like the look of that disabled. There we go. Okay, so there's just uh a disabled button. Anyways,  
1:24:42  
let's continue on. Uh, perfect. So, with that out of the way, let's go ahead and let's add in another variant that we're  
1:24:47  
going to call type. And this here is also going to be our default. Now, for your type variants is where we can get a  
1:24:52  
little bit more like finicky with it. This one is going to be uh our outline. Okay. So, with our outline, what we're  
1:24:59  
going to do is we're just going to drop the surface on each of these. But first, let's set our icon on action to our uh  
1:25:10  
sorry, we're going to take this one at a time, actually. So, let's drop the surface. Um, keep the border on the  
1:25:16  
outside, but then our icon on action is going to become our icon action, and our text on action is going to become our  
1:25:22  
text action. Okay? And then uh let's simply drop the surface again. Uh and  
1:25:29  
let's just set our icon on action to our icon action hover and our text on action  
1:25:35  
to our text action hover. And now we're going to do the same for our focus as we did with our defaults. So drop um change  
1:25:42  
our icon to icons action and then our text action. And I noticed a spelling  
1:25:47  
mistake here. Sorry. Icons, not icon. There we go. Um, and then for disabled, we're just  
1:25:53  
going to keep that the same just because I like my disabled like relatively similar in terms of consistency. Okay. Um, perfect. And then lastly, one thing  
1:26:00  
we can also do as well, um, is sorry for these, what I'm going to want to do is  
1:26:06  
actually just add in a fill for these. Sorry, that's my mistake. That's just going to be our surface default. Okay?  
1:26:11  
Because again, these are our these are our outline, not our transparent. Um, and then for these, what we're going  
1:26:18  
to do, because these are going to be uh our full-on transparent, our full-on transparent buttons, what  
1:26:25  
we're actually going to do is we're not going to have any of that fill. And then we're also going to remove the border  
1:26:30  
around the outside. Okay. Uh, so I hope that makes sense. So here we have our defaults full of color. Here we have our  
1:26:38  
outlines, which have that that white background to it. And if I change the page background here, hopefully you can  
1:26:45  
see what I mean. And then we have our transpar our transparent here. Okay. Uh  
1:26:50  
which doesn't have any of that white background. Okay. So, uh looks like we have some conflicting variable names  
1:26:57  
here. So, let's see what's happening. \[Music\] So, this should still be also our type.  
1:27:02  
This should be our transparent. And that should clear up any any duplicates. Beautiful. So there we have it's a  
1:27:08  
simple button component, but it's a great starting component for you to go and and make tweaks. Again, not every use case you might need. You might not  
1:27:14  
need you might not need a transparent, you might not need an outline. Um, and again, we go through more complex like  
1:27:20  
options of this on our academy where we get into different sizing things like subtle buttons and like things like success and error, but this is a great  
1:27:26  
starting component for you. So now let's work in our label component. And our label component is going to go on top of  
Building a Label Component  
1:27:32  
things like our field and other components that would necessarily like need a label. Now, we separate our label  
1:27:39  
component out because what it allows us to do is create variants for the label that we can actually swap out on an  
1:27:45  
input component to avoid like a ton of other components for our input later on.  
1:27:50  
Anyways, you're going to see what I mean. So, make sure this is set toward body medium and then set this to our  
1:27:57  
text body. And let's go into our assets panel and search for like a help icon.  
1:28:02  
Now, one thing we might do later is like come back and swap this out on the label  
1:28:08  
for our actual tool tip component. But anyways, we're going to continue with this for now. Set that to our icon  
1:28:13  
action. Uh, and let's go ahead add some auto layout. Let's make sure that uh our  
1:28:19  
properties here are set to hug and hug for our label. And let's center align left that label property as well. And  
1:28:26  
maybe we can set the gap to eight. And we'll leave horizontal and vertical padding both set to zero. Let's go  
1:28:31  
ahead, let's call this label. Let's go ahead and create the component of this. Now, if we think back to our button,  
1:28:37  
what's uh some properties that we might need here. First off, label property or text property for the label. So, we  
1:28:43  
easily swap that out. So, now I can change this to something like uh first name really easily with just a click.  
1:28:50  
And we're also going to want the option to hide the icon, but are we going to want the option to swap out the icon  
1:28:58  
if it's a label? But would you really ever want an icon besides like the help  
1:29:04  
icon for some type of information? Chances are probably not. So, we're  
1:29:09  
going to leave that as is for now. Okay. But what's one thing that we noticed here when we toggle on and off the icon?  
1:29:14  
It's like our frame shrinks a bit. And it's because our icons out of the box are pretty large at 24x4. So again, as  
1:29:20  
we go to the button, we'll shrink them to 20 x 20\. So now when we toggle these on and off, there we have it. Okay,  
1:29:28  
perfect. So there's our label out of the way. And one variant we're going to want to add here is this here is going to be  
1:29:34  
it's going to be just our type. This here is going to be our defaults. And this one here is actually going to  
1:29:40  
be our required. So what we're going to do with require is we're actually going to add a small asterisk. Okay,  
1:29:48  
small asterisk. Set that to our text error or sorry our icon error. Excuse  
1:29:54  
me. Best to stay consistent. icon air on the inside.  
1:29:59  
Okay. But what we're going to do is if we think about a label, all of a sudden,  
1:30:05  
if we were to like sw the component,  
1:30:10  
say you have like two form fields stacked on top of each other, all of a sudden the asterisk is going to push the  
1:30:16  
label further to the right and it's going to look a little bit wonky. So, what we're actually going to do is if I  
1:30:22  
add back in uh actually probably don't need a guide there, so I don't know why I did that. Is we're actually going to  
1:30:27  
absolute position this. Okay, just simply to the left just like that. So,  
1:30:34  
the asterisk is actually going to come in front of the label and it's not going to be inside the frame itself, but it's  
1:30:40  
just absolute positioned outside. Okay, so that's going to allow us to keep all the labels in line with one another.  
1:30:47  
Now, a question I get all the time is, "Kirk, can't the asterisk just go at the end?" But for accessibility purposes,  
1:30:53  
what you're going to want to have happen is for a user to see the field is required and then see the field name. Okay? Just best practice from  
1:30:59  
accessibility. Okay. So, there we have uh our required. Beautiful. So, with our  
1:31:06  
label out of the way, let's look at our input and then also our field. So, we're actually going to start off with our field uh and then our input. Now for our  
Building a Field Component  
1:31:13  
field here, let's go ahead uh and just uh so let's set this something like  
1:31:19  
placeholder. Just add some text and set this to our text body. Okay. Um  
1:31:26  
and then what we're going to do is just add in two icons. So again, maybe we can add in this help outline icon and then  
1:31:31  
maybe also person or profile uh profile icon or user. or should see  
1:31:39  
it comes back with user or we'll go with a smiley face. It doesn't really matter for now because we  
1:31:44  
can swap it out either way. Okay, what we are going to do here is we are going to select each of these, add some auto  
1:31:51  
layout. Okay, let's make sure that this is set to hug and hug to start and set the app to just like something like 12  
1:31:57  
or eight. So, it's very similar to our button. Let's go ahead. Let's add in some padding here. So, like 12 and then  
1:32:04  
also uh eight. And uh let's add in a quick stroke just so you can start to  
1:32:09  
visualize some things. Okay, so it's going to be our border default. And let's add in our surface,  
1:32:14  
which is going to be our surface default. Now, if you think about like an  
1:32:19  
input field, okay, you know, it might have a placeholder that's like first  
1:32:24  
name. It might have a placeholder that's like name or email.  
1:32:30  
What's awkward about this is that the the these icons are not in line. Okay.  
1:32:35  
So, very similar to what we just looked at with the label. It's best to keep like related elements in line with each other. So, what we're going to do is  
1:32:42  
actually just always set this to fill. So, it's always going to push um this  
1:32:48  
icon at the right to the right. Simple, right? So, let's call this field. And uh  
1:32:54  
let's also add in a radius here of something like 2 pixels. And sorry, I should also set a border width. Use my  
1:33:00  
variables. Set that to one. And there we go. things are looking in some pretty good shape. And also for consistency  
1:33:08  
purposes, I don't like the 24x 24\. I want it 20 x 20 just to keep things nice and snug. Okay, so let's go ahead and  
1:33:14  
let's create the component of this. And now let's add in some properties here. So now this is looking a little bit more like a field. So start off with our  
1:33:21  
icon. Let's go ahead. Let's add an icon uh left. There we go. And also add an  
1:33:27  
instant swap for that icon left. Of course, add that downward facing arrow where I put edit emojis and  
1:33:34  
symbols. Add the downward facing arrow. There we go. Icon left. Create the property. Let's do the same. And again,  
1:33:40  
make sure you're doing this on the main component because you can't do it on the instance of the component. Uh so let's add for our icon right.  
1:33:48  
There we go. And then add in uh a property for that icon right.  
1:33:55  
There we go. So now we have our icon left, icon left, icon right, icon right, too. Oops, something went astray here.  
1:34:01  
So sorry about that. Forgive me. So this should actually be our icon right.  
1:34:07  
Sorry. And let's make sure we rearrange these. So this is no longer not used in  
1:34:14  
the component. Sorry, I was going to start from scratch here. So we have our icon, right? And now let's add in our instance swap for that icon, right?  
1:34:21  
Sorry, my mistake. Silly mistakes. It's the morning here. Need more coffee.  
1:34:29  
There we go. Perfect. So now that should work as intended. Perfect. Now, of course, we're also going to want uh a  
1:34:36  
text property for the first name or not, not for the first name, sorry, for the  
1:34:41  
label. There we go. So, now on our instance, okay, we have our icon left, icon left, icon right, uh icon right,  
1:34:48  
and then also our label. Perfect. So, with that out of the way, let's go ahead and add in some variants. So, let's go  
Adding Field Variants  
1:34:53  
ahead. Let's add in uh our first hover effects. Um  
1:34:59  
actually, because these are kind of long, maybe we'll just go downwards this time. Okay. So, let's go with our first  
1:35:04  
off. This is going to be our status. Uh so, this is going to be our defaults. And then this here is going to be our  
1:35:10  
hover. So, when it comes to our hover, what I like to do is just set our border default to our border action hover. You  
1:35:17  
can also change the icons if you want. But um when it comes to the surface, what's kind of nice is maybe even have  
1:35:23  
like an action hover two. Okay, so action hover. It can even be like action  
1:35:29  
hover two or action hover lights. Okay, so with that, let's just set it like a 50\. And then this one, of course, like  
1:35:35  
the darker one for dark mode. So what we can do now is we can get like a surface action hover light. Sort of  
1:35:41  
adds sort of like a makes it stand out a little bit more that something's being hovered. Okay, you can play around with  
1:35:47  
it. I know it doesn't look great as it stands right now. Uh, but you can also set it to like a certain like your icon on action or like a darker version of  
1:35:53  
that. Um, so it's not just so it's not so harsh if you know what I mean. So like even like an icon action hover,  
1:35:59  
like a text action hover, that's the you have that option to do that too. And I don't think that looks half bad at the  
1:36:04  
end of the day. Okay, so there's our hover effect. Um, and again, you can also go ahead. Yeah. Yeah, enough of  
1:36:11  
that. uh is go ahead and add like a while hovering. You know, you're going to change it to to hover. Okay. Um let's  
1:36:19  
also go ahead and let's add in also our focus. So, this is going to be very similar to what we did with our button.  
1:36:24  
It's just two pixels all the way around. Add a stroke border width uh of two pixels. Uh drop  
1:36:33  
the fill. Uh set this to our border focus. Okay, there we go. Copy. And then  
1:36:38  
paste it all the way around. Again, use your absolute positioning tool.  
1:36:46  
There we go. One, two, one, two,  
1:36:53  
one, two. Then we have our one, two. So, we can  
1:37:00  
set those constraints again, remember, to left and right and also on top and bottom. And we're set the radius to something like four. Okay, so there we  
1:37:07  
have our focus. And then lastly, let's do our disabled.  
1:37:13  
So when it comes to our disabled, uh let's go with a surface disabled, border  
1:37:19  
disabled, uh icon disabled, and then our text uh disabled.  
1:37:26  
There we go. And then there is our disabled field. Okay. So there I think we're in some pretty good shape uh for  
1:37:32  
our field. So one thing um I also covered in our legacy series is the idea  
1:37:37  
of like a state. Okay. Uh so whether it's filled or not filled. So that this  
1:37:43  
here is going to be not filled. This here these ones here can be if this is filled. Basically what this is saying is  
1:37:49  
that sometimes what you might want to have here is if we go into our variables and into our text you might want to have  
1:37:55  
like a body placeholder. Okay. And with that you tend to get a little bit of like a lighter shade. It's maybe like a  
1:38:01  
400 where on your not filled maybe these are a little bit lighter. Okay, so these are  
1:38:07  
your text placeholder. So some things like filled versus not filled like you've enter text versus not entered  
1:38:13  
text. Okay, um it's a little bit more of an advanced topic. Um and there's a lot of other things that you can do with  
1:38:18  
that. But that's just touching it at uh a nutshell for now. The state not filled  
1:38:24  
or if that or if that field is actually filled itself. So now we're going to do is we're going to work on our input.  
Building an Input Component  
1:38:29  
Okay. So with your input, what you're doing is just taking your like your label property. Okay, just a copy of it  
1:38:35  
and then also a copy of like one of your fields and uh just pasting it uh below.  
1:38:42  
And we're sort of piecing the two uh together. So maybe for this we want to hide both the icons just to keep it nice  
1:38:47  
and clean. Okay, let's group these in auto layout. Set that to something like  
1:38:53  
eight. Okay. And let's go ahead and let's uh create the component of this  
1:38:58  
and call this uh art input. Now, one thing you might want to do as well is also just add in uh like placeholder  
1:39:06  
text here. Placeholder uh text.  
1:39:12  
You can also create the component of this placeholder text if you would like to. Okay? But I'm not going to do that  
1:39:19  
for now. Um, you can do that if you'd like to, if you want like more control over your placeholder text. Uh, we're  
1:39:25  
just going to set this to to hug and also to hug or sorry, fill and hug  
1:39:30  
vertically. This to our, uh, text body. There we go. And uh, let's go ahead and  
1:39:37  
just add in some nested instances to start. So, what nested instances are is if we look at uh, our field component  
1:39:44  
here, if I was to click on this field component, notice how I have access to all these properties. But if I click on  
1:39:49  
our input component, notice how all of those properties are now gone. Okay. So,  
1:39:54  
we're going to want the option here to toggle on all the great properties that we had before. So, to do that, we just  
1:40:01  
hit um I'll do that again slowly. So, properties, nested instances, then toggle on label and field. So, now when  
1:40:09  
I hit this, notice how I have all retained all the properties from our components inside of these components,  
1:40:15  
right? But what's something else is that we might not always want this placeholder text. So, let's go ahead and  
1:40:22  
add in a lab layer property for uh placeholder text  
1:40:28  
or uh what's the word I'm looking for? Explainer text. Explainer text. Probably a better term for it. Explainer text or  
1:40:35  
hint text. Sorry, that's the word that I'm going to use. Uh sorry to throw you for a loop there. So, this here is going  
1:40:41  
to be our hint hint text. There we go. And now I can also toggle  
1:40:47  
on and off that hint copy if I'd like to. And of course, one thing we're also going to want is a layer proper is a  
1:40:52  
text property, sorry, for that hint text. And again, just because we can't have two properties with the exact same  
1:40:58  
name, what we're going to do is add in that downward facing arrow here.  
1:41:04  
There we go. So hopefully that shows how you can like piece use components that  
1:41:09  
we built in order to combine them together to build other components. Now,  
1:41:14  
that concept's actually called like atomic design. Uh, it's a guy named Brad Frost, who's also a design system  
1:41:20  
expert, who like came up with that concept. Uh, I'm going to cover that topic a little bit more in depth in a  
1:41:26  
future video. So, be sure to like subscribe for that. But now we have this completed input component. So, again, we  
1:41:32  
added hit hit text. Um, we added our label component, our field component,  
1:41:37  
combined those together, and we added our nested instances here as well. So, now we can toggle everything on and off.  
1:41:43  
And hopefully this also shows you like why it's a pretty good idea to have a label  
1:41:49  
um as a separate component and not just include it in an input as I see a lot of  
1:41:54  
people do because now we have like a lot of control over that label whether it's defaults or whether it's required. Okay,  
1:42:00  
we don't need necessarily different variants for our input field. Now one thing we might want to do is just hide  
1:42:06  
this hint text by defaults. And you can also get creative with this. Okay, like  
1:42:12  
uh if you do have certain inputs, this can just sort of be um you know your type and maybe this is your like your defaults. But you can also get into  
1:42:18  
specific use cases. Okay, so this here might be email. Uh and with your email,  
1:42:23  
maybe like that button is actually hidden or that icon is actually hidden. And then you have an icon left with u  
1:42:30  
oops with something like a mail. There we go. So you can use that to sort  
1:42:35  
of set all like these different, you know, variants for different fields that you might need for your components. And  
1:42:42  
you can set this to something like email. And then there you go. And of course, you can always toggle on and off these different icons and all the  
1:42:48  
different properties still. Okay. So I'll leave that to you to get creative around what kind of like properties you  
1:42:53  
want for your input component or what variants, sorry, you want for your input component. But here's a great starting point. So now let's go ahead and let's  
Build a Menu Component  
1:42:59  
uh build out our menu component. And so it's going to look pretty similar the setup at least to a lot of like the other items. So it's going to be like uh  
1:43:05  
our other components we might have built so far. So it's going to be our menu item. Let's go ahead and add in just maybe like um I don't know like a  
1:43:12  
settings like a gear. No, it's not there. Okay, we're going to  
1:43:18  
add a person. Um and then also like a I don't know like a arrow.  
1:43:25  
Whatever. It doesn't really matter what icons we use. So, let's go ahead add in some auto layout. And something got all  
1:43:31  
messed up there. Okay. So, let's just ignore that. Let's ungroup that. And then let's go ahead and do this again.  
1:43:37  
So, let's add some auto layout. And then we're going to set this to something like 12 uh as a gap. Again, make sure  
1:43:42  
that this is set uh to hug and left center align. Okay. So, we're going to  
1:43:48  
build our menu item. And the menu items are going to be com are going to be combined into like one menu component,  
1:43:54  
if that makes sense. So, very similar to what we looked at with our placeholder is like we're always going to want or  
1:44:01  
not our placeholder, sorry, our field is we're always going to want the icon right to always be at the end. So, we  
1:44:06  
can set that to fill and make sure it's set to our text uh body.  
1:44:12  
There we go. And we're going to set this to something like 12 and then also something like eight vertically. Let's  
1:44:18  
add in a quick fill, which is going to be our surface uh defaults. We're not  
1:44:24  
going to add in a radius. Uh let's also add in a stroke maybe just on the bottom. And a border uh defaults. Uh and  
1:44:31  
again just on the bottom. So always be sure to set that as one pixel. And then  
1:44:37  
just on the bottom. And you're going to see why we set that just on the bottom as well. So let's call it is this our dot menu item. Okay. And we set this as  
1:44:44  
like a dot menu item because when we publish this component ideally like it won't get published. Um, and adding that  
1:44:50  
that period in front of it sort of signifies to Figma that hey, we don't want to publish this. Okay. So, let's  
1:44:56  
then go ahead and uh so there's our initial menu item, but again, we're going to need to add in some properties  
1:45:02  
here. So, starting off with our icon uh left,  
1:45:07  
icon left. There we go. Create the property. And then also an icon left as well. Add  
1:45:14  
in that downward facing arrow.  
1:45:19  
Sorry, I know you can't probably see this part, but icon left. Create the property and then also an icon right.  
1:45:30  
Oh, sorry. I need to do on the main component. Oops. There we go. Icon right.  
1:45:36  
Icon right. And drop the arrow that I copied in. There we go. Because we got to add that  
1:45:42  
on the instance swap. And then uh create the property again. icon, right, for the instant swap. Beautiful. So, things are  
1:45:49  
looking good. And of course, we're going to need a text property uh for that label. Okay, there we go. Just like  
1:45:55  
that. Now, so there is our initial uh menu item, but let's go ahead and add in  
1:46:01  
some variants here. Okay, so let's go ahead and let's uh start creating some variants here. So, of course, we're  
1:46:06  
going to need a hover. And this here is going to be our status.  
1:46:12  
And this here is going to be our default. So for this, what we have is our set  
1:46:18  
this to our border uh action and our surface is going to be our surface uh action hover lights. And maybe we just  
1:46:24  
want to keep like those like the same colors and the same the same colors. Actually, you know what? What the heck?  
1:46:31  
Let's set it to our icon action hover and our text action hover as well, just for consistency purposes. And also,  
1:46:36  
we're going to need it disabled. Okay. So, with our disabled, what we're going to do again, you guessed it, surface  
1:46:42  
disabled, border uh disabled, icon disabled, text uh disabled,  
1:46:50  
and there we have it. Okay. So, now that we have that out of the way is you could  
1:46:56  
introduce like another variant which is going to be called like our like like a it can be a state, it can be a type,  
1:47:02  
doesn't really matter. Um, and our first is going to be unselected cuz you think about a menu, you might always have one  
1:47:08  
option that's selected and one option and and one option that's selected and  
1:47:14  
all the others are not selected, right? So then these here are going to be our selected variants.  
1:47:21  
So with our selected variants, again, this is going to be our surface uh action. Again, sort of signify that it's  
1:47:28  
selected. This is our going to be our border action and then our icon uh on  
1:47:34  
action and then our text on action. So that's as if like that menu item  
1:47:39  
specifically is selected. Okay. And now it's going to be our surface action hover and our border action hover. And  
1:47:46  
then this is going to become our uh icon on action and then our text on action.  
1:47:52  
And then there's also uh like our disabled just going to stay the same. Okay. And when I check there's no overlaps in componentry. So, I think  
1:47:58  
we're off to a pretty good start. Okay. So, now what we're going to do uh is let's start piecing together uh the menu  
1:48:05  
component. Now, let's piece together a menu component. So, I'm going to take our menu item here.  
1:48:10  
And something strange just happened where you can see it all of a sudden it added a border on all sides. When on our  
1:48:17  
component here, we only have a border on the bottom. I haven't seen that one before.  
1:48:23  
And it did it again. So, I think we're witnessing a Figma bug in real time here. So, we're just going to proceed.  
1:48:28  
One thing I had done is I just increased the size of our padding like horizontally just to give ourselves some  
1:48:35  
more room. And I just hid the icon left in the layers here. So, it's still there. I just hid it. So, let's go ahead  
1:48:40  
and just add in a bunch. 1 2 3 4 5 6 7 and then eight. And maybe we can just go  
1:48:46  
ahead and just hide a couple. Okay. And it'll just set one to to selected. Okay.  
1:48:52  
So, let's call this uh our menu. And now one thing you might want to do as well, and I think just the fact that it might  
1:48:59  
get a little weird with the fact that we have borders on all sides now with our menu item, but anyways, um, what you  
1:49:06  
should realistically do is add in a stroke. Okay, so this would be like a border defaults. And one thing you can do is  
1:49:13  
add in a quick scroll bar. So how to do that is I just add in this scroll bar  
1:49:19  
looking thing. Set it to like your border default. Set the radius to something like round  
1:49:25  
and um add an auto layout frame. Call this your scroll bar. Uh create the you  
1:49:32  
can create the component if you want to have that level of control. We're not going to do it here. But then inside your menu items is you're actually going  
1:49:38  
to add them inside of a frame. Okay? So shift A to add them inside of a frame. And then inside the parent menu, you're  
1:49:46  
going to paste that in. So now you can see we sort of have two frames here. one with the menu items and then one with  
1:49:52  
just the scroll bar and then using um what's the word I'm looking for? Uh  
1:49:59  
auto layout, you can just set it from set it side to side. Okay. And we can even just set this to something like eight and then eight just to achieve the  
1:50:06  
look that you're going for. Um so then set this to uh fill. So this is just  
1:50:11  
sort of showing here that like um you if there's a menu that's scrollable multiple options, you can do that too.  
1:50:18  
And then maybe we can set the radius here to two. And it looks it might look a little weird just because we shouldn't  
1:50:23  
have like the the border on the right. Um but anyways, and sorry, I should  
1:50:28  
probably set the apply a variable for our border width. Let's create uh the component of this. And you can also just  
1:50:34  
toggle on have an option to show scroll bar or not. Oops. By adding in a layer  
1:50:39  
property for scroll bar. There we go. So we can turn that on and off. But we  
1:50:44  
still lost all our great properties that we set with our menu items. So let's go into our properties and our nested  
1:50:49  
instances and just simply toggle all of those on. There we go. So now I can see on our  
1:50:56  
menu we have all those great components uh upgrade properties and perfect there is our menu item with a live Figma bug.  
1:51:03  
So now let's piece together a menu component. So, I'm going to take our menu item here, and something strange  
1:51:08  
just happened where you can see it all of a sudden it added a border on all sides. Went on our component here. We  
1:51:15  
only have a border on the bottom. I haven't seen that one before.  
1:51:20  
And it did it again. So, I think we're witnessing a Figma bug in real time here. So, we're just going to proceed.  
1:51:26  
One thing I had done is I just increased the size of our padding like horizontally just to give ourselves some  
1:51:32  
more room. And I just hid the icon left in the layers here. So it's still there. I just hid it. So let's go ahead and  
1:51:38  
just add in a bunch. One, two, three, four, five, six, seven, and then eight.  
1:51:43  
And maybe we can just go ahead and just hide a couple. Okay. And we'll just set one to to selected. Okay. So let's call  
1:51:50  
this uh our menu. And now one thing you might want to do as well, and I think just the fact that it might get a little  
1:51:57  
weird with the fact that we have borders on all sides now with our menu item, but anyways, um, what you should  
1:52:03  
realistically do is add in a stroke. Okay, so this would be like our border defaults. And one thing you can do is  
1:52:10  
add in this quick scroll bar. So how to do that is I just add in this scroll bar  
1:52:17  
looking thing. Set it to like your border default. Set the radius to something like round  
1:52:23  
and um add an auto layout frame. Call this your scroll bar. Uh create the you  
1:52:30  
can create the component if you want to have that level of control. We're not going to do it here. But then inside your menu items is you're actually going  
1:52:36  
to add them inside of a frame. Okay? So shift A to add them inside of a frame. And then inside the parent menu, you're  
1:52:44  
going to paste that in. So now you can see we sort of have two frames here. one with the menu items and then one with  
1:52:49  
just the scroll bar. And then using um what's the word I'm looking for? Uh  
1:52:56  
auto layout, you can just set it from set it side to side. Okay. And we can even just set this to something like eight and then eight just to achieve the  
1:53:03  
look that you're going for. Um so then set this to uh fill. So this is just  
1:53:09  
sort of showing here that like um you if there's a menu that's scrollable, multiple options, you can do that too.  
1:53:15  
And then maybe we can set the radius here to two. And it looks it might look a little weird just because we shouldn't  
1:53:20  
have like the the border on the right. Um but anyways, and sorry, I should  
1:53:25  
probably set the apply a variable for our border width. Let's create uh the component of this. And you can also just  
1:53:31  
toggle on have an option to show scroll bar or not. Oops. By adding in a layer  
1:53:36  
property for scroll bar. There we go. So we can turn that on and off. But we  
1:53:42  
still lost all our great properties that we set with our menu items. So let's go into our properties and our nested  
1:53:47  
instances and just simply toggle all of those on. There we go. So now I can see on our  
1:53:54  
menu we have all those great components. Uh upgrade properties and perfect. There is our menu item with a live Figma bug.  
Build a Checkbox  
1:54:01  
Okay. So let's go ahead and let's bring in uh just a check icon for our checkbox  
1:54:06  
to start. And you know what we like to do? We like to set this by 20 to 20\. And let's go ahead and just add some auto  
1:54:12  
layout around it. Uh there we go. Maybe set this to something like eight. Uh and then also like eight. Okay. So let's  
1:54:19  
call this our checkbox. And what we're going to do is we're going to add in a surface action. And also a stroke, which  
1:54:27  
is our border action. Uh and we're actually going to set it on the outside. And also this  
1:54:33  
time to uh just one pixel for now. I always like to have my checkbox the border go on the outside just to make it  
1:54:39  
a little bit like bigger. Um, but as again that's just personal preference. You don't need to do it if you don't want to. And we're set that radius to  
1:54:45  
four and set our icon default to our icon on action. Okay, so things are looking pretty good for our checkbox.  
1:54:52  
And again, you can play around with this if you want to. If you think the check is a little bit proportionately small, you can set that to four and four if  
1:54:59  
you'd like. But I like my checkbox is just a little bit big. Um, so here it's 36x 36 and we're going to roll with that  
1:55:06  
uh for now. Okay, so let's go ahead. Let's create the component of this. And now let's go ahead. Let's add in some  
1:55:12  
variance here. So we're actually going to go horizontal this time.  
1:55:17  
So for this here is going to be our status to start. This here is going to be uh so we have  
1:55:25  
our default our default and then we're going to have here our hover. So for our  
1:55:31  
hover, we're going to go with our surface action hover and then our border action hover. And our icon on actions is  
1:55:36  
going to stay the same. And we're also going to need a focus. Okay. So this is going to be pretty similar to what we  
1:55:43  
did a little bit earlier on. We're going to add in uh that stroke. Add in a fill. Set this to our border focus radius,  
1:55:51  
which is going to be our border width, excuse me, 2 pixels on the outside. So  
1:55:57  
just going to place this all the way around. And again, you're going to want to use your absolute positioning tool or  
1:56:03  
ignore auto layout to just place that two pixels all the  
1:56:10  
way around. There we go. Set those constraints to  
1:56:15  
left and right and top and bottom. And set that radius to something like eight.  
1:56:20  
There we go. So, let's see. 2 pixels. 2 pixels. 2 pixels. 2 pixels. There we go.  
1:56:25  
And then there we have our focus. And then lastly, we're going to need to work with our disabled.  
1:56:33  
We're going to go with the surface disabled, border disabled, and then our icon uh  
1:56:38  
disabled. Okay, so there we have uh our disabled uh icon. Okay, or our disabled  
1:56:46  
checkbox. And then these are ultimately going to become our selected checkboxes. Okay, so now let's move on to our  
1:56:51  
unselected checkboxes and then also add in the label uh to this checkbox. So, one thing before I actually get into  
1:56:57  
this selected versus unselected that you can also do if you really want to is if something's in an error state. Um, so  
1:57:03  
you can get set this to status air where you set this to your surface uh air  
1:57:09  
border error and then also like your icon uh air. You have that option to do  
1:57:15  
that uh as well if you'd like to. Um, and you can sort of get, you know, funky. And we go into in our academy  
1:57:20  
courses, we go a little bit more in depth into like things like how to build this out properly, like all the different types for errors and stuff,  
1:57:27  
but anyways, we'll leave that as just an option for now. Um, and what we're going to do now is let's go ahead and let's  
1:57:32  
add in a new variant here that we're going to call type. And these first ones here are going to  
1:57:38  
be selected. And these here are going to be our unselected.  
1:57:43  
There we go. Selected and unselected. Now, for each of these, what we're going to do is just simply get rid of that  
1:57:49  
icon al together. Okay. And now we can make some adjustments. So, because our default and our focus share the same  
1:57:56  
colors, we can set this to uh our surface defaults. And we can keep the  
1:58:01  
border action the way it is. Then our surface action can become our surface  
1:58:07  
action hover light. And the border can stay the same. And then our def disableds can also just stay as they  
1:58:13  
were. Okay. So there we have our selected versus unselected. Now, one  
1:58:19  
thing we're going to want to do here is um you can also add in like some hover effects here if you want to. So like on  
1:58:26  
hover while hovering, you know, you swap to this variance and then on click you swap to this variant  
1:58:33  
and then while hovering you swap to this and then on click, you know, you you swap to you swap to this one. it's an  
1:58:41  
option for you to sort of set up some of that prototyping. But we're going to also want to introduce like a label for  
1:58:46  
this. Okay, so this is going to be our checkbox label. So let's go ahead. Let's  
1:58:52  
uh oops, sorry, not add some auto layout. Let's select both these elements and add some auto layout here and then  
1:58:57  
set uh our constraints on this to hug and hug and center left align and set  
1:59:04  
this to something like 12\. Okay, so this is going to be our checkbox uh label.  
1:59:10  
So, you're going to have a checkbox component or a checkbox label. If you wanted to, you can uh set this to  
1:59:15  
checkbox. And what that's going to do is just stop that from publishing. So, when we publish the design system at the end,  
1:59:20  
you likely shouldn't see those. And just call this checkbox if you want to. Um,  
1:59:25  
we'll just go with that for now. So, let's go ahead. Let's create the component of this. And a couple things  
1:59:30  
that we're going to need to do. first off is we're going to want uh to  
1:59:37  
have the option to hide this label if we want to. It's more of an edge case more  
1:59:45  
than anything else, but we're going to offer the option to hide label. Okay. And then also an option to uh change  
1:59:53  
that label nice and easily. Okay. So, add in a text property, but because we already have a property named label,  
1:59:59  
we're just going to add a downward facing arrow here.  
2:00:04  
There we go. So now we have the option to hide that label. But we we now lost  
2:00:10  
all the great properties that we built with our checkbox here. So what we need to do is go into our nested instances  
2:00:16  
and expose those properties. So now when I hit our instance here, I see I can hide our label and I can also toggle  
2:00:23  
between all the great checkbox properties uh or statuses and types that that we built a little bit earlier.  
2:00:28  
Okay, beautiful. There's our checkbox. Okay, so now let's go ahead and look at our radio button. So with our radio  
Build a Radio Button  
2:00:34  
button here, uh we're just going to add an ellipse to the canvas. We're going to set that to 8 by 8, but the size it's  
2:00:40  
totally up to you. And I'm going to set this to like a darker background so you can see what I'm rocking with because we're going to set this to a surface  
2:00:46  
default. Then on top of this ellipse is I'm going to add an auto layout frame. So what I'm going to do is I'm going to  
2:00:52  
press shift A here. Okay. And what that's going to do, it's going to add the auto layout frame on top of that  
2:00:58  
where I'm going to set the fill to our surface action. See how it's already  
2:01:03  
starting to come together? And maybe we can set this to something like just like an 8 by 8 as well. Keep things nice and  
2:01:09  
snug. Now, this looks does not look like a radio button. This just looks like a square. So, if we add in our radius  
2:01:16  
here, what's the one thing that we notice is that we don't necessarily have like a radius for like that nice round  
2:01:23  
radio button. So, what we can go ahead and do is just go in and add that uh to our radius where we're just going to  
2:01:30  
have like a round where we can just sort of set it to the largest value in our scale, whatever that is. Okay.  
2:01:37  
So, now when we go ahead and add in that uh radius, set that to round. Now, you  
2:01:43  
can see it's nice and round. But we're also going to need a stroke here as well, which is going to be our border uh  
2:01:49  
action. You can set it to the inside, to the outside, it doesn't really matter. It's up to you and your brand. And very  
2:01:55  
similar to what we looked at with checkbox, we can maybe call this our radio button to stop it from being like published if we want to. Uh but anyways,  
2:02:03  
let's uh proceed with that for now. And now let's go ahead. Let's create the component. So with that out of the way,  
2:02:09  
let's change our background back to white here. And let's go ahead and let's add in a variant now. So again, very  
2:02:15  
very similar to what we looked at with our checkbox is we can call this our status. This here is our defaults. This  
2:02:23  
here will be our hover. So with our hover, surface action hover,  
2:02:29  
border action hover, and the inside element can stay the same. And then with our focus is, I'm sure you guessed it by  
2:02:36  
now, what we need to do is add in uh an ellipse all the way around, border width  
2:02:42  
of 2 pixels, set that to our border focus, and then copy and then paste it  
2:02:49  
around. And again, use your absolute positioning tool just to just to get it two pixels as best you can. It's tough  
2:02:57  
with a circle, honestly, but I think that's not so bad. And now, even though  
2:03:02  
like this is always going to be a circle, so we would technically wouldn't need to set our constraints with the  
2:03:08  
focus. Always best practice, set those constraints left and right, top and bottom. Okay, so there we have our  
2:03:15  
focus. And then lastly, we have our uh disabled. So with our disabled, we can  
2:03:20  
go surface disabled. Uh border disabled. There we go. And maybe we want to set  
2:03:26  
this to uh our surface disabled, but that might be a little bit too light.  
2:03:31  
Sorry. Yeah, I'm not a fan of that. So maybe we want to set this to actually to our icon disabled. Beautiful. So now  
2:03:37  
let's bring these down. Um, and what we're going to do is, uh, add another  
2:03:43  
type here, cuz we're going to have our selected and our unselected. So, these are all going to be our selected,  
2:03:51  
and then these here are all going to be our unselected.  
2:03:57  
So, with our unselected, what we're going to do is simply just get rid of that ellipse uh, on the inside of each  
2:04:03  
of these, and we're just going to swap that fill to a surface default.  
2:04:09  
our surface action hover light, our surface defaults, and then our disabled  
2:04:14  
can stay the same. Okay, so there we have our initial um radio button  
2:04:20  
variance, but we're also going to need is that label. Okay, so very similar to what we looked at with the checkbox um  
2:04:27  
you know, radio button label. So if we go back to our checkbox component, you can see here, oops,  
2:04:34  
noticed a bug here while I was at it. So, this should also be set to our text body. So, forgive me there. So, this  
2:04:39  
should set to our text uh body. There we go. So, let's select both of  
2:04:46  
these, add auto layout, and set the gap of that to eight. Okay. So, let's set  
2:04:54  
this to hug and also to hug. And let's go ahead and call this our radio button.  
2:05:00  
Let's go ahead. Let's create the component of this now. And let's again let's add in some of the properties here that we did before. So starting off with  
2:05:07  
our this should be set to our text body. Text body.  
2:05:13  
Perfect. So what we're going to do is let's uh start off with a layer property  
2:05:18  
for that label just in case we want to hide it. And then also add in that text property for the label as well. So to do  
2:05:25  
this I'm adding edit uh emojis and symbols and then uh arrow.  
2:05:32  
Beautiful. There we go. So, let's create the property for that. So, now on an instance here, we can turn that on and  
2:05:38  
off. Also, too, is we're going to want to also add in our nested instance. So, we toggle on that radio button. So, now  
2:05:45  
on our our instance, we have all those great properties that we just built from our radio button component. And there  
2:05:52  
you go. There's our radio button. Okay. So, next what we're going to do is we're going to add uh build our switch. So,  
Build a Switch  
2:05:58  
this is like our switch or like our toggle. So, when it comes to your switch, like depending on how large you  
2:06:04  
want to make it, okay, this ellipse is going to like influence a whole lot of things. So, kind of similar to our radio  
2:06:11  
button in that sense. So, just like a radio button. Okay, so we're adding that ellipse. And again, one thing you might  
2:06:16  
want to do, and sorry, I know like my face is probably covering covering on the recording, is just name like the frame like the sorry, the ellipse like  
2:06:23  
knob. Um, and again, as we're going through this, use Figma's AI to like rename all your layers. So, I hate  
2:06:31  
renaming layers. Anyways, um okay. So, now let's make some adjustments here  
2:06:36  
because if we visualize what the switch is going to look like, we're going to start with our switch on. So, if that  
2:06:41  
switch is toggled on, so we're going to align it at the right. Okay. So, let's maybe just set uh our background here to  
2:06:48  
a different color and then also add a fill. So, this is where the size of the  
2:06:53  
knob can help influence like how large you want your switch to be. There's no like best practice here by any means. So  
2:07:01  
like build a switch, insert it into your UI, play around with like how it kind of looks and how it feels. But one thing I  
2:07:08  
might want to do is maybe just make it a little bit more condensed. Even maybe set this to something like a four. Maybe  
2:07:15  
you want it small, nice and tight. And then set our horizontal to something like an eight. Let's let's play around  
2:07:21  
with that. Let's now go ahead and add a radius at the full frame to something like round. Okay. And I think that's a  
2:07:28  
little bit too long. So maybe if you want to set this to something like a 64 width, you have that option to do so.  
2:07:34  
Okay. But what's something that we noticed here? This is almost like there's too much space here to this right hand side. So maybe if we oops,  
2:07:40  
sorry. If we maybe set it to something like a six, that's even better. Or even like a four. I think that's looks a  
2:07:46  
little bit more snug with me so far. Beautiful. Okay. So now let's work on  
2:07:52  
actually applying the color. So if this is our switch on to start, you know, it's like an action that's toggled on.  
2:07:58  
So similar to our radio button and our checkbox, that switch off would be like a little bit more like white. Okay. So,  
2:08:04  
and then also that text or that knob. We're just going to set this to our surface default. Beautiful. Now our  
2:08:10  
switch is really coming to life. We're also going to add a stroke, which is going to be our border action. And I  
2:08:17  
think we're in some pretty good shape here. Uh, one thing too, of course, always add the border width uh to one  
2:08:23  
pixel. And again, if I forgot to do that on any other components, just go back and make that adjustment. So, now that  
2:08:28  
we have our switch here, let's go ahead and set our background. And let's just call this switch uh item. And again, if  
2:08:35  
you don't want to publish your switch, add the period before you create the component of that. Beautiful. So, let's create uh the component uh of that. I  
2:08:42  
don't know why that won't close. Okay. So, now let's go ahead and let's add in a variant. So, with our variant, so our  
2:08:50  
first one, this is of course going to be our status. And then this here going to be our default. And again I rename it so  
2:08:56  
that the it starts with like a lowercase. I always have the name of the variant start with an uppercase as you  
2:09:02  
can see here like status um and then the name of the variant itself like um always lowerase. Okay. And now let's do  
2:09:09  
our hover. So this here is going to be our hover. I'm sure you guessed it. So we're going to have our action hover and  
2:09:15  
our border action hover. And we can keep our surface default as is. And there's our hover. Now, we also need to do our  
2:09:22  
focus. So, if you watched all the other parts of this video by now, I'm sure you know exactly what we're going to do for  
2:09:28  
our focus. Uh, drop the fill, add a stroke, um, and use our absolute  
2:09:33  
positioning tool. Uh, I know they renamed it to like ignore auto layout, but, you know, I'm a Figma OG, so I  
2:09:39  
still like my absolute positioning tool. And we're going to set this to our border focus uh, on the outside and two  
2:09:45  
pixels. There we go. Um, again, two pixels because we want our focus state to be like nice and visible.  
2:09:52  
Two pixels, two pixels, and two pixels. And of  
2:09:58  
course, it looks a little weird as a box. Uh, but if we set that around now, it looks a little more clear. And make  
2:10:03  
sure you can rename like the rectangle to focus in the layers. Sorry, I know my face is covering that. And then set your constraints to left and right and also  
2:10:10  
top and bottom. Okay, so there we've got a decent looking switch. And then lastly, we got to work on our disabled  
2:10:16  
as well. Okay, so with our uh disabled, so we're going to start off with our  
2:10:22  
surface disabled, our border disabled. And then same with the knob, similar to  
2:10:28  
what we did with the radio button is we don't want to put a surface disabled, but we can apply our icon disabled.  
2:10:35  
Okay? And that's going to signify uh that that's on. Beautiful. So there we have uh all of our appropriate um items  
2:10:43  
here. So now what if you know this is if this switch is on but what about if it's  
2:10:51  
off right? So with that let's add another variant here which is going to be type and  
2:10:58  
this can be like selected unselected as we have like checkbox radio button. And it could also be on and off because  
2:11:05  
something could be a switch that is selected but there could also be on maybe just to keep things consistent  
2:11:11  
maybe this is selected. Okay, but like the the naming convention here it's up to you in like your own design system.  
2:11:17  
So and then these here are unselected. Unselected. Okay. So where each of these  
2:11:22  
we just need to reposition the knob. Okay. So to do that I just really selected all of them and again just  
2:11:28  
using our auto layout here just align that left. So let's make some adjustments now. So, our surface action  
2:11:34  
is going to become our surface defaults. And our border action is going to become  
2:11:40  
our border defaults. And let's think about how we want to do the knob here.  
2:11:45  
So, I select both of these knobs. I think maybe we can maybe do like a  
2:11:50  
border action. It doesn't look half bad, but I think maybe the purple could be a  
2:11:55  
little bit weird. You might want to explore with maybe some different treatments here. I think if we were to do like our our icon disabled, I just  
2:12:02  
think it looks a little bit too much like a disabled or sorry, our icon. Yeah, our icon disabled. I think it  
2:12:07  
looks a little bit too disabled. So, I think maybe we can just leave that at the action. I think that's fine.  
2:12:14  
Okay. So, then we're going to add our surface action hover lights. And again, maybe our this becomes our knob here  
2:12:20  
will become our uh action hover. And let's make sure our border is our action  
2:12:26  
hover, which it is already. Perfect. And there we go. I think we're in some pretty good shape. So we have make sure  
2:12:32  
there's no variant overlaps. So just to summarize here, we can switch between all the different items for hover, for  
2:12:38  
focus, for disabled, and also for selected or unselected. Now, very similar to our checkbox is, of course,  
2:12:44  
we're also going to need like that label. Okay. And the radio button. So radio. Let's add in the label. Label  
2:12:51  
radio button label here. Sorry, there's some someone honking  
2:12:56  
outside. You might hear that. Uh, and let's set that to our text body. And then select both, add some auto layout.  
2:13:02  
So, let's see what we did here. So, we set the gap to eight. And let's try to be consistent. Set that gap to eight as  
2:13:07  
well. Make sure that this is set uh to hug and hug. And uh I think we're in  
2:13:12  
some pretty good shape. So, let's go ahead and let's call this our radio button.  
2:13:18  
And let's create the component of this. Okay. So, now that we have the component created, let's go ahead and of course,  
2:13:25  
I'm sure you guessed it by now, add a layer property for the label, just in case, and there's an ever a use case where you do want that label hidden and  
2:13:32  
then also a text property for that label as well. So, to get that edit emojis and symbols,  
2:13:39  
use that downward facing arrow. There we go. Because we can't have two  
2:13:45  
properties with the same name. So when I bring down uh an instance here again I  
2:13:50  
can turn on and off that label. But again we still need to add our nested instances to expose all those great properties that we created with our  
2:13:56  
switch item. So now when I select that I have our switch item where I can toggle everything between selected unselected  
2:14:03  
so on and so forth. And again you can also do some prototyping here as well. Um where if like while hovering you go  
2:14:12  
you know here on click you know you go here while hovering you go here while  
2:14:19  
hovering you go here and then on click you know you go here. Okay so you can add some prototyping uh there as well.  
2:14:26  
And beautiful there's our switch. Sorry. And I realized I made a catastrophic mistake. This should not say radio button. This should say switch. I  
2:14:33  
clearly need more coffee today. I don't know why I had radio buttons on my mind, but anyways, correcting that. Don't do  
2:14:40  
that. Sorry about that. That's on me. Okay, so now let's go ahead and let's look at our text area. So for our text  
Build a Text Area  
2:14:46  
area, we're going to actually reuse our label component now. So again, hopefully you can see how like using a label  
2:14:51  
component allows you to bring that into other components beyond just an input that you might need. Okay. So, what  
2:14:58  
we're going to do here is uh maybe just a trick what you can do is if we just  
2:15:04  
take this. Okay. And then just bring it into uh our text area here.  
2:15:10  
We can extend it out. But first, let's uh hide that icon. And we can just  
2:15:16  
detach this. Okay. Um and now just extend this down. Okay. So, it just  
2:15:21  
saves us from having to rebuild that first part again. But we're still going to need to go ahead and add in our properties because if we think about  
2:15:27  
like our our text field, text area, it's different than a field because a text area might be for like long form text,  
2:15:33  
you know, tell me about like your your medical history, I don't know, something like that where you need to give the user a little bit more space. So that's  
2:15:40  
why we're just extending that down. In terms of the height, it's really up to you how like tall or how high you want  
2:15:47  
like your your fields and stuff like that. Um, it ultimately doesn't matter at the end of the day. Um, so there's  
2:15:54  
really no right or wrong answer here. So with that, um, one thing you can do if  
2:16:00  
you really wanted to is actually, uh, put this as like a text area. Okay, dot  
2:16:07  
text area and then create the component of this and then the instance will get  
2:16:12  
attached to the label. Okay, so now you have you have control over your text area and also your label with me so far?  
2:16:20  
So with that is we still do need to go ahead and add in these read add in these properties because remember we just detached our initial component. So  
2:16:27  
starting off with our icon left our icon uh left. There we go. And then also add  
2:16:33  
in an instance swap for that icon left. You guessed it. Added emojis and  
2:16:38  
symbols. Downward facing arrow. There we go. Uh create the property.  
2:16:46  
Same for icon rights. Layer property. icon right. Icon right and then instance  
2:16:51  
swap icon right. Icon right. There we go. And then also  
2:16:58  
uh for our maybe we'll set this for our body uh our text body. And then maybe  
2:17:04  
just layer property for like the the label. Okay.  
2:17:09  
Create property for uh oops sorry I didn't mean to do that. Detach. Create property for the label. Okay. So, this  
2:17:17  
is good in theory, right? With me so far. But what's different about a field  
2:17:22  
like a regular field versus a text area is that the text the field like it's  
2:17:28  
just going to be if I was to shrink this back down, it's just going to be on one line. Like the lines aren't going to be  
2:17:34  
overlapping, right? But all of a sudden with a text area, what's going to happen is you you're going to have more than  
2:17:42  
one line of text. and all of a sudden if you have this icon left, it's going to be really really weird if like there's  
2:17:49  
just a bunch of space on either side. So, got you there because what we're actually going to do is we're going to  
2:17:55  
remove that icon left. And now we can just remove the icon left. Icon left.  
2:18:01  
And it looks like we have uh an issue here. So, let me see what I did. So, let's just say we're just going to set  
2:18:06  
this to icon. And then set just set this uh to icon. Okay.  
2:18:12  
So, uh, conflicting property names, and we're just going to remove that. And sorry, that shouldn't be the instance.  
2:18:18  
There we go. Perfect. So, now on our text area, we have icon and icon, okay,  
2:18:24  
that we can toggle on. And we don't need to worry about that icon left causing unnecessary white space. Okay, I did  
2:18:30  
that for a reason. I just wanted to show you just so you'll learn. Okay, so now we have our text area here. Uh, let's go  
2:18:36  
ahead and uh create the component of this. You can also add some hint copy here if you'd like or also some  
2:18:43  
character counts um if you would really like to. So maybe just for hint copy, what you can do is just like hint copy  
2:18:50  
in the middle. Uh drag it in. You can also create uh use make sure the hint  
2:18:56  
copy is its own component. If you'd like to have like exercise some control over that, you set that to our text  
2:19:02  
placeholder. So if it's a little bit light and you can add in a layer property here uh for hint copy  
2:19:10  
hint copy and then of course add in a layer a text property for that hint copy. Hint copy as well. Edit emojis and  
2:19:17  
symbols downward facing arrow.  
2:19:23  
There we go. Just like that. Okay. So then there we have uh our text area.  
2:19:28  
Maybe just adjust the the gap there to 12\. And one thing we notice is we want to expose nested instances for both our  
2:19:35  
label and also our text area. So now when I click that I see we have all those great properties to choose from.  
2:19:41  
So beautiful. There we have uh our teext area and our text area. And let me  
2:19:46  
confirm something here. Perfect. So we also have still have this set to our surface default. So I think we're in some good shape. If you wanted to add  
2:19:53  
some character count text, you can do that below. Just make sure to add in like that layer property and also um  
2:19:58  
like the text property as well. So perfect. There's your text area. Okay. So next, let's look at our tab bar. We  
Build a Tab Bar  
2:20:03  
need to start off with our tab bar item. So just so we can put like um what's word? Like UI collective, I don't know,  
2:20:12  
something like that. Okay, let's set it to a body text body. And uh let's go  
2:20:17  
ahead and add in uh some icons here. Maybe just like a  
2:20:22  
it'll go with like a heart or something. I don't know. Or favorites. I forget what it's called. Yeah, there we go. Uh,  
2:20:28  
we have our favorite. Again, set it to 20 by 20\. You don't have to, but I just like my icons a little bit smaller.  
2:20:34  
Okay. And let's go ahead and play around here. Okay. So, let's set it to hug and  
2:20:41  
hug our text. Keep things nice and snug. So, it's eight. Now, if you know me,  
2:20:46  
you'll know with my tabs, I only like an icon on my left. You can have an icon right if you want to. I'm not going to  
2:20:52  
include it. So, I'm going to set horizontal padding of 12 and a vertical  
2:20:58  
padding where we want to go. Maybe like 12\. Kind of looks a little bit buttony, a little bit big. Maybe 128\. I don't  
2:21:05  
know. I think that's fine. Okay. So, with this now, um  
2:21:12  
trying to think, do we want to add a fill? You can add a fill if you want to. It sort of depends on if your tab bar is  
2:21:19  
going to be set sitting on like um like what background it's usually going to be  
2:21:24  
sitting on. So you can add a fill if you want to, but if you want to maintain that transparent look, you don't need to  
2:21:29  
have a fill. Okay. Um okay. So let's call this our tab uh item tab item.  
2:21:37  
And let's create the component and start adding some properties here. So maybe for our icon, maybe we want to set it to  
2:21:45  
like our icon action just to like start to offer some differentiation. I think that's not half bad. And then let's go  
2:21:51  
ahead uh and start building adding some properties here. So we're going to add  
2:21:57  
in a text property for the label. There we go. And then add in a layer  
2:22:03  
property for the icon icon. And then a text an instance swap,  
2:22:08  
sorry, for also that icon. And then I use the downward facing arrow to do this. So I go edit emojis and symbols  
2:22:15  
and find that downward facing arrow. There we go. So now I can turn on and off that icon.  
2:22:22  
Also change uh the label uh as well. Okay. So now that we have our initial tab item all set up, let's go ahead and  
2:22:28  
start adding some variants. So let's go ahead and add in some variants here. So we're going to have uh our status and  
2:22:35  
this here is going to be our default. Uh there we go. And then if we extend this out, this one here is going to be  
2:22:41  
our hover. So for our hover, I'm sure you guessed it by now, action hover. And then you can go like text action hover  
2:22:48  
if you'd like to. We're going to add in a surface here for something like surface action hover light. Again, you  
2:22:53  
don't you can you don't necessarily need a background for your hover. This is where like find a style of tab that  
2:22:59  
works good for you that you really like and just use that. And then we're also going to need a focus. So I know focus  
2:23:04  
is like hands down the most tedious. So, one thing you can actually do is we just go back to one of your other components.  
2:23:10  
Um, maybe if we go back to like our button, you can actually just copy that focus if  
2:23:16  
you'd like to. So, you don't need to redo it all again. And then just paste it in and then again just position it to  
2:23:23  
pixels on either side. Readjust it. Okay. And it's going to maintain all the properties with it. So, there we have  
2:23:30  
our focus. If I was to set this to like hello, still like that focus follows with it. Okay. So it just saves time  
2:23:36  
that way. And then what we can do is uh set this to our disabled.  
2:23:41  
Okay. And we are going to set this to our icon disabled and then our text  
2:23:47  
disabled. There we go. And again, you can also add a background here if you'd like to. Um we're just go with like our  
2:23:53  
surface. Surface disabled. There we go. Again,  
2:23:58  
you can do that if you want to in a tab bar. It might look a little harsh, but again, to each their own. Um perfect.  
2:24:04  
So, with that out of the way, let's go ahead and let's add in a type variant. That's going to be our unselected. So,  
2:24:09  
these here are unselected tab items. And we're going to want to then bring down these if they are selected, of course.  
2:24:16  
So, what are the selected tab items? So, what you can do here is just select each of them and add in a stroke that's on  
2:24:23  
the bottom. And that's two pixels in width. And we're going to set that to  
2:24:28  
our border uh action. Okay. with the exception of our hover where that's going to become our border action hover  
2:24:35  
and here is going to become our border disabled. Okay. So basically what this is showing  
2:24:41  
is like which one of these is actually selected. Uh if it's underlined it's selected. If it's not if it's not  
2:24:47  
underlined then it's not selected. Think about just like a logical tab bar. It's usually the function. So then to piece  
2:24:52  
together your tab bar is you just extend a bunch of these out. Okay. So extend a  
2:24:58  
bunch out. There we go. however many you want. Again, you can still hide them in your layers as well. Call this your tab  
2:25:04  
bar. And then what we're going to do is we're going to add a stroke on the bottom of our entire tab bar. So, not  
2:25:11  
again on the individual like tab items, but on the overall tab bar itself. Set  
2:25:16  
this to your border default. And then just hide a couple. Okay. So, however many you might have. And then so when  
2:25:23  
you extend this out, what happens is that you know there's always like that linear bar at the bottom of your tab bar  
2:25:30  
to show that this is a connected component. So when I set one of them to selected, like that purple highlights  
2:25:36  
which one is selected and which ones are not. Okay. One thing you might also want  
2:25:41  
to consider doing here is going back and giving these like a body medium semibold  
2:25:48  
so it stands out a little bit more. Medium semibold. medium semibold. Okay,  
2:25:53  
that's also an option that you can take just to offer a little bit more differentiation. And if you have a really complex icon set, you can even  
2:26:01  
like uh set it to filled or sorry, I think um like what's the what's an example here that didn't work as as I  
2:26:08  
planned, but you can swap out these icons. So, as an example, like if it's  
2:26:13  
filled where we have that favorite order, you can go with like a favorite filled. Okay, even offer that level of  
2:26:18  
differentiation, but that's more complex. you kind of need like a really fancy icon set for that. Um, okay. So,  
2:26:24  
there we have our tab bar component. And what's one thing that we lost as well,  
2:26:30  
which is all those nested instances. So, again, just toggle all of those on. So, now when I select our tab bar uh on an  
2:26:38  
instance, I can see I have all those great items for me to choose from. Okay. So, make sure there's no overlaps in our  
2:26:45  
items. Perfect. So, there you have your tab bar. Okay. So, next what we're going to be looking at here uh is our button  
Build a Button Group  
2:26:51  
group. So, for our button group, it's kind of like a little bit of a simpler component, believe it or not, where you  
2:26:56  
can put like button group. Okay, we don't want this to be the medium semifold, just the medium. And set this  
2:27:02  
to our text body. Okay, so we're going to do add some auto layout just like that. Okay, maybe set this to like 12  
2:27:08  
and like 12\. I don't know. It depends how large you want your button group ultimately. And for this, we're actually  
2:27:14  
going to add a surface. Okay, which is a default. Then we're going to add a stroke which is going to be a border  
2:27:20  
default one pixel border width of one just on that right hand side. Okay. Um let's go ahead and  
2:27:29  
um you know what maybe we'll do? We'll add in also um an icon here. It's going  
2:27:36  
to be a heart. Again, 20 by 20\. Just me adjusting things. Uh we'll add in a heart as well and call this our uh  
2:27:44  
button group. I item dot button group item. There we go. So,  
2:27:50  
let's create the component. And there we go. Let's add in some properties now. So, first off, we can add in uh an icon  
2:27:56  
property or layer property and then a instance swap similar as we've done  
2:28:01  
before. Edit mode using symbols. Where's that downward facing arrow?  
2:28:08  
Just like that. Perfect. Um, and I'm still seeing that that Figma bug where like if you recall back to our  
2:28:15  
menu where even though there's only one border here, when I like copy the components, all of a sudden it looks  
2:28:21  
like it's adding it all the way around, which is so weird. I've never seen that before. So, I think we're just going to  
2:28:27  
have to manually reset it again every time. Um, yeah, I don't know what's going on.  
2:28:33  
Okay, anyways, so there we have um our icon and again, just one for our label,  
2:28:38  
too. a text property for our label. One thing you can also do as well if you want to is you can also add um a layer  
2:28:46  
property for the label. Okay. Um and then add a text property for the label. If you want to have like a button  
2:28:52  
toggle, you can also do that. That's also an option. Edit emojis and symbols. Where's that downward arrow? Okay, there  
2:29:00  
we go. Beautiful. Okay. Awesome. So now what we're going to do is uh set this  
2:29:07  
just to right again. Okay. Uh and now let's go ahead and add in a variant.  
2:29:13  
So with this we're just going to add in a hover. Uh so let's go action hover  
2:29:19  
lights text action hover icon action hover border uh action hover. And then  
2:29:27  
let's add in a selected. Okay. So, let's add in uh a selected version. This is  
2:29:33  
going to be our action, our border action, our icon on action, and our text  
2:29:39  
on action. Okay. And then lastly, we're going to need uh a disabled. You know, it's  
2:29:45  
pretty rare use case to have something disabled with some of these, but good to include it anyway. Border disabled. Uh  
2:29:53  
text disabled. Icon disabled. Okay, there we  
2:29:58  
go. So, when it comes to your button group, what you're doing is just like really just combining some of these and  
2:30:04  
see it did it again where it added uh that item all the way around. So, copy  
2:30:10  
did it again. Whatever. So, let's just uh keep manually making that fix. Add  
2:30:16  
some auto layout between them. Uh set that to zero. And look what it did. It  
2:30:21  
added it on all sides now. Um so, let's set that back to right again. And now on  
2:30:28  
our button group. Okay. Uh what we can do, we can create the component of this. Bring a symbol  
2:30:35  
down for testing. And it looks like every time we make a change here, it just keeps adding it adding back like  
2:30:40  
that those borders. So I'm not sure what's going on with Figma. But let's add in a stroke, okay, on the outside of  
2:30:47  
this or inside. It doesn't really matter. And set this to our border defaults. And then set the radius to  
2:30:53  
something like four. Okay. And when we do that, one thing we're going to have to do as well is just turn clip content  
2:30:59  
on in order to ensure that we achieve the look that we're going for. And then what we can do uh is set this. Oops, I  
2:31:05  
didn't set uh my apologies here because I didn't name our properties. This is going to be our default. This is going  
2:31:11  
to be our hover. This here is going to be our selected. And this is going to be our disabled.  
2:31:18  
Again, we're kind of merging like status and types here. Um but it is what it is.  
2:31:24  
so you can show what one is going to look like if it's selected. And again, one thing we just might want to do is  
2:31:29  
just hardcode this just to the right. There we go. And there we have uh our  
2:31:35  
button group component. Now, you can also add some different variants. So if like you want to remove just like the um  
2:31:41  
each of these like you don't want to have like the label you can be like uh button you know type  
2:31:48  
toggle button toggle um or button group and then button  
2:31:56  
um icon group you know like you can get you can kind of get tricky with it and finicky but um yeah there you can play  
2:32:03  
around different variants as much as you need to for your individual use case. Um, and there you go. There you have your button group. Okay. So, now let's  
Build a Link  
2:32:09  
look at our link component. Okay. So, set this as like a link. And let's go ahead and add in like a like a home icon  
2:32:17  
for one and then like uh an arrow icon for another or like a window like external window.  
2:32:24  
Open. Yeah, there we go. Open and new. Something like that. So, let's go ahead  
2:32:30  
add some auto layout. Uh, and just set this, of course, like a hug and a hug. Uh I'm not too sure why that got set to  
2:32:35  
absolute position, but we'll fix that. And of course, uh set to 20 by 20\. Okay,  
2:32:41  
both of the icons to 20 x 20\. And we can set the gap to something like 12 or some or eight. Doesn't really matter. Okay,  
2:32:47  
so there's our link. Now, let's create the component of this. Um so with  
2:32:54  
um our link is let's set that actually before I forget to text body. Sorry, I'm  
2:32:59  
always getting to do that these days. is we're going to start with our layer property for icon left and then our  
2:33:07  
instant swap for icon left.  
2:33:12  
Sorry, you'll see I changed my shirt. Uh then add in a downward facing arrow. There we go. You can just copy that. And  
2:33:20  
then what we're going to do the same for our icon right. Remove that arrow. Icon right. There we  
2:33:28  
go. And then same thing. Okay. icon. Right, there we go. So now on our  
2:33:35  
instance, I can toggle on and off those icons. Also swap those icons. And then we're going to need just a text property  
2:33:40  
uh for the label, but we're always going to need a label for our link. Okay. Uh  
2:33:45  
there we go. So toggle that on and off. And then uh I think we're looking in some pretty  
2:33:52  
good shape. So let's go ahead and add in uh a variant here. One that's going to  
2:33:57  
be uh our hover. First, this is going to be our status. Uh, this is going to be our default. And then this here is going  
2:34:03  
to be our hover. So, what you can do is set this to your action hover and then your text action  
2:34:10  
hover. And then we're also going to need a focus. This here is going to be our focus. So, very similar to what we did  
2:34:16  
with some of the other ones is we can just go maybe just go back to our tab bar, uh, select the focus,  
2:34:22  
go back to our link, and then paste it around. Okay. Okay, but we're just going to need to make some adjustments here, of course. So, that stays two pixels on  
2:34:30  
either side. And I can see it's still set to left and right and also top and bottom, which is perfect. Exactly what  
2:34:35  
we want to see. And then also, uh, we're going to need it disabled. Okay. So, our icon is going to be our  
2:34:42  
disabled. And then our text is also going to be our disabled. One thing you can also do if you like really want to  
2:34:48  
to offer like some differentiation for you could add like a surface disabled just to show it's like, hey, you can't click this at all. Just make sure to add  
2:34:55  
in a quick radius here of something like two, just so it looks a little bit clean. Okay, so there we have uh our  
2:35:01  
link component. I think we're in some pretty good shape. So, one thing you can also do as well with your link is you can add in like a different type. So,  
2:35:08  
this might be um I'll show you what I mean here real quick. Uh so, you can add  
2:35:13  
a new variant which is going to be type. This might be basic. This might be your uh even like your default link. Maybe  
2:35:20  
you might one thing you might also want to do is for your hover make that's like your body link. Okay, it's just to show some differentiation. And then what you  
2:35:27  
can do is what's called like an inline again there's different terminologies for it where everything else is uh has  
2:35:35  
that link but that hover might not have that link. Okay, so it's kind of just inversed at the end of the day and  
2:35:40  
there's just a different like variant set for you. Okay, perfect. So there we have our link. So now that we have our  
Build a Breadcrumb  
2:35:46  
link component, we can use that link component to build out our breadcrumb. Okay. Um,  
2:35:52  
perfect. There we go. So, for our breadcrumb, what we're going to do is maybe set that icon right to like that  
2:35:57  
um, right or chevron, right? There we go. And then what we're going to do is  
2:36:03  
uh, copy and paste and then hide that icon left. Okay. So, hopefully now you can see how it's already starting to  
2:36:09  
look like a little bit of a breadcrumb. And if we set this to 12 and you can control the number of links you want to  
2:36:15  
cap in your breadcrumb just using your layers. Um, so maybe only in six, which is kind of best practice that you don't  
2:36:20  
want to have any more links than that in your breadcrumb. You can just leverage it as such. So you can create that  
2:36:26  
breadcrumb and then hide a couple. Okay? So maybe only have three. But one thing that's important to note is that for the  
2:36:34  
last one of a breadcrumb, you can't really go anywhere else, right? So you're going to have to hide that icon, right? And then maybe you might want to  
2:36:41  
uh set that uh as in line to show like that's where you are. Okay, that's an  
2:36:47  
option. But then um as if you were to hide other layers, like if I was to hide  
2:36:53  
the last three, because maybe I only have three, you'd have to apply that same treatment. So a hack is whenever  
2:36:58  
you have that last one, maybe just hide all the other ones before it, which isn't best practice, but it just saves  
2:37:03  
you like saves you, what's the word I'm looking for? The hassle of having to hide the icon,  
2:37:10  
reapply like the property, all that fun stuff. But of course, we still need our nested instances. So, we can toggle  
2:37:16  
those on. Perfect. So, now on a copy of our breadcrumb, we have all of these great  
2:37:23  
properties for us to choose from. And again, we can hide our our hidden uh breadcrumb items, also known as our link  
2:37:29  
components, uh or reshow them from our layers panel itself. Okay, so a breadcrumb nice and easy component for  
2:37:34  
us. Let's keep moving forward. Okay, so let's go ahead and let's build out an avatar now. So for this, what we're going to do is we're going to search for  
Build an Avatar  
2:37:40  
like our user like a profile. Um profile  
2:37:47  
profile. Let's see what comes up. Person maybe. Um I forget the specific icon. There we  
2:37:54  
go. Person outline. I think that's okay. Um okay. So what we're going to do actually is we are going to set this to  
2:38:00  
something pretty large like 64 by 64 to start. And what we are going to do is we're going to add uh an auto layout  
2:38:07  
frame. Okay, with me so far? And one thing we're going to do is we're going to add in a fill, which is going to be  
2:38:13  
our surface default. And let's set the page background just so you can see uh what's going on here. So, um what I'm  
2:38:23  
I kind of like my largest avatar to be 64x 64\. Okay. So, let's actually set the  
2:38:28  
parent frame 64x 64 and then apply in that radius, which should be round. Now,  
2:38:35  
what we're going to do, okay, is even if we were to center it inside is this kind of looks a little bit awkward. So, we're  
2:38:41  
actually going to use our absolute positioning tool on the icon itself and extend it out. As you can see, just like  
2:38:48  
this. So, try to get it as center as possible. There we go. And then if you  
2:38:54  
select the parent frame and turn on clip content, what that's going to do is going to give you the look of the avatar  
2:39:00  
that you're going for. because our icon is a little bit weird. Even though I just set it to fill. Yeah, it's just just still not right. Again, you can  
2:39:06  
play around with different avatars here, different icons here for your avatar uh if you'd like to. And there we go. Okay.  
2:39:14  
So, there is uh our first avatar. So, uh I can see the size is 64x 64\. And  
2:39:22  
this is where if we were to create the component of this and add another variant, we can play around some different sizes, right? So, uh, what I  
2:39:28  
mean by that, if we have 64x 64, maybe we have a 32x 32\. Um, that might even be too big. Let's  
2:39:36  
48x 48\. 48x 48\. There we go. Something in the between. So, this is size. This  
2:39:43  
might be our large. This might be our medium. And then what you can do is just like  
2:39:49  
shrink it down so it kind of looks pretty similar. There we go. This here is our medium.  
2:39:55  
And then you might also have a small. Okay, so with the small, maybe that's where we get into something like 32 by  
2:40:01  
32\. And then really just adjust that icon just like that. Okay, so there's your  
2:40:09  
first like avatar. And what we can call this is also like in terms of a type, this is our icon avatar. Icon avatar.  
2:40:16  
What we can also do is maybe I might also just want to add in a quick stroke  
2:40:21  
here as well to offer some differentiation. border default. There we go. One thing we can also do is we  
2:40:27  
can also add in uh an image icon, an image type. So for this, what we're going to do, we can just simply get rid  
2:40:33  
of um the image on the inside and then add in or add in, sorry, if we were to  
2:40:40  
add in instead of that surface defaults, uh what we could do is set it to uh an  
2:40:45  
image. There we go. And maybe I'll upload an image a little bit later on just so you can see it so you don't need  
2:40:51  
to see my messy files. Um, so there is also our image variance. And then one  
2:40:56  
thing I realized here, make sure that's lowercase. And then you can do the same thing for initials.  
2:41:04  
So if I was to take my initials here, KM, that's me. Uh, set it to maybe like  
2:41:09  
our large semibold. There we go.  
2:41:16  
Copy it. again remove the icons here and paste it inside.  
2:41:23  
Maybe want to might make it a little bit bigger. So for this one, maybe you might want to go with an H5. This one, maybe you might want to go with an H6. Again,  
2:41:30  
depending on what feel you're going for. And in this one, maybe you might want to make it like a paragraph.  
2:41:36  
Large is still too big. Maybe a medium, medium semibold. There we go. And one  
2:41:42  
thing you should also do as well is just set this to hug and hug just so it stays nice and snug in the center.  
2:41:48  
And you can also do it with the width as well, but it doesn't really matter. Okay, so  
2:41:54  
there we go. There we have uh some of our initials. And if you really wanted to get fancy on me here, one thing you  
2:42:01  
could also do is you also add a layer property or text property, sorry, for the initials.  
2:42:06  
Beautiful. So, we're in some great shape for our avatar there. And now one thing you can also do is um you can like  
2:42:15  
create different like groups of these. Okay. So if I was to like set a bunch of them, add a bunch of them here. Um but  
2:42:22  
first so you know let me add like four or five. Okay. And then maybe we can uh  
2:42:28  
set the gap to like \-4 so they overlap. And then this last one you set it to  
2:42:33  
like plus 12\. Okay. It sort of shows that there's a bunch of other users who are part of this group. That's what's  
2:42:38  
called an avatar group. So you can use your avatars to sort of  
2:42:43  
create like a bunch of different components. So there's your avatar group. And then one thing you can also  
2:42:48  
even do is sort of just like an avatar label. So pretty similar to what we did with like our checkbox and things. So  
2:42:54  
you have your avatar label. Set this to your, you know, your body. Uh there we  
2:42:59  
go. Even this is kind of kind of large. So maybe we can just set that to a small.  
2:43:06  
Just to a small. There we go. You might even have like your avatar label. So, that's where you can also create different sizes for your avatar label if  
2:43:13  
like you'd really like to flip this to 12\. Make sure that's assigned left. Uh  
2:43:18  
avatar uh label. And you can even say the name. So, if this is like I don't know uh if you're a soccer fan like Cole  
2:43:25  
Palmer. Cole Palmer. If they don't have like an image for their name. Okay. You  
2:43:30  
can create the components. uh add in uh that text property for the label.  
2:43:36  
Oh, but what you can also do is of course add in the layer property. So label and then label  
2:43:45  
with the downward facing arrow of course. Edit emojis and symbols downward facing arrow.  
2:43:54  
There we go. Um and of course be sure to add in the text body. There we go. So  
2:43:59  
now you sort of have three components and sort of what from sort of one group. Okay. So there is our avatars uh all out  
2:44:06  
of the way. Okay. So with our avatar out of the way, let's go ahead and let's build our tag. So over this, we're just  
Build a Tag  
2:44:11  
going to put like a tag here. Now there's a couple different types of tags that you can take. We're just going to do one which is our interactive tag for  
2:44:17  
now. Okay. So, for our interactive tag, let's look for our plus to start.  
2:44:23  
R plus our add. There we go. Plus, perfect. And let's  
2:44:31  
add some auto layout. Okay. Set this to hug and hug. And we're going to play around with the gap. So, that's like  
2:44:37  
eight. Horizontal padding to like 12\. Vertical padding to also like 12\. Let's also add in a stroke which is going to  
2:44:43  
be our uh border um action. There we go. Sorry, you might  
2:44:49  
hear some noise outside. There is a big fair uh going on in Toronto and I hear  
2:44:54  
it. Um okay, so let's set this as like a a radius to four. And then also maybe  
2:45:01  
this set this icon to our icon action. Okay. So sort of show that something has the option to be selected. Okay. So  
2:45:08  
we're going to call this our tag item. dot tag item and then let's create the component of this. Now, one thing we  
2:45:15  
might also want to do is also add in like a surface default. So, let's go  
2:45:20  
ahead add in a variant and we're going to focus on our hover to  
2:45:26  
start. So, our hover, we're going to have our action hover lights, our oops,  
2:45:31  
sorry, this should also be our text body. And then this here should be our text  
2:45:38  
action hover. And then our icon action hover. There we go. And then of course  
2:45:44  
we're also going to want our focus. So this is our hover. This is our  
2:45:50  
default. Sorry. This is our status.  
2:45:55  
And when it comes to our focus, we can still do the same thing. Just copy uh  
2:46:00  
one of our focuses from we had before. Paste it. Oops, that's not what I wanted to do. I meant to copy the focus.  
2:46:09  
There we go. Just like that. And then we can set it to two pixels on either side.  
2:46:15  
Beautiful. So, we have left and right, top and bottom. And uh did I set my properties for this? I did not set my  
2:46:21  
properties for this. So, what I can do is just select the tag here uh using the uh select multi matching layers tool. We  
2:46:29  
can create the property for that all at once. And we're only going to have a text property. We're not going to have a  
2:46:34  
layer property, meaning we're only going to have the option to change the text and not actually change everything else  
2:46:40  
and not actually hide the text, excuse me. So, we're in some decent shape. Uh,  
2:46:45  
and one thing also we just might want to do is also have uh a disabled, of  
2:46:51  
course. So, we're going to add in our surface disabled, our border disabled,  
2:46:56  
and also our icon disabled, and set this to our text disabled. Perfect. I think  
2:47:03  
we're in some good shape for our tag item, but we still do need some other variants associated with that. So, let's do that next. Okay, so now let's add  
2:47:10  
like another selected variant onto these tags. One thing I did is I just renamed this tag cuz I don't know why I did tag  
2:47:15  
items. Anyways, clearly need more coffee today. I'll tell you that. So, let's go ahead. Let's add in a variant. It's  
2:47:21  
going to be our type. Okay. And these ones are going to be our unselected to start. And again, just maintain  
2:47:26  
consistency across what we've done with other components. And these here are going to be our selected. Okay. So, with  
2:47:32  
that, what we're going to do, we're just going to swap all all of these, not the top group, just these ones for a close.  
2:47:40  
There we go. And then we're going to set all of the the borders  
2:47:46  
uh not to a dash, but back back to a solid line. Then we adjust uh so it's going to be  
2:47:52  
our surface action. Border action is going to remain the same. This is going to become our text on  
2:47:58  
action and our icon on action. Uh for here we can do a surface action hover uh  
2:48:04  
border action hover text on action icon on action maintain the same as we did  
2:48:11  
here. So text action border focus icon on action uh text on action and then our  
2:48:20  
what's the word I'm looking for our disabled can can stay the same. Okay. So there we have our unselected and our  
2:48:25  
selected tag options. Um and again so sort of thought process is like you know while while hovering  
2:48:32  
on click it comes here shows that it's selected uh while hovering you know while hovering and then on on selected.  
2:48:40  
So there you go. There you have what's called an interactive tag components. Uh we're just going to call it a tag  
2:48:45  
components and keep rocking and rolling. Okay. So next let's go ahead let's look at our loader. Now, when it comes to your loader, like  
Build a Loader  
2:48:53  
it's there's a bunch of different things that you can do with your loader in terms of like the style that you want. Okay, so what I always tend to do, we're  
2:49:01  
going to build kind of just an ugly loader if I'm honest. So, we're going to bring in this loader and maybe we just  
2:49:07  
let's actually uh set it to the back. Again, there's a bunch of different types of loaders that you can you can  
2:49:14  
have. Okay. So, we're just going to uh  
2:49:19  
go like this. Loader on all four sides. Just try to get it as close to as possible. I think that looks a little  
2:49:24  
bit too too ugly. So, let's set it to maybe like 14\. And then 14\. And how tall  
2:49:30  
is our frame here? So, it's 85 by 85\. I think maybe if we shrink it down actually to 64 x 64\.  
2:49:37  
64x 64\. So, let's bring in all of our loaders.  
2:49:44  
Just like that. All of our loaders. Just position it.  
2:49:51  
So, if you picture these are just sort of like going around in in a circle in a way. Okay, that's basically the look  
2:49:57  
that I'm going for is these would it would just be like a rotating loader more often than not. Okay, so we can  
2:50:03  
remove the fill and then set these to our surface action. And uh let's go  
2:50:09  
ahead and create the component of this. Okay, so this is set to 64x 64\. One thing I'm going to want to do is I'm  
2:50:15  
actually going to set each of these to scale and scale. And the reason why I'm  
2:50:22  
going to do that is when we add additional sizes here,  
2:50:27  
when we add additional sizes, if I was set this to 48 by 48, notice how the  
2:50:33  
circles scale down with the actual loader. Okay. So, if this is our size,  
2:50:39  
this would be our large. Maybe we might have a medium. And then maybe we might  
2:50:44  
also have a small. And here, this might be like a 34 32x 32\.  
2:50:52  
32x 32\. Okay. And again, there's a ton of different types of loaders that you can actually build. Like you can do ones  
2:50:58  
where it's like um fight drop to fill out add a stroke, you know, like ones  
2:51:04  
ones like this in a way where you kind of just like nice looking loaders like that. There's a ton of different options  
2:51:11  
that you can do uh for your loaders. But that's really just how you can you just set them up in like the grand scheme of  
2:51:17  
things. Okay, so loader is a really simple component. Um it doesn't take  
2:51:22  
much uh to build. I want to show you another trick that you can do in terms of like your loaders and also like  
2:51:27  
interaction wise. So say you have like four of these, right? So if I'm going to  
2:51:33  
I'm going to add some auto layout here. Maybe I'm going to set this one to like  
2:51:38  
the purple. Okay. And then I create the component is then when I add a variant  
2:51:44  
here and this is like fun tricks that you can do is just move this one all the way to the end. Just move this one. Just  
2:51:51  
move this one. Okay. And basically what you're going to do is like uh after a delay of 200 milliseconds, after a delay  
2:52:02  
of 200 milliseconds, 200 milliseconds, and then after a delay of 200 milliseconds, after a delay of  
2:52:10  
200 milliseconds, and then lastly, after delay of 200  
2:52:15  
milliseconds. Right? So then if I was to go ahead  
2:52:21  
place this in a quick frame and then preview it. Let's just see here. You preview it. It's a little small, but  
2:52:30  
see how like things start to load. So you can play around with like some different treatments for your loader. And that felt like a little bit robotic,  
2:52:36  
but there's a lot of things that you can do for your loader component like that to sort of show that something's loading. Okay, but this is a real simple  
2:52:43  
loader um that I see quite frequently. Okay, so picture like this just like  
2:52:48  
spinning round and around and around and round and around to show that something's loading. Okay, again, each their own. Uh, and there you go. There  
2:52:55  
you have a loader component. Okay, so next let's go ahead and let's do our badge. So when it comes to our badge,  
Build a Badge  
2:53:00  
we're going to add some text here. It's just like 99\. Oops, 99\. And we're just set this to um we'll actually go with  
2:53:07  
our body small. So our 14 semib bold in this case. Of course, set this to our text body. So let's go ahead. Let's add  
2:53:13  
some auto layout here. Maybe shrink this to like 4x4. This we like it nice and snug. But this needs to be set to hug  
2:53:20  
and hug. Okay. Um, now one thing I like to do is just you can just hardcode the  
2:53:26  
width. Set it to something like 24\. And you're going to see why. But if I was to set this to our surface action. I'm  
2:53:32  
going to want to set it to around. Okay. And we always want our badge to be like that nice crisp clean circle. Okay. And  
2:53:38  
hard coding the width, the height and width like 24 x 24 allows us to do that.  
2:53:44  
So then we can go with our text on action and call this our badge. So where  
2:53:50  
badges usually come into play is if I was to go back and like take an avatar component here. Okay. So if you picture  
2:53:56  
like an avatar component, you might have, you know, your badge. Oops. Bring  
2:54:02  
to front. There you go. You might have your badge like resting on it. That's an example for like a shopping cart. You  
2:54:08  
know, if you're buying online, see how many items are in your cart. That's where a badge comes into play. So let's  
2:54:14  
create uh the component of this and let's add a variant here. So let's add a couple variants. So one of which uh  
2:54:21  
let's go with our status. So this is going to be our defaults. We also might  
2:54:26  
have an error here. So this is where we can set it to our surface error. Um and then our text error. Okay. I'm not a big  
2:54:33  
fan of that approach in my honest opinion. So, one thing you might want to consider is like you can go back and  
2:54:39  
adjust some of your surfaces to make them a little bit light, a little bit darker, but then that might impact other  
2:54:45  
components like an alerts. But because this is so small, one thing you can do is really just use like your icon error  
2:54:52  
and set your text to your text on action, okay, to maintain like that level of like cleanness. And you can  
2:54:58  
even do something like a success as well where you just swap it for the success and then an information  
2:55:05  
where you just swap it for an information and another one where you just swap it  
2:55:11  
uh for your warning. Okay, warning. And then also too if you always  
2:55:18  
be sure again so to also add a layer property for that badge count. So select one use the multi select tool and just  
2:55:25  
add a text property. Sorry, not a layer property uh for the count. So now when I bring one of these out, I can change  
2:55:31  
that to like 98\. Okay. Now we can also add another variant group here. So if  
2:55:37  
this is going to be type type, this might be our default. So these here are all our default. Click that lowerase. We  
2:55:44  
might also want one that's just like a dot. So with the dot, it's almost like  
2:55:50  
if you have like 101, you know, you just want to show that you have like some level of like alerts, but you don't necessarily need to specify a value.  
2:55:57  
What you can then do is set these to 12 and 12\. Just delete everything inside and then set them to 12 x 12\. And now  
2:56:04  
you have just like your dot badge. Okay. And again, I can see there's no overlaps here, but I think these ones are still  
2:56:11  
variant, too. Yeah. So these should actually be air. And let me just make sure that these are all named right. So  
2:56:17  
perfect. We have our default error success information warning. Beautiful. There we have a badge component. And so  
Build a Progress Bar  
2:56:23  
now let's work on our progress bar. So for our progress bar, if we set this to maybe like 200 as a width and a height  
2:56:29  
of maybe something like eight. Okay. What we're going to do, we're going to add a fill which is going to be our surface. Uh action hover light. And  
2:56:37  
let's also set the radius to something like round. Okay. And we'll call this  
2:56:42  
progress. Now, a little trick that I do, I'm going to add two ellipses. Okay. And then I'm  
2:56:49  
going to add some auto layout between them. Call this frame adjust gap. Sorry, I'm sure my face is covering it. Or  
2:56:56  
maybe it's not. Um, call this frame adjust gap. And then set the sizes of both ellipses to zero.  
2:57:04  
Then simply increase the size of that frame. Let's add a fill here. And you're  
2:57:09  
going to see why I did this. This is like a really like this is a better trick, this one. Okay. And then place it  
2:57:15  
inside. And then just match the height of it. Okay. And also be sure set that radius  
2:57:23  
as well uh to round to keep things nice and consistent. So now when I create the  
2:57:28  
component of this progress bar, notice how this locks because it's the component. I would have to like increase  
2:57:35  
the the width of this on the main component in order for it to change. But  
2:57:41  
on the instance, if I select the adjust gap and set it to 200\.  
2:57:47  
Oops, sorry. I was had the fix the width locked. So, set that to hug. Okay.  
2:57:52  
Notice how all of a sudden using the adjust gap, it's took the width that I  
2:57:59  
set the gap to be. So, if I set it to 150, now all of a sudden, I don't need to break my component every time. I can  
2:58:06  
just simply adjust the gap. Cool trick, right? So, that's a little bit of a  
2:58:11  
veteran trick for you in terms of your progress. And one thing you can even do is this is kind of like too tall. I kind  
2:58:17  
of like mine to be like four and then also like four. Keep it nice and thin.  
2:58:23  
Um, beautiful. Yeah. So, there you have uh your progress uh bar uh progress bar  
2:58:30  
because one thing you might also want to do is also have a label where it's like uh completion.  
2:58:36  
set this to our small and also body  
2:58:41  
because one thing you might also want to do is have some level of uh like a label for it like completion um 80 or 80%.  
2:58:50  
Again, just an option what you might want to do. So add some auto layout here. Set this to to hug and hug. There  
2:58:57  
we go. And now you can call this your progress bar. And again, if you if you want your  
2:59:02  
progress bar to be even like a little bit thicker, you can you have that option as well. You know, just make it the made progress bar like eight pixels  
2:59:09  
tall instead of four. Again, you can always just still keep adjusting the gap. So, if I want to set this to 80%,  
2:59:14  
so like something like 160 and have that option to do so. So, let's create the component. And one thing we want to do  
2:59:21  
is add, of course, add in first set this to fill. Add in a layer property here  
2:59:26  
for the label. And then add in a text property also for the label. Beautiful.  
2:59:32  
There you go. Then we go edit emojis and symbols. Where is our downward facing arrow?  
2:59:40  
There we go. Perfect. So now on our main component, we can turn that on and off and also adjust uh the gap as well.  
2:59:46  
Okay. So there's your progress bar. And let's look at our progress circle real quick. Let's look at our progress circle. So for a progress circle, what I  
Build a Progress Circle  
2:59:53  
do is just I just add um just a like a canvas here um or a circle, sorry. And  
3:00:00  
what I do then is I just sort of extend this out and just play around with it until I get exactly what I'm looking  
3:00:05  
for. And then I re rejoin it. So you're just playing around like the different circle controls. Um and we're going to  
3:00:12  
set this to our surface action hover lights. And then what we're going to do just copy and paste another  
3:00:18  
ellipse on top. And we're going to set this one to our surface action. And now we can control sort of the width of  
3:00:24  
that. Right? So now so you can sort of see like what that progress might might look like. Okay. And so you can also use  
3:00:30  
this as a loader component as well. And this is kind of tall as is. Maybe we set this to like 64 um and 64\. I might need  
3:00:38  
to reposition it. Sorry, that one is on me. Perfect. There we go. And then what  
3:00:43  
we can do is we can actually just frame this. There we go. condense this down just so  
3:00:50  
it's um perfect. 64 and 64\. Uh beautiful. And I  
3:00:57  
think we're in some pretty good shape here. So, this can be like our progress circle. One thing you might also want to  
3:01:02  
do um is you can add some text on the inside, something like 80% if you'd like to. So,  
3:01:10  
set this to your body and just paste it uh in on the inside.  
3:01:18  
Just like that. Position it in the center. And now if you were to create the component of this. There you go.  
3:01:25  
Okay. So, one thing too uh as well that you might want to consider is again remember how I talked about like setting  
3:01:31  
things to scale and scale. So, if we had another decided to add another variant here, what you could do is 64x 64, 48x  
3:01:41  
48\. Notice how that scales down. You just need to adjust the text inside of it. Okay. So there's another trick for  
3:01:47  
you uh as well uh if you'd like. And of course maybe you might not want that text on the inside. So you can add in a  
3:01:54  
uh layer property here of course for the label and also a text property of course for the label uh as well. So then we can  
3:02:01  
go edit emojis and symbols bring in that downward facing arrow and away we and away uh we go. Okay, beautiful. Let's uh  
3:02:09  
keep rocking in our roll in. And of course we can call this uh sort of our size which is our default if we did have  
3:02:14  
other sizes as well. Okay, perfect. There we go. So there we have our progress bar and our progress circle. Okay, so next let's bring our snack  
Build a Snackbar  
3:02:21  
build our snack bar. Sorry. So with our snack bar, let's set it to like um let's go hello and set it like our body  
3:02:31  
medium. Sorry, I was looking for that. Actually, no, we'll go with our body large actually. Let's spruce things up a bit. Um and set this. So, we're going to  
3:02:37  
set this to our uh text action the starter. Even though it's not an action element, maybe we can even go with the semol too. We'll get fancy with things.  
3:02:44  
Okay. So, let's call this our snack bar uh title. And um going ahead here, let's  
3:02:51  
also add in some more text. And this is going to be our text body. And we're going to set this to our medium. And  
3:02:57  
what we can do is just add in some basic text like you know Lauram Ipsum is the standard  
3:03:04  
uh dummy text of the design industry something like that. Okay so in some  
3:03:12  
decent shape we're just going to add in all the components and then structure it. So we're also going to bring in a  
3:03:17  
link components. Let's also bring in uh a closable. So, a close. Um, and let's  
3:03:25  
also go ahead and bring in um what's the word I'm looking for? Like an info.  
3:03:32  
There we go. An info. So, see how we're sort of like structuring the snack bar a little bit. So, one thing I want to do  
3:03:38  
start is that to do to start is I'm going to add uh a frame here that we're going to call content and then select  
3:03:44  
our closable or other icon. Okay. And sort of serve as the basis for  
3:03:49  
everything else. So maybe we can set that to like a 12\. Now one thing that's important to note here is depending on  
3:03:54  
how wide we want the snack bar, we're always going to want the close always at the end. Okay. So uh using fill we solve  
3:04:02  
that issue. And let's now play around with our auto layout. So like 12 or like  
3:04:08  
18 even by like 24\. I think that's decent for for a snack bar. And then add in a fill surface  
3:04:15  
default stroke which is going to be our border. uh defaults and let's also add  
3:04:22  
in a radius as well. Okay, so that radius is going to be something like eight and maybe also set this to 18 by  
3:04:29  
18\. Okay, I don't think that's so bad. Okay, so we're in some decent shape  
3:04:34  
here. Now, going back to our link component, if you really wanted to take your design system to a whole another level is you could also have like colors  
3:04:41  
for your links, too. So, if we were just to override these for now, just give you an idea as to what that might look like. It sort of like can spruce up your snack  
3:04:48  
bar a little bit. And so we set this to something like learn more. Maybe hide that icon left and set that icon right  
3:04:55  
to uh chevron. There we go. It looks a little bit more realistic uh that way. Okay, perfect. So  
3:05:04  
maybe we also might want to set our icon action to purple. And I think we're in some good shape here. Okay, sweet. Um,  
3:05:13  
what also might we want to do to this snack bar here is maybe if we go into  
3:05:18  
our progress bar, um, we'd be able to maybe just pull it in, but absolute  
3:05:24  
position it so that it stays at the bottom. And the reason why we might want to do that is maybe like there's a  
3:05:31  
timeout for the snack bar where it's like almost like giving you a little bit of a warning like, hey, like something's  
3:05:36  
wrong like or take action here. And then so we might want that at the end. Again,  
3:05:42  
it's just a nice to have more than anything else. So if we set a horizontal padding to something like 100, that  
3:05:47  
looks a little bit more realistic. But let's just make sure we set that to the bottom and also to the left and right.  
3:05:53  
And what that's going to do is if I extend this out, uh the progress bar is going to follow with it and always keep  
3:05:59  
it to the bottom uh as I extend that down. Okay, so that's why our constraints there. Super duper important. Okay. So, let's call this our  
3:06:06  
snack bar. And let's create the component of this. And let's play around with a couple things here. So, maybe um  
3:06:14  
I think we're always going to want the the content. Let's just say we do in this case, but maybe we might not want  
3:06:21  
this icon left. So, what we can do, sorry, is add in a layer property for this icon left  
3:06:28  
and also add in uh an instance swap for this icon left as well. So we can easily swap out that icon to something else.  
3:06:40  
There we go. Just like that. And then maybe uh for our closable, maybe we just want a layer property for the close.  
3:06:47  
Okay, we we're always going to want it a close and we never have like another type of icon in a snack bar. So now we  
3:06:53  
just have the option to hide that close uh if we'd like to. Okay. Um  
3:06:59  
perfect. So we're in some good shape here. And maybe also as well, maybe we also just do want to if I select the snack bar uh sorry on our main component  
3:07:06  
here. Maybe we also do just want an option to uh hide that snack bar or hide  
3:07:11  
the progress bar. So just a layer property for the progress bar. Beautiful. Uh so I think we're in some  
3:07:17  
good shape here. And also just expose any nested instances if we do have them um for like the link. And we probably  
3:07:23  
won't need them for the icons themselves. So maybe just the link for now. I think that's pretty good. So,  
3:07:29  
we're in some decent shape there for our snack bar, but there's also some variants that we can add for our snack  
3:07:34  
bar. So, things like, you know, if this is our this is our status or type, you  
3:07:40  
know, this could be our defaults. Uh, this could be just based on some of the other colors that we have. So, it could  
3:07:47  
be a success icon success surface success. Um, so this is where we're kind  
3:07:53  
of having to override some of the colors here. We don't have variance for those, but you can create variants for those if you'd like to. Um, and because because  
3:08:00  
our surface success is relatively light, we might want to set that just icon success. Again, just make it make it  
3:08:05  
work. Um, so then if we were to create another one, you know, maybe we might have an air if there's something like  
3:08:11  
urgent that you should take issue of. So air and then also error. And then we can  
3:08:16  
also have, you know, a warning. So for this one, really similar, you know, warning and then also warning. And then  
3:08:22  
also really similar to something like an information. Where is our information? And then also our information. And then  
3:08:29  
this here is going to be our information. There we go. So we have a bunch of different variants uh for our  
3:08:36  
snack bar. Looks like this one did not get named here. Uh and perfect. So our snack bar is in some pretty good shape.  
3:08:42  
We can swap between all the variants. We have our nested instances and some different types as well. And the snack bar is a kind of a nice component like  
3:08:48  
if you're in in an interview being able to show that you know how to build this component because it leverages a bunch of other like atom components. It's  
3:08:54  
pretty good to to have up your alley. So there you go. There's your snack bar. Okay. So let's look at our carousel now.  
Build a Carousel  
3:08:59  
So um oh sorry not carousel. I shouldn't be searching. I should be searching for like our uh chevron  
3:09:07  
uh chevron left. Okay. So when it comes to our carousel let's add an auto layout  
3:09:12  
there. So I just press shift a and maybe we'll set this to eight and eight. and let's set it to our icon action.  
3:09:19  
Let's go ahead and also add a stroke, which is going to be a border action. And we're going to set the border width  
3:09:25  
there to one. And let's set the radius uh to round.  
3:09:30  
Beautiful. Let's also set the surface uh to default and call this our dot  
3:09:36  
carousel item. There we go. So, let's go ahead and then create the component of this.  
3:09:43  
And now, let's start adding some variants here. So, a couple variants that we're going to have is just a hover and a focus. Um, actually, we can do it  
3:09:50  
disabled, too, now that I think about it. Okay, so for our hover, so of  
3:09:56  
course, let's call it property one, just the status. And this one here is, of course, default. And then this here is  
3:10:02  
our hover. So, for our hover, let's go with a surface action hover lights and our icon action hover. And then our  
3:10:08  
border action hover. And then, of course, we're going to need a focus as well.  
3:10:13  
So for our focus, what we are going to do uh is let's go back to one of our  
3:10:19  
maybe our tag component that has that focus. Actually, we'll go back all the way back to our radio button actually  
3:10:24  
because our radio button has a rounder focus. So let's do that and simply just  
3:10:30  
plop it uh around so we don't need to recreate some of the styling because that's always probably  
3:10:35  
the worst part. And then try to get it two pixels on either side. Okay.  
3:10:41  
And of course, left and right, top and bottom. And then there we have our focus. And then we're also going to need  
3:10:46  
our disabled. So with our disabled, you know the drill. Just change it out to your disabled, your icon disabled, and  
3:10:53  
your border disabled. And then what we can do is just drag these down.  
3:11:00  
And then just select the icons here. Okay? Because we're going to need and uh so this can actually be direction. So  
3:11:07  
these here are going to be our left left and then these here are going to be our right  
3:11:14  
where what we're doing is we're swapping out each of these icons for the other one. So chevron left is going to become  
3:11:19  
our chevron right. Okay. So there we have uh our carousel item. Next what we  
3:11:25  
can do uh is look at sort of the bar that goes in between the carousel items.  
3:11:30  
So, just as a visual, if you have like a carousel, maybe you have some images above, you're like toggling in between,  
3:11:36  
you're going to want a bar just to show you like how many how many more might be left. Okay. So, with this, I always like  
3:11:42  
to add in a frame here and just set this to like a surface um I don't know,  
3:11:48  
action hover light. And let's also set the radius to round. And then let's make  
3:11:55  
it uh nice and thin. And then what we're going to do is just copy a frame and simply just overlay it  
3:12:03  
on the inside. So we have one frame within another. So our first frame we can call sort of our um scroll not  
3:12:10  
scroll bar per se, but carousel barous bar. And then we have our carousel  
3:12:16  
progress as the other name. Sorry, I know my my face is probably covering this. Let me see if I can extend this  
3:12:22  
up. Perfect. So we have our progress bar and our carousel progress. And with our carousel progress, let's like bring it,  
3:12:29  
you know, like somewhere in the middle here and just change it to like a surface action just so we can see it.  
3:12:34  
Okay. So, a couple things here is as we extend this out, we're going to want this to also extend with it. So, if we  
3:12:42  
set that to scale, then if I extend this out, notice how that is also extending with it. So, it's  
3:12:49  
going to go great for in between our carousel. So if I was to create the component of our carousel bar, bring  
3:12:56  
down a copy here and just place it in the middle and then set this like 24\.  
3:13:02  
There we have uh our carousel now. Okay. So um there's a lot that you can do with  
3:13:07  
this component in terms of like customization, making things the way that you like it. Again, even this is kind of like our carousel bar five  
3:13:14  
pixels tall. It's kind of weird. Maybe you want to go with like a four pixel tall and also set your carousel progress  
3:13:19  
to four pixels tall to keep things a little bit more like nice and snug. Um, but again uh to each their own. Play  
3:13:26  
around with it as much as you want to in order to achieve the look that you're going for. You might also say that maybe these uh themselves are a little bit too  
3:13:32  
like wide. So you can even set these to like four and four for a little bit of like a more snug look. But and then  
3:13:39  
there you have uh your carousel. Uh, also be sure to put a dot in front of carousol bar so we know not to publish  
3:13:45  
it. And uh, there we go. There you got your carousel. Okay, so I want to go back to our button now uh, and actually  
Build a Button Icon  
3:13:50  
go through and build like a button icon component. And this is like super easy. U, button icon component, it's kind of  
3:13:57  
just used for like most things if I'm honest. Uh, like think it'd be used for things like a close, sorry. Um, like a  
3:14:03  
close um, anywhere where there's just like a solid icon that's a button. It can be best practice in order to use  
3:14:09  
your button icon versus a regular icon itself. Not to say that like you need to do that. It does add another lay layer  
3:14:15  
of complexity, but you can do it. Okay. So, what I did there is I just copied  
3:14:20  
our button component, renamed it to button icon, and I'm just going to remove the label and the icon right. And  
3:14:27  
that's only going to leave us with our icon left. Okay. Now, what's one thing that we notice here is like this kind of  
3:14:34  
looks a little bit awkward because something's off with um our width and our height. So, I like to have them as a  
3:14:40  
perfect square. So, I'm going just set it to 44x 44\. And you can just hardcode it that way. Like it doesn't you don't  
3:14:45  
nothing needs to be super specific. Um just depending on the size that you're going for. Actually, let me check this.  
3:14:52  
So, I changed my mind actually. Sorry. Our height is actually 36\. So, we're going to hardcode these to 36x 36\. So  
3:14:58  
there's some level of compl um consistency there with the button. My apologies. And then what we're going to  
3:15:04  
do for all of the properties is now remove the ones of that were associated with our icon right and also our label  
3:15:11  
and just removed icon left. So it's only uh icon. Okay. So instead of having to  
3:15:17  
recreate a brand new button icon component, we can kind of repurpose our other components in order to in order to  
3:15:22  
build that. So quick hack there. Beautiful. There's your button icon. Okay. Okay, so now let's look at our  
Build a Table  
3:15:28  
table component. Okay, so what we're going to do is we're just going to bring in just some copy here. Okay, we're going to set this to our text body.  
3:15:35  
Text body. We're going to add some auto layout. We're going to keep it nice and thin. Okay, so nice and tight like a 2 by two. Now, we're going to call this  
3:15:42  
our dot cell item. Cell uh item because tables are kind of weird because you  
3:15:48  
need to remember that like Figma was not built to handle tables. Anyone that tells you differently, it's really not.  
3:15:53  
So what this cell item is going to do is if we picture like a like like a table  
3:15:58  
cell, okay, or say we have a cell for a table like your table cell or your cell  
3:16:05  
item is going to go inside of that cell. And we can add a bunch of variants here to like for all these different use  
3:16:10  
cases. So if I was to add a variant for this. Okay. Um what we can do is we can  
3:16:17  
even uh what's the we can even add in like a checkbox, you know, like a check  
3:16:24  
um like a checkbox. Okay, we can include it in there. Of course, we'd want our checkbox to be a  
3:16:29  
little bit smaller. So that's where we need to play around some different sizes, but we can also play around with like, you know, like a an icon. Maybe  
3:16:36  
you want an icon in there. Uh or even like a link. Let's maybe bring in a link, right? So we can bring in uh a  
3:16:43  
link into one of these things um into one of our cells. Also too, we can even  
3:16:48  
just add in like icon, right? So maybe if you just add in like a heart or a  
3:16:53  
favorite, like a favorite in here. Okay, set it to 20 by 20\.  
3:17:00  
20 by 20\. Get rid of the copy. Just copy and paste this three times. So now you have like an action cell, right? So  
3:17:08  
maybe it's like download edit view more. So to make it come to life like view  
3:17:15  
um maybe like I there we go you know this is edit  
3:17:21  
edit and maybe this one is like uh chevron right chevron right? So you  
3:17:28  
start to play around with the different items that would go into your cell. Now for the purposes of this exercise we might just stop there okay and let you  
3:17:35  
sort of imagine what this would be. This would be like our type. Maybe this here is just like our basic copy. Maybe this  
3:17:41  
one here is also just our basic uh what word am I looking for? Sorry, link. And maybe this one's like a um action, you  
3:17:50  
know, that go into that cell. Now, what we're going to do with our cell item is we're going to bring one of these down  
3:17:56  
and add an auto layout frame over top of it. Maybe set it 12 by 12\.  
3:18:03  
And we can probably stop there. Now, one thing, of course, that we're going to want to do here is also just add in just  
3:18:09  
some properties here. So, uh you know, label and you know, instance swaps for each of these icons. So, but I'm not  
3:18:17  
going to do that now. I'll let you do that. And then what we're do going to do is call this our cell item or cell,  
3:18:22  
excuse me. So, if we create the component of this now, okay, first off, let's turn on our  
3:18:29  
nested instances for things like uh our link. And now what we can do is we can  
3:18:35  
turn on nested instances for our cell item. So now when we hit this copy, we  
3:18:40  
can now swap this out for something like a link. Again, be sure to set this to hug and hug. Um, swap it out for a link  
3:18:48  
uh for your action or also for your copy as well. Beautiful. Now, when it comes  
3:18:54  
to your cell is that um you think about a table, tables can be kind of  
3:19:00  
structured a little bit differently, right? You might have a horiz, you might have tables and rows. You might also  
3:19:05  
have tables and columns. So, this is where what you're going to do is actually just start to break this out a  
3:19:10  
little bit. Okay. And one thing uh I'd like to highlight here is let's start  
3:19:16  
off with maybe just like our column. So, let's just add a bunch of uh items for  
3:19:22  
our column. Okay. So, we can call this our column component. And then when we  
3:19:27  
extend this out, uh, you can, we have to make sure everything stays left aligned here, of course.  
3:19:34  
Left aligned. There we go. Make sure these everything in here is proper. Okay, perfect. So, there we have our  
3:19:40  
column. Now, these columns would join together to make a table, right? Nice  
3:19:46  
and easy. Now, one thing that I would also like uh to call out is with the  
3:19:52  
column itself is we're also going to need some type of header. Okay, so this  
3:19:59  
is where you can kind of get fancy a little bit where in the cell you can have one type that is copy. So, this  
3:20:07  
would sort of be like your copy or contents and then another one that's your header.  
3:20:13  
with your header, you might override some of these elements and set it to like a medium semibold and also maybe  
3:20:19  
even change the background a bit. Okay, so for it to be like a surface um maybe  
3:20:24  
like a surface disabled or it's even like too strong.  
3:20:30  
Yeah, we'll leave it as is for now. Okay, so we'll get rid of that. Maybe it's just a little bit stronger. So then  
3:20:35  
in your in your cell, that top one would be a header component. And if you really wanted to, again, you can add in sort of  
3:20:43  
like, let's see what we have here, like an action hover light. I don't know, something to signify that like  
3:20:48  
that's the top part of that cell. Again, purple's probably not the most ideal color in the world, but like it is what  
3:20:55  
it is. Something like that. Okay. Um, and set that to fill. Beautiful. Now,  
3:21:02  
something that I would like to call out here is let's say we have all of these columns arranged together and then we  
3:21:09  
create the component of this and we bring this down. Okay, to like  
3:21:15  
modify the cell, we actually have to detach the component again. And we don't want to we want to avoid having to  
3:21:21  
detach components as much as we can, but tables like aren't built that way. So you're going to recall um in  
3:21:29  
um some of the earlier components we had this idea of like a gap of like an adjust gap component and we're going to  
3:21:35  
introduce that same concept here. So this is going to be our column component to start because again columns are made  
3:21:42  
up of rows and or tables are made up of rows or columns. They can't be both. So  
3:21:47  
we're going to have a column component to start. Now, one thing we might also want to do to offer some differentiation  
3:21:53  
is add a stroke just on the bottom. We'll reset that to a border default. So  
3:21:59  
now it looks a little bit more realistic. So now what we're going to do for uh our adjust gap is if you recall  
3:22:05  
like during cuz the thing that's tricky about like table components and why it's so important that we have it is say you  
3:22:12  
have a table component here. Okay, let's call this table. And we know that's like Oops, I'm sorry. I'm going to create the  
3:22:18  
component of this. And we know that not every column is going to need like the  
3:22:24  
same width. Okay, some columns might need to have a longer width for a longer description. Some might need a shorter  
3:22:30  
width. And the only way to adjust that like is to kind of like break the  
3:22:36  
component. Okay, we're going to need an easy way to do this though. And that's where we introduced the idea of adjust  
3:22:41  
gap. So, what we're going to do is, if you're going to recall during um some of  
3:22:47  
our earlier components, we had this concept where we could adjust the gap in order to adjust the width without having  
3:22:52  
to break the component. We're going to bring in that same concept here. Let's set the gap to something like 12\. Make  
3:22:58  
sure this is set to hug. And then select, let's call this adjust gap. And  
3:23:03  
then set both these to zero and zero. Okay. The width and height to zero. And  
3:23:11  
then what we can do is take your adjust gap and place it inside of the column component. Now you're going to notice  
3:23:19  
that it just sort of goes all the way to the top there. And let's just be sure to  
3:23:24  
left align that. So now on uh any of these table cells,  
3:23:30  
sorry, we're going we're going to go down here to our an instance of like a what is like a table component. You can  
3:23:36  
see here on the layers and I don't think my my face is covering it. So no, I think you can see it. Okay. How we can  
3:23:41  
see adjust gap. If I was to set this to something like um 200, right? It's going  
3:23:48  
to extend beyond. But what we can do is we can use hug in order to bring all these elements out  
3:23:56  
and then just set each of these to fill. So now what we what we essentially did  
3:24:01  
is we adjusted the width of the column without see there's a great example without needing to break the component.  
3:24:07  
Okay. So that if you're if you show this in an interview, you have the job. Okay, like this is super like complex level of  
3:24:13  
componentry. Genius level stuff if I'm honest. Okay, so let's call this our column table or  
3:24:20  
column table. And let's just add a bunch more cells rows here. You know,  
3:24:26  
standard's 1440\. So I can see this is set to 1040 as like a width of a table. I think that's like pretty good in the  
3:24:31  
grand scheme of things. Okay, so there's our column table. One thing we can also do as well is uh this can also be a dot  
3:24:40  
column table because one thing we might also want to do is add like a table header like call this um my advisors or  
3:24:48  
something my advisers where we set this to like uh I don't know maybe like an H5  
3:24:54  
or an H whatever that works uh and set this to  
3:24:59  
our text headings and we can add some auto layout between these to kind of  
3:25:04  
have like this. What's the word that I'm looking for? Like a heading for what this data is to represent. Okay. So, we  
3:25:12  
can maybe set this to something like 24\. There we go. I think we're in some decent shape. Um, yeah, I think things  
3:25:19  
are looking pretty good. One thing we might also want to add here is, um, so  
3:25:25  
I'm trying to think here. So, let's go ahead and add in a stroke actually. So, a border border default one pixel on the  
3:25:33  
outside. Okay. So, just to clean up some of that data. And we might also even want to add in a quick radius. Set it to  
3:25:39  
something like eight. There we go. So, this is your dot column table. This might be your your your column table.  
3:25:47  
Column table. But I'm not going to create the component of this just yet because one thing we might also want to do is combine both like our column table  
3:25:54  
and also our row table together. Uh, and then we can add properties for in order to like hide like that table header,  
3:26:00  
change the table header, and all that fun stuff as well. So let's create our actually our row table first before we join these together as components. Okay.  
3:26:07  
So now let's work on our row. So what we're going to do is let's just bring some of our cells here and just place  
3:26:12  
them side by side. And it looks like we have 1 2 3 4 5 6 7 and then eight going  
3:26:18  
across. So 1 2 3 4 5 6 7 then 8\. Set the  
3:26:24  
gap to zero. And let's call this our dot row. And this should be our dot column.  
3:26:30  
Dot column. There we go. And one thing I'm also noticing here too is these are all 130 in width. So let's maintain some  
3:26:38  
level of consistency and just set each of these to 130\. Okay. And we can't have a just gap for  
3:26:44  
our rows. It's just doesn't really work that way. Okay. So let's go ahead and create the component of this now. So  
3:26:50  
there we have our row. So just as we used our row our column to build our column table, we're going to do the same thing. So uh I see we have 1 2 3 4 5 6 7  
3:26:59  
8 9 10 plus headings. So we'll do the same. So 11 3 4 5 6 7 8 9 and then 10  
3:27:08  
and then 11 here at the top for the headings. And let's make this our headings.  
3:27:14  
There we go. So there we have our dot row uh table. Okay. And then let's do  
3:27:21  
the same as we did above. So border uh default uh one pixel on the outside. Set  
3:27:28  
the radius to eight. There we go. There we have uh our row  
3:27:34  
table. Now, if we think about um our row table and also our column table is one  
3:27:42  
thing I'm actually debating that might make sense for us to actually do is  
3:27:48  
maybe swap out use these as actually um so I was to detach these. Oops. If I  
3:27:56  
was to detach these, delete these core components. And what I'm actually going to do is I'm going to combine these into  
3:28:03  
one component set. So now we have our table type, our table type, our table type where we  
3:28:11  
have our column component. So our type where we have our column component and  
3:28:16  
then we have our row table. So we have our column and our row  
3:28:22  
column and row that we can swap out in between. So what this actually allows us to do then is if we have a specific like  
3:28:30  
look that we go for for our tables and let's look at like an example of what that might look like. So say if we have  
3:28:36  
like a heading here which is like uh my advisors or our advisors.  
3:28:41  
Okay. And we set this to like H4. Okay. And make sure that this  
3:28:48  
is set to our headings. Okay. Let's group these together. Add some auto layout. Uh maybe just on this  
3:28:55  
side actually where we set this to something like 12 and 12\. Okay. And now  
3:29:01  
on the outer frame maybe we might want to add a stroke. So on the outside  
3:29:07  
which is a border you know default something like that. And we can maybe even just like reduce the gap to 12\. Say  
3:29:14  
if there's a certain look for although this does look a little bit messy about like 24 by 24 or s certain look that  
3:29:21  
you're going for like maybe if I also bring in like some buttons  
3:29:26  
like some buttons here uh place them at the end you know maybe it's like a download as an example we swap this out  
3:29:34  
for like a download uh like a download export to excel like  
3:29:39  
that kind of thing okay is you can also create like this bar as a component.  
3:29:45  
We're not going to do that now. So now you what you can do is you can have your table component. But inside your table  
3:29:50  
component, if you turn on those nested instances, if you turn on those nested  
3:29:55  
instances, what it's going to allow you to do is actually just swap between the column table and the row table depending  
3:30:02  
on what your data use case is. Okay, so I know table components can be a little bit confusing. So there's a lot of like  
3:30:09  
options that you can do with your table component, but if you were to set up a table component, that is exactly how I would do it. Okay, make sure that's set  
3:30:15  
to our text headings, which it is. Beautiful. So there you have a table component. Sweet. So now it's actually  
Publishing & Subscribing to a Design System  
3:30:20  
time to publish the design system now. So to publish it, like what it means to publish a design system, it's basically  
3:30:26  
like, okay, you're now ready to have other people consume this design system.  
3:30:32  
That's basically what that's saying. Okay, if the design system is not published, then people cannot use it.  
3:30:38  
Only those within the file can use it. So, in order to publish a design system, hit that little dropown and hit publish  
3:30:44  
library. Now, yeah, Figma make I hate how they have ads for it everywhere is  
3:30:50  
one thing I'd like to call out here is that this you can only publish if you're on in like a paid like Figma team space.  
3:30:56  
Okay. Um I am in one. You can tell how it says like a team name like right  
3:31:01  
there in like the top left. Anyways, so what essentially it's going to do when you publish a library for the very first  
3:31:06  
time, like it's basically going to give you everything including all of your icons. And because I have like thousands  
3:31:12  
of icons here, like I'm also going to publish those, too. So, it's going to take a while. This here is where you can  
3:31:18  
go through and just confirm that all like the components that you want to publish have been published or you can  
3:31:23  
just choose to unpublish them, unpublish ones that should not have been published uh at a later date. Um, but anyway, so  
3:31:30  
let's go ahead and publish this library and it's going to take like 10 or 15 minutes. So, I'm going to go ahead and  
3:31:35  
pause the video. So, as you can see here, I had hit publish and now the library itself is actually publishing.  
3:31:41  
So, because I have so many icon components and there's so many icon variants, it's not just publishing like the components, it's publishing all the  
3:31:47  
variants associated with it. And if we go into like the material UI icon set, like each of the icons have like four  
3:31:54  
variants with them. So, that's just why it's taking so long. Um, it's one of those things you just got to stay tight with. Okay. So now that our design  
3:32:00  
system has stopped um publishing or stopped yeah stopped publishing now it's ready to subscribe to. Now in or if  
3:32:06  
you're in that team folder okay you can subscribe to that design system. Now in order to subscribe to that design system  
3:32:13  
what you're going to do is up under this Figma thing here. So hit the Figma icon and then go down to libraries. And then  
3:32:20  
what it's going to do is that so right away here you can see that there's no changes inside of this no changes to  
3:32:28  
this current design system. Okay. So nothing has been changed. All of these components again this where it's going  
3:32:34  
to show you where all these components that have been published and you can select which ones to to also unpublish or republish. Okay. As you make changes,  
3:32:42  
you can republish the design system and it's only going to show the components that have been changed for you to  
3:32:49  
republish. Okay, which is nice. And then what you're going to want to do is you can go through teams or UI kits. Both  
3:32:54  
ways work uh to really just I won't do that because and I have a ton of like  
3:33:00  
other design systems that I can't show um under teams and UI kits. So in order  
3:33:05  
to do that, you would just find the one and then just hit hit subscribe. It really is super simple. and and what in that file you would then have access to  
3:33:12  
this design system. So it's really a straightforward approach uh in order to  
3:33:17  
make changes and like republish. Let me just give you a quick example here. If we were to set this radius to like four.  
3:33:24  
Okay. And then uh oops wrong one. Let's go to publish this library. Notice how  
3:33:30  
it's only going to show you the button. And I made changes to the table like when we weren't looking. I was just playing around with it. So that's why  
3:33:35  
it's showing that. So now how it's showing you everything that's unchanged, hidden, and also the components that are  
3:33:41  
available to to republish where you can toggle them on and off. So design system management, it really is a simple simple  
3:33:47  
thing. And just like that, there you have all the components you need to get your design system started. So let's  
3:33:52  
rock and roll. Hey, thanks for watching. Um, and quite frankly making it this far. Um, if you want to watch a video, I  
3:33:59  
highly recommend you can click right there. It goes through a little bit more of like an advanced design system setup.  
3:34:04  
Or if you want to support myself, the team, what we're doing at UI Collective, making this kind of content free for all  
3:34:10  
and making design education affordable for everyone, you can support us in the link down below by purchasing our  
3:34:17  
founding membership to the UI Collective Academy. Thanks so much for your support. Really appreciate it. See you at the next one.