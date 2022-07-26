---
layout: ../../layouts/PostLayout.astro
title: The State of Programming in Physics
author: Tommy Breslein
date: 2022-07-26
draft: false
---

# {frontmatter.title}

Programming has been a thing in physics since way before most of us have been born.
One could argue that computers have been designed first and foremost with encryption and number
crunching in mind.

In the years since, "programming" as a term kind of evolved.
Being a "programmer" is its own trade now, and with that came good practices that have been
developed, design patterns have been found and established; There is now a vague understanding of
what good programming is (though your mileage may vary on what it entails to be "good").

Having had worked in physics as a glorified "programmer" for a couple of years, it seems to me that the
"how" of programming around here is still stuck at least in the early 2000's at best.
An overwhelming amount of code in academia lacks things that are almost hard requirements for
working in the industry as a software developer.
You could obviously argue that software projects in academia do not "need" things like version
control, project structure (in terms of the team as well as the source code), and proper testing,
but I think this view is incredibly misguided.

This whole post is basically just a big rant about the state of "programming in physics".
I was what I would now call a "typical physics programmer", and I don't think of myself as a "good"
software developer now, but I also don't think you need to be one to understand the absolute state
of software in physics.

## 1. what do physicists need programming for

Let's first provide a bit of context, by talking about what programming is used for in physics.

First and foremost, not every field in physics is the same when it comes to the kind of programming
they do.
One thing that virtually every physicist uses some light programming for is data visualisation.
Whether that's writing GNUplot scripts, or writing small pipelines with `Python`'s `matplotlib`,
they all had to plot some data at some point and at some point had to one of these things.
Some of them might have had to data processing / reduction with some `Python` script.

I do know that there experimental physics groups out there using `LabView` to program equipment
pipelines, or write micro controller code in `C`, but I'm going to focus on what my expertise is.

Personally, my training is in numerical physics which is inherently virtually nothing but
programming.
In numerical physics, the simulation software is our lab and the simulation is our experiment.
We build software that solves a set of (often times differential) equations for some set of
conditions.

The more sophisticated the problem and the sets of equations we need to solve, the more powerful our
hard- and software needs to be.
When it comes to the really tough nuts to crack, where a single simulation may run days or weeks, we
cannot leave any shred of performance on the table, so the languages you usually see used in this
context are `C`, `C++`, and `Fortran`.
In the same vein, number crunching simulation software (usually) does not have any sort of GUI.
You just give it a configuration, run the simulation, and end up with an output that is just a bunch
of numbers.

I just mention this, because this is not the sort of software you often see being written in the
industry, so the problems we solve in academia are fundamentally different to most of the "regular"
software development problems.

## 2. The rant: What I dislike about software development in physics / academia

Now, this bit is what I mainly wanted to write this post for: Venting.

The way software projects are being handled in physics is atrocious.
Let's go over my main criticisms / the things that annoy me the most, shall we?

### 2.1 Lack of team structure / actual co-working

There's usually two types of structure when it comes to software development, sometimes more,
sometimes less.

For one, there is the team structure.
Now, in academia, or at least in small departments in the natural sciences, you can run into
projects that only have a single person working on it.
But often enough you have 2-4 layers of hierarchy for a given project (now mind you, I'm talking
about the research project, not the software development project!):
You have the professor or someone who's leading the work group at the top, then you often have
either the prof themself, or a doc candidate or a postdoc leading the software project, and lastly
you have other postdocs / doc candidates / post grads / undergrads working on the project.

With that, you would think that this gives you a pretty clear hierarchy to inform the distribution
of responsibilities and privileges for the project, no?

Well, to be fair, something like that IS the most common setup, but there are way too many projects
that lack any structure, where you have fully flat hierarchies, or just have people working
completely independently from another.

One particular case that comes to mind is that a couple of my co-workers are working on a project
where the project lead was a former doc candidate here, and is now working as a postdoc at a
different university.
That postdoc is the de-facto project lead, but the communication between him and the other devs can
at best be described as "lacking".
He doesn't use the GitHub, he just pushes gigantic commits onto the master branch completely
thrashing the code base once a year, and calls it a day.

Meanwhile, the other people working on the code struggle to make the codebase presentable to
outsiders that are supposed to use the software, and they are trying to at least use some of
GitHub's features in order to help each other staying on course with the development.

The main problem here is that the lead isn't really dependent on the work of the other people.
The baseline code is working, and the other devs just add features they need for their particular
research.

And I can already tell how this will end:

Someone is going to be pissed enough that they will just start a new project, reimplement everything
again (which has already happened thrice in this work group), and barely any progress will have been
made at the end of the day.
Even forking the project isn't really feasible at this point, because its name is somewhat
recognised in the community, and no one really knows if forking the project would be legal, because
the license text is some made up text that two of the creators came up with on their own (without
consulting the professor, mind you).

### 2.2 Refusal to learn your tools / toolchain

A VERY common problem around here is that people only learn the absolute bare minimum when it comes
to getting their work done, and outsource as much of it to other people as possible even when it
isn't actually saving anyone any amount of time.
I understand that academia just things get done and move on, but I think the refusal to learn how
your build process works just leads to more time wasted on harder problems to solve somewhere down
the road.

There are other things that would be helpful to know if 80% of your times is spent coding, but,
personally, I would think that figuring out your build process and learning how the different parts
of it work so you can fix problems yourself should be a tremendous help and time save.
But unfortunately the directive from the top is that this is a waste of time:

> You don't need to know how `CMake` works, you just need to produce papers.

This extends to using the tools of the language as well.
That project that I mentioned earlier was stuck in `C++98` because of "backwards compatibility"
reasons, because apparently they wanted to make sure the program can still compile on systems that
haven't been updated in two decades.
Targeting Debian stable, maybe even oldstable, is fine, but this was not.

Eventually we managed to convince him to at least open the program up to and including the `C++14`
standard, but this took way more effort than it should have, and they still have memory leaks that
should be easy to avoid if they finally started using smart pointers.
Unfortunately, when I mention that, most of the people working on that project look at me funny,
because they never took the time to learn these modern language features, and if they asked their
higher ups whether they should invest the time he would probably laugh and tell them "no".

And then there's git, where I only know of three people working here, me included, that actually
know what git does on at least an abstract level.
This is another tool that everyone here uses literally daily, but almost no one knows what a branch
even is.
They just use the commands that the cheat sheet tells them to use, and that is it.
I am honestly amazed that the number of nigh-catastrophic `git --force push` commands are still in
the single digits.

The big consequence that changing the attitude around these topics would have is certainly the
aforementioned time save when it comes to solving problems.
I don't think that can be overstated.

### 2.3 Testing

To be fair, "testing" in general is weird topic in software development.
Everyone says they are always adamant about writing good tests, but...

Mathematical simulation software is an interesting case study where the software itself actually
lends itself HEAVILY to testing.
Think about it, at the end of the day, these programs are giant mathematical black boxes that are
almost completely deterministic, albeit also being chaotic and somewhat unpredictable in the
mathematical sense.
99% of the functions in a software project like this are incredibly easy to write tests for, since
they are more often than not simply mathematical functions with known properties.

You can unit test them, you can even property test them, you can integration test the code base...
Well, integration tests are something most people actually do, but only testing with integration
tests gives you a false sense of security when it comes to really subtle bugs.

But again, this is considered a waste of time, when it is usually anything but.
If you have some bug you're hunting, you usually have sort of a checklist of things to go through to
find it, and having good unit tests can often narrow down the possibilities by either just telling
you which functions you can ignore for the time being, and sometimes they might even be pointing you
directly to the problem, because one particular function is actually acting weird.

Tests are a time investment that pays off in the time saved when locating and fixing bugs.

### 2.4 Personal pet peeve: Licensing

I might be a bit special when it comes to this topic, but seeing projects that either just have no
license, or have a hand rolled one that no lawyer ever got their hands on, makes me furious;
especially the hand rolled ones, because, guess what, physicists aren't usually known for their
legal expertise.

It's not just that they refuse to use widely accepted, and nowadays in some case even court tested,
open source licenses, often leaving their projects with effectively no license whatsoever, it's also
the complete ignorance over the rules the university has on these topics (and most universities do
have rules like that).

From what I've seen, these problems have a similar root than the toolchain one, which is that nobody
wants to invest the time.
That's despite the bare necessities on this topic being shallow enough that you can learn them in a
couple of afternoons tops.
After that, you check what the university's guidelines are, and then you choose the license
appropriate for your project.
Once you're done with that, you probably will not have to deal with this topic in that project for
many years, maybe ever again.

Changing the prevalent behaviour around licensing in academia would protect people and projects from
so many potential legal trouble, it's insane...

## 3. A conclusion of sorts

Seeing how software was developed outside of academia was a culture shock for me.
The amount of structure and standards I was confronted with gave me whiplash, but I understand why
they are there.
These things were developed and established because they actually led to more efficient development
processes.
It was like opening Pandora's box, because now I cannot unsee what's wrong with how things are going
in academia and how much time and thus money is wasted due to a refusal to invest time upfront and
praying that problems just never come up.

Keep in mind that I am still a newbie when it comes to how software is developed outside of
academia, so there's probably loads more problems that I just cannot see yet.

But I guess that's my rant.

If you are doing software in academia, please take the time to learn more than the bare minimum. You
are going to save yourself (and your IT person) so much time in the long run.
Learning the basics of git doesn't take longer than maybe two afternoons.
Learning how to use a compiler and build tools rarely takes longer than a week combined.
Learning how to use the command line rarely takes longer than a day or two.

And this knowledge will pay off.
You will save yourself a lot of your most precious resource, which is time.
