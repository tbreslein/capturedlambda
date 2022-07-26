---
layout: ../../layouts/PostLayout.astro
title: The absolute State of Programming in Physics
author: Tommy Breslein
date: 2022-07-22
draft: true
---

# {frontmatter.title}

> ... and why practically no one in physics is a software engineer.

Programming has been a thing in physics since way before most of us have been born.
One could argue that computers have been designed first and foremost with encryption and number
crunching in mind.
One of the professors in my institute even had the chance of working with the Cray-1 installation in
Garching, if memory serves, which supposedly was the first Cray installation outside of the US.

In the years since, "programming" as term kind of evolved.
Being a "programmer" is its own trade now, and with that came good practices that have been
developed, design patterns have been found and established; There is now a vague understanding of
what good programming is (though your mileage may vary on what it entails to be "good").

Having had worked in physics as a glorified "programmer" for a couple years, it seems to me that the
"how" of programming is still stuck at least in the early 2000's.
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
Whether that's writing GNUplot scripts, or writing small pipelines with Python's `matplotlib`, they
all had to plot some data at some point and at some point had to one of these things.
Furthermore, `LaTeX` is the defacto-standard when it comes to writing papers, theses and the like.

Now you could argue that neither of these should be called programming, but that's neither here nor
there, they are still a "sort of" programming that everyone in physics is familiar with.

Personally, I do not have a lot of experience with experimental physics.
My training is in numerical physics which is inherently virtually nothing but programming.
I do know that there experimental physics groups out there using `LabView` to program equipment
pipelines, or write micro controller code in `C`, but I'm going to focus on what my expertise is.

In numerical physics, the simulation is our lab.
We build software that solves a set of (often times differential) equations for some set of initial
and boundary conditions.

As a trivial example, let's say we wrote a solver for Newton's law of motion, then maybe I can give
it initial and boundary conditions that model me throwing a ball on Earth at a certain height, angle
and velocity, and the solver then spits out the trajectory of that ball.

The more sophisticated the problem and the sets of equations we need to solve, the more powerful our
hard- and software needs to be.
When it comes to the really tough nuts to crack, where a single simulation may run days or weeks, we
cannot leave any shred of performance on the table, so the languages you usually see used in this
context are `C`, `C++`, and `Fortran`.
In the same vein, number crunching simulation software (usually) does not have any sort of GUI.
You just give it a configuration, run the simulation, and end up with an output that is just a bunch
of numbers.

I just mention this, because this is not the sort of software you often see being written in the
industry.
There are obviously examples like it, but they are few and far between.
The problems we solve in academia are fundamentally different to "regular" software development
problems.

## 2. The rant: What I dislike about software development in physics / academia

### 2.1 Lack of structure

Both in terms of the team as well as the source code.

Lack of team structure, way often than it should leaving people by themselves, leads to things like
global variables...

### 2.2 Refusal to learn your tools / toolchain

- compilers, builders
- git
- shell

### 2.3 Testing

"unit tests" lol

### 2.4 Personal pet peeve: Licensing

"I don't want to constrain the usage of our code"

## 3. What I wish would change

basically a conclusion
